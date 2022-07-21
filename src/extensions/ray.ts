/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 11:26:17
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-21 16:48:46
 * @ 详情: 扩展Ray类
 */

import * as pc from "playcanvas";

import { extendClass } from "@/utils/helpers/extend-decorator";

const diff = new pc.Vec3();
const edge1 = new pc.Vec3();
const edge2 = new pc.Vec3();
const normal = new pc.Vec3();

@extendClass(pc.Ray)
export class Ray_EX extends pc.Ray
{
    /**
     * 获得射线和指定三角形的交点
     * @param a 三角形a点坐标
     * @param b 三角形b点坐标
     * @param c 三角形c点坐标
     * @param backfaceCulling 是否剔除背面
     * @param res 交点（不传则创建新的向量）
     * @returns 射线和三角形的交点
     */
    public intersectTriangle(a: pc.Vec3, b: pc.Vec3, c: pc.Vec3, backfaceCulling: boolean, res?: pc.Vec3): pc.Vec3
    {
        res = res ?? new pc.Vec3();
        edge1.sub2(b, a);
        edge2.sub2(c, a);
        normal.cross(edge1, edge2);

        let DdN = this.direction.dot(normal);
        let sign;

        if (DdN > 0) {
            if (backfaceCulling) return null;
            sign = 1;
        } else if (DdN < 0) {
            sign = -1;
            DdN = -DdN;
        } else {
            return null;
        }

        diff.sub2(this.origin, a);

        const DdQxE2 = sign * this.direction.dot(edge2.cross(diff, edge2));

        if (DdQxE2 < 0) return null;

        const DdE1xQ = sign * this.direction.dot(edge1.cross(edge1, diff));

        if (DdE1xQ < 0) return null;
        if (DdQxE2 + DdE1xQ > DdN) return null;

        const QdN = -sign * diff.dot(normal);

        if (QdN < 0) return null;

        return res.copy(this.direction).mulScalar(QdN / DdN).add(this.origin);
    }
}