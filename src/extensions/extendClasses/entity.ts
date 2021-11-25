import * as pc from "playcanvas";

import { extendClass, instancePrpt } from "../../classes/utils/extend-decorator";
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
        * @description: 开启网格射线检测
        */
        useInput: boolean;

        /**
        * @description: 用于检测的meshInstance
        */
        meshesToRaycast: Array<MeshInstance>;

        /**
         * @description: 不加入射线检测的mesh名称集合
         */
        ignoreMeshes: Array<string>;

        /**
        * @description: 返回节点的深度
        */
        resultNodeDepth: number;

        /**
        * @description: 改变标识
        */
        changeFlag: boolean;
    }
}

@extendClass("Entity")
export class Entity_EX extends pc.Entity
{
    // 开关射线检测
    @instancePrpt({ extendClassName: "Entity", defaultValue: false })
    private _useInput: boolean = false;
    // 用于射线检测的meshInstance
    @instancePrpt({ extendClassName: "Entity", defaultValue: [] })
    private _meshesToRaycast: Array<pc.MeshInstance> = [];
    // 忽略射线检测的meshInstance
    @instancePrpt({ extendClassName: "Entity", defaultValue: [] })
    private _ignoreMeshes: Array<string> = [];
    // 返回节点的深度
    @instancePrpt({ extendClassName: "Entity" })
    private _resultNodeDepth: number;
    // 模型改变标志
    @instancePrpt({ extendClassName: "Entity", defaultValue: false })
    private _changeFlag: boolean = false;

    // 开关射线检测
    get useInput()
    {
        return this._useInput;
    }
    set useInput(use: boolean)
    {
        if (use)
            MeshesRaycaster.getInstance().addNode(this);
        else
            MeshesRaycaster.getInstance().removeNode(this);

        this._useInput = use;
    }

    // 用于射线检测的meshInstance
    get meshesToRaycast()
    {
        // 若模型改变则尝试重新获取mesh
        if (this._meshesToRaycast.length <= 0 || this.changeFlag) {
            this._meshesToRaycast = getMeshInstances(this);
            this.changeFlag = false;
        }

        return this._meshesToRaycast;
    }

    // 忽略射线检测的meshInstance
    set ignoreMeshes(ignoreNames: Array<string>)
    {
        let meshesToRaycast: Array<pc.MeshInstance> = [];
        this.meshesToRaycast.forEach(mi =>
        {
            if (ignoreNames.indexOf(mi.node.name) <= -1) {
                meshesToRaycast.push(mi);
            }
        });
        this._meshesToRaycast = meshesToRaycast;
        this._ignoreMeshes = ignoreNames;
    }
    get ignoreMeshes()
    {
        return this._ignoreMeshes;
    }

    set resultNodeDepth(depth: number)
    {
        this._resultNodeDepth = depth;
    }
    get resultNodeDepth()
    {
        return this._resultNodeDepth;
    }

    // 模型改变标志
    set changeFlag(flag: boolean)
    {
        this._changeFlag = flag;
    }
    get changeFlag()
    {
        return this._changeFlag;
    }

    /**
    * @description: 改变父节点并保持物体的transform
    * @param {Entity} parent 父节点
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

// 递归获取当前节点上所有的MeshInstances
function getMeshInstances(node: pc.GraphNode)
{
    let meshInstances: any = [];
    if (node.children.length >= 1) {
        node.children.forEach(child =>
        {
            meshInstances = meshInstances.concat(getMeshInstances(child));
        });
    }

    let entity = node as pc.Entity;
    if (entity.model) {
        meshInstances = meshInstances.concat(entity.model.model.meshInstances);
    }
    else if (entity.render) {
        meshInstances = meshInstances.concat(entity.render.meshInstances);
    }

    return meshInstances;
}