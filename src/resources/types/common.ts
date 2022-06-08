/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-13 10:25:12
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-08 15:37:02
 * @ 详情: 通用类型和枚举
 */

export type PCNode = pc.Entity | pc.GraphNode; // 节点类型，在playcanvas中很多时候都是通用的，故此处合成一个类型
export type NodeCallback = (node: PCNode) => void; // 节点回调
export type ModelCallback = (model: pc.Model | pc.RenderComponent) => void; // 模型组件回调
export type MeshInstanceCallback = (meshInstance: pc.MeshInstance, index: number) => void; // meshInstance回调