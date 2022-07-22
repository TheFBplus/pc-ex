/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 17:03:58
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-22 14:02:40
 * @ 详情: 观测相机
 */

import * as pc from "playcanvas";

import { Tool } from "@/utils/helpers/toolBase";
import { tool, useGlobal } from "@/utils/helpers/useToolHelper";

/**
 * 可用输入设备
 */
type AvailableDevices = "mouse" | "touchScreen";
/**
 * 可用输入监听器
 */
type AvailableInputHandler = OrbitCameraInput_Mouse | OrbitCameraInput_TouchScreen;
/**
 * 观测相机选项
 */
export interface OrbitCameraOptions
{
    mainCamra?: pc.CameraComponent;
    device?: AvailableDevices;
    orbitSensitivity?: number;
    distanceSensitivity?: number;
    inertiaFactor?: number;
    pitchMin?: number;
    pitchMax?: number;
    distanceMin?: number;
    distanceMax?: number;
    rotateCondition?: () => boolean;
    distanceCondition?: () => boolean;
    panCondition?: () => boolean;
    lookCondition?: () => boolean;
};
/**
 * 观测相机操作选项
 */
export interface OrbitCameraInputOption
{
    orbitCamera: OrbitCamera;
    orbitSensitivity?: number;
    distanceSensitivity?: number;
};

@tool("OrbitCamera")
export class OrbitCamera extends Tool<OrbitCameraOptions, any>
{
    // 默认选项
    protected toolOptionsDefault: OrbitCameraOptions = {
        mainCamra: this.app.systems.camera.cameras[0],
        device: this.app.touch ? "touchScreen" : "mouse",
        orbitSensitivity: 0.25,
        distanceSensitivity: 1.5,
        inertiaFactor: 0,
        pitchMin: -90,
        pitchMax: 90,
        distanceMin: -Infinity,
        distanceMax: Infinity,
        rotateCondition: null,
        distanceCondition: null,
        panCondition: null,
        lookCondition: null
    }

    public isRotating: boolean;
    public isPaning: boolean;
    public isLooking: boolean;

    private _yaw: number;
    private targetYaw: number;
    private _pitch: number;
    private targetPitch: number;
    private _distance: number;
    private targetDistance: number;

    private inputHandler: AvailableInputHandler;

    private _pivotPoint: pc.Vec3;
    private cameraForward: pc.Vec3;
    private yawOffset: pc.Quat;
    private quatWithoutYaw: pc.Quat;
    private modelsAABB: pc.BoundingBox;

    /**
     * 创建观测相机
     * @param options 观测相机选项
     */
    constructor(options?: OrbitCameraOptions)
    {
        super();

        this.setOptions(options);

        this._pivotPoint = new pc.Vec3();
        this.yawOffset = new pc.Quat();
        this.quatWithoutYaw = new pc.Quat();
        this.modelsAABB = new pc.BoundingBox();
        this.cameraForward = new pc.Vec3();

        const cameraQuat = this.toolOptions.mainCamra.entity.getRotation();
        this._yaw = this.calcYaw(cameraQuat);
        this._pitch = this.calcPitch(cameraQuat, this._yaw);
        this.toolOptions.mainCamra.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

        this.targetYaw = this._yaw;
        this.targetPitch = this._pitch;
        this.targetDistance = this._distance = this.toolOptions.mainCamra.entity.getPosition().length();

        this.checkAspectRatio();
    }

    /**
     * 航向角
     */
    public get yaw(): number
    {
        return this.targetYaw;
    }
    public set yaw(value: number)
    {
        this.targetYaw = value;

        var diff = this.targetYaw - this._yaw;
        var reminder = diff % 360;
        if (reminder > 180) {
            this.targetYaw = this._yaw - (360 - reminder);
        } else if (reminder < -180) {
            this.targetYaw = this._yaw + (360 + reminder);
        } else {
            this.targetYaw = this._yaw + reminder;
        }
    }

    /**
     * 俯视角
     */
    public get pitch(): number
    {
        return this.targetPitch;
    }
    public set pitch(value: number)
    {
        this.targetPitch = pc.math.clamp(value, this.toolOptions.pitchMin, this.toolOptions.pitchMax);
    }

    /**
     * 离焦点的距离
     */
    public get distance(): number
    {
        return this.targetDistance;
    }
    public set distance(value: number)
    {
        this.targetDistance = pc.math.clamp(value, this.toolOptions.distanceMin, this.toolOptions.distanceMax);
    }

