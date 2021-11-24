import * as pc from "playcanvas";

import { extendClass } from "../../classes/utils/extend-decorator";

declare module 'playcanvas' {
    export class PathCurve
    {
        public parent: Entity;
        public nodes: Array<Entity>;
        public curveMode: number;

        public nodePercent: Array<number>;
        public pathLength: number;
        public percentPreUnit: number;

        constructor(parent: Entity, curveMode?: number);
        public updateNodes(): void;
        public draw(data: { [paraName: string]: any }): void;
        public cancelDraw(): void;
        public getPosition(percent: number): Vec3;
        public getRotation(percent: number, nodeRotation?: boolean, inverse?: boolean): Quat;
        public getCurrentPath(percent: number): number;

        public getTangent(percent: number): Vec3;
    }
}

@extendClass()
export class PathCurve
{
    public parent: pc.Entity;
    public nodes: Array<pc.Entity>;
    public curveMode: number;

    public nodePercent: Array<number>;
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

    constructor(parent: pc.Entity, curveMode?: number)
    {
        (pc as any).events.attach(this);

        // 路径节点
        this.parent = parent;
        this.nodes = parent.children as Array<pc.Entity>;
        this.curveMode = (curveMode === undefined) ? pc.CURVE_SPLINE : curveMode;

        // 初始化position曲线
        this.px = new pc.Curve();
        this.py = new pc.Curve();
        this.pz = new pc.Curve();
        this.px.type = this.curveMode;
        this.py.type = this.curveMode;
        this.pz.type = this.curveMode;

        // 初始化lookAt曲线
        this.lx = new pc.Curve();
        this.ly = new pc.Curve();
        this.lz = new pc.Curve();
        this.lx.type = this.curveMode;
        this.ly.type = this.curveMode;
        this.lz.type = this.curveMode;

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

    public updateNodes(): void
    {
        // 根据节点设置曲线信息
        let pathLength = 0;
        this.nodePercent = [];
        let nodePathLength = []; nodePathLength.push(0);
        this.nodes = this.parent.children as Array<pc.Entity>;
        // 根据两个节点之间的距离设置插值权重
        for (let i = 1; i < this.nodes.length; i++) {
            const prevNode = this.nodes[i - 1];
            const nextNode = this.nodes[i];
            this.distanceBetween.sub2(prevNode.getPosition(), nextNode.getPosition());
            pathLength += this.distanceBetween.length();
            nodePathLength.push(pathLength);
        }
        // 重设曲线key值
        (this.px as any).keys = [];
        (this.py as any).keys = [];
        (this.pz as any).keys = [];
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
        this.precision = this.curveMode == pc.CURVE_LINEAR ? this.nodes.length - 1 : 20 * (this.nodes.length - 1);
        this.step = 1 / this.precision;
    }

    // 画出曲线，随节点更新
    public draw(data: { [paraName: string]: any }): void
    {
        const app = (pc as any).app;
        const color = data.color || pc.Color.WHITE;
        const colorNormal = pc.Color.BLUE;
        const colorTangent = pc.Color.RED;
        const drawNormal = data.drawNormal as boolean;
        const drawTangent = data.drawTangent as boolean;

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
                app.renderLine(start, end, color);

                // 画出法线和切线
                if (drawNormal || drawTangent) {
                    this.getRotation(percent);
                }
                if (drawNormal) {
                    end.add2(start, this.up);
                    app.renderLine(start, end, colorNormal);
                }
                if (drawTangent) {
                    end.add2(start, this.forward);
                    app.renderLine(start, end, colorTangent);
                }
            }
        }

        renderCurve();
        // 每帧渲染曲线
        app.on("update", renderCurve);
        (this as any).on("cancelRender", function () { app.off("update", renderCurve); });
    }

    // 取消渲染曲线
    public cancelDraw(): void
    {
        (this as any).fire("cancelRender");
    }

    // 获得某点position
    public getPosition(percent: number): pc.Vec3
    {
        this.position.set(this.px.value(percent), this.py.value(percent), this.pz.value(percent));
        return this.position;
    }

    // 获得某点rotation,可以是沿切线方向，也可以是路径点朝向的插值
    public getRotation(percent: number, nodeRotation?: boolean, inverse?: boolean): pc.Quat
    {
        if (nodeRotation) {
            // 取朝向插值
            this.forward.set(this.lx.value(percent), this.ly.value(percent), this.lz.value(percent));
            // 以竖直向下为基准方向
            this.up.cross(this.forward, pc.Vec3.UP);
            this.up.cross(this.up, this.forward).normalize();
            return this.rotation.setLookRotation(pc.Vec3.ZERO, this.forward.scale(inverse ? -1 : 1), this.up);
        }
        else {
            // 获得近似切线斜率
            this.forward.set(this.px.getTangent(percent), this.py.getTangent(percent), this.pz.getTangent(percent)).normalize();
            // 以竖直向下为基准方向
            this.up.cross(this.forward, pc.Vec3.UP);
            this.up.cross(this.up, this.forward).normalize();
            // 获得朝向
            return this.rotation.setLookRotation(pc.Vec3.ZERO, this.forward.scale(inverse ? 1 : -1), this.up);
        }
    }

    // 获得当前路径点
    public getCurrentPath(percent: number): number
    {
        for (let i = 0; i < this.nodePercent.length; i++) {
            if (percent <= this.nodePercent[i])
                return Math.max(0, i - 1);
        }
        return Math.max(0, this.nodePercent.length - 2);
    }

    // 获得当前切线方向
    public getTangent(percent: number): pc.Vec3
    {
        return this.forward.set(this.px.getTangent(percent), this.py.getTangent(percent), this.pz.getTangent(percent)).normalize();
    }
}
