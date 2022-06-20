/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 14:55:21
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-20 14:03:30
 * @ 详情: 扩展Entity类
 */

import * as pc from "playcanvas";

import { extendClass } from "../../libs/libs/extend-decorator";

const _parentMat = new pc.Mat4();

@extendClass("Entity")
export class Entity_EX extends pc.Entity
{
    /**
     * 改变父节点并保持物体的transform
     * @param parent 父节点
     */
    reparentAndKeepTransform(parent: pc.Entity): void
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