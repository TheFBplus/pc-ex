import * as pc from "playcanvas";

import { newUtil } from "../../classes/utils/extend-decorator";

declare module 'playcanvas' {
    export class DebugLine
    {
        static drawLine(start: Vec3, end: Vec3, color?: Color): void;
        static clearLines(): void;
    }
}

let app = pc.Application.getApplication();
let lines = new Array<pc.HandleEventCallback>();

@newUtil
export class DebugLine
{
    static drawLine(start: pc.Vec3, end: pc.Vec3, color?: pc.Color)
    {
        let renderLine = function ()
        {
            (app as any).renderLine(start, end, color || pc.Color.WHITE);
        }

        app.on("update", renderLine);
        lines.push(renderLine);
    }

    static clearLines()
    {
        lines.forEach(line =>
        {
            app.off("update", line);
        });
        lines = [];
    }
}