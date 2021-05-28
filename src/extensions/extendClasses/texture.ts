import * as pc from "playcanvas";

let _color = new pc.Color();

/**
 * @description: 把像素数据沿y方向翻转
 * @param {Uint8ClampedArray} data 像素数据
 * @param {number} width 贴图宽度
 * @param {number} height 贴图高度
 */
function flipY(data: Uint8ClampedArray, width: number, height: number): void
{
    let tmp = new Uint8ClampedArray(width * 4);
    let x, y;
    for (y = 0; y < height / 2; ++y) {
        for (x = 0; x < width * 4; ++x) {
            tmp[x] = data[x + y * width * 4];
        }
        data.copyWithin(y * width * 4, (height - y - 1) * width * 4, (height - y) * width * 4);
        for (x = 0; x < width * 4; ++x) {
            data[x + (height - y - 1) * width * 4] = tmp[x];
        }
    }
}

declare module 'playcanvas' {
    export interface Texture
    {
        /**
         * @description: 此贴图的像素数据
         */
        pixelData: Uint8ClampedArray;

        /**
         * @description: 读取贴图的像素数据
         * @return {Uint8ClampedArray} 像素数据，包含rgba值
         */
        getData(): Uint8ClampedArray;

        /**
         * @description: 根据uv读取贴图的颜色值
         * @param {Vec2} uv uv值
         * @return {Color} 读取到的颜色值
         */
        texture2D(uv: Vec2): Color;
    }
}

/**
 * @description: 此贴图的像素数据
 */
Object.defineProperty(pc.Texture.prototype, "pixelData", {
    get: function ()
    {
        if (!this._pixelData) {
            this._pixelData = this.getData();
        }
        return this._pixelData;
    },
    configurable: true
});

/**
 * @description: 读取贴图的像素数据
 * @return {Uint8ClampedArray} 像素数据，包含rgba值
 */
pc.Texture.prototype.getData = function (): Uint8ClampedArray
{
    // 将贴图绘制在canvas上并读取像素
    let canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = this.getSource();

    canvas.width = this.width;
    canvas.height = this.height;
    context.drawImage(img, 0, 0);

    const data = context.getImageData(0, 0, this.width, this.height).data;
    if (Uint8ClampedArray.prototype.copyWithin) {
        flipY(data, this.width, this.height);
    }
    return data;
}

/**
 * @description: 根据uv读取贴图的颜色值
 * @param {Vec2} uv uv值
 * @return {Color} 读取到的颜色值
 */
pc.Texture.prototype.texture2D = function (uv: pc.Vec2): pc.Color
{
    const x = Math.round(uv.x * (this.width - 1));
    const y = Math.round(uv.y * (this.height - 1));
    const index = (y * this.width + x) * 4;

    _color.set(this.pixelData[index], this.pixelData[index + 1], this.pixelData[index + 2], this.pixelData[index + 3]);
    return _color;
}