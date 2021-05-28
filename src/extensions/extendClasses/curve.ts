import * as pc from "playcanvas";

const epsilon = 1e-10;

declare module 'playcanvas' {
    export interface Curve
    {
        // 获得近似切线斜率
        getTangent(percent: number): number;

        // 获得法线
        getNormal(percent: number): number;
    }
}

// 获得近似切线斜率
pc.Curve.prototype.getTangent = function (percent: number): number
{
    percent = Math.min(1 - epsilon, percent);
    const y1 = this.value(percent);
    const y2 = this.value(percent + epsilon);
    return (y2 - y1) / epsilon;
}

// 获得法线
pc.Curve.prototype.getNormal = function (percent: number): number
{
    const k = this.getTangent(percent);
    return k === 0 ? 0 : -1 / k;
}