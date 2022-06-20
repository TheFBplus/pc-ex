/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 14:14:05
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-20 14:03:58
 * @ 详情: 扩展texture类
 */

import * as pc from "playcanvas";

import { extendClass } from "../../libs/libs/extend-decorator";

/**
 * 把像素数据沿y方向翻转
 * @param data 像素数据
 * @param width 贴图宽度
 * @param height 贴图高度
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

@extendClass("Texture")
export class Texture_EX extends pc.Texture
{
    private _pixelData: Uint8ClampedArray;
    /**
     * 该贴图的像素数据
     */
    get pixelData(): Uint8ClampedArray
    {
        this._pixelData = this._pixelData ?? this.getPixelData();
        return this._pixelData;
    }

    /**
     * 获得该贴图的像素数据
     * @returns 贴图的像素数据
     */
    getPixelData(): Uint8ClampedArray
    {
        // 将贴图绘制在canvas上并读取像素
        const canvas = document.createElement('canvas');
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
     * 根据uv读取贴图的颜色值
     * @param uv uv值
     * @param color 颜色值（不传则创建新的颜色）
     * @returns 
     */
    texture2D(uv: { x: number, y: number }, color?: pc.Color): pc.Color
    {
        const pixelColor = color ?? new pc.Color();

        const x = Math.round(uv.x * (this.width - 1));
        const y = Math.round(uv.y * (this.height - 1));
        const index = (y * this.width + x) * 4;

        pixelColor.set(this.pixelData[index], this.pixelData[index + 1], this.pixelData[index + 2], this.pixelData[index + 3]);
        return pixelColor;
    }
}