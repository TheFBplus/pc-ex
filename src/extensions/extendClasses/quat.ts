import * as pc from "playcanvas";

let _lookRot = new pc.Quat();
let _lookMat = new pc.Mat4();

declare module 'playcanvas' {
    export interface Quat
    {
        /**
         * @description: 根据朝向关系设置rotation
         * @param {Vec3} position 原点
         * @param {Vec3} target 看向的目标点
         * @param {Vec3} up 上方向
         * @return {Quat} 原rotation
         */
        setLookRotation(position: Vec3, target: Vec3, up: Vec3): Quat;

        /**
         * @description: 根据朝向关系旋转rotation
         * @param {Vec3} position 原点
         * @param {Vec3} target 看向的目标点
         * @param {Vec3} up 上方向
         * @return {Quat} 原rotation
         */
        lookAt(position: Vec3, target: Vec3, up: Vec3): Quat;
    }
}

/**
 * @description: 根据朝向关系设置rotation
 * @param {Vec3} position 原点
 * @param {Vec3} target 看向的目标点
 * @param {Vec3} up 上方向
 * @return {Quat} 原rotation
 */
pc.Quat.prototype.setLookRotation = function (position: pc.Vec3, target: pc.Vec3, up?: pc.Vec3): pc.Quat
{
    _lookMat.setLookAt(position, target, up || pc.Vec3.UP);
    return this.setFromMat4(_lookMat);
}

/**
 * @description: 根据朝向关系旋转rotation
 * @param {Vec3} position 原点
 * @param {Vec3} target 看向的目标点
 * @param {Vec3} up 上方向
 * @return {Quat} 原rotation
 */
pc.Quat.prototype.lookAt = function (position: pc.Vec3, target: pc.Vec3, up?: pc.Vec3): pc.Quat
{
    _lookRot.setLookRotation(position, target, up || pc.Vec3.UP);
    return this.mul(_lookRot);
}