    /**
     * 焦点坐标
     */
    public get pivotPoint(): pc.Vec3
    {
        return this._pivotPoint;
    }
    public set pivotPoint(value: pc.Vec3)
    {
        this._pivotPoint.copy(value);
    }

    /**
     * 输入设备
     */
    public get device(): AvailableDevices
    {
        return this.toolOptions.device;
    }
    public set device(value: AvailableDevices)
    {
        if (this.toolOptions.device === value) {
            return;
        }

        if (this.inputHandler) {
            this.inputHandler.enabled = false;
        }

        if (value === "mouse") {
            this.inputHandler = useGlobal("OrbitCameraInput_Mouse", {
                orbitCamera: this,
                orbitSensitivity: this.toolOptions.orbitSensitivity,
                distanceSensitivity: this.toolOptions.distanceSensitivity
            });
        }
        else if (value === "touchScreen") {
            this.inputHandler = useGlobal("OrbitCameraInput_TouchScreen", {
                orbitCamera: this,
                orbitSensitivity: this.toolOptions.orbitSensitivity,
                distanceSensitivity: this.toolOptions.distanceSensitivity
            });
        }

        this.toolOptions.device = value;
    }

    /**
     * 聚焦
     * @param entity 聚焦物体
     */
    public focus(entity: pc.Entity | pc.Entity[]): void
    {
        this.buildAABB(entity, 0);

        var halfExtents = this.modelsAABB.halfExtents;

        var distance = Math.max(halfExtents.x, Math.max(halfExtents.y, halfExtents.z));
        distance = (distance / Math.tan(0.5 * this.toolOptions.mainCamra.fov * pc.math.DEG_TO_RAD));
        distance = (distance * 2);

        this.targetDistance = distance;

        this.removeInertia();

        this.pivotPoint.copy(this.modelsAABB.center);
    }

    /**
     * 结束目标缓动
     */
    public stopInertia()
    {
        this.targetYaw = this._yaw;
        this.targetPitch = this._pitch;
        this.targetDistance = this._distance;
    }

    /**
     * 更新相机
     * @param dt 帧间隔
     */
    private update(dt: number): void
    {
        const t = this.toolOptions.inertiaFactor === 0 ? 1 : Math.min(dt / this.toolOptions.inertiaFactor, 1);
        this._distance = pc.math.lerp(this._distance, this.targetDistance, t);
        this._yaw = pc.math.lerp(this._yaw, this.targetYaw, t);
        this._pitch = pc.math.lerp(this._pitch, this.targetPitch, t);

        this.updatePosition();
    }

    /**
     * 更新相机位置
     */
    private updatePosition(): void
    {
        const cameraEntity = this.toolOptions.mainCamra.entity;
        cameraEntity.setLocalEulerAngles(this._pitch, this._yaw, 0);

        const position = cameraEntity.getPosition();
        if (this.isLooking) {
            this.pivotPoint.add2(position, this.cameraForward.copy(cameraEntity.forward).mulScalar(this._distance));
        }

        position.copy(cameraEntity.forward);
        position.mulScalar(-this._distance);
        position.add(this.pivotPoint);
        cameraEntity.setPosition(position);
    }

    /**
     * 根据宽高设置fov模式
     */
    private checkAspectRatio(): void
    {
        var height = this.app.graphicsDevice.height;
        var width = this.app.graphicsDevice.width;

        this.toolOptions.mainCamra.horizontalFov = height > width;
    }

    /**
     * 清除缓动
     */
    private removeInertia(): void
    {
        this._yaw = this.targetYaw;
        this._pitch = this.targetPitch;
        this._distance = this.targetDistance;
    }

    /**
     * 构建AABB
     * @param entity 选中模型
     * @param modelsAdded 已添加模型数量
     * @returns 模型添加的数量
     */
    private buildAABB(entity: (pc.Entity | pc.GraphNode) | (pc.Entity | pc.GraphNode)[], modelsAdded: number): number
    {
        let i = 0, j = 0, meshInstances: pc.MeshInstance[];

        if (Array.isArray(entity)) {
            entity.forEach(e =>
            {
                modelsAdded += this.buildAABB(e, modelsAdded);
            });
            return;
        }

        if (entity instanceof pc.Entity) {
            const allMeshInstances = [];
            const renders = entity.findComponents("render") as pc.RenderComponent[];

            for (i = 0; i < renders.length; ++i) {
                meshInstances = renders[i].meshInstances;
                for (j = 0; j < meshInstances.length; j++) {
                    allMeshInstances.push(meshInstances[j]);
                }
            }

            const models = entity.findComponents("model") as pc.ModelComponent[];
            for (i = 0; i < models.length; ++i) {
                meshInstances = models[i].meshInstances;
                for (j = 0; j < meshInstances.length; j++) {
                    allMeshInstances.push(meshInstances[j]);
                }
            }

            for (i = 0; i < allMeshInstances.length; i++) {
                if (modelsAdded === 0) {
                    this.modelsAABB.copy(allMeshInstances[i].aabb);
                } else {
                    this.modelsAABB.add(allMeshInstances[i].aabb);
                }

                modelsAdded += 1;
            }
        }

        for (i = 0; i < entity.children.length; ++i) {
            modelsAdded += this.buildAABB(entity.children[i], modelsAdded);
        }

        return modelsAdded;
    }

