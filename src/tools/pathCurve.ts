/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 15:07:20
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-10 21:16:22
 * @ 详情: 路径曲线
 */

import * as pc from "playcanvas";

import { Curve_EX } from "@/extensions/curve";
import { Quat_EX } from "@/extensions/quat";
import { cast } from "@/utils/helpers/extend-decorator";
import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";

/**
 * 路径曲线选项
 */
export interface PathCurveOptions
{
    parentNode: pc.Entity;
    curveMode: number;
}

@tool("PathCurve")
export class PathCurve extends Tool<PathCurveOptions, any>
{
    // 默认选项
    protected toolOptionsDefault: PathCurveOptions = {
        parentNode: this.app.root,
        curveMode: pc.CURVE_SPLINE
    };

    public nodes: pc.GraphNode[];

    public nodePercent: number[];
    public pathLength: number;
    public percentPreUnit: number;

    private px: pc.Curve;
    private py: pc.Curve;
    private pz: pc.Curve;
    private lx: pc.Curve;
    private ly: pc.Curve;
    private lz: pc.Curve;

    private position: pc.Vec3;
    private forward: pc.Vec3;
    private up: pc.Vec3;
    private distanceBetween: pc.Vec3;
    private rotation: pc.Quat;

    private precision: number;
    private step: number;

    /**
     * 创建路径曲线
     * @param options 路径曲线选项 
     */
    constructor(options: PathCurveOptions)
    {
        super();

        this.setOptions(options);

        const toolOptions = this.toolOptions;

        // 路径节点
        this.nodes = toolOptions.parentNode.children;;

        // 初始化position曲线
        this.px = new pc.Curve();
        this.py = new pc.Curve();
        this.pz = new pc.Curve();
        this.px.type = toolOptions.curveMode;
        this.py.type = toolOptions.curveMode;
        this.pz.type = toolOptions.curveMode;

        // 初始化lookAt曲线
        this.lx = new pc.Curve();
        this.ly = new pc.Curve();
        this.lz = new pc.Curve();
        this.lx.type = toolOptions.curveMode;
        this.ly.type = toolOptions.curveMode;
        this.lz.type = toolOptions.curveMode;

        // 初始化transform
        this.position = new pc.Vec3();
        this.forward = new pc.Vec3();
        this.up = new pc.Vec3();
        this.distanceBetween = new pc.Vec3();
        this.rotation = new pc.Quat();

        this.nodePercent = [];
        this.pathLength = 0;
        this.percentPreUnit = 0;

        // 更新曲线
        this.updateNodes();
    }

    /**
     * 更新节点
     */
    public updateNodes(): void
    {
        const toolOptions = this.toolOptions;

        // 根据节点设置曲线信息
        let pathLength = 0;
        this.nodePercent = [];
        let nodePathLength = []; nodePathLength.push(0);
        this.nodes = toolOptions.parentNode.children;
        // 根据两个节点之间的距离设置插值权重
        for (let i = 1; i < this.nodes.length; i++) {
            const prevNode = this.nodes[i - 1];
            const nextNode = this.nodes[i];
            this.distanceBetween.sub2(prevNode.getPosition(), nextNode.getPosition());
            pathLength += this.distanceBetween.length();
            nodePathLength.push(pathLength);
        }
        // 重设曲线key值
        this.px.keys = [];
        this.py.keys = [];
        this.pz.keys = [];
        // 遍历节点设置transform信息
        for (let i = 0; i < this.nodes.length; i++) {
            const t = nodePathLength[i] / pathLength;
            const node = this.nodes[i];
            const pos = node.getPosition();
            const lookAt = node.forward;
            this.px.add(t, pos.x);
            this.py.add(t, pos.y);
            this.pz.add(t, pos.z);
            this.lx.add(t, lookAt.x);
            this.ly.add(t, lookAt.y);
            this.lz.add(t, lookAt.z);
            this.nodePercent.push(t);
        }

        this.pathLength = pathLength;
        this.percentPreUnit = 1 / pathLength;
        this.precision = toolOptions.curveMode == pc.CURVE_LINEAR ? this.nodes.length - 1 : 20 * (this.nodes.length - 1);
        this.step = 1 / this.precision;
    }

