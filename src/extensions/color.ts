/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-22 09:33:08
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-05 16:47:49
 * @ 详情: 扩展Color类
 */

import * as pc from "playcanvas";

import { extendClass } from "@/utils/helpers/extend-decorator";

@extendClass("Color")
export class Color_EX extends pc.Color
{
    private _shaderData: Float32Array;

    /**
     * 用于传入shader的数据
     */
    get shaderData()
    {
        this._shaderData = this._shaderData || new Float32Array(4);
        this._shaderData[0] = this.r;
        this._shaderData[1] = this.g;
        this._shaderData[2] = this.b;
        this._shaderData[3] = this.a;

        return this._shaderData;
    }
}