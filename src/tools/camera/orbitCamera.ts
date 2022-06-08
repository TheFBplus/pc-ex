/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 17:03:58
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-08 19:00:24
 * @ 详情: 观测相机
 */

import * as pc from "playcanvas";

import { Tool, useGlobal } from "../../lib/toolHelper";
import { PCNode } from "../../resources/types/common";

type AvailableDevices = "mouse" | "touchScreen";
type AvailableInputHandler = OrbitCameraInput_Mouse | OrbitCameraInput_TouchScreen;
type OrbitCameraOptions = {
    mainCamra?: pc.CameraComponent;
    device?: AvailableDevices;
    orbitSensitivity?: number;
    distanceSensitivity?: number;
    inertiaFactor?: number;
    pitchMin?: number;
    pitchMax?: number;
    distanceMin: number;
    distanceMax?: number;
};

export default class OrbitCamera extends Tool<OrbitCameraOptions, unknown>
{
    public mainCamra: pc.CameraComponent;

    private _device: AvailableDevices;
    private orbitSensitivity: number;
    private distanceSensitivity: number;
    private inertiaFactor: number;
    private pitchMin: number;
    private pitchMax: number;
    private distanceMin: number;
    private distanceMax: number;

    private _yaw: number;
    private targetYaw: number;
    private _pitch: number;
    private targetPitch: number;
    private _distance: number;
    private targetDistance: number;

    private inputHandler: AvailableInputHandler;
    private isLooking: boolean;

    private _pivotPoint: pc.Vec3;
    private cameraForward: pc.Vec3;
    private yawOffset: pc.Quat;
    private quatWithoutYaw: pc.Quat;
    private modelsAABB: pc.BoundingBox;

    /**
     * 创建观测相机
     * @param option 观测相机选项
     */
    constructor(option: OrbitCameraOptions)
    {
        super();

        this.setOption(option);

        this.pivotPoint = new pc.Vec3();
        this.yawOffset = new pc.Quat();
        this.quatWithoutYaw = new pc.Quat();
        this.modelsAABB = new pc.BoundingBox();
        this.cameraForward = new pc.Vec3();

        const cameraQuat = this.mainCamra.entity.getRotation();
        this._yaw = this.calcYaw(cameraQuat);
        this._pitch = this.calcPitch(cameraQuat, this._yaw);
        this.mainCamra.entity.setLocalEulerAngles(this._pitch, this._yaw, 0);

        this.targetYaw = this._yaw;
        this.targetPitch = this._pitch;
        this.targetDistance = this._distance = this.mainCamra.entity.getPosition().length();

        this.checkAspectRatio();
    }

    /**
     * 设置观测相机选项
     * @param option 观测相机选项
     */
    public override setOption(option: OrbitCameraOptions): void
    {
        this.mainCamra = option?.mainCamra ?? pc.app.context.systems.camera.cameras[0];
        this.device = option?.device ?? "mouse";
        this.orbitSensitivity = option?.orbitSensitivity ?? 0.25;
        this.distanceSensitivity = option?.distanceSensitivity ?? 1.5;
        this.inertiaFactor = option?.inertiaFactor ?? 0;
        this.pitchMin = option?.pitchMin ?? -90;
        this.pitchMax = option?.pitchMax ?? 90;
        this.distanceMin = option?.distanceMin ?? -Infinity;
        this.distanceMax = option?.distanceMax ?? Infinity;
    }

    /**
     * 航向角
     */
    public get yaw(): number
    {
        return this._yaw;
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
        return this._pitch;
    }
    public set pitch(value: number)
    {
        this.targetPitch = pc.math.clamp(value, this.pitchMin, this.pitchMax);
    }

