/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 14:55:21
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-27 11:07:15
 * @ 详情: 扩展Entity类
 */

import * as pc from "playcanvas";

import { ScriptTypeBase } from "@/utils/helpers/create-script-decorator";
import { extendClass } from "@/utils/helpers/extend-decorator";

const _parentMat = new pc.Mat4();

@extendClass(pc.Entity)
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

    /**
     * 根据脚本类型获取挂载在entity上的脚本
     * @param scriptType 脚本类型
     * @returns 脚本实例
     */
    getScript<T extends typeof pc.ScriptType | typeof ScriptTypeBase>(scriptType: T): InstanceType<T>
    {
        if ((scriptType as typeof ScriptTypeBase).scriptName) {
            // 脚本是scriptTypeBase
            return this?.script.get((scriptType as typeof ScriptTypeBase).scriptName) as InstanceType<T>;
        }
        else {
            // 脚本是pc.scriptType
            return this?.script.get(scriptType as typeof pc.ScriptType) as InstanceType<T>;
        }
    }
}   