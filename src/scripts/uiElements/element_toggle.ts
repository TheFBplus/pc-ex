/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-25 10:05:18
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-28 18:11:48
 * @ 详情: 开关element
 */

import * as pc from "playcanvas";

import { Entity_EX } from "@/extensions/entity";
import { attr, createScript, ScriptTypeBase } from "@/utils/helpers/create-script-decorator";
import { castEX } from "@/utils/helpers/extend-decorator";
import { Toggle } from "@/utils/ui/toggle";

import { Element_ToggleGroup } from "./element_toggleGroup";

/**
 * 开关UI类
 */
@createScript('element_toggle')
export class Element_Toggle extends ScriptTypeBase
{
    @attr({ type: "boolean", title: "开关状态", default: false }) isOn: boolean;
    @attr({ type: "entity", title: "开关组" }) toggleGroup: pc.Entity;
    @attr({ type: "entity", title: "开关打开时显示的Entity" }) isOnEntity: pc.Entity;
    @attr({ type: "asset", assetType: "texture", title: "开关打开时对应的贴图" }) isOnTexture: pc.Asset;
    @attr({ type: "asset", assetType: "texture", title: "开关关闭时对应的贴图" }) isOffTexture: pc.Asset;

    private toggle: Toggle;

    public initialize(): void
    {
        /* -------------------------------------------------- 数据初始化 ------------------------------------------------- */
        this.toggle = new Toggle();
        this.toggle.isOn = this.isOn;
        if (this.toggleGroup) {
            this.toggle.ToggleGroup = castEX(Entity_EX, this.toggleGroup)?.getScript(Element_ToggleGroup).toggleGroup;
        }
        if (!this.entity.element) {
            console.error(`${this.entity.name} 没有element组件，无法创建开关！`);
        }
        this.onToggleValueChange(this.toggle.isOn);

        /* -------------------------------------------------- 事件监听 -------------------------------------------------- */
        this.toggle.on("onValueChange", this.onToggleValueChange, this);
        this.entity.element.on("click", this.onToggleClick, this);

        /* -------------------------------------------------- 属性监听 -------------------------------------------------- */
        this.on("attr:isOn", (isOn: boolean) =>
        {
            this.toggle.isOn = isOn;
        }, this);
        this.on("attr:toggleGroup", (toggleGroup: pc.Entity) =>
        {
            this.toggle.ToggleGroup = castEX(Entity_EX, toggleGroup)?.getScript(Element_ToggleGroup)?.toggleGroup;
        });
    }

    private onToggleClick(event: pc.ElementInputEvent)
    {
        this.toggle.switch();
    }

    private onToggleValueChange(isOn: boolean)
    {
        if (this.isOnEntity) {
            this.isOnEntity.enabled = isOn;
        }

        if (isOn && this.isOnTexture) {
            this.entity.element.textureAsset = this.isOnTexture.id;
        }
        else if (this.isOffTexture) {
            this.entity.element.textureAsset = this.isOffTexture.id;
        }
    }
}