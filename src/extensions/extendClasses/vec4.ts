import * as pc from "playcanvas";

declare module 'playcanvas' {
    export interface Vec4
    {
        /**
         * @description: 此四维向量对应的可传入shader的数据
         */
        shaderData: Float32Array;
    }
}

Object.defineProperty(pc.Vec4.prototype, "shaderData", {
    get: function ()
    {
        if (!this._shaderData)
        {
            this._shaderData = new Float32Array(4);
        }
        this._shaderData[0] = this.x;
        this._shaderData[1] = this.y;
        this._shaderData[2] = this.z;
        this._shaderData[3] = this.w;

        return this._shaderData;
    },
    configurable: true
});