    /**
     * 根据旋转获得航向角
     * @param quat 旋转
     * @returns 航向角
     */
    private calcYaw(quat: pc.Quat): number
    {
        const transformedForward = new pc.Vec3();
        quat.transformVector(pc.Vec3.FORWARD, transformedForward);

        return Math.atan2(-transformedForward.x, -transformedForward.z) * pc.math.RAD_TO_DEG;
    }

    /**
     * 根据旋转和航向角获得俯视角
     * @param quat 旋转
     * @param yaw 航向角
     * @returns 俯视角
     */
    private calcPitch(quat: pc.Quat, yaw: number): number
    {
        const quatWithoutYaw = this.quatWithoutYaw;
        const yawOffset = this.yawOffset;

        yawOffset.setFromEulerAngles(0, -yaw, 0);
        quatWithoutYaw.mul2(yawOffset, quat);

        const transformedForward = new pc.Vec3();

        quatWithoutYaw.transformVector(pc.Vec3.FORWARD, transformedForward);

        return Math.atan2(transformedForward.y, -transformedForward.z) * pc.math.RAD_TO_DEG;
    }

    protected override onEnable(): void
    {
        if (this.device === "mouse") {
            this.inputHandler = useGlobal("OrbitCameraInput_Mouse", {
                orbitCamera: this,
                orbitSensitivity: this.toolOptions.orbitSensitivity,
                distanceSensitivity: this.toolOptions.distanceSensitivity
            });
        }
        else if (this.device === "touchScreen") {
            this.inputHandler = useGlobal("OrbitCameraInput_TouchScreen", {
                orbitCamera: this,
                orbitSensitivity: this.toolOptions.orbitSensitivity,
                distanceSensitivity: this.toolOptions.distanceSensitivity
            });
        }

        window.addEventListener("resize", this.checkAspectRatio.bind(this));
        this.app.on("update", this.update, this); // 开始刷新
        this.app.mouse.disableContextMenu(); // 禁止右键菜单
    }

    protected override onDisable(): void
    {
        if (this.inputHandler) {
            this.inputHandler.enabled = false;
        }

        window.removeEventListener("resize", this.checkAspectRatio.bind(this));
        this.app.off("update", this.update, this); // 停止刷新
        this.app.mouse.enableContextMenu();  // 恢复右键菜单
    }
}


/**
 * 观测相机鼠标输入
 */
@tool("OrbitCameraInput_Mouse")
export class OrbitCameraInput_Mouse extends Tool<OrbitCameraInputOption, any>
{
    // 默认选项
    protected toolOptionsDefault: OrbitCameraInputOption = {
        orbitCamera: null,
        orbitSensitivity: 0.25,
        distanceSensitivity: 1.5
    };

    private isRotateButtonDown: boolean;
    private isLookButtonDown: boolean;
    private isPanButtonDown: boolean;

    private fromWorldPoint: pc.Vec3;
    private toWorldPoint: pc.Vec3;
    private worldDiff: pc.Vec3;
    private lastPoint: pc.Vec2;

    constructor(options: OrbitCameraInputOption)
    {
        super();

        if (!this.app.mouse) {
            console.error("鼠标设备不存在，请更改输入设备");
            return;
        }

        this.setOptions(options);

        this.fromWorldPoint = new pc.Vec3();
        this.toWorldPoint = new pc.Vec3();
        this.worldDiff = new pc.Vec3();
        this.lastPoint = new pc.Vec2();
    }

