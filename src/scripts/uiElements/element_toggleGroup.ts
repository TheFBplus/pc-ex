/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-25 10:08:31
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-26 16:53:32
 * @ 详情: 开关组element
 */
import { attr, createScript, ScriptTypeBase } from "@/utils/helpers/create-script-decorator";
import { ToggleGroup } from "@/utils/ui/toggleGroup";

/**
 * 开关组UI类
 */
@createScript("element_toggleGroup")
export class Element_ToggleGroup extends ScriptTypeBase
{
    @attr({ type: "boolean", title: "是否允许取消勾选", default: false }) allowSwitchOff: boolean;

    public initialize(): void
    {
        // 监听属性改变
        this.on("attr:allowSwitchOff", (value: boolean, preValue: boolean) =>
        {
            this._toggleGroup.allowSwitchOff = value;
        }, this);
    }

    private _toggleGroup: ToggleGroup
    public get toggleGroup(): ToggleGroup
    {
        return this._toggleGroup || (this._toggleGroup = new ToggleGroup(this.allowSwitchOff));
    }
}