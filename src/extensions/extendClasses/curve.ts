import * as pc from "playcanvas";

import { extendClass } from "../../classes/utils/extend-decorator";

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

@extendClass("Curve")
export class Curve_EX extends pc.Curve
{
    // 获得近似切线斜率
    getTangent(percent: number): number
    {
        percent = Math.min(1 - epsilon, percent);
        const y1 = this.value(percent);
        const y2 = this.value(percent + epsilon);
        return (y2 - y1) / epsilon;
    }

    // 获得法线
    getNormal(percent: number): number
    {
        const k = this.getTangent(percent);
        return k === 0 ? 0 : -1 / k;
    }
}