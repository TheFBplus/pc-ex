/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-18 15:35:26
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 17:43:15
 * @ 详情: 描边相机
 */

import * as pc from "playcanvas";

import { CameraComponent_EX } from "@/extensions/cameraComponent";
import { MaterialController } from "@/utils/func/materialController";
import { cast } from "@/utils/helpers/extend-decorator";
import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";
import { PostEffectOutline } from "@/utils/postEffects/posteffectOutline";

/**
 * LayerId
 */
type LayerId = number;
/**
 * 外边框相机选项
 */
export interface outlineCameraOptions
{
    mainCamra?: pc.CameraComponent;
    outlineLayerName?: string;
    outlineColor?: pc.Color;
    outlineThickness?: number;
}
/**
 * 存储每个render对应的layer组
 */
const layerMap: Map<pc.RenderComponent | pc.ModelComponent, LayerId[]> = new Map<pc.RenderComponent, LayerId[]>();

@tool("OutlineCamera")
export class OutlineCamera extends Tool<outlineCameraOptions, unknown>
{
    // 默认选项
    protected toolOptionsDefault: outlineCameraOptions = {
        mainCamra: this.app.systems.camera.cameras[0],
        outlineLayerName: "OutlineLayer",
        outlineColor: pc.Color.WHITE,
        outlineThickness: 2
    };
    private outlineLayer: pc.Layer;
    private outlineEffect: PostEffectOutline;
    private outlineCamera: pc.CameraComponent;

    constructor(options?: outlineCameraOptions)
    {
        super();

        this.setOptions(options);
    }

    /**
     * 设置外边框相机选项
     * @param options 外边框相机选项
     */
    public override setOptions(options: outlineCameraOptions): void
    {
        super.setOptions(options);
        // 重置特效
        this.initEffect({ color: this.toolOptions.outlineColor, thickness: this.toolOptions.outlineThickness });
    }

    /**
    * 更新外边框相机选项
    * @param options 外边框相机选项
    */
    public override updateOptions(options: outlineCameraOptions): void
    {
        super.updateOptions(options);
        // 重置特效
        this.initEffect({ color: this.toolOptions.outlineColor, thickness: this.toolOptions.outlineThickness });
    }

    /**
    * 开启或关闭描边特效
    * @param entity 节点
    * @param state 开关状态
    */
    public toggleOutLine(entity: pc.Entity, isOn: boolean): void
    {
        const outLineLayerId = this.app.scene.layers.getLayerByName(this.toolOptions.outlineLayerName).id;
        MaterialController.processNodeDeep(entity, null, model =>
        {
            const renderComponent = model as pc.RenderComponent;
            if (renderComponent.layers) {
                !layerMap.get(renderComponent) && layerMap.set(renderComponent, [...renderComponent.layers]);
                const preLayers = layerMap.get(renderComponent);
                renderComponent.layers = isOn ? [...preLayers, outLineLayerId] : preLayers;
            }
            const modelComponent = model as pc.ModelComponent;
            if (modelComponent.layers) {
                !layerMap.get(modelComponent) && layerMap.set(modelComponent, [...modelComponent.layers]);
                const preLayers = layerMap.get(modelComponent);
                modelComponent.layers = isOn ? [...preLayers, outLineLayerId] : preLayers;
            }
        });
    }

    /**
    * 初始化后期特效
    * @param option 描边设置
    * @param option.color 描边颜色
    * @param option.thickness 描边粗细
    */
    private initEffect(option?: { color: pc.Color, thickness: number }): void
    {
        // 创建并添加描边layer
        if (this.outlineLayer == undefined) {
            let outlineLayer = new pc.Layer({ name: this.toolOptions.outlineLayerName });
            this.app.scene.layers.insert(outlineLayer, 0); // 将outlineLayer最先渲染
            this.outlineLayer = outlineLayer;
        }
        this.outlineLayer.renderTarget = this.createRenderTarget(); // 给layer添加renderTarget;

        // 创建并添加描边相机
        if (this.outlineCamera == undefined) {
            let outlineCameraEntity = new pc.Entity();
            let outlineCamera = outlineCameraEntity.addComponent("camera", {
                clearColor: new pc.Color(0.0, 0.0, 0.0, 0.0), // 透明背景色
                layers: [this.outlineLayer.id] // 只渲染outlineLayer
            }) as pc.CameraComponent;
            this.app.root.addChild(outlineCameraEntity);
            this.outlineCamera = outlineCamera;
        }

        // 创建描边特效并添加至相机
        this.outlineEffect && this.toolOptions.mainCamra.postEffects.removeEffect(this.outlineEffect as any); // 先清空特效
        // 若传入了设置，则重新生成特效；若不传入设置，不重新生成，仅重置特效
        if (option) {
            this.outlineEffect = new PostEffectOutline(this.app.graphicsDevice, {
                outlineLayer: this.outlineLayer,
                color: option.color,
                thickness: option.thickness
            });
        }
        else {
            this.outlineEffect.refresh();
        }
        this.toolOptions.mainCamra.postEffects.addEffect(this.outlineEffect as any); // 添加特效至相机
        cast<CameraComponent_EX>(this.outlineCamera).follow(this.toolOptions.mainCamra); // 同步相机
    }

    /**
    * 创建大小为整个屏幕的renderTarget（用于后期）
    * @returns 可以覆盖整个屏幕的renderTarget 
    */
    private createRenderTarget(): pc.RenderTarget
    {
        // 创建贴图
        const texture = new pc.Texture(this.app.graphicsDevice, {
            width: this.app.graphicsDevice.width,
            height: this.app.graphicsDevice.height,
            format: pc.PIXELFORMAT_R8_G8_B8_A8,
            mipmaps: false,
            minFilter: pc.FILTER_LINEAR,
            magFilter: pc.FILTER_LINEAR
        });

        // 返回renderTarget
        return new pc.RenderTarget({
            colorBuffer: texture,
            depth: false
        });
    }

    /**
     * 重设特效，一般为窗口大小改变时调用
     */
    private resetEffect(): void
    {
        // 此函数不传option参数表示重设特效
        this.initEffect();
    }

    /**
     * 窗口缩放时调用
     */
    private onResize(): void
    {
        this.resetEffect();
    }

    protected override onEnable(): void
    {
        this.app.graphicsDevice.on("resizecanvas", this.onResize, this);
    }

    protected override onDisable(): void
    {
        this.app.graphicsDevice.off("resizecanvas", this.onResize, this);
    }
}