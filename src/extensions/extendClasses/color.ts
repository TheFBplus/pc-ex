import * as pc from "playcanvas";

import { extendClass } from "../../classes/utils/extend-decorator";

declare module 'playcanvas' {
    export interface Color
    {
        /**
        * @description: 此颜色对应的可传入shader的数据
        */
        shaderData: Float32Array;
    }
}

@extendClass("Color")
export class Color_EX extends pc.Color
{
    private _shaderData: Float32Array;

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