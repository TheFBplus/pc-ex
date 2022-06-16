/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-08 15:04:27
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-16 15:26:41
 * @ 详情: 点选模型
 */

import * as pc from "playcanvas";

import { Tool } from "../../libs/libs/toolHelper";

type InputEvents = "down" | "move" | "click" | "up" | "pinch" | "dragging" | "dragEnd";
type SelectorEventType = "select";
type SelectorOptions = {
    inputHandler: Tool<unknown, InputEvents>;
    pickCamera?: pc.CameraComponent;
    pickAreaScale?: number;
    pickTag?: string;
    pickNull?: boolean;
    pickCondition?: () => boolean;
    excludeLayers?: pc.Layer[];
};

export class Selector extends Tool<SelectorOptions, SelectorEventType>
{
    private picker: pc.Picker;

    private inputHander: Tool<unknown, InputEvents>;
    private pickCamera: pc.CameraComponent;
    private pickAreaScale: number;
    private pickTag: string;
    private pickNull: boolean;
    private pickCondition: () => boolean;
    private pickLayers: pc.Layer[];

    private preSelectedNode: pc.GraphNode;

    /**
     * 创建模型点选器
     * @param option 模型点选设置
     */
    constructor(option: SelectorOptions)
    {
        super();

        this.picker = new pc.Picker(pc.app, 0, 0);
        this.setOption(option);
    }

    /**
     * 设置模型点选器
     * @param option 模型点选设置
     */
    public override setOption(option: SelectorOptions): void
    {
        this.inputHander = option.inputHandler;
        this.pickCamera = option?.pickCamera ?? pc.app.context.systems.camera.cameras[0];
        this.pickAreaScale = option?.pickAreaScale ?? 0.25;
        this.pickTag = option?.pickTag;
        this.pickNull = option?.pickNull ?? true;
        this.pickCondition = option?.pickCondition;
        this.pickLayers = option?.excludeLayers ? pc.app.scene.layers.layerList.filter((layer: pc.Layer) => !option.excludeLayers.includes(layer)) : pc.app.scene.layers.layerList;
    }

    /**
     * 点选模型
     * @param event 输入事件
     * @param event.x 输入事件屏幕x坐标 
     * @param event.y 输入事件屏幕y坐标  
     */
    private pick(event: { x: number, y: number }): void
    {
        if (this.pickCondition && !this.pickCondition()) { return; }

        const canvas = pc.app.graphicsDevice.canvas;
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;

        this.picker.resize(canvasWidth * this.pickAreaScale, canvasHeight * this.pickAreaScale);
        this.picker.prepare(this.pickCamera, pc.app.scene, this.pickLayers);
        const selected = this.picker.getSelection(event.x * this.pickAreaScale, event.y * this.pickAreaScale);

        if (selected.length > 0 && selected[0]?.node) {
            if (!this.pickTag || this.pickTag.length <= 0) {
                if (this.preSelectedNode == selected[0].node) { return; }
                this.eventHandler.fire("select", selected[0].node, this.preSelectedNode);
                this.preSelectedNode = selected[0].node;
            }
            else {
                const selectedNode = this.getModelHasTag(selected[0].node, this.pickTag);
                if (this.preSelectedNode == selectedNode) { return; }
                this.eventHandler.fire("select", selectedNode, this.preSelectedNode);
                this.preSelectedNode = selectedNode;
            }
        }
        else if (this.pickNull) {
            this.eventHandler.fire("select", null, this.preSelectedNode);
            this.preSelectedNode = null;
        }
    }

    /**
     * 从下至上找到含有某个标签的模型对象
     * @param model 模型
     * @param tag 标签
     * @returns 包含标签的模型对象
     */
    private getModelHasTag(model: pc.GraphNode, tag: string): pc.Entity
    {
        let node = model;
        while (node && !node.tags.has(tag)) {
            node = node.parent;
        }
        return node as pc.Entity;
    }

    protected override onEnable(): void
    {
        this.inputHander.addListener("click", this.pick, this);
    }

    protected override onDisable(): void
    {
        this.inputHander.removeListener("click", this.pick, this);
    }
}