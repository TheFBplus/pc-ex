import * as pc from "playcanvas";

declare module 'playcanvas' {
    export interface Vec2
    {
        /**
         * @description: 此二维向量对应的可传入shader的数据
         */
        shaderData: Float32Array;
    }
}

Object.defineProperty(pc.Vec2.prototype, "shaderData", {
    get: function ()
    {
        if (!this._shaderData)
        {
            this._shaderData = new Float32Array(2);
        }
        this._shaderData[0] = this.x;
        this._shaderData[1] = this.y;

        return this._shaderData;
    },
    configurable: true
});