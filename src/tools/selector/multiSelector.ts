/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-16 14:30:00
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-22 10:49:53
 * @ 详情: 多选模型
 */

import * as pc from "playcanvas";

import {
    clearSelectionBox, drawSelectionBox
} from "@/utils/func/drawSelectionBox/drawSelectionBox";
import { Tool } from "@/utils/helpers/toolBase";
import { tool, use } from "@/utils/helpers/useToolHelper";

import { InputEventsMap } from "../../utils/common/InputEventsMap";

/**
 * 模型多选事件-回调表
 */
interface MultiSelectorEventMap
{
    selectStart: () => any;
    selecting: (selectedNodes: pc.GraphNode[], preSelectedNodes: pc.GraphNode[]) => any;
    selectEnd: () => any;
};

/**
 * 模型多选选项
 */
export interface MultiSelectorOptions
{
    inputHandler?: Tool<any, InputEventsMap>;
    pickCamera?: pc.CameraComponent;
    pickAreaScale?: number;
    boxLayer?: pc.Layer;
    excludeLayers?: pc.Layer[];
    expectCondition?: () => boolean
};

@tool("MultiSelector")
export class MultiSelector extends Tool<MultiSelectorOptions, MultiSelectorEventMap>
{
    // 默认选项
    protected toolOptionsDefault: MultiSelectorOptions = {
        inputHandler: use("MouseInputer"),
        pickCamera: this.app.systems.camera.cameras[0],
        pickAreaScale: 0.25,
        boxLayer: this.app.scene.layers.getLayerByName("UI"),
        excludeLayers: [this.app.scene.layers.getLayerByName("UI")],
        expectCondition: null
    };

    private picker: pc.Picker;
    private pickLayers: pc.Layer[];
    private pickRect: pc.Vec4;
    private isSelecting: boolean = false;
    private pickNodes: pc.GraphNode[] = [];

    constructor(options: MultiSelectorOptions)
    {
        super();

        this.picker = new pc.Picker(this.app, 0, 0);
        this.pickRect = new pc.Vec4();

        this.setOptions(options);
    }

    /**
     * 设置多选模型选项
     * @param option 多选模型选项
     */
    public override setOptions(options: MultiSelectorOptions): void
    {
        super.setOptions(options);

        this.pickLayers = this.toolOptions.excludeLayers
            ? this.app.scene.layers.layerList.filter((layer: pc.Layer) => !this.toolOptions.excludeLayers.includes(layer))
            : this.app.scene.layers.layerList;
    }

    /**
     * 根据框选区域选择模型
     * @param rect 框选区域
     */
    private pick(rect: pc.Vec4): void
    {
        const options = this.toolOptions;
        const canvas = this.app.graphicsDevice.canvas;
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;

        this.picker.resize(canvasWidth * options.pickAreaScale, canvasHeight * options.pickAreaScale);
        this.picker.prepare(options.pickCamera, this.app.scene, this.pickLayers);
        const error = 3; // TODO:查看引擎源码，找到此处判断存在误差的原因
        const selected = this.picker.getSelection(
            pc.math.clamp(rect.x, 0, canvasWidth) * options.pickAreaScale,
            pc.math.clamp(rect.y, 0, canvasHeight) * options.pickAreaScale,
            Math.min(canvasWidth - rect.x - error, rect.z) * options.pickAreaScale,
            Math.min(canvasHeight - rect.y - error, rect.w) * options.pickAreaScale
        );

        if (selected.length > 0) {
            const pickNodes: pc.GraphNode[] = [];
            selected.forEach(meshInstance =>
            {
                if (meshInstance && meshInstance.node) {
                    pickNodes.push(meshInstance.node);
                }
            });
            if (!this.isNodesEqual(this.pickNodes, pickNodes)) {
                const prePickNodes = [...this.pickNodes];
                this.fire("selecting", this.updatePickNodes(pickNodes), prePickNodes);
            }
        }
        else {
            this.fire("selecting", [], this.pickNodes);
            this.pickNodes = [];
        }
    }

    /**
     * 框选时使用增量更新
     * @param nodes 框选node集合
     * @returns 增量更新后的node集合
     */
    private updatePickNodes(nodes: pc.GraphNode[]): pc.GraphNode[]
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
        return [...this.pickNodes];
    }

    /**
     * 判断两个节点数组是否无序相等
     * @param arr1 数组1
     * @param arr2 数组2
     * @returns 两数组是否无序相等
     */
    private isNodesEqual(arr1: Array<pc.GraphNode>, arr2: Array<pc.GraphNode>): boolean
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
        const options = this.toolOptions;
        if (!options.expectCondition || !options.expectCondition()) {
            this.isSelecting = true;
            this.fire("selectStart");
        }
    }

    /**
     * 拖拽中调用
     * @param event 拖拽中事件
     * @returns 
     */
    private onDragging(event: { x: number, y: number, ox: number, oy: number }): void
    {
        const options = this.toolOptions;
        if (!this.isSelecting || options.expectCondition && options.expectCondition()) { return; }

        this.pickRect.copy(drawSelectionBox({ x: event.ox, y: event.oy }, { x: event.x, y: event.y }, options.boxLayer));
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
        this.fire("selectEnd");
    }

    protected override onEnable(): void
    {
        const inputHandler = this.toolOptions.inputHandler;
        inputHandler.on("down", this.onControlDown, this);
        inputHandler.on("dragging", this.onDragging, this);
        inputHandler.on("dragEnd", this.onDragEnd, this);
    }

    protected override onDisable(): void
    {
        const inputHandler = this.toolOptions.inputHandler;
        inputHandler.off("down", this.onControlDown, this);
        inputHandler.off("dragging", this.onDragging, this);
        inputHandler.off("dragEnd", this.onDragEnd, this);
    }
}