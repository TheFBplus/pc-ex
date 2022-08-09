/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-08 15:04:27
 * @ 修改者: FBplus
 * @ 修改时间: 2022-08-09 16:48:24
 * @ 详情: 点选模型
 */

import * as pc from "playcanvas";

import { InputEventsMap } from "@/utils/common/InputEventsMap";
import { Tool } from "@/utils/helpers/toolBase";
import { tool, use } from "@/utils/helpers/useToolHelper";

/**
 * 模型点选事件-回调表
 */
interface SelectorEventsMap
{
    select: (selectedNode: pc.GraphNode, preSelectedNode: pc.GraphNode) => any;
};

/**
 * 模型点选选项
 */
export interface SelectorOptions
{
    inputHandler?: Tool<any, InputEventsMap>;
    pickCamera?: pc.CameraComponent;
    pickAreaScale?: number;
    pickTag?: string;
    pickNull?: boolean;
    pickSame?: boolean;
    downSelect?: boolean;
    pickCondition?: () => boolean;
    excludeLayers?: pc.Layer[];
};

@tool("Selector")
export class Selector extends Tool<SelectorOptions, SelectorEventsMap>
{
    // 默认选项
    protected toolOptionsDefault: SelectorOptions = {
        inputHandler: this.app.touch ? use("TouchInputer") : use("MouseInputer"),
        pickCamera: this.app.systems.camera.cameras[0],
        pickAreaScale: 0.25,
        pickTag: null,
        pickNull: true,
        pickSame: true,
        downSelect: false,
        pickCondition: null,
        excludeLayers: null,
    };

    private picker: pc.Picker;
    private pickLayers: pc.Layer[];
    private preSelectedNode: pc.GraphNode;

    /**
     * 创建模型点选器
     * @param option 模型点选设置
     */
    constructor(options: SelectorOptions)
    {
        super();

        this.picker = new pc.Picker(this.app, 0, 0);
        this.setOptions(options);
    }

    /**
     * 设置模型点选器
     * @param option 模型点选设置
     */
    public override setOptions(options: SelectorOptions): void
    {
        super.setOptions(options);
        // this.toolOptions.inputHandler = this.toolOptions.inputHandler || use("MouseInputer");
        this.pickLayers = this.toolOptions.excludeLayers
            ? this.app.scene.layers.layerList.filter((layer: pc.Layer) => !this.toolOptions.excludeLayers.includes(layer))
            : this.app.scene.layers.layerList;
    }

    /**
     * 点选模型
     * @param event 输入事件
     * @param event.x 输入事件屏幕x坐标 
     * @param event.y 输入事件屏幕y坐标  
     */
    private pick(event: { x: number, y: number }): void
    {
        const options = this.toolOptions;
        if (options.pickCondition && !options.pickCondition()) { return; }

        const canvas = this.app.graphicsDevice.canvas;
        const canvasWidth = canvas.clientWidth;
        const canvasHeight = canvas.clientHeight;

        this.picker.resize(canvasWidth * options.pickAreaScale, canvasHeight * options.pickAreaScale);
        this.picker.prepare(options.pickCamera, this.app.scene, this.pickLayers);
        const selected = this.picker.getSelection(event.x * options.pickAreaScale, event.y * options.pickAreaScale);

        if (selected.length > 0 && selected[0]?.node) {
            if (!options.pickTag || options.pickTag.length <= 0) {
                if (!options.pickSame && this.preSelectedNode == selected[0].node) { return; }
                this.fire("select", selected[0].node, this.preSelectedNode);
                this.preSelectedNode = selected[0].node;
            }
            else {
                const selectedNode = this.getModelHasTag(selected[0].node, options.pickTag);
                if (!options.pickSame && this.preSelectedNode == selectedNode) { return; }
                this.fire("select", selectedNode, this.preSelectedNode);
                this.preSelectedNode = selectedNode;
            }
        }
        else if (options.pickNull) {
            this.fire("select", null, this.preSelectedNode);
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
        if (this.toolOptions.downSelect) {
            this.toolOptions.inputHandler.on("down", this.pick, this);
        }
        else {
            this.toolOptions.inputHandler.on("click", this.pick, this);
        }
    }

    protected override onDisable(): void
    {
        this.toolOptions.inputHandler.off("down", this.pick, this);
        this.toolOptions.inputHandler.off("click", this.pick, this);
    }
}