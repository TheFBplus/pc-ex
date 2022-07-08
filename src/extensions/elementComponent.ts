/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 10:35:07
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 17:18:25
 * @ 详情: 扩展ElementComponent类
 */

import * as pc from "playcanvas";

import { cast, extendClass } from "@/utils/helpers/extend-decorator";

import { Ray_EX } from "./ray";
import { Texture_EX } from "./texture";
import { Vec3_EX } from "./vec3";

const _temp = new pc.Vec3();
const _temp1 = new pc.Vec3();
const _temp2 = new pc.Vec3();
const _temp3 = new pc.Vec4();

const _ray = new pc.Ray();
const _hitPoint = new pc.Vec3();
const _toVec = new pc.Vec3();
const _project = new pc.Vec3();
const _axisX = new pc.Vec3();
const _axisY = new pc.Vec3();
const _uv = new pc.Vec2();

const _screenPosition = new pc.Vec3();

/**
 * 获取射线与3维空间中矩形的交点，并返回类似uv坐标（原点在左下角，x与y取 [0,1]）的2维向量
 * @param ray 射线
 * @param corners 矩形的4个角的3维坐标
 * @returns 射线与矩形交点的类uv坐标
 */
function calculateWorldUV(ray: pc.Ray, corners: pc.Vec3[]): pc.Vec2
{
    let x = 0;
    let y = 0;
    const width = corners[0].distance(corners[1]);
    const height = corners[0].distance(corners[3]);
    _axisX.sub2(corners[1], corners[0]).normalize();
    _axisY.sub2(corners[3], corners[0]).normalize();
    if (cast<Ray_EX>(ray).intersectTriangle(corners[0], corners[1], corners[2], false, _hitPoint)) {
        _toVec.sub2(_hitPoint, corners[0]);
    }
    else if (cast<Ray_EX>(ray).intersectTriangle(corners[2], corners[3], corners[0], false, _hitPoint)) {
        _toVec.sub2(_hitPoint, corners[0]);
    }
    else {
        _uv.set(x, y);
        return _uv;
    }

    _project.copy(_toVec);
    _project.project(_axisX);
    x = _project.length() / width;

    _project.copy(_toVec);
    _project.project(_axisY);
    y = _project.length() / height;

    _uv.set(x, y);
    return _uv;
}

@extendClass("ElementComponent")
export class ElementComponent_EX extends pc.ElementComponent
{
    private _calculatedCorners: [pc.Vec3, pc.Vec3, pc.Vec3, pc.Vec3];
    /**
     * 获得element4个角的世界坐标
     */
    get calculatedCorners(): [pc.Vec3, pc.Vec3, pc.Vec3, pc.Vec3]
    {
        this._calculatedCorners = this._calculatedCorners ?? [new pc.Vec3(), new pc.Vec3(), new pc.Vec3(), new pc.Vec3()];

        // 若该element在屏幕上，直接取值，无需计算
        if (this.screen) {
            for (let i = 0; i < 4; i++) {
                this._calculatedCorners[i].copy(this.screenCorners[i]);
            }
        }
        // 获得该element的4个角的世界坐标
        else {
            const entity = this.entity;
            const world_center = this.aabb.center;
            const halfWorld_width = this.aabb.halfExtents.x;
            const halfWorld_height = this.aabb.halfExtents.y;

            _temp.add2(_temp1.copy(entity.right).mulScalar(- halfWorld_width), _temp2.copy(entity.up).mulScalar(- halfWorld_height));
            this._calculatedCorners[0].add2(world_center, _temp);

            _temp.add2(_temp1.copy(entity.right).mulScalar(halfWorld_width), _temp2.copy(entity.up).mulScalar(- halfWorld_height));
            this._calculatedCorners[1].add2(world_center, _temp);

            _temp.add2(_temp1.copy(entity.right).mulScalar(halfWorld_width), _temp2.copy(entity.up).mulScalar(halfWorld_height));
            this._calculatedCorners[2].add2(world_center, _temp);

            _temp.add2(_temp1.copy(entity.right).mulScalar(- halfWorld_width), _temp2.copy(entity.up).mulScalar(halfWorld_height));
            this._calculatedCorners[3].add2(world_center, _temp);
        }

        // 转换世界坐标为屏幕坐标
        const app = pc.Application.getApplication();
        const deviceWidth = app.graphicsDevice.canvas.clientWidth;
        const deviceHeight = app.graphicsDevice.canvas.clientHeight;
        for (let i = 0; i < 4; i++) {
            _temp3.copy(cast<Vec3_EX>(this._calculatedCorners[i]).getGLPos());
            if ((window as any).isForceLandscape)
                this._calculatedCorners[i].set((_temp3.y * 0.5 + 0.5) * deviceHeight, (_temp3.x * 0.5 + 0.5) * deviceWidth, 1);
            else
                this._calculatedCorners[i].set((_temp3.x * 0.5 + 0.5) * deviceWidth, (_temp3.y * 0.5 + 0.5) * deviceHeight, 1);
        }

        return this._calculatedCorners;
    }

    /**
     * 根据屏幕位置获得element的像素值
     * @param screenPoint 屏幕坐标
     * @param color 颜色值（不传则创建新的颜色）
     * @returns element在此屏幕坐标的像素值
     */
    getPixelAt(screenPoint: { x: number, y: number }, camera?: pc.CameraComponent, color?: pc.Color): pc.Color
    {
        const app = pc.Application.getApplication();
        const pixelColor = color ?? new pc.Color();
        const currentCamera = camera ?? app.systems.camera.cameras[0];

        currentCamera.screenToWorld((window as any).isForceLandscape ? screenPoint.y : screenPoint.x, (window as any).isForceLandscape ? -screenPoint.x : screenPoint.y, currentCamera.farClip, _ray.direction);
        _ray.origin.copy(currentCamera.entity.getPosition());
        _ray.direction.sub(_ray.origin).normalize();

        // 返回颜色值
        const uv = calculateWorldUV(_ray, this.worldCorners);
        return this.texture ? cast<Texture_EX>(this.texture).texture2D(uv, pixelColor) : pc.Color.BLACK;
    }

    /**
     * 根据世界坐标设置element的屏幕坐标（element的anchor必需为[0,0,0,0]才能保证位置正确）
     * @param pos 世界坐标
     * @param camera 当前相机，默认为第一个场景相机
     */
    setPosFromWorld(pos: pc.Vec3, camera?: pc.CameraComponent): void
    {
        // 若该物体不在屏幕上，则不设置坐标
        if (!this.screen)
            return;

        // 设置当前相机
        const app = pc.Application.getApplication();
        const currentCamera = camera ?? app.systems.camera.cameras[0];;

        // 计算屏幕坐标
        const scale = this.screen.screen.scale;
        const devicePixelRatio = app.graphicsDevice.maxPixelRatio;
        currentCamera.worldToScreen(pos, _screenPosition);
        _screenPosition.x *= devicePixelRatio;
        _screenPosition.y *= devicePixelRatio;

        // 设置anchor为[0,0,0,0]
        this.anchor.copy(pc.Vec4.ZERO);

        // 设置该element的位置
        this.entity.setLocalPosition(_screenPosition.x / scale, (app.graphicsDevice.height - _screenPosition.y) / scale, 0);
    }
}