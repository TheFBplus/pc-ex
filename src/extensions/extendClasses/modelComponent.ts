import * as pc from "playcanvas";

import { MeshesRaycaster } from "../../classes/utils/meshesRaycaster";

declare module 'playcanvas' {
    export interface ModelComponent
    {
        /**
         * @description: 开启模型射线检测
         */
        useInput: boolean;

        /**
         * @description: 不加入射线检测的mesh
         */
        ignoreMeshes: Array<string>;

        /**
        * @description: 模型中用于检测的meshInstance
        */
        meshesToRaycast: Array<MeshInstance>;
    }
}

/**
 * @description: 开启模型射线检测
 */
Object.defineProperty(pc.ModelComponent.prototype, "useInput", {
    get: function ()
    {
        return this._useInput;
    },
    set: function (use: boolean)
    {
        const modelAsset = (pc as any).app.assets.get(this.asset);
        if (modelAsset) {
            if (!modelAsset.loaded) {
                modelAsset.on("load", () =>
                {
                    if (use)
                        MeshesRaycaster.getInstance().addModel(this);
                    else
                        MeshesRaycaster.getInstance().removeModel(this);

                    this._useInput = use;
                }, this);
            }
            else {
                if (use)
                    MeshesRaycaster.getInstance().addModel(this);
                else
                    MeshesRaycaster.getInstance().removeModel(this);

                this._useInput = use;
            }
        }
    },
    configurable: true
});

/**
 * @description: 不加入射线检测的mesh
 */
Object.defineProperty(pc.ModelComponent.prototype, "ignoreMeshes", {
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
 * @description: 模型中用于检测的meshInstance
 */
Object.defineProperty(pc.ModelComponent.prototype, "meshesToRaycast", {
    get: function ()
    {
        if (!this._meshesToRaycast)
            this._meshesToRaycast = [];

        if (this._meshesToRaycast.length <= 0) {
            this._meshesToRaycast = this.model.meshInstances;
        }

        return this._meshesToRaycast;
    },
    configurable: true
});