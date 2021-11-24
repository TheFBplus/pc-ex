import * as pc from "playcanvas";

export class MeshesRaycaster
{
    // 单例
    private static instance: MeshesRaycaster;

    private ray: pc.Ray;
    private app: pc.Application;
    private hasMove: boolean = false;
    private hasListener: boolean = false;
    private nodeToRaycast: Set<pc.GraphNode>;
    private defaultCamera: pc.CameraComponent;

    constructor()
    {
        this.ray = new pc.Ray();
        this.app = pc.Application.getApplication();
        this.nodeToRaycast = new Set<pc.GraphNode>();

        // 获得默认相机
        this.app.once("postrender", () =>
        {
            this.defaultCamera = this.app.root.findComponent("camera") as pc.CameraComponent;
        }, this);
    }

    // 获得单例
    public static getInstance()
    {
        if (!this.instance)
            this.instance = new MeshesRaycaster();

        return this.instance;
    }

    // 添加node
    public addNode(node: pc.GraphNode): void
    {
        this.nodeToRaycast.add(node);

        if (!this.hasListener && this.nodeToRaycast.size >= 1) {
            this.addListener();
        }
    }

    // 移除node
    public removeNode(node: pc.GraphNode): void
    {
        this.nodeToRaycast.delete(node);

        if (this.hasListener && this.nodeToRaycast.size <= 0) {
            this.removeListener();
        }
    }

    private onMouseDown(e: any)
    {
        this.hasMove = false;
        this.defaultCamera.screenToWorld((window as any).isForceLandscape ? e.y : e.x, (window as any).isForceLandscape ? -e.x : e.y, this.defaultCamera.farClip, this.ray.direction);
        this.ray.origin.copy(this.defaultCamera.entity.getPosition());
        this.ray.direction.sub(this.ray.origin).normalize();

        let result;
        this.nodeToRaycast.forEach((node) =>
        {
            if (!node.hasEvent("mousedown"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, (node as pc.Entity).meshesToRaycast);
            if (result) {
                const meshInstance = result[0].meshInstance;
                node.fire("mousedown", { x: e.x, y: e.y, pos: result[0].point, node: this.getNodeOfDepth(meshInstance.node, (node as pc.Entity).resultNodeDepth), meshInstance: meshInstance, event: e.event });
            }
        });
    }

    private onMouseMove(e: any)
    {
        this.hasMove = true;
    }

    private onMouseUp(e: any)
    {
        if (this.hasMove)
            return;

        this.defaultCamera.screenToWorld((window as any).isForceLandscape ? e.y : e.x, (window as any).isForceLandscape ? -e.x : e.y, this.defaultCamera.farClip, this.ray.direction);
        this.ray.origin.copy(this.defaultCamera.entity.getPosition());
        this.ray.direction.sub(this.ray.origin).normalize();

        let result;
        this.nodeToRaycast.forEach((node) =>
        {
            if (!node.hasEvent("click"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, (node as pc.Entity).meshesToRaycast);
            if (result) {
                const meshInstance = result[0].meshInstance;
                node.fire("click", { x: e.x, y: e.y, pos: result[0].point, node: this.getNodeOfDepth(meshInstance.node, (node as pc.Entity).resultNodeDepth), meshInstance: meshInstance, event: e.event });
            }
        });
    }

    private onTouchStart(e: any)
    {
        this.hasMove = false;
        let pos = e.touches[0];
        this.defaultCamera.screenToWorld((window as any).isForceLandscape ? pos.y : pos.x, (window as any).isForceLandscape ? -pos.x : pos.y, this.defaultCamera.farClip, this.ray.direction);
        this.ray.origin.copy(this.defaultCamera.entity.getPosition());
        this.ray.direction.sub(this.ray.origin).normalize();

        let result;
        this.nodeToRaycast.forEach((node) =>
        {
            if (!node.hasEvent("touchstart"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, (node as pc.Entity).meshesToRaycast);
            if (result) {
                const meshInstance = result[0].meshInstance;
                node.fire("touchstart", { x: pos.x, y: pos.y, pos: result[0].point, node: this.getNodeOfDepth(meshInstance.node, (node as pc.Entity).resultNodeDepth), meshInstance: meshInstance, event: e.event });
            }
        });
    }

    private onTouchMove(e: any)
    {
        this.hasMove = true;
    }

    private onTouchEnd(e: any)
    {
        if (this.hasMove)
            return;

        let pos = e.changedTouches[0];
        this.defaultCamera.screenToWorld((window as any).isForceLandscape ? pos.y : pos.x, (window as any).isForceLandscape ? -pos.x : pos.y, this.defaultCamera.farClip, this.ray.direction);
        this.ray.origin.copy(this.defaultCamera.entity.getPosition());
        this.ray.direction.sub(this.ray.origin).normalize();

        let result;
        this.nodeToRaycast.forEach((node) =>
        {
            if (!node.hasEvent("click"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, (node as pc.Entity).meshesToRaycast);
            if (result) {
                const meshInstance = result[0].meshInstance;
                node.fire("click", { x: pos.x, y: pos.y, pos: result[0].point, node: this.getNodeOfDepth(meshInstance.node, (node as pc.Entity).resultNodeDepth), meshInstance: meshInstance, event: e.event });
            }
        });
    }

    private addListener()
    {
        if (pc.platform.touch) {
            this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
            this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
            this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
            // this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchEnd, this);
        } else {
            this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
            this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
            this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
        }
        this.hasListener = true;
    }

    private removeListener()
    {
        if (pc.platform.touch) {
            this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
            this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
            this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
            // this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchEnd, this);
        } else {
            this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
            this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
            this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
        }
        this.hasListener = false;
    }

    // 获得对应深度的node
    private getNodeOfDepth(node: pc.GraphNode, depth: number = null): pc.GraphNode
    {
        // 若未传入深度，则直接返回节点
        if (depth == null) {
            return node;
        }

        // 对比当前节点深度与目标深度，若大于目标深度，则递归向上获取节点
        if (node.graphDepth > depth && node.parent) {
            return this.getNodeOfDepth(node.parent, depth);
        }

        // 若小于等于目标深度，则直接返回节点
        return node;
    }
}