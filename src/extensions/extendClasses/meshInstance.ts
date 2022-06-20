/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 14:40:45
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-20 14:03:38
 * @ 详情: 扩展MeshInstance类
 */

import * as pc from "playcanvas";

import { cast } from "../../libs/libs/cast";
import { extendClass } from "../../libs/libs/extend-decorator";
import { Ray_EX } from "./ray";

/**
 * 相交信息
 */
export interface intersect
{
    index: number, // 相交三角形索引
    distance: number,// 相交三角形和相机的距离
    point: pc.Vec3, // 交点世界坐标
    localPoint: pc.Vec3, // 交点本地坐标
    normal: pc.Vec3, // 相交三角形法线
    vertices: [pc.Vec3, pc.Vec3, pc.Vec3], // 相交三角形三个点的坐标
    meshInstance: pc.MeshInstance // 相交三角形所处的meshInstance
}

const localRay = new pc.Ray();
const distance = new pc.Vec3();
const aabb = new pc.BoundingBox();

const points = [new pc.Vec3(), new pc.Vec3(), new pc.Vec3()];

const edge1 = new pc.Vec3();
const edge2 = new pc.Vec3();
const normal = new pc.Vec3();

const localTransform = new pc.Mat4();
const worldTransform = new pc.Mat4();

const localCoord = new pc.Vec3();
const worldCoord = new pc.Vec3();

/**
 * 相交检测
 * @param meshInstance 三角形所在meshInstance
 * @param i 三角形索引
 * @param worldRay 世界射线
 * @param a 三角形a点坐标
 * @param b 三角形b点坐标
 * @param c 三角形c点坐标
 * @param point 交点坐标（不传则创建新的向量）
 * @returns 相交信息
 */
function checkIntersection(meshInstance: pc.MeshInstance, i: number, worldRay: pc.Ray, a: pc.Vec3, b: pc.Vec3, c: pc.Vec3, point?: pc.Vec3): intersect
{
    const backfaceCulling = (
        meshInstance.material.cull === pc.CULLFACE_BACK ||
        meshInstance.material.cull === pc.CULLFACE_FRONTANDBACK
    );

    let intersect;

    if ((meshInstance as any).skinInstance) {
        intersect = cast<Ray_EX>(worldRay).intersectTriangle(a, b, c, backfaceCulling, point);
    } else {
        intersect = cast<Ray_EX>(localRay).intersectTriangle(a, b, c, backfaceCulling, point);
    }

    if (intersect === null) return null;

    edge1.sub2(b, a);
    edge2.sub2(c, a);
    normal.cross(edge1, edge2);
    localCoord.copy(intersect);
    worldCoord.copy(intersect);

    if ((meshInstance as any).skinInstance) {
        localTransform.transformPoint(localCoord, localCoord);
    } else {
        worldTransform.transformPoint(worldCoord, worldCoord);
        worldTransform.transformPoint(a, a);
        worldTransform.transformPoint(b, b);
        worldTransform.transformPoint(c, c);
        worldTransform.transformVector(normal, normal);
        normal.normalize();
    }

    distance.sub2(worldCoord, worldRay.origin);

    return {
        index: i,
        distance: distance.length(),
        point: worldCoord.clone(),
        localPoint: localCoord.clone(),
        normal: normal.clone(),
        vertices: [a.clone(), b.clone(), c.clone()],
        meshInstance: meshInstance
    };
}

@extendClass("MeshInstance")
export class MeshInstance_EX extends pc.MeshInstance
{
    /**
     * 检测射线与此meshInstance的交点
     * @param worldRay 要求交的射线
     * @param intersects 交点集合（不传则创建新的数组）
     * @returns 交点集合
     */
    intersectsRay(worldRay: pc.Ray, intersects?: Array<intersect>): Array<intersect>
    {
        aabb.copy(this.aabb);
        if (aabb.intersectsRay(worldRay) === false) return null;

        const vertexBuffer = this.mesh.vertexBuffer;
        const indexBuffer = this.mesh.indexBuffer[0];
        const base = this.mesh.primitive[0].base;
        const count = this.mesh.primitive[0].count;
        const dataF = new Float32Array(vertexBuffer.lock());
        const data8 = new Uint8Array(vertexBuffer.lock());
        const indices = (indexBuffer as any).bytesPerIndex === 2 ? new Uint16Array(indexBuffer.lock()) : new Uint32Array(indexBuffer.lock());
        const elems = (vertexBuffer as any).format.elements;
        const numVerts = (vertexBuffer as any).numVertices;
        const vertSize = (vertexBuffer as any).format.size;
        let i, j, k, index;

        let offsetP = 0;
        let offsetI = 0;
        let offsetW = 0;
        let intersect = null;

        for (i = 0; i < elems.length; i++) {
            if (elems[i].name === pc.SEMANTIC_POSITION) {
                offsetP = elems[i].offset;
            } else if (elems[i].name === pc.SEMANTIC_BLENDINDICES) {
                offsetI = elems[i].offset;
            } else if (elems[i].name === pc.SEMANTIC_BLENDWEIGHT) {
                offsetW = elems[i].offset;
            }
        }

        const offsetPF = offsetP / 4;
        const offsetWF = offsetW / 4;
        const vertSizeF = vertSize / 4;

        intersects = intersects ?? [];

        localRay.origin.copy(worldRay.origin);
        localRay.direction.copy(worldRay.direction);

        worldTransform.copy(this.node.getWorldTransform());
        localTransform.copy(worldTransform).invert();

        localTransform.transformPoint(localRay.origin, localRay.origin);
        localTransform.transformVector(localRay.direction, localRay.direction);


        if ((this as any).skinInstance) {
            let boneIndices = [0, 0, 0, 0];
            let boneWeights = [0, 0, 0, 0];
            let boneMatrices = (this as any).skinInstance.matrices;
            let boneWeightVertices = [new pc.Vec3(), new pc.Vec3(), new pc.Vec3(), new pc.Vec3()];

            for (i = base; i < base + count; i += 3) {
                for (j = 0; j < 3; j++) {

                    index = indices[i + j];

                    for (k = 0; k < 4; k++) {
                        boneIndices[k] = data8[index * vertSize + offsetI + k];
                        boneWeights[k] = dataF[index * vertSizeF + offsetPF + offsetWF + k];
                    }

                    index = index * vertSizeF + offsetPF;
                    points[j].set(dataF[index], dataF[index + 1], dataF[index + 2]);

                    for (k = 0; k < 4; k++) {
                        boneMatrices[boneIndices[k]].transformPoint(points[j], boneWeightVertices[k]);
                        boneWeightVertices[k].mulScalar(boneWeights[k]);
                    }

                    points[j].copy(boneWeightVertices[0]).add(boneWeightVertices[1]).add(boneWeightVertices[2]).add(boneWeightVertices[3]);
                }

                intersect = checkIntersection(this, i, worldRay, points[0], points[1], points[2]);

                if (intersect) {
                    intersects.push(intersect);
                }
            }

        } else {
            for (i = base; i < base + count; i += 3) {

                for (j = 0; j < 3; j++) {
                    index = indices[i + j] * vertSizeF + offsetPF;
                    points[j].set(dataF[index], dataF[index + 1], dataF[index + 2]);
                }

                intersect = checkIntersection(this, i, worldRay, points[0], points[1], points[2]);

                if (intersect) {
                    intersects.push(intersect);
                }
            }
        }

        vertexBuffer.unlock();
        indexBuffer.unlock();

        return intersects.length > 0 ? intersects : null;
    }
}