    /**
     * 离焦点的距离
     */
    public get distance(): number
    {
        return this._distance;
    }
    public set distance(value: number)
    {
        this.targetDistance = pc.math.clamp(value, this.distanceMin, this.distanceMax);
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
        return this._device;
    }
    public set device(value: AvailableDevices)
    {
        if (this._device === value) {
            return;
        }

        if (this.inputHandler) {
            this.inputHandler.enabled = false;
        }

        if (this._device === "mouse") {
            this.inputHandler = useGlobal(OrbitCameraInput_Mouse, { orbitCamera: this, orbitSensitivity: this.orbitSensitivity, distanceSensitivity: this.distanceSensitivity });
        }
        else if (this._device === "touchScreen") {
            this.inputHandler = useGlobal(OrbitCameraInput_TouchScreen, { orbitCamera: this, orbitSensitivity: this.orbitSensitivity, distanceSensitivity: this.distanceSensitivity });
        }
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
        distance = (distance / Math.tan(0.5 * this.mainCamra.fov * pc.math.DEG_TO_RAD));
        distance = (distance * 2);

        this.targetDistance = distance;

        this.removeInertia();

        this.pivotPoint.copy(this.modelsAABB.center);
    }

    /**
     * 更新相机
     * @param dt 帧间隔
     */
    private update(dt: number): void
    {
        const t = this.inertiaFactor === 0 ? 1 : Math.min(dt / this.inertiaFactor, 1);
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
        const cameraEntity = this.mainCamra.entity;
        cameraEntity.setLocalEulerAngles(this._pitch, this._yaw, 0);

        const position = cameraEntity.getPosition();
        if (this.isLooking) {
            this.pivotPoint.add2(position, this.cameraForward.copy(cameraEntity.forward).mulScalar(this._distance));
        }
        else {
            position.copy(cameraEntity.forward);
            position.mulScalar(-this._distance);
            position.add(this.pivotPoint);
            cameraEntity.setPosition(position);
        }
    }

    /**
     * 根据宽高设置fov模式
     */
    private checkAspectRatio(): void
    {
        var height = pc.app.graphicsDevice.height;
        var width = pc.app.graphicsDevice.width;

        this.mainCamra.horizontalFov = height > width;
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
    private buildAABB(entity: PCNode | PCNode[], modelsAdded: number): number
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
            this.inputHandler = useGlobal(OrbitCameraInput_Mouse, { orbitCamera: this, orbitSensitivity: this.orbitSensitivity, distanceSensitivity: this.distanceSensitivity });
        }
        else if (this.device === "touchScreen") {
            this.inputHandler = useGlobal(OrbitCameraInput_TouchScreen, { orbitCamera: this, orbitSensitivity: this.orbitSensitivity, distanceSensitivity: this.distanceSensitivity });
        }

        window.addEventListener("resize", this.checkAspectRatio.bind(this));
        pc.app.on("update", this.update, this); // 开始刷新
        pc.app.mouse.disableContextMenu(); // 禁止右键菜单
    }

    protected override onDisable(): void
    {
        if (this.inputHandler) {
            this.inputHandler.enabled = false;
        }

        window.removeEventListener("resize", this.checkAspectRatio.bind(this));
        pc.app.off("update", this.update, this); // 停止刷新
        pc.app.mouse.enableContextMenu();  // 恢复右键菜单
    }
}



/**
 * 观测相机操作选项
 */
type OrbitCameraInputOption = {
    orbitCamera: OrbitCamera;
    orbitSensitivity?: number;
    distanceSensitivity?: number;
};

/**
 * 观测相机鼠标输入
 */
class OrbitCameraInput_Mouse extends Tool<OrbitCameraInputOption, unknown>
{
    private orbitCamera: OrbitCamera
    private orbitSensitivity: number;
    private distanceSensitivity: number;

    private isRotateButtonDown: boolean;
    private isLookButtonDown: boolean;
    private isPanButtonDown: boolean;

    private fromWorldPoint: pc.Vec3;
    private toWorldPoint: pc.Vec3;
    private worldDiff: pc.Vec3;
    private lastPoint: pc.Vec2;

    constructor(options: OrbitCameraInputOption)
    {
        if (!pc.app.mouse) {
            console.error("鼠标设备不存在，请更改输入设备");
            return;
        }

        super();

        this.setOption(options);

        this.fromWorldPoint = new pc.Vec3();
        this.toWorldPoint = new pc.Vec3();
        this.worldDiff = new pc.Vec3();
        this.lastPoint = new pc.Vec2();
    }

