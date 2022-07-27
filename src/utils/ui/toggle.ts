/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-25 10:05:18
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-27 16:49:07
 * @ 详情: 开关逻辑
 */
import * as pc from "playcanvas";

import { ToggleGroup } from "./toggleGroup";

/**
 * 开关逻辑类
 */
export class Toggle extends pc.EventHandler
{
    /**
     * 开关状态
     */
    private _isOn: boolean = false;
    public set isOn(state: boolean)
    {
        if (this._isOn == state) { return; }
        // toggle group判断开关状态是否应发生变化
        if (this._toggleGroup) {
            if (this._toggleGroup.shouldToggleSwitch(this, state)) {
                this.fire("onValueChange", this._isOn = state);
            }
        }
        else {
            this.fire("onValueChange", this._isOn = state);
        }
    }
    public get isOn(): boolean
    {
        return this._isOn;
    }

    /**
     * 开关组
     */
    private _toggleGroup: ToggleGroup;
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