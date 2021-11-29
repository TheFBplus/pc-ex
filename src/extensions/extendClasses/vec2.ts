import * as pc from "playcanvas";

import { prpt } from "../../classes/utils/extend-decorator";

declare module 'playcanvas' {
    export interface Vec2
    {
        /**
         * @description: 此二维向量对应的可传入shader的数据
         */
        shaderData: Float32Array;
    }
}

export class Vec2_EX extends pc.Vec2
{
    @prpt({ default: new Float32Array(2) })
    private _shaderData: Float32Array;

    /**
    * @description: 此二维向量对应的可传入shader的数据
    */
    get shaderData()
    {
        this._shaderData[0] = this.x;
        this._shaderData[1] = this.y;

        return this._shaderData;
    }
}