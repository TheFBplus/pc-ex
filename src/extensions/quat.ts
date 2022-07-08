/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-22 09:33:08
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-05 16:48:35
 * @ 详情: 扩展Quat类
 */

import * as pc from "playcanvas";

import { extendClass } from "@/utils/helpers/extend-decorator";

const _lookMat = new pc.Mat4();

@extendClass("Quat")
export class Quat_EX extends pc.Quat
{
    /**
     * 根据朝向关系设置rotation
     * @param position 起点
     * @param target 目标点
     * @param up 上方向
     * @returns 朝向rotation
     */
    public setLookRotation(position: pc.Vec3, target: pc.Vec3, up?: pc.Vec3): pc.Quat
    {
        _lookMat.setLookAt(position, target, up || pc.Vec3.UP);
        return this.setFromMat4(_lookMat);
    }
}