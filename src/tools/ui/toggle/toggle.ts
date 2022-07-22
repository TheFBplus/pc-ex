/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-20 09:27:43
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-22 10:45:17
 * @ 详情: 开关
 */

import { Tool } from "@/utils/helpers/toolBase";

import { ToggleGroup } from "./toggleGroup";

/**
 * 开关事件-回调表
 */
interface ToggleEventMap
{
    onValueChange: (isOn: boolean) => any
}

export class Toggle extends Tool<any, ToggleEventMap>
{
    private _isOn: boolean = false;
    /**
     * 设置开关状态
     */
    public set isOn(state: boolean)
    {
        if (this._isOn == state) { return; }
        // toggle group判断开关状态是否应发生变化
        if (this._toggleGroup) {
            if (this._toggleGroup.toggle(this, state)) {
                this.fire("onValueChange", this._isOn = state);
            }
        }
        else {
            this.fire("onValueChange", this._isOn = state);
        }
    }
    /**
     * 获得按钮状态
     */
    public get isOn(): boolean
    {
        return this._isOn;
    }

    private _toggleGroup: ToggleGroup;
    /**
     * 设置按钮组
     */
    public set ToggleGroup(value: ToggleGroup)
    {
        if (this._toggleGroup == value) { return; }

        if (this._toggleGroup) {
            this._toggleGroup.removeToggle(this);
        }
        if (value) {
            value.addToggle(this);
        }

        this._toggleGroup = value;
    }
    /**
     * 获得按钮组
     */
    public get ToggleGroup(): ToggleGroup
    {
        return this._toggleGroup;
    }

    /**
     * 切换开关
     */
    public switch(): void
    {
        this.isOn = !this.isOn;
    }
} 