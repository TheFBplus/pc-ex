/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-20 09:36:41
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-20 14:35:59
 * @ 详情: 开关组
 */

import { Tool } from "@/utils/helpers/toolBase";

import { Toggle } from "./toggle";

/**
 * 按钮组选项
 */
export interface ToggleGroupOptions
{
    allowSwitchOff?: boolean;
}

export class ToggleGroup extends Tool<ToggleGroupOptions, any>
{
    private toggles: Set<Toggle>;
    private _currentToggle: Toggle;
    public get currentToggle(): Toggle
    {
        return this._currentToggle;
    }

    private closeAllToggleFlag: boolean = false;

    // 默认选项
    protected toolOptionsDefault: ToggleGroupOptions = {
        allowSwitchOff: false
    }

    constructor(options: ToggleGroupOptions)
    {
        super();

        this.setOptions(options);

        this.toggles = new Set<Toggle>();
    }

    /**
     * 添加按钮到按钮组
     * @param toggle 按钮
     */
    public addToggle(toggle: Toggle): void
    {
        this.toggles.add(toggle);
        if (toggle.isOn) {
            this._currentToggle = toggle;
        }
    }

    /**
     * 从按钮组移除按钮
     * @param toggle 按钮
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
    public toggle(toggle: Toggle, targetState: boolean): boolean
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
                if (this.toolOptions.allowSwitchOff) {
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
     * 关闭所有按钮
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