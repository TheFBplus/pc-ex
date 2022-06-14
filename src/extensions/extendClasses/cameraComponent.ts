/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 10:19:52
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-14 15:51:36
 * @ 详情: 扩展CameraComponent类
 */

import * as pc from "playcanvas";

import { cast } from "../../libs/libs/cast";
import { extend } from "../../libs/libs/extend-decorator";
import { intersect, MeshInstance_EX } from "./meshInstance";

@extend("CameraComponent")
export class CameraComponent_EX extends pc.CameraComponent
{
    /**
    * 让两个相机同步
    * @param camera 要同步的相机
    */
    syncCamera(camera: pc.CameraComponent): void
    {
        const self = this;
        const viewMatrix = this.viewMatrix;
        const projectionMatrix = this.projectionMatrix;
        camera.calculateTransform = function (transformMatrix: pc.Mat4, view: number)
        {
            this.horizontalFov = self.horizontalFov;
            this.fov = self.fov;
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
     * @returns 交点集合
     */
    raycastMeshInstances(ray: pc.Ray, meshInstances: Array<pc.MeshInstance>): Array<intersect>
    {
        let intersects = new Array<intersect>();

        for (let i = 0; i < meshInstances.length; i++) {
            cast<MeshInstance_EX>(meshInstances[i]).intersectsRay(ray, intersects);
        }

        if (intersects.length === 0) {
            return null;
        }

        return intersects.sort(function (a, b) { return a.distance - b.distance; });
    }
}