/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 15:36:25
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-08 18:51:57
 * @ 详情: 直线绘制
 */

import * as pc from "playcanvas";

import { newUtil } from "../../lib/extend-decorator";

let lines = new Array<pc.HandleEventCallback>();

@newUtil
export class DebugLine
{
    /**
     * 绘制直线
     * @param start 起点
     * @param end 终点
     * @param color 颜色
     */
    static drawLine(start: pc.Vec3, end: pc.Vec3, color?: pc.Color): void
    {
        let renderLine = function ()
        {
            pc.app.renderLine(start, end, color || pc.Color.WHITE);
        }

        pc.app.on("update", renderLine);
        lines.push(renderLine);
    }

    /**
     * 清除所有直线
     */
    static clearLines(): void
    {
        lines.forEach(line =>
        {
            pc.app.off("update", line);
        });
        lines = [];
    }
}