    /**
     * 绘制曲线，并随节点更新
     * @param data 选项
     */
    public draw(option: { color?: pc.Color, drawNormal?: boolean, drawTangent: boolean }): void
    {
        const color = option.color ?? pc.Color.WHITE;
        const colorNormal = pc.Color.BLUE;
        const colorTangent = pc.Color.RED;
        const drawNormal = option.drawNormal;
        const drawTangent = option.drawTangent;

        let percent = 0;
        let start = new pc.Vec3();
        let end = new pc.Vec3();

        const renderCurve = () =>
        {
            this.updateNodes();
            if (this.nodes.length <= 1)
                return;
            percent = 0;
            for (var i = 0; i < this.precision; i++) {
                start.set(this.px.value(percent), this.py.value(percent), this.pz.value(percent));
                percent += this.step;
                end.set(this.px.value(percent), this.py.value(percent), this.pz.value(percent));
                this.app.drawLine(start, end, color);

                // 画出法线和切线
                if (drawNormal || drawTangent) {
                    this.getRotation(percent);
                }
                if (drawNormal) {
                    end.add2(start, this.up);
                    this.app.drawLine(start, end, colorNormal);
                }
                if (drawTangent) {
                    end.add2(start, this.forward);
                    this.app.drawLine(start, end, colorTangent);
                }
            }
        }

        renderCurve();
        // 每帧渲染曲线
        this.app.on("update", renderCurve);
        this.eventHandler.on("cancelRender", () => { this.app.off("update", renderCurve); }, this);
    }

    /**
     * 取消曲线绘制
     */
    public cancelDraw(): void
    {
        this.eventHandler.fire("cancelRender");
    }

    /**
     * 获得某处坐标
     * @param percent 此位置在曲线上的百分比
     * @returns 此处的坐标
     */
    public getPosition(percent: number): pc.Vec3
    {
        this.position.set(this.px.value(percent), this.py.value(percent), this.pz.value(percent));
        return this.position;
    }

    /**
     * 获得某处rotation,可以是沿切线方向，也可以是路径点朝向的插值
     * @param percent 此位置在曲线上的百分比
     * @param nodeRotation 是否使用节点的旋转的插值作为曲线的旋转
     * @param inverse 是否反向
     * @returns 此处的旋转
     */
    public getRotation(percent: number, nodeRotation?: boolean, inverse?: boolean): pc.Quat
    {
        if (nodeRotation) {
            // 取朝向插值
            this.forward.set(this.lx.value(percent), this.ly.value(percent), this.lz.value(percent));
            // 以竖直向下为基准方向
            this.up.cross(this.forward, pc.Vec3.UP);
            this.up.cross(this.up, this.forward).normalize();
            return cast<Quat_EX>(this.rotation).setLookRotation(pc.Vec3.ZERO, this.forward.mulScalar(inverse ? -1 : 1), this.up);
        }
        else {
            // 获得近似切线斜率
            this.forward.set(cast<Curve_EX>(this.px).getTangent(percent), cast<Curve_EX>(this.py).getTangent(percent), cast<Curve_EX>(this.pz).getTangent(percent)).normalize();
            // 以竖直向下为基准方向
            this.up.cross(this.forward, pc.Vec3.UP);
            this.up.cross(this.up, this.forward).normalize();
            // 获得朝向
            return cast<Quat_EX>(this.rotation).setLookRotation(pc.Vec3.ZERO, this.forward.mulScalar(inverse ? 1 : -1), this.up);
        }
    }

    /**
     * 获得某处坐标
     * @param percent 此位置在曲线上的百分比
     * @returns 此处的切线方向
     */
    public getTangent(percent: number): pc.Vec3
    {
        return this.forward.set(cast<Curve_EX>(this.px).getTangent(percent), cast<Curve_EX>(this.py).getTangent(percent), cast<Curve_EX>(this.pz).getTangent(percent)).normalize();
    }

    /**
     * 获得当前所处的节点
     * @param percent 此位置在曲线上的百分比
     * @returns 当前所处节点
     */
    public getCurrentPath(percent: number): number
    {
        for (let i = 0; i < this.nodePercent.length; i++) {
            if (percent <= this.nodePercent[i])
                return Math.max(0, i - 1);
        }
        return Math.max(0, this.nodePercent.length - 2);
    }
}
