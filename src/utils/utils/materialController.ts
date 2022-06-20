/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-03-18 15:41:45
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-16 17:02:38
 * @ 详情: 批量控制材质
 */

import * as pc from "playcanvas";

import {
    MeshInstanceCallback, ModelCallback, NodeCallback, PCNode
} from "../../resources/types/common";

// 存储材质表，用于模型批量恢复
let meshMatMap: any = {};

/**
 * 递归处理实例上的所有子节点
 * @param entity 物体实例
 * @param [childEntityCallback] 节点回调
 */
function processDeep(entity: PCNode, childEntityCallback?: NodeCallback): void
{
    // 空值处理
    if (!entity || !childEntityCallback) { return; }

    // 递归处理子节点
    if (entity.children && entity.children.length > 0) {
        entity.children.forEach((child: PCNode) =>
        {
            processDeep(child, childEntityCallback);
        });
    }

    // 节点回调
    if (childEntityCallback) {
        childEntityCallback(entity);
    }
}

export class MaterialController
{
    /**
     * 递归处理实例上的所有模型和meshInstance
     * @param entity 物体实例
     * @param [childEntityCallback] 节点回调
     * @param [modelCallback] 模型回调
     * @param [meshInstanceCallback] meshInstance回调
     */
    public static processNodeDeep(entity: PCNode, childEntityCallback?: NodeCallback, modelCallback?: ModelCallback, meshInstanceCallback?: MeshInstanceCallback): void
    {
        processDeep(entity, node =>
        {
            const e = node as pc.Entity;
            const model = e.render || e.model?.model;

            // 节点回调
            if (childEntityCallback && e) {
                childEntityCallback(e);
            }

            // 模型回调
            if (modelCallback && model) {
                modelCallback(model);
            }

            // meshInstances回调
            if (meshInstanceCallback && model) {
                const meshInstances = model.meshInstances;
                meshInstances.forEach((mi: pc.MeshInstance, index: number) =>
                {
                    meshInstanceCallback(mi, index);
                });
            }
        });
    }

    /**
    * 递归设置所有节点的材质或添加batchGroup
    * @param entity 节点
    * @param mat 材质
    * @param [batchGroupId] batchGroup的Id
    */
    public static setMatsDeep(entity: PCNode, mat: pc.Material, batchGroupId?: string): void
    {
        MaterialController.processNodeDeep(entity, null,
            (model: any) =>
            {
                if (batchGroupId) {
                    model.batchGroupId = batchGroupId;
                }
            },
            meshInstance =>
            {
                meshInstance.material = mat;
            });
    }

    /**
    * 递归改变材质chunks或设置batchGroupId
    * @param entity 节点
    * @param chunks chunk描述
    * @param [batchGroupId] batchGroup的Id
    */
    public static setChunksDeep(entity: PCNode, chunks: any, batchGroupId?: string): void
    {
        // 遍历所有模型和材质
        MaterialController.processNodeDeep(entity, null,
            (model: any) =>
            {
                if (batchGroupId) {
                    model.batchGroupId = batchGroupId;
                }
            },
            meshInstance =>
            {
                Object.keys(chunks).forEach(key =>
                {
                    const material = meshInstance.material as pc.StandardMaterial;
                    material.chunks[key] = chunks[key];
                });
            });
    }

    /**
    * 开关模型网格显示模式
    * @param entity 节点
    * @param state 启用状态
    */
    public static toggleWireFrame(entity: PCNode, state: boolean): void
    {
        MaterialController.processNodeDeep(entity, null, model =>
        {
            if (model instanceof pc.Model) {
                if (state) {
                    model.generateWireframe();
                }
                model.meshInstances.forEach(mi =>
                {
                    mi.renderStyle = state ? pc.RENDERSTYLE_WIREFRAME : pc.RENDERSTYLE_SOLID;
                });
            }
            else {
                model.renderStyle = state ? pc.RENDERSTYLE_WIREFRAME : pc.RENDERSTYLE_SOLID;
            }
        });
    }

    /**
    * 保存所有原有材质
    * @param entity 节点
    */
    public static saveAllMats(entity: PCNode): void
    {
        meshMatMap = {};
        MaterialController.processNodeDeep(entity, null, null, (mi: any, index) =>
        {
            meshMatMap[mi.node.getGuid() + "_" + index] = mi.material;
        });
    }

    /**
    * 尝试恢复所有材质
    * @param entity 节点
    */
    public static recoverAllMats(entity: PCNode): void
    {
        if (Object.keys(meshMatMap).length <= 0)
            return;
        MaterialController.processNodeDeep(entity, null, null, (mi: any, index) =>
        {
            const id = mi.node.getGuid() + "_" + index;
            if (meshMatMap[id]) {
                mi.material = meshMatMap[id];
            }
        });
    }
}