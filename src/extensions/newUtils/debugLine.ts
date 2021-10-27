import * as pc from "playcanvas";

declare module 'playcanvas' {
    export namespace DebugLine
    {
        function drawLine(start: Vec3, end: Vec3, color?: Color): void;
        function clearLines(): void;
    }
}

export namespace DebugLine
{
    const app = pc.Application.getApplication();
    let lines = new Array<pc.callbacks.HandleEvent>();

    export function drawLine(start: pc.Vec3, end: pc.Vec3, color?: pc.Color)
    {
        let renderLine = function ()
        {
            (app as any).renderLine(start, end, color || pc.Color.WHITE);
        }

        app.on("update", renderLine);
        lines.push(renderLine);
    }

    export function clearLines()
    {
        lines.forEach(line =>
        {
            app.off("update", line);
        });
        lines = [];
    }
}

(pc as any).DebugLine = {
    drawLine: DebugLine.drawLine,
    clearLines: DebugLine.clearLines
};