    /**
     * 设置观测相机鼠标操作选项
     * @param options 观测相机鼠标操作选项
     */
    public override setOption(options: OrbitCameraInputOption): void
    {
        this.orbitCamera = options.orbitCamera;
        this.orbitSensitivity = options?.orbitSensitivity ?? 0.25;
        this.distanceSensitivity = options?.distanceSensitivity ?? 1.5;
    }

    /**
     * 鼠标按下事件监听
     * @param event 鼠标按下事件
     */
    private onMouseDown(event: { button: number })
    {
        switch (event.button) {
            case pc.MOUSEBUTTON_LEFT:
                this.isRotateButtonDown = true;
                break;
            case pc.MOUSEBUTTON_MIDDLE:
                this.isPanButtonDown = true;
                break;
            case pc.MOUSEBUTTON_RIGHT:
                this.isLookButtonDown = true;
                break;
        }
    }

    /**
     * 鼠标移动事件监听
     * @param event 鼠标移动事件
     */
    private onMouseMove(event: { x: number, y: number, dx: number, dy: number }): void
    {
        if (this.isRotateButtonDown || this.isLookButtonDown) {
            this.orbitCamera.pitch -= event.dy * this.orbitSensitivity;
            this.orbitCamera.yaw -= event.dx * this.orbitSensitivity;

        } else if (this.isPanButtonDown) {
            this.pan(event);
        }

        this.lastPoint.set(event.x, event.y);
    }

    /**
     * 鼠标抬起事件监听
     * @param event 鼠标抬起事件
     */
    private onMouseUp(event: { button: number })
    {
        switch (event.button) {
            case pc.MOUSEBUTTON_LEFT:
                this.isRotateButtonDown = false;
                break;
            case pc.MOUSEBUTTON_MIDDLE:
                this.isPanButtonDown = false;
                break;
            case pc.MOUSEBUTTON_RIGHT:
                this.isLookButtonDown = false;
                break;
        }
    }

    /**
     * 鼠标滚轮事件监听
     * @param event 鼠标滚轮事件
     */
    private onMouseWheel(event: { wheel: number, preventDefault: Function }): void
    {
        this.orbitCamera.distance -= event.wheel * this.distanceSensitivity * (this.orbitCamera.distance * 0.1);
        event.preventDefault();
    }

    /**
     * 移动鼠标时平移相机视角
     * @param event 鼠标移动事件
     */
    private pan(event: { x: number, y: number }): void
    {
        const camera = this.orbitCamera.mainCamra;
        camera.screenToWorld(event.x, event.y, this.orbitCamera.distance, this.fromWorldPoint);
        camera.screenToWorld(this.lastPoint.x, this.lastPoint.y, this.orbitCamera.distance, this.toWorldPoint);
        this.worldDiff.sub2(this.toWorldPoint, this.fromWorldPoint);
        this.orbitCamera.pivotPoint.add(this.worldDiff);
    }

    protected override onEnable(): void
    {
        pc.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        pc.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
        window.addEventListener("mousemove", this.onMouseMove.bind(this));
        window.addEventListener("mouseup", this.onMouseUp.bind(this));
    }

    protected override onDisable(): void
    {
        pc.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        pc.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
        window.removeEventListener("mousemove", this.onMouseMove.bind(this));
        window.removeEventListener("mouseup", this.onMouseUp.bind(this));
    }
}

/**
 * 二维点类型
 */
type point = { x: number, y: number };
/**
 * 观测相机触摸屏输入
 */
class OrbitCameraInput_TouchScreen extends Tool<OrbitCameraInputOption, unknown>
{
    private orbitCamera: OrbitCamera
    private orbitSensitivity: number;
    private distanceSensitivity: number;

    private fromWorldPoint: pc.Vec3;
    private toWorldPoint: pc.Vec3;
    private worldDiff: pc.Vec3;
    private pinchMidPoint: pc.Vec2;
    private lastTouchPoint: pc.Vec2;
    private lastPinchMidPoint: pc.Vec2;
    private lastPinchDistance: number;

