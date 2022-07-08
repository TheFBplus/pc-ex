/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-06 23:25:04
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 17:18:46
 * @ 详情: 扩展Vec3类
 */

import * as pc from "playcanvas";

import { cast, extendClass } from "@/utils/helpers/extend-decorator";

import { Quat_EX } from "./quat";

const _worldPos = new pc.Vec4();
const _matrix_PV = new pc.Mat4();

const _axis = new pc.Vec3();
const _vH = new pc.Vec3();
const _vV = new pc.Vec3();
const _vV2 = new pc.Vec3();

@extendClass("Vec3")
export class Vec3_EX extends pc.Vec3
{
    private _rotation: pc.Quat;
    private _shaderData: Float32Array;

    /**
     * 获得此3维向量的朝向rotation
     */
    get rotation(): pc.Quat
    {
        this._rotation = this._rotation ?? new pc.Quat();
        return cast<Quat_EX>(this._rotation).setLookRotation(pc.Vec3.ZERO, this, pc.Vec3.UP);
    }

    /**
     * 用于传入shader的数据
     */
    get shaderData(): Float32Array
    {
        this._shaderData = this._shaderData || new Float32Array(3);
        this._shaderData[0] = this.x;
        this._shaderData[1] = this.y;
        this._shaderData[2] = this.z;

        return this._shaderData;
    }

    /**
     * 根据3维世界坐标获得标准化gl坐标
     * @param glPos 标准化gl坐标（不传则创建新的向量）
     * @param camera 当前相机，默认为第一个场景相机
     * @returns 标准化gl坐标（w为1）
     */
    public getGLPos(glPos?: pc.Vec4, camera?: pc.CameraComponent): pc.Vec4
    {
        const app = pc.Application.getApplication();
        const currentCamera = camera ?? app.systems.camera.cameras[0];

        // 根据相机参数计算试图投影矩阵
        _worldPos.set(this.x, this.y, this.z, 1);
        _matrix_PV.mul2(currentCamera.projectionMatrix, currentCamera.viewMatrix);

        // 返回标准化gl坐标
        const pos = glPos ?? new pc.Vec4();
        _matrix_PV.transformVec4(_worldPos, pos);
        return pos.set(pos.x / pos.w, pos.y / pos.w, pos.z / pos.w, 1);
    }

    /**
     * 绕x轴旋转向量
     * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
     * @param angle 旋转角度
     * @returns 旋转后的向量
     */
    public rotateX(angle: number): pc.Vec3
    {
        const cosTheta = Math.cos(angle * pc.math.DEG_TO_RAD);
        const sinTheta = Math.sin(angle * pc.math.DEG_TO_RAD);
        const y = cosTheta * this.y - sinTheta * this.z;
        const z = sinTheta * this.y + cosTheta * this.z;
        return this.set(this.x, y, z);
    }

    /**
     * 绕y轴旋转向量
     * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
     * @param angle 旋转角度
     * @returns 旋转后的向量
     */
    public rotateY(angle: number): pc.Vec3
    {
        const cosTheta = Math.cos(angle * pc.math.DEG_TO_RAD);
        const sinTheta = Math.sin(angle * pc.math.DEG_TO_RAD);
        const x = cosTheta * this.x + sinTheta * this.z;
        const z = - sinTheta * this.x + cosTheta * this.z;
        return this.set(x, this.y, z);
    }

    /**
     * 绕z轴旋转向量
     * @see https://www.cheapface.top/index.php/archives/19/ 二维向量的旋转
     * @param angle 旋转角度
     * @returns 旋转后的向量
     */
    public rotateZ(angle: number): pc.Vec3
    {
        const cosTheta = Math.cos(angle * pc.math.DEG_TO_RAD);
        const sinTheta = Math.sin(angle * pc.math.DEG_TO_RAD);
        const x = cosTheta * this.x - sinTheta * this.y;
        const y = sinTheta * this.x + cosTheta * this.y;
        return this.set(x, y, this.z);
    }

    /**
     * 绕旋转轴旋转向量
     * @see https://www.cheapface.top/index.php/archives/57/ 绕任意轴旋转3维向量（活用矢量分解与合成）
     * @param axis 旋转角度
     * @param angle 旋转角
     * @returns 旋转后的向量
     */
    public rotateAxisAngle(axis: pc.Vec3, angle: number): pc.Vec3
    {
        const radius = angle * pc.math.DEG_TO_RAD; // 转化角度为弧度制
        _axis.copy(axis).normalize(); // 归一化旋转轴
        _vH.copy(_axis).mulScalar(this.dot(_axis)); // 获得向量平行于旋转轴的分量，此分量不随旋转而改变
        _vV.sub2(this, _vH); // 获得向量垂直于旋转轴的分量，此分量在垂直于旋转轴的平面上旋转
        _axis.cross(_axis, _vV); // 获得垂直于旋转轴的新轴
        _vV2.add2(_vV.mulScalar(Math.cos(radius)), _axis.mulScalar(Math.sin(radius))); // 获得垂直分量旋转后的新向量(求单位向量时需除以旋转向量长度，求分量长度时要乘以长度，故此处消去了长度的计算)
        return this.add2(_vH, _vV2);
    }
}