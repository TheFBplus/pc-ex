/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-18 15:35:26
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-10 09:57:55
 * @ 详情: 描边相机
 */

import * as pc from "playcanvas";

import { CameraComponent_EX } from "../../extension/extendClasses/cameraComponent";
import { cast } from "../../lib/cast";
import { Tool } from "../../lib/toolHelper";
import { PostEffectOutline } from "../../resources/postEffects/posteffectOutline";
import MaterialController from "../../resources/tools/materialController";
import { PCNode } from "../../resources/types/common";

type LayerId = number;
const layerMap: Map<pc.RenderComponent, LayerId[]> = new Map<pc.RenderComponent, LayerId[]>();

type outlineCameraOptions = {
    mainCamra?: pc.CameraComponent;
    outlineLayerName?: string;
    outlineColor?: pc.Color;
    outlineThickness?: number;
}

export class OutlineCamera extends Tool<outlineCameraOptions, unknown>
{
    private mainCamera: pc.CameraComponent;
    private outlineLayerName: string;
    private outlineColor: pc.Color;
    private outlineThickness: number;

    private outlineLayer: pc.Layer;
    private outlineEffect: PostEffectOutline;
    private outlineCamera: pc.CameraComponent;

    constructor(options: outlineCameraOptions)
    {
        super();

        this.setOption(options);
    }

    public setOption(options?: outlineCameraOptions): void
    {
        this.mainCamera = options?.mainCamra ?? pc.app.context.systems.camera.cameras[0];
        this.outlineLayerName = options?.outlineLayerName ?? "OutlineLayer";
        this.outlineColor = options?.outlineColor ?? pc.Color.RED;
        this.outlineThickness = options?.outlineThickness ?? 2;

        // 重置特效
        this.initEffect({ color: this.outlineColor, thickness: this.outlineThickness });
    }

    /**
    * 开启或关闭描边特效
    * @param entity 节点
    * @param state 开关状态
    */
    public toggleOutLine(entity: PCNode, isOn: boolean): void
    {
        const app = pc.Application.getApplication();
        const outLineLayerId = app.scene.layers.getLayerByName(this.outlineLayerName).id;
        MaterialController.processNodeDeep(entity, null, model =>
        {
            const render = model as pc.RenderComponent;
            if (render.layers) {
                !layerMap.get(render) && layerMap.set(render, [...render.layers]);
                const preLayers = layerMap.get(render);
                render.layers = isOn ? [...preLayers, outLineLayerId] : preLayers;
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
            let outlineLayer = new pc.Layer({ name: this.outlineLayerName });
            pc.app.scene.layers.insert(outlineLayer, 0); // 将outlineLayer最先渲染
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
            pc.app.root.addChild(outlineCameraEntity);
            this.outlineCamera = outlineCamera;
        }

        // 创建描边特效并添加至相机
        this.outlineEffect && this.mainCamera.postEffects.removeEffect(this.outlineEffect as any); // 先清空特效
        // 若传入了设置，则重新生成特效；若不传入设置，不重新生成，仅重置特效
        if (option) {
            this.outlineEffect = new PostEffectOutline(pc.app.graphicsDevice, {
                outlineLayer: this.outlineLayer,
                color: option.color,
                thickness: option.thickness
            });
        }
        else {
            this.outlineEffect.refresh();
        }
        this.mainCamera.postEffects.addEffect(this.outlineEffect as any); // 添加特效至相机
        cast<CameraComponent_EX>(this.mainCamera).syncCamera(this.outlineCamera); // 同步相机
    }

    /**
    * 创建大小为整个屏幕的renderTarget（用于后期）
    * @returns 可以覆盖整个屏幕的renderTarget 
    */
    private createRenderTarget(): pc.RenderTarget
    {
        // 创建贴图
        const texture = new pc.Texture(pc.app.graphicsDevice, {
            width: pc.app.graphicsDevice.width,
            height: pc.app.graphicsDevice.height,
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
        window.addEventListener('resize', this.onResize.bind(this));
    }

    protected override onDisable(): void
    {
        window.removeEventListener('resize', this.onResize.bind(this));
    }
}