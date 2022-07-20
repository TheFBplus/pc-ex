/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-10 14:53:53
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-20 09:30:27
 * @ 详情: 通用全局变量
 */

import * as pc from "playcanvas";

export default class GlobalVariables
{
    private static _app: pc.AppBase;

    static get app()
    {
        return this._app || pc.AppBase.getApplication();
    }
}