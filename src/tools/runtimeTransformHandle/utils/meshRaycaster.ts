/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-16 17:14:38
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-10 21:36:54
 * @ 详情: 遍历三角形，检测交点
 */

import * as pc from "playcanvas";

// 三角形格式
interface ITriangle
{
    a: pc.Vec3;
    b: pc.Vec3;
    c: pc.Vec3;
}

// 交点格式
interface IIntersect
{
    distance: number;
    meshInstance: pc.MeshInstance;
}

export default class MeshRaycaster
{
    private static collisionMeshInstances: pc.MeshInstance[] = [];
    private static meshTriangleMap: Map<pc.MeshInstance, ITriangle[]> = new Map<pc.MeshInstance, ITriangle[]>();

    private static worldRay: pc.Ray = new pc.Ray();
    private static localRay: pc.Ray = new pc.Ray();

    private static intersects: IIntersect[] = [];

    private static diff: pc.Vec3 = new pc.Vec3();
    private static edge1: pc.Vec3 = new pc.Vec3();
    private static edge2: pc.Vec3 = new pc.Vec3();
    private static normal: pc.Vec3 = new pc.Vec3();
    private static distance: pc.Vec3 = new pc.Vec3();
    private static worldCoord: pc.Vec3 = new pc.Vec3();
    private static worldTransform: pc.Mat4 = new pc.Mat4();
    private static localTransform: pc.Mat4 = new pc.Mat4();
    private static intersectPoint: pc.Vec3 = new pc.Vec3();

    /**
     * 添加要检测的网格
     * @param meshInstance 网格
     */
    public static addMeshInstances(meshInstance: pc.MeshInstance)
    {
        if (!this.collisionMeshInstances.includes(meshInstance)) {
            this.collisionMeshInstances.push(meshInstance);
        }
    }

    /**
     * 因待检测的mesh不会发生变化，故可先将其三角形保存起来
     */
    public static generateTriangles()
    {
        this.meshTriangleMap.clear();

        const positions: Array<number> = [];
        const indices: Array<number> = [];

        this.collisionMeshInstances.forEach(meshInstance =>
        {
            const mesh = meshInstance.mesh;
            const triangles: Array<ITriangle> = [];

            mesh.getPositions(positions);
            mesh.getIndices(indices);
            for (let i = 0; i < indices.length; i += 3) {
                const i0 = indices[i];
                const i1 = indices[i + 1];
                const i2 = indices[i + 2];

                triangles.push({
                    a: new pc.Vec3(positions[i0 * 3], positions[i0 * 3 + 1], positions[i0 * 3 + 2]),
                    b: new pc.Vec3(positions[i1 * 3], positions[i1 * 3 + 1], positions[i1 * 3 + 2]),
                    c: new pc.Vec3(positions[i2 * 3], positions[i2 * 3 + 1], positions[i2 * 3 + 2])
                });
            }
            this.meshTriangleMap.set(meshInstance, triangles);
        });
    }

    /**
     * 检测网格与射线是否相交
     * @param camera 当前渲染相机
     * @param screenPoint 屏幕坐标
     * @returns 离相机最近的交点的网格
     */
    public static rayCast(camera: pc.CameraComponent, screenPoint: { x: number, y: number }): pc.MeshInstance
    {
        if (this.meshTriangleMap.size <= 0) { return null; }

        camera.screenToWorld(screenPoint.x, screenPoint.y, camera.farClip, this.worldRay.direction);
        this.worldRay.origin.copy(camera.entity.getPosition());
        this.worldRay.direction.sub(this.worldRay.origin).normalize();

        this.intersects = [];
        this.meshTriangleMap.forEach((value, key) =>
        {
            this.intersect(key, value);
        });

        return this.intersects.length <= 0 ? null : this.intersects.sort((a, b) => a.distance - b.distance)[0]?.meshInstance;
    }

    /**
     * 遍历网格的三角形，检测相交
     * @param meshInstance 网格
     * @param triangles 网格的三角形
     */
    private static intersect(meshInstance: pc.MeshInstance, triangles: ITriangle[]): void
    {
        // 未激活时不继续检测
        if (!meshInstance.node.enabled) { return null; }

        // aabb不相交时不继续检测
        if (!meshInstance.aabb.intersectsRay(this.worldRay)) { return null; }

        // 因为mesh的三角形是本地坐标系中的，故将世界空间中的坐标转换到本地空间中再去检测相交
        this.localRay.origin.copy(this.worldRay.origin);
        this.localRay.direction.copy(this.worldRay.direction);
        this.worldTransform.copy(meshInstance.node.getWorldTransform());
        this.localTransform.copy(this.worldTransform).invert();
        this.localTransform.transformPoint(this.localRay.origin, this.localRay.origin);
        this.localTransform.transformVector(this.localRay.direction, this.localRay.direction);

        let intersect = null;
        for (let i = 0; i < triangles.length; i++) {
            intersect = this.checkIntersection(meshInstance, triangles[i]);
            intersect && this.intersects.push(intersect);
        }
    }

    /**
     * 检测射线与三角形的相交
     * @param meshInstance 网格
     * @param triangle 三角形
     * @returns 交点
     */
    private static checkIntersection(meshInstance: pc.MeshInstance, triangle: ITriangle): IIntersect
    {
        const backfaceCulling = (
            meshInstance.material.cull === pc.CULLFACE_BACK ||
            meshInstance.material.cull === pc.CULLFACE_FRONTANDBACK
        );

        const intersected = this.intersectTriangle(triangle, backfaceCulling, this.intersectPoint);
        if (intersected === null) return null;

        this.worldTransform.transformPoint(this.worldCoord, this.worldCoord);
        this.distance.sub2(this.worldCoord, this.worldRay.origin);

        return {
            distance: this.distance.length(),
            meshInstance: meshInstance
        };
    }

    /**
     * 检测射线与三角形的相交
     * @param triangle 三角形
     * @param backfaceCulling 是否剔除背面 
     * @param res 交点本地坐标
     * @returns 交点本地坐标
     */
    private static intersectTriangle(triangle: ITriangle, backfaceCulling: boolean, res: pc.Vec3): pc.Vec3
    {
        this.edge1.sub2(triangle.b, triangle.a);
        this.edge2.sub2(triangle.c, triangle.a);
        this.normal.cross(this.edge1, this.edge2);

        let DdN = this.localRay.direction.dot(this.normal);
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

        this.diff.sub2(this.localRay.origin, triangle.a);

        const DdQxE2 = sign * this.localRay.direction.dot(this.edge2.cross(this.diff, this.edge2));

        if (DdQxE2 < 0) return null;

        const DdE1xQ = sign * this.localRay.direction.dot(this.edge1.cross(this.edge1, this.diff));

        if (DdE1xQ < 0) return null;
        if (DdQxE2 + DdE1xQ > DdN) return null;

        const QdN = -sign * this.diff.dot(this.normal);

        if (QdN < 0) return null;

        return res.copy(this.localRay.direction).mulScalar(QdN / DdN).add(this.localRay.origin);
    }
}
