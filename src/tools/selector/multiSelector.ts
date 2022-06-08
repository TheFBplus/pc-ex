/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-16 14:30:00
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-08 18:49:21
 * @ 详情: 多选模型
 */

import * as pc from "playcanvas";

import { Tool } from "../../lib/toolHelper";
import {
    clearSelectionBox, drawSelectionBox
} from "../../resources/tools/drawSelectionBox/drawSelectionBox";
import { PCNode } from "../../resources/types/common";

type InputEvents = "down" | "move" | "click" | "up" | "pinch" | "dragging" | "dragEnd";
type MultiSelectorEventType = "selectStart" | "selecting" | "selectEnd";
type SelectorOptions = {
    inputHandler: Tool<unknown, InputEvents>;
    pickCamera?: pc.CameraComponent;
    pickAreaScale?: number;
    excludeLayers?: pc.Layer[];
    expectCondition?: () => boolean
};

export default class MultiSelector extends Tool<SelectorOptions, MultiSelectorEventType>
{
    private picker: pc.Picker;
    private pickAreaScale: number;
    private pickLayers: pc.Layer[];
    private expectCondition: () => boolean;
    private pickCamera: pc.CameraComponent;

    private pickRect: pc.Vec4;
    private inputHander: Tool<unknown, InputEvents>;

    private isSelecting: boolean = false;
    private pickNodes: PCNode[] = [];

    constructor(option: SelectorOptions)
    {
        super();

        this.picker = new pc.Picker(pc.app, 0, 0);
        this.pickRect = new pc.Vec4();

        this.setOption(option);
    }

    /**
     * 设置多选模型选项
     * @param option 多选模型选项
     */
    public override setOption(option: SelectorOptions): void
    {
        this.inputHander = option.inputHandler;
        this.pickCamera = option?.pickCamera ?? pc.app.context.systems.camera.cameras[0];
        this.pickAreaScale = option?.pickAreaScale ?? 0.25;
        this.pickLayers = option?.excludeLayers ? pc.app.scene.layers.layerList.filter((layer: pc.Layer) => !option.excludeLayers.includes(layer)) : pc.app.scene.layers.layerList;
        this.expectCondition = option?.expectCondition;
    }

    /**
     * 根据框选区域选择模型
     * @param rect 框选区域
     */
    private pick(rect: pc.Vec4): void
    {
        const canvas = pc.app.graphicsDevice.canvas;
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;

        this.picker.resize(canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);
        this.picker.prepare(this.pickCamera, pc.app.scene, this.pickLayers);
        const error = 3; // TODO:查看引擎源码，找到此处判断存在误差的原因
        const selected = this.picker.getSelection(pc.math.clamp(rect.x, 0, canvasWidth) * this.pickAreaScale, pc.math.clamp(rect.y, 0, canvasHeight) * this.pickAreaScale, Math.min(canvasWidth - rect.x - error, rect.z) * this.pickAreaScale, Math.min(canvasHeight - rect.y - error, rect.w) * this.pickAreaScale);

        if (selected.length > 0) {
            const pickNodes: PCNode[] = [];
            selected.forEach(meshInstance =>
            {
                if (meshInstance && meshInstance.node) {
                    pickNodes.push(meshInstance.node);
                }
            });
            if (!this.isNodesEqual(this.pickNodes, pickNodes)) {
                this.eventHandler.fire("selecting", this.updatePickNodes(pickNodes));
            }
        }
        else {
            this.pickNodes = [];
            this.eventHandler.fire("selecting", null);
        }
    }

    /**
     * 框选时使用增量更新
     * @param nodes 框选node集合
     * @returns 增量更新后的node集合
     */
    private updatePickNodes(nodes: PCNode[]): PCNode[]
    {
        const oriLength = this.pickNodes.length;
        const newLength = nodes.length;
        if (newLength > oriLength) {
            for (let i = 0; i < newLength; i++) {
                const e = nodes[i];
                if (!this.pickNodes.includes(e)) {
                    this.pickNodes.push(e);
                }
            }
        }
        else {
            for (let i = oriLength - 1; i >= 0; i--) {
                const e = this.pickNodes[i];
                if (!nodes.includes(e)) {
                    this.pickNodes.pop();
                }
            }
        }
        return [].concat(this.pickNodes);
    }

    /**
     * 判断两个节点数组是否无序相等
     * @param arr1 数组1
     * @param arr2 数组2
     * @returns 两数组是否无序相等
     */
    private isNodesEqual(arr1: Array<PCNode>, arr2: Array<PCNode>): boolean
    {
        if (arr1.length != arr2.length) {
            return false;
        }

        let isEqual = true;
        arr1.forEach(e1 =>
        {
            if (!arr2.includes(e1)) {
                isEqual = false;
            }
        });

        return isEqual;
    }

    /**
     * 按键按下事件回调
     * @param event 按键按下事件
     */
    private onControlDown(event: { x: number, y: number }): void
    {
        if (!this.expectCondition()) {
            this.isSelecting = true;
            this.eventHandler.fire("selectStart");
        }
    }

    /**
     * 拖拽中调用
     * @param event 拖拽中事件
     * @returns 
     */
    private onDragging(event: { x: number, y: number, ox: number, oy: number }): void
    {
        if (!this.isSelecting || this.expectCondition && this.expectCondition()) { return; }

        this.pickRect.copy(drawSelectionBox({ x: event.ox, y: event.oy }, { x: event.x, y: event.y }));
        this.pick(this.pickRect);
    }

    /**
     * 拖拽结束时调用
     * @param event 拖拽结束事件
     */
    private onDragEnd(event: { x: number, y: number }): void
    {
        clearSelectionBox();
        this.isSelecting = false;
        this.eventHandler.fire("selectEnd");
    }

    protected override onEnable(): void
    {
        this.inputHander.addListener("down", this.onControlDown, this);
        this.inputHander.addListener("dragging", this.onDragging, this);
        this.inputHander.addListener("dragEnd", this.onDragEnd, this);
    }

    protected override onDisable(): void
    {
        this.inputHander.removeListener("down", this.onControlDown, this);
        this.inputHander.removeListener("dragging", this.onDragging, this);
        this.inputHander.removeListener("dragEnd", this.onDragEnd, this);
    }
}