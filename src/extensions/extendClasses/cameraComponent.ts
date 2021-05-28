import * as pc from "playcanvas";

import { intersect } from "./meshInstance";

export interface ICameraComponent
{
    /**
    * 让两个相机同步
    * @param camera 要同步的相机
    */
    syncCamera(camera: pc.CameraComponent): void;

    /**
     * 从此相机发射射线，检测一系列mesh的交点 {@link playcanvas#Vec3 | the Vec3 class}
     * @param ray 要检测的射线
     * @param meshInstances 要检测的meshInstance集合
     * @return 交点集合
     */
    raycastMeshInstances(ray: pc.Ray, meshInstances: Array<pc.MeshInstance>): Array<intersect>;
}

// 扩展playcanvas类
declare module 'playcanvas' {
    export interface CameraComponent extends ICameraComponent { }
}

/**
 * 让两个相机同步
 * @param camera 要同步的相机
 */
pc.CameraComponent.prototype.syncCamera = function (camera: pc.CameraComponent): void
{
    const self = this;
    const viewMatrix = this.viewMatrix;
    const projectionMatrix = this.projectionMatrix;
    camera.calculateTransform = function (transformMatrix: pc.Mat4, view: number)
    {
        return viewMatrix;
    }
    camera.calculateProjection = function (transformMatrix: pc.Mat4, view: number)
    {
        this.horizontalFov = self.horizontalFov;
        return projectionMatrix;
    }
}

/**
 * 从此相机发射射线，检测一系列mesh的交点
 * @param ray 要检测的射线
 * @param meshInstances 要检测的meshInstance集合
 * @return 交点集合
 */
pc.CameraComponent.prototype.raycastMeshInstances = function (ray: pc.Ray, meshInstances: Array<pc.MeshInstance>): Array<intersect>
{
    let intersects = new Array<intersect>();

    for (let i = 0; i < meshInstances.length; i++) {
        meshInstances[i].intersectsRay(ray, intersects);
    }

    if (intersects.length === 0) {
        return null;
    }

    return intersects.sort(function (a, b) { return a.distance - b.distance; });
}