    /**
     * 鼠标按下事件监听
     * @param event 鼠标按下事件
     */
    private onMouseDown(event: pc.MouseEvent)
    {
        const orbitCamera = this.toolOptions.orbitCamera;
        const orbitCameraOptions = orbitCamera.toolOptions;
        switch (event.button) {
            case pc.MOUSEBUTTON_LEFT:
                if (!orbitCameraOptions.rotateCondition || orbitCameraOptions.rotateCondition()) {
                    orbitCamera.isRotating = true;
                    this.isRotateButtonDown = true;
                }
                break;
            case pc.MOUSEBUTTON_MIDDLE:
                if (!orbitCameraOptions.panCondition || orbitCameraOptions.panCondition()) {
                    orbitCamera.isPaning = true;
                    this.isPanButtonDown = true;
                }
                break;
            case pc.MOUSEBUTTON_RIGHT:
                if (!orbitCameraOptions.lookCondition || orbitCameraOptions.lookCondition()) {
                    this.isLookButtonDown = true;
                    orbitCamera.isLooking = true;
                }
                break;
        }
    }

    /**
     * 鼠标移动事件监听
     * @param event 鼠标移动事件
     */
    private onMouseMove(event: MouseEvent): void
    {
        const dx = event.x - this.lastPoint.x;
        const dy = event.y - this.lastPoint.y;
        if (this.isRotateButtonDown || this.isLookButtonDown) {
            this.toolOptions.orbitCamera.pitch -= dy * this.toolOptions.orbitSensitivity;
            this.toolOptions.orbitCamera.yaw -= dx * this.toolOptions.orbitSensitivity;
        } else if (this.isPanButtonDown) {
            this.pan(event);
        }

        this.lastPoint.set(event.x, event.y);
    }

    /**
     * 鼠标抬起事件监听
     * @param event 鼠标抬起事件
     */
    private onMouseUp(event: MouseEvent)
    {
        const orbitCamera = this.toolOptions.orbitCamera;
        switch (event.button) {
            case pc.MOUSEBUTTON_LEFT:
                orbitCamera.isRotating = false;
                this.isRotateButtonDown = false;
                break;
            case pc.MOUSEBUTTON_MIDDLE:
                orbitCamera.isPaning = false;
                this.isPanButtonDown = false;
                break;
            case pc.MOUSEBUTTON_RIGHT:
                this.isLookButtonDown = false;
                orbitCamera.isLooking = false;
                orbitCamera.stopInertia();
                break;
        }
    }

    /**
     * 鼠标滚轮事件监听
     * @param event 鼠标滚轮事件
     */
    private onMouseWheel(event: pc.MouseEvent): void
    {
        const orbitCamera = this.toolOptions.orbitCamera;
        const orbitCameraOptions = orbitCamera.toolOptions;
        if (!orbitCameraOptions.distanceCondition || orbitCameraOptions.distanceCondition()) {
            orbitCamera.distance += event.wheelDelta * this.toolOptions.distanceSensitivity * (orbitCamera.distance * 0.1);
        }
    }

    /**
     * 移动鼠标时平移相机视角
     * @param event 鼠标移动事件
     */
    private pan(event: { x: number, y: number }): void
    {
        const orbitCamera = this.toolOptions.orbitCamera;
        const camera = orbitCamera.toolOptions.mainCamra;
        camera.screenToWorld(event.x, event.y, orbitCamera.distance, this.fromWorldPoint);
        camera.screenToWorld(this.lastPoint.x, this.lastPoint.y, orbitCamera.distance, this.toWorldPoint);
        this.worldDiff.sub2(this.toWorldPoint, this.fromWorldPoint);
        orbitCamera.pivotPoint.add(this.worldDiff);
    }

    protected override onEnable(): void
    {
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
        window.addEventListener("mousemove", this.onMouseMove.bind(this));
        window.addEventListener("mouseup", this.onMouseUp.bind(this));
    }

    protected override onDisable(): void
    {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
        window.removeEventListener("mousemove", this.onMouseMove.bind(this));
        window.removeEventListener("mouseup", this.onMouseUp.bind(this));
    }
}


/**
 * 观测相机触摸屏输入
 */
@tool("OrbitCameraInput_TouchScreen")
export class OrbitCameraInput_TouchScreen extends Tool<OrbitCameraInputOption, any>
{
    // 默认选项
    protected toolOptionsDefault: OrbitCameraInputOption = {
        orbitCamera: null,
        orbitSensitivity: 0.25,
        distanceSensitivity: 1.5
    };

    private fromWorldPoint: pc.Vec3;
    private toWorldPoint: pc.Vec3;
    private worldDiff: pc.Vec3;
    private pinchMidPoint: pc.Vec2;
    private lastTouchPoint: pc.Vec2;
    private lastPinchMidPoint: pc.Vec2;
    private lastPinchDistance: number;