    constructor(options: OrbitCameraInputOption)
    {
        if (!pc.app.touch) {
            console.error("触屏设备不存在，请更改输入设备");
            return;
        }

        super();

        this.setOption(options);

        this.lastTouchPoint = new pc.Vec2();
        this.lastPinchMidPoint = new pc.Vec2();
        this.lastPinchDistance = 0;
    }

    /**
     * 设置观测相机触屏操作选项
     * @param options 触屏操作选项
     */
    public override setOption(options: OrbitCameraInputOption): void
    {
        this.orbitCamera = options.orbitCamera;
        this.orbitSensitivity = options?.orbitSensitivity ?? 0.25;
        this.distanceSensitivity = options?.distanceSensitivity ?? 1.5;
    }

    /**
     * 触屏操作开始，结束，取消事件回调
     * @param event 触屏开始，结束，取消事件
     */
    private onTouchStartEndCancel(event: { touches: point[] }): void
    {
        var touches = event.touches;
        if (touches.length == 1) {
            this.lastTouchPoint.set(touches[0].x, touches[0].y);

        } else if (touches.length == 2) {
            this.lastPinchDistance = this.getPinchDistance(touches[0], touches[1]);
            this.calcMidPoint(touches[0], touches[1], this.lastPinchMidPoint);
        }
    }

    /**
     * 触屏移动事件回调
     * @param event 触屏移动事件
     */
    private onTouchMove(event): void
    {
        var touches = event.touches;
        if (touches.length == 1) {
            const touch = touches[0];

            this.orbitCamera.pitch -= (touch.y - this.lastTouchPoint.y) * this.orbitSensitivity;
            this.orbitCamera.yaw -= (touch.x - this.lastTouchPoint.x) * this.orbitSensitivity;

            this.lastTouchPoint.set(touch.x, touch.y);

        } else if (touches.length == 2) {
            const currentPinchDistance = this.getPinchDistance(touches[0], touches[1]);
            const diffInPinchDistance = currentPinchDistance - this.lastPinchDistance;
            this.lastPinchDistance = currentPinchDistance;

            this.orbitCamera.distance -= (diffInPinchDistance * this.distanceSensitivity * 0.1) * (this.orbitCamera.distance * 0.1);

            this.calcMidPoint(touches[0], touches[1], this.pinchMidPoint);
            this.pan(this.pinchMidPoint);
            this.lastPinchMidPoint.copy(this.pinchMidPoint);
        }
    }

    /**
     * 根据触屏中心点位置平移相机
     * @param midPoint 触屏中心点
     */
    private pan(midPoint: pc.Vec2): void
    {
        const fromWorldPoint = this.fromWorldPoint;
        const toWorldPoint = this.toWorldPoint;
        const worldDiff = this.worldDiff;

        const camera = this.orbitCamera.mainCamra;
        const distance = this.orbitCamera.distance;

        camera.screenToWorld(midPoint.x, midPoint.y, distance, fromWorldPoint);
        camera.screenToWorld(this.lastPinchMidPoint.x, this.lastPinchMidPoint.y, distance, toWorldPoint);

        worldDiff.sub2(toWorldPoint, fromWorldPoint);

        this.orbitCamera.pivotPoint.add(worldDiff);
    }

    /**
     * 计算中点
     * @param pointA 起点
     * @param pointB 终点
     * @param result 中心点
     */
    private calcMidPoint(pointA: point, pointB: point, result: pc.Vec2): void
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
    private getPinchDistance(pointA: point, pointB: point): number
    {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;

        return Math.sqrt((dx * dx) + (dy * dy));
    }

    protected override onEnable(): void
    {
        pc.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
        pc.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
        pc.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);
        pc.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    }

    protected override onDisable(): void
    {
        pc.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStartEndCancel, this);
        pc.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchStartEndCancel, this);
        pc.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchStartEndCancel, this);
        pc.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    }
}