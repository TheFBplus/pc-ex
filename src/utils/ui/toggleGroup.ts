/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-25 10:08:31
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-27 16:49:03
 * @ 详情: 开关组逻辑
 */

import * as pc from "playcanvas";

import { Toggle } from "./toggle";

/**
 * 开关组逻辑类
 */
export class ToggleGroup extends pc.EventHandler
{
    public allowSwitchOff: boolean;
    private toggles: Set<Toggle>;
    private closeAllToggleFlag: boolean = false;

    private _currentToggle: Toggle;
    public get currentToggle(): Toggle
    {
        return this._currentToggle;
    }

    constructor(allowSwitchOff: boolean)
    {
        super();
        this.allowSwitchOff = allowSwitchOff;
        this.toggles = new Set<Toggle>();
    }

    /**
     * 添加开关到开关组
     * @param toggle 开关
     */
    public addToggle(toggle: Toggle): void
    {
        this.toggles.add(toggle);
        if (toggle.isOn) {
            this._currentToggle = toggle;
        }
    }

    /**
     * 从开关组移除开关
     * @param toggle 开关
     */
    public removeToggle(toggle: Toggle): void
    {
        this.toggles.delete(toggle);
        if (this._currentToggle == toggle) {
            this._currentToggle = undefined;
        }
    }

    /**
     * 开关组限制开关的行为
     * @param toggle 要限制的开关
     * @param targetState 开关的目标状态
     * @returns 开关状态是否改变
     */
    public shouldToggleSwitch(toggle: Toggle, targetState: boolean): boolean
    {
        // 通过变量控制不进行开关检测
        if (this.closeAllToggleFlag) {
            return true;
        }

        if (targetState) {
            const preToggle = this._currentToggle;
            this._currentToggle = toggle;
            if (preToggle) {
                preToggle.isOn = false;
            }
            return true;
        }
        else {
            if (this._currentToggle == toggle) {
                if (this.allowSwitchOff) {
                    this._currentToggle = undefined;
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
    }

    /**
     * 关闭所有开关
     */
    public closeAllToggles(): void
    {
        this.closeAllToggleFlag = true;
        this.toggles.forEach(tg =>
        {
            tg.isOn = false;
        });
        this._currentToggle = undefined;
        this.closeAllToggleFlag = false;
    }
}