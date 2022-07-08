/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 15:36:25
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 17:36:41
 * @ 详情: 每帧绘制直线
 */

import * as pc from "playcanvas";

let lines = new Array<pc.HandleEventCallback>();

const app = pc.Application.getApplication();

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
            app.drawLine(start, end, color || pc.Color.WHITE);
        }

        app.on("update", renderLine);
        lines.push(renderLine);
    }

    /**
     * 清除所有直线
     */
    static clearLines(): void
    {
        lines.forEach(line =>
        {
            app.off("update", line);
        });
        lines = [];
    }
}