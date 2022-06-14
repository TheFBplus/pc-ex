/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-22 09:33:08
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-14 15:52:56
 * @ 详情: 扩展Vec4类
 */

import * as pc from "playcanvas";

import { extend } from "../../libs/libs/extend-decorator";

@extend("Vec4")
export class Vec4_EX extends pc.Vec4
{
    private _shaderData: Float32Array;

    /**
     * 用于传入shader的数据
     */
    get shaderData()
    {
        this._shaderData = this._shaderData || new Float32Array(4);
        this._shaderData[0] = this.x;
        this._shaderData[1] = this.y;
        this._shaderData[2] = this.z;
        this._shaderData[3] = this.w;

        return this._shaderData;
    }
}