    constructor(options: OrbitCameraInputOption)
    {
        super();

        if (!this.app.touch) {
            console.error("触屏设备不存在，请更改输入设备");
            return;
        }

        this.setOptions(options);

        this.fromWorldPoint = new pc.Vec3();
        this.toWorldPoint = new pc.Vec3();
        this.worldDiff = new pc.Vec3();
        this.pinchMidPoint = new pc.Vec2();
        this.lastTouchPoint = new pc.Vec2();
        this.lastPinchMidPoint = new pc.Vec2();
        this.lastPinchDistance = 0;
    }

    /**
     * 触屏操作开始，结束，取消事件回调
     * @param event 触屏开始，结束，取消事件
     */
    private onTouchStartEndCancel(event: pc.TouchEvent): void
    {
        var touches = event.touches;
        if (touches.length == 1) {
            this.lastTouchPoint.set(touches[0].x, touches[0].y);
        } else if (touches.length == 2) {
            this.lastPinchDistance = this.getPinchDistance(touches[0], touches[1]);
            this.calcMidPoint(touches[0], touches[1], this.lastPinchMidPoint);
        }
        this.toolOptions.orbitCamera.isRotating = false;
        this.toolOptions.orbitCamera.isPaning = false;
    }

    /**
     * 触屏移动事件回调
     * @param event 触屏移动事件
     */
    private onTouchMove(event: pc.TouchEvent): void
    {
        const orbitCamera = this.toolOptions.orbitCamera;
        const orbitCameraOptions = orbitCamera.toolOptions;
        var touches = event.touches;
        if (touches.length == 1) {
            const touch = touches[0];

            if (!orbitCameraOptions.rotateCondition || orbitCameraOptions.rotateCondition()) {
                orbitCamera.isRotating = true;
                orbitCamera.pitch -= (touch.y - this.lastTouchPoint.y) * this.toolOptions.orbitSensitivity;
                orbitCamera.yaw -= (touch.x - this.lastTouchPoint.x) * this.toolOptions.orbitSensitivity;
            }

            this.lastTouchPoint.set(touch.x, touch.y);

        } else if (touches.length == 2) {
            const currentPinchDistance = this.getPinchDistance(touches[0], touches[1]);
            const diffInPinchDistance = currentPinchDistance - this.lastPinchDistance;
            this.lastPinchDistance = currentPinchDistance;

            if (!orbitCameraOptions.distanceCondition || orbitCameraOptions.distanceCondition()) {
                orbitCamera.distance -= (diffInPinchDistance * this.toolOptions.distanceSensitivity * 0.1) * (orbitCamera.distance * 0.1);
            }

            this.calcMidPoint(touches[0], touches[1], this.pinchMidPoint);
            if (!orbitCameraOptions.panCondition || orbitCameraOptions.panCondition()) {
                orbitCamera.isPaning = true;
                this.pan(this.pinchMidPoint);
            }
            this.lastPinchMidPoint.copy(this.pinchMidPoint);
        }
    }

    /**
     * 根据触屏中心点位置平移相机
     * @param midPoint 触屏中心点
     */
    private pan(midPoint: pc.Vec2): void
    {
        const orbitCamera = this.toolOptions.orbitCamera;

        const fromWorldPoint = this.fromWorldPoint;
        const toWorldPoint = this.toWorldPoint;
        const worldDiff = this.worldDiff;

        const camera = orbitCamera.toolOptions.mainCamra;
        const distance = orbitCamera.distance;

        camera.screenToWorld(midPoint.x, midPoint.y, distance, fromWorldPoint);
        camera.screenToWorld(this.lastPinchMidPoint.x, this.lastPinchMidPoint.y, distance, toWorldPoint);

        worldDiff.sub2(toWorldPoint, fromWorldPoint);

        orbitCamera.pivotPoint.add(worldDiff);
    }

    /**
     * 计算中点
     * @param pointA 起点
     * @param pointB 终点
     * @param result 中心点
     */
    private calcMidPoint(pointA: { x: number, y: number }, pointB: { x: number, y: number }, result: pc.Vec2): void
    {
        result.set(pointB.x - pointA.x, pointB.y - pointA.y);
        result.mulScalar(0.5);
        result.x += pointA.x;
        result.y += pointA.y;
    };

    /**
     * 获得两点距离
     * @param pointA 原始点
     * @param pointB 目标点
     * @returns 两点距离
     */
    private getPinchDistance(pointA: { x: number, y: number }, pointB: { x: number, y: number }): number
    {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;

        return Math.sqrt((dx * dx) + (dy * dy));
    }

    protected override onEnable(): void
    {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    }

    protected override onDisable(): void
    {
        this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
        this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
        this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);
        this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    }
}