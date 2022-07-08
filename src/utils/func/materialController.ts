/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-03-18 15:41:45
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 16:52:15
 * @ 详情: 批量控制材质
 */

import * as pc from "playcanvas";

// 存储材质表，用于模型批量恢复
let meshMatMap: any = {};

/**
 * 递归处理实例上的所有子节点
 * @param node 物体实例
 * @param [childNodeCallback] 节点回调
 */
function processDeep(node: pc.Entity | pc.GraphNode, childNodeCallback?: (childNode: pc.Entity | pc.GraphNode) => void): void
{
    // 空值处理
    if (!node || !childNodeCallback) { return; }

    // 递归处理子节点
    if (node.children && node.children.length > 0) {
        node.children.forEach((child: pc.Entity | pc.GraphNode) =>
        {
            processDeep(child, childNodeCallback);
        });
    }

    // 节点回调
    if (childNodeCallback) {
        childNodeCallback(node);
    }
}

export class MaterialController
{
    /**
     * 递归处理实例上的所有模型和meshInstance
     * @param node 物体实例
     * @param [childNodeCallback] 节点回调
     * @param [modelCallback] 模型回调
     * @param [meshInstanceCallback] meshInstance回调
     */
    public static processNodeDeep(node: pc.Entity | pc.GraphNode, childNodeCallback?: (childNode: pc.Entity | pc.GraphNode) => void, modelCallback?: (model: pc.ModelComponent | pc.RenderComponent) => void, meshInstanceCallback?: (meshInstance: pc.MeshInstance, index: number) => void): void
    {
        processDeep(node, childNode =>
        {
            const childEntity = childNode as pc.Entity;
            let model: pc.RenderComponent | pc.ModelComponent;
            if (childEntity.model) { model = childEntity.model; }
            else {
                model = childEntity.render as pc.RenderComponent;
            }
            if (!model) { return; }

            // 节点回调
            if (childNodeCallback && childEntity) {
                childNodeCallback(childEntity);
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
    * @param node 节点
    * @param mat 材质
    * @param [batchGroupId] batchGroup的Id
    */
    public static setMatsDeep(node: pc.Entity | pc.GraphNode, mat: pc.Material, batchGroupId?: string): void
    {
        MaterialController.processNodeDeep(node, undefined,
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
    * @param node 节点
    * @param chunks chunk描述
    * @param [batchGroupId] batchGroup的Id
    */
    public static setChunksDeep(node: pc.Entity | pc.GraphNode, chunks: { [index: string]: string }, batchGroupId?: string): void
    {
        // 遍历所有模型和材质
        MaterialController.processNodeDeep(node, undefined,
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
    * @param node 节点
    * @param state 启用状态
    */
    public static toggleWireFrame(node: pc.Entity | pc.GraphNode, state: boolean): void
    {
        MaterialController.processNodeDeep(node, undefined, model =>
        {
            if (model instanceof pc.ModelComponent) {
                if (state) {
                    model.model.generateWireframe();
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
    * @param node 节点
    */
    public static saveAllMats(node: pc.Entity | pc.GraphNode): void
    {
        meshMatMap = {};
        MaterialController.processNodeDeep(node, undefined, undefined, (mi: any, index) =>
        {
            meshMatMap[mi.node.getGuid() + "_" + index] = mi.material;
        });
    }

    /**
    * 尝试恢复所有材质
    * @param node 节点
    */
    public static recoverAllMats(node: pc.Entity | pc.GraphNode): void
    {
        if (Object.keys(meshMatMap).length <= 0)
            return;
        MaterialController.processNodeDeep(node, undefined, undefined, (mi: any, index) =>
        {
            const id = mi.node.getGuid() + "_" + index;
            if (meshMatMap[id]) {
                mi.material = meshMatMap[id];
            }
        });
    }
}