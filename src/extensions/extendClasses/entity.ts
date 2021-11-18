import * as pc from "playcanvas";

import { MeshesRaycaster } from "../../classes/utils/meshesRaycaster";

let _parentMat = new pc.Mat4();

declare module 'playcanvas' {
    export interface Entity
    {
        /**
         * @description: 改变父节点并保持物体的transform
         * @param {Entity} parent 父节点
         */
        reparentAndKeepTransform(parent: Entity): void;

        /**
        * @description: 开启模型射线检测
        */
        useInput: boolean;

        /**
         * @description: 不加入射线检测的mesh
         */
        ignoreMeshes: Array<string>;

        /**
        * @description: 模型改变标识
        */
        changeFlag: boolean;

        /**
        * @description: 模型中用于检测的meshInstance
        */
        meshesToRaycast: Array<MeshInstance>;
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

/**
 * @description: 开启模型射线检测
 */
Object.defineProperty(pc.Entity.prototype, "useInput", {
    get: function ()
    {
        return this._useInput;
    },
    set: function (use: boolean)
    {
        if (use)
            MeshesRaycaster.getInstance().addModel(this);
        else
            MeshesRaycaster.getInstance().removeModel(this);

        this._useInput = use;
    },
    configurable: true
});

/**
 * @description: 不加入射线检测的mesh
 */
Object.defineProperty(pc.Entity.prototype, "ignoreMeshes", {
    set: function (ignoreMeshes: Array<string>)
    {
        this._meshesToRaycast = [];
        let modelAsset = (pc as any).app.assets.get(this.asset);
        if (modelAsset) {
            if (!modelAsset.loaded) {
                modelAsset.on("load", () =>
                {
                    this.model.meshInstances.forEach((mesh: pc.MeshInstance) =>
                    {
                        if (ignoreMeshes.indexOf(mesh.node.name) >= 0) {
                            return;
                        }
                        this._meshesToRaycast.push(mesh);
                    });
                }, this);
            }
            else {
                this.model.meshInstances.forEach((mesh: pc.MeshInstance) =>
                {
                    if (ignoreMeshes.indexOf(mesh.node.name) >= 0) {
                        return;
                    }
                    this._meshesToRaycast.push(mesh);
                });
            }
        }
    },
    configurable: true
});

/**
 * @description: 开启模型射线检测
 */
Object.defineProperty(pc.Entity.prototype, "changeFlag", {
    get: function ()
    {
        return this._changeFlag;
    },
    set: function (flag: boolean)
    {
        this._changeFlag = flag;
    },
    configurable: true
});

/**
 * @description: 模型中用于检测的meshInstance
 */
Object.defineProperty(pc.Entity.prototype, "meshesToRaycast", {
    get: function ()
    {
        if (!this._meshesToRaycast)
            this._meshesToRaycast = [];

        // 若模型改变则尝试重新获取mesh
        if (this._meshesToRaycast.length <= 0 || this._changeFlag) {
            this._meshesToRaycast = getMeshInstances(this);
            this._changeFlag = false;
        }

        return this._meshesToRaycast;
    },
    configurable: true
});

// 递归获取当前物体上的MeshInstances
function getMeshInstances(entity: pc.Entity)
{
    let meshInstances: any = [];
    if (entity.children.length >= 1) {
        entity.children.forEach(child =>
        {
            meshInstances = meshInstances.concat(getMeshInstances(child as pc.Entity));
        });
    }

    if (entity.model) {
        meshInstances = meshInstances.concat(entity.model.model.meshInstances);
    }
    else if (entity.render) {
        meshInstances = meshInstances.concat(entity.render.meshInstances);
    }

    return meshInstances;
}
