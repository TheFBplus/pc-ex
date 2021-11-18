import * as pc from "playcanvas";

export class MeshesRaycaster
{
    private static instance: MeshesRaycaster;

    private ray: pc.Ray;
    private app: pc.Application;
    private hasMove: boolean = false;
    private hasListener: boolean = false;
    private modelToRaycast: Set<pc.ModelComponent>;
    private defaultCamera: pc.CameraComponent;

    constructor()
    {
        this.ray = new pc.Ray();
        this.app = pc.Application.getApplication();
        this.modelToRaycast = new Set<pc.ModelComponent>();

        this.app.once("postrender", () =>
        {
            this.defaultCamera = this.app.root.findComponent("camera") as pc.CameraComponent;
        }, this);
    }

    public static getInstance()
    {
        if (!this.instance)
            this.instance = new MeshesRaycaster();

        return this.instance;
    }

    /**
       * Check if a string s is relative path.
       * ```ts
       * function getAverage(x, y) {
       *   return (x + y) / 2.0;
       * }
        * ```
       * @param model - The path to process.
    */
    public addModel(model: pc.ModelComponent): void
    {
        this.modelToRaycast.add(model);

        if (!this.hasListener && this.modelToRaycast.size >= 1) {
            this.addListener();
        }
    }

    public removeModel(model: pc.ModelComponent): void
    {
        this.modelToRaycast.delete(model);

        if (this.hasListener && this.modelToRaycast.size <= 0) {
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
        this.modelToRaycast.forEach((model) =>
        {
            if (!model.hasEvent("mousedown"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, model.meshesToRaycast);
            if (result) {
                model.fire("mousedown", { x: e.x, y: e.y, pos: result[0].point, model: model, meshInstance: result[0].meshInstance, event: e.event });
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
        this.modelToRaycast.forEach((model) =>
        {
            if (!model.hasEvent("click"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, model.meshesToRaycast);
            if (result) {
                model.fire("click", { x: e.x, y: e.y, pos: result[0].point, model: model, meshInstance: result[0].meshInstance, event: e.event });
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
        this.modelToRaycast.forEach((model) =>
        {
            if (!model.hasEvent("touchstart"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, model.meshesToRaycast);
            if (result) {
                model.fire("touchstart", { x: pos.x, y: pos.y, pos: result[0].point, model: model, meshInstance: result[0].meshInstance, event: e.event });
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
        this.modelToRaycast.forEach((model) =>
        {
            if (!model.hasEvent("click"))
                return;
            result = this.defaultCamera.raycastMeshInstances(this.ray, model.meshesToRaycast);
            if (result) {
                model.fire("click", { x: pos.x, y: pos.y, pos: result[0].point, model: model, meshInstance: result[0].meshInstance, event: e.event });
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
}