import * as pc from "playcanvas";

let _parentMat = new pc.Mat4();

declare module 'playcanvas' {
    export interface Entity
    {
        /**
         * @description: 改变父节点并保持物体的transform
         * @param {Entity} parent 父节点
         */
        reparentAndKeepTransform(parent: Entity): void;
    }
}

/**
 * @description: 改变父节点并保持物体的transform
 * @param {Entity} parent 父节点
 */
pc.Entity.prototype.reparentAndKeepTransform = function (parent: pc.Entity): void
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
