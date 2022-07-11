/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 15:36:25
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-10 15:07:46
 * @ 详情: 每帧绘制直线
 */

import * as pc from "playcanvas";

import GlobalVariables from "@/utils/common/GlobalVariables";

let lines = new Array<pc.HandleEventCallback>();

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
            GlobalVariables.app.drawLine(start, end, color || pc.Color.WHITE);
        }

        GlobalVariables.app.on("update", renderLine);
        lines.push(renderLine);
    }

    /**
     * 清除所有直线
     */
    static clearLines(): void
    {
        lines.forEach(line =>
        {
            GlobalVariables.app.off("update", line);
        });
        lines = [];
    }
}