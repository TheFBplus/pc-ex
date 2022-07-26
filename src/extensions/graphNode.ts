/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 14:55:21
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-26 17:55:30
 * @ 详情: 扩展GraphNode类
 */

import * as pc from "playcanvas";

import { extendClass } from "@/utils/helpers/extend-decorator";

const _parentMat = new pc.Mat4();

@extendClass(pc.GraphNode)
export class GraphNode_EX extends pc.GraphNode
{
    /**
     * 改变父节点并保持物体的transform
     * @param parent 父节点
     */
    reparentAndKeepTransform(parent: pc.GraphNode): void
    {
        // 记录transform
        let mat = this.getWorldTransform();
        _parentMat.copy(parent.getWorldTransform()).invert();
        _parentMat.mul(mat);
        // 改变父节点
        this.reparent(parent);
        // 重设transform
        this.setLocalPosition(_parentMat.getTranslation());
        this.getRotation().setFromMat4(_parentMat);
        this.setLocalScale(_parentMat.getScale());
    }
}