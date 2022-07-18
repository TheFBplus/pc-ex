/**
 * @ 创建者: FBplus
 * @ 创建时间: 2021-12-01 10:08:17
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-13 15:11:30
 * @ 详情: Runtime Transform Handle
 */

import * as pc from "playcanvas";

import { Tool } from "@/utils/helpers/toolBase";
import { tool, use } from "@/utils/helpers/useToolHelper";

import { OrbitCamera } from "../camera/orbitCamera";
import { OutlineCamera } from "../camera/outlineCamera";
import { HandleType, PivotType } from "./common/enum";
import { RTH_RuntimeGrid } from "./features/runtimeGrid";
import {
    Axis, generateRotatioHandle, generateScaleHandle, generateTranslationHandle, HandleMap,
    RTHLayer, SelectType
} from "./utils/handleMesh";
import {
    axisXMat, axisYMat, axisZMat, halfTransMat, planeEdgeXMat, planeEdgeYMat, planeEdgeZMat,
    planXMat, planYMat, planZMat
} from "./utils/handleShader";
import MeshRaycaster from "./utils/meshRaycaster";
import Recorder, { Record } from "./utils/recorder";

// RTH选项
export interface RTHOptions
{
    mainCamera: pc.CameraComponent;
    selectTags?: string;
    selectNull?: boolean;
    selectCondition?: () => boolean;
    enableHotKey?: boolean;
    enableUndoRedo?: boolean;
    showHandle?: boolean;
    showOutline?: boolean;
    showGrid?: boolean;
    multiSelect?: boolean;
};

// RTH-回调表
interface RTHEventsMap
{
    select: (selectedNodes: pc.Entity[]) => any;
    focus: (selectedNodes: pc.Entity[]) => any;
}

@tool("RuntimeTransformHandle")
export class RuntimeTransformHandle extends Tool<RTHOptions, RTHEventsMap>
{
    // 默认选项
    protected toolOptionsDefault: RTHOptions = {
        mainCamera: this.app.systems.camera.cameras[0],
        selectTags: null,
        selectNull: true,
        selectCondition: null,
        enableHotKey: true,
        enableUndoRedo: true,
        showHandle: true,
        showOutline: true,
        showGrid: true,
        multiSelect: true
    };

    // 物体实例
    private transformHandle: pc.Entity;
    private translationHandle: pc.Entity;
    private rotationHandle: pc.Entity;
    private scaleHandle: pc.Entity;
    private planeXEntity: pc.Entity;
    private planeYEntity: pc.Entity;
    private planeZEntity: pc.Entity;
    private planeEdge1XEntity: pc.Entity;
    private planeEdge2XEntity: pc.Entity;
    private planeEdge1YEntity: pc.Entity;
    private planeEdge2YEntity: pc.Entity;
    private planeEdge1ZEntity: pc.Entity;
    private planeEdge2ZEntity: pc.Entity;

    // 缓存变量
    private orbitCamera: OrbitCamera;
    private outLineCamera: OutlineCamera;
    private trackEntities: pc.Entity[];
    private trackTransforms: pc.Mat4[];
    private centerPos: pc.Vec3;
    private centerRot: pc.Quat;
    private centerToCamVec: pc.Vec3;
    private alignedCenterToCamVec: pc.Vec3;
    private planeProject: pc.Vec3;
    private screenVec: pc.Vec3;
    private screenVec2: pc.Vec2
    private dragVec: pc.Vec2;
    private invertTransformMat: pc.Mat4;
    private viewMat: pc.Mat4;
    private planeToMove: pc.Plane;
    private planeToFollow: pc.Plane;
    private planeIntersectPoint: pc.Vec3;
    private planesIntersectPoint: pc.Vec3;
    private planeMoveNormal: pc.Vec3;
    private planeFollowNormal: pc.Vec3;
    private planeHitVec: pc.Vec3;
    private planeOffsetVec: pc.Vec3;
    private planeOffset: number;
    private planesOffsetVec: pc.Vec3[];
    private entitysRotationOffset: pc.Vec3[];
    private entityRotationOffset: pc.Vec3;
    private planesOffset: number[];
    private planeXAngle: number;
    private planeYAngle: number;
    private planeZAngle: number;
    private startRotateVec: pc.Vec3;
    private startRotateVerticalVec: pc.Vec3;
    private deltaRotateMat: pc.Mat4;
    private deltaElr: pc.Vec3;
    private startScales: pc.Vec3[];
    private record: Record;

    // 操作变量
    private basePlaneDistance = 66; // 参考平面的距离，坐标轴模型的大小由其在这个参考平面的大小确定
    private scaleHandleScaler = 0.0036;
    private rotateHandleScaler = 0.5;
    private outLineColor = new pc.Color(1, 102 / 255, 0, 1);

    // 控制变量
    private isDragging: boolean = false;

    // 坐标轴模式
    private handleType: HandleType = HandleType.Translation;
    private pivotType: PivotType = PivotType.World;
    private _selectedType: SelectType;
    private get selectedType()
    {
        return this._selectedType;
    }
    private set selectedType(value)
    {
        if (this._selectedType === value) { return; }

        value === SelectType.AxisX || value === SelectType.AllAxis ? axisXMat.emissive.copy(pc.Color.WHITE) : axisXMat.emissive.copy(pc.Color.RED);
        value === SelectType.AxisY || value === SelectType.AllAxis ? axisYMat.emissive.copy(pc.Color.WHITE) : axisYMat.emissive.copy(pc.Color.GREEN);
        value === SelectType.AxisZ || value === SelectType.AllAxis ? axisZMat.emissive.copy(pc.Color.WHITE) : axisZMat.emissive.copy(pc.Color.BLUE);
        value === SelectType.PlaneX ? (planXMat.emissive.copy(pc.Color.WHITE), planeEdgeXMat.emissive.copy(pc.Color.WHITE)) : (planXMat.emissive.copy(pc.Color.RED), planeEdgeXMat.emissive.copy(pc.Color.RED));
        value === SelectType.PlaneY ? (planYMat.emissive.copy(pc.Color.WHITE), planeEdgeYMat.emissive.copy(pc.Color.WHITE)) : (planYMat.emissive.copy(pc.Color.GREEN), planeEdgeYMat.emissive.copy(pc.Color.GREEN));
        value === SelectType.PlaneZ ? (planZMat.emissive.copy(pc.Color.WHITE), planeEdgeZMat.emissive.copy(pc.Color.WHITE)) : (planZMat.emissive.copy(pc.Color.BLUE), planeEdgeZMat.emissive.copy(pc.Color.BLUE));
        halfTransMat.emissive.copy(pc.Color.WHITE);
        halfTransMat.opacity = 0.5;

        axisXMat.update();
        axisYMat.update();
        axisZMat.update();
        planXMat.update();
        planYMat.update();
        planZMat.update();
        planeEdgeXMat.update();
        planeEdgeYMat.update();
        planeEdgeZMat.update();
        halfTransMat.update();

        this._selectedType = value;
    }

    constructor(options: RTHOptions)
    {
        super();

        this.setOptions(options);

        // 创建handle
        this.transformHandle = new pc.Entity("transformHandle");
        this.translationHandle = generateTranslationHandle();
        this.rotationHandle = generateRotatioHandle();
        this.scaleHandle = generateScaleHandle();
        this.transformHandle.addChild(this.translationHandle);
        this.transformHandle.addChild(this.rotationHandle);
        this.transformHandle.addChild(this.scaleHandle);
        this.planeXEntity = this.transformHandle.findByName(`plane ${Axis.X.toString()}`) as pc.Entity;
        this.planeYEntity = this.transformHandle.findByName(`plane ${Axis.Y.toString()}`) as pc.Entity;
        this.planeZEntity = this.transformHandle.findByName(`plane ${Axis.Z.toString()}`) as pc.Entity;
        this.planeEdge1XEntity = this.transformHandle.findByName(`edge1 ${Axis.X.toString()}`) as pc.Entity;
        this.planeEdge2XEntity = this.transformHandle.findByName(`edge2 ${Axis.X.toString()}`) as pc.Entity;
        this.planeEdge1YEntity = this.transformHandle.findByName(`edge1 ${Axis.Y.toString()}`) as pc.Entity;
        this.planeEdge2YEntity = this.transformHandle.findByName(`edge2 ${Axis.Y.toString()}`) as pc.Entity;
        this.planeEdge1ZEntity = this.transformHandle.findByName(`edge1 ${Axis.Z.toString()}`) as pc.Entity;
        this.planeEdge2ZEntity = this.transformHandle.findByName(`edge2 ${Axis.Z.toString()}`) as pc.Entity;

        // 初始化数据
        this.centerPos = new pc.Vec3();
        this.centerRot = new pc.Quat();
        this.centerToCamVec = new pc.Vec3();
        this.alignedCenterToCamVec = new pc.Vec3();
        this.planeProject = new pc.Vec3();
        this.screenVec = new pc.Vec3();
        this.screenVec2 = new pc.Vec2();
        this.dragVec = new pc.Vec2();
        this.invertTransformMat = new pc.Mat4();
        this.viewMat = new pc.Mat4();
        this.record = new Record();
        this.planeToMove = new pc.Plane();
        this.planeToFollow = new pc.Plane();
        this.planeIntersectPoint = new pc.Vec3();
        this.planesIntersectPoint = new pc.Vec3();
        this.planeOffsetVec = new pc.Vec3();
        this.planeMoveNormal = new pc.Vec3();
        this.planeFollowNormal = new pc.Vec3();
        this.planeHitVec = new pc.Vec3();
        this.startRotateVec = new pc.Vec3();
        this.startRotateVerticalVec = new pc.Vec3();
        this.entityRotationOffset = new pc.Vec3();
        this.deltaRotateMat = new pc.Mat4();
        this.deltaElr = new pc.Vec3();
        this.startScales = [];
        this.trackEntities = [];
        this.planesOffsetVec = [];
        this.planesOffset = [];
        this.entitysRotationOffset = [];
        this.isDragging = false;
        this.transformHandle.enabled = false;

        // 初始化状态
        this.setHandleType(this.handleType);
        this.setPivotType(this.pivotType);
        Recorder.init(this.record); // 初始化操作记录
        MeshRaycaster.generateTriangles(); // 生成用于射线检测的三角形

        const toolOptions = this.toolOptions;
        // 使用描边相机，用于选中模型时的高亮显示
        this.outLineCamera = use("OutlineCamera", { mainCamra: toolOptions.mainCamera, outlineColor: this.outLineColor });

        // 使用grid
        toolOptions.showGrid && use("RTH_RuntimeGrid", { mainCamera: toolOptions.mainCamera });
        // // 使用gizmo
        // const gizmo = use(RTH_RuntimeGizmo);

        // 获取UILayer
        const UILayer = this.app.scene.layers.getLayerByName("UI");
        // 监听鼠标
        if (this.app.mouse) {
            // 使用鼠标输入监听器，监听鼠标
            const mouseInputer = use("MouseInputer");

            // 使用观测相机，实现基本视角操作
            this.orbitCamera = use("OrbitCamera", { mainCamra: toolOptions.mainCamera, device: this.app.touch ? "touchScreen" : "mouse", rotateCondition: () => (!toolOptions.multiSelect || this.app.keyboard.isPressed(pc.KEY_ALT)) && !this.isDragging });

            // 使用模型点选器，实现模型点击检测
            const selector = use("Selector", { inputHandler: mouseInputer, pickCamera: toolOptions.mainCamera, excludeLayers: [RTHLayer(), RTH_RuntimeGrid.layer, UILayer], pickNull: toolOptions.selectNull, pickTag: toolOptions.selectTags, pickCondition: toolOptions.selectCondition, pickSame: true });
            selector.addListener("select", selectedNode => this.select(selectedNode as pc.Entity), this);

            if (toolOptions.multiSelect) {
                // 模型多选器
                const multiSelector = use("MultiSelector", {
                    inputHandler: mouseInputer, pickCamera: toolOptions.mainCamera, excludeLayers: [RTHLayer(), RTH_RuntimeGrid.layer, UILayer],
                    expectCondition: () => this.isDragging ||
                        this.orbitCamera.isRotating ||
                        this.orbitCamera.isPaning ||
                        this.orbitCamera.isLooking
                });
                multiSelector.addListener("selecting", selectedNodes => this.select(selectedNodes as pc.Entity[]), this);
            }

            // 监听鼠标事件
            mouseInputer.addListener("down", this.onControlDown, this);
            mouseInputer.addListener("move", this.onControlMove, this);
            mouseInputer.addListener("up", this.onControlUp, this);
        }
        // 监听触屏
        if (this.app.touch) {
            console.log("暂不支持触屏输入！");
        }
        // 监听键盘
        if (this.app.keyboard && toolOptions.enableHotKey) {
            const keyboardInputer = use("RTH_KeyboardInputer", {
                translateKey: pc.KEY_W,
                rotateKey: pc.KEY_E,
                scaleKey: pc.KEY_R,
                focusKey: pc.KEY_F,
                pivotKey: pc.KEY_X,
                comboKey: pc.KEY_CONTROL,
                undoKey: pc.KEY_Z,
                redoKey: pc.KEY_Y
            });
            keyboardInputer.addListener("setHandleType", this.setHandleType, this);
            keyboardInputer.addListener("focus", this.focus, this);
            keyboardInputer.addListener("switchPivot", this.switchPivot, this);
            keyboardInputer.addListener("undo", this.undo, this);
            keyboardInputer.addListener("redo", this.redo, this);
        }

        // 相机添加layer
        !this.app.scene.layers.getLayerById(RTHLayer().id) && this.app.scene.layers.push(RTHLayer());
        toolOptions.mainCamera.layers = toolOptions.mainCamera.layers.concat(RTHLayer().id);

        // 添加handle到场景
        this.app.root.addChild(this.transformHandle);
    }

    /**
     * 设置坐标轴类型
     * @param type 坐标轴类型
     */
    public setHandleType(type: HandleType): void
    {
        if (this.isDragging) { return; }

        this.translationHandle.enabled = type == HandleType.Translation;
        this.rotationHandle.enabled = type == HandleType.Rotation;
        this.scaleHandle.enabled = type == HandleType.Scale;
        this.handleType = type;
    }

    /**
     * 设置中心点类型
     * @param type 中心点类型
     */
    public setPivotType(type: PivotType): void
    {
        this.pivotType = type;
    }

    /**
     * 选中模型
     * @param target 选中的单个模型或模型数组（传入null时则取消选中）
     * @param saveRecord 是否保存记录
     */
    // TODO:考虑选中物体的层级影响
    public select(target: pc.Entity | pc.Entity[], saveRecord: boolean = false): void
    {
        // 判断两次选择是否完全相同
        if (this.selectionIsEqual(target)) { return; }

        if (this.isDragging) { return; }

        const toolOptions = this.toolOptions;
        // 关闭先前选中模型的描边特效
        this.trackEntities.forEach(entity => { toolOptions.showOutline && this.outLineCamera.toggleOutLine(entity, false); });

        if (target == null || (Array.isArray(target) && target.length <= 0)) {
            this.trackEntities = [];
            this.transformHandle.enabled = false;
            this.app.off("update", this.update, this);
            this.eventHandler.fire("select", this.trackEntities);
            return;
        }
        if (this.trackEntities.length <= 0 && toolOptions.showHandle) { this.app.on("update", this.update, this); }
        this.trackEntities = Array.isArray(target) ? target : [target];
        this.trackEntities.forEach(entity => { toolOptions.showOutline && this.outLineCamera.toggleOutLine(entity, true); });  // 开启选中模型的描边特效
        this.transformHandle.enabled = true && toolOptions.showHandle;
        this.eventHandler.fire("select", this.trackEntities);

        saveRecord && this.updateRecord();
    }

    /**
     * 聚焦选中物体 
     */
    public focus(): void
    {
        if (this.isDragging) { return; }
        if (this.trackEntities.length > 0) {
            this.orbitCamera.focus(this.trackEntities);
            this.eventHandler.fire("focus", this.trackEntities);
        }
    }

    /**
     * 切换轴心模式
     */
    public switchPivot(pivot?: PivotType): void
    {
        if (this.isDragging) { return; }

        if (pivot) {
            this.setPivotType(pivot);
        }
        else {
            if (this.pivotType === PivotType.Local) {
                this.setPivotType(PivotType.World);
            }
            else {
                this.setPivotType(PivotType.Local);
            }
        }
    }

    /**
     * 撤销
     */
    public undo(): void
    {
        if (this.isDragging || !this.toolOptions.enableUndoRedo) { return; }
        const preRecord = Recorder.undo();
        this.resetTransforms(preRecord.selections, preRecord.transforms);
    }

    /**
     * 重做
     */
    public redo(): void
    {
        if (this.isDragging || !this.toolOptions.enableUndoRedo) { return; }
        const nextRecord = Recorder.redo();
        this.resetTransforms(nextRecord.selections, nextRecord.transforms);
    }

    /**
     * 相机看向目标
     * @param target 目标物体
     */
    public look(target: pc.Entity | pc.Entity[]): void
    {
        this.orbitCamera.focus(target);
    }

    /**
     * 判断本次选择是否和上次相同
     * @param target 选中的单个模型或模型数组
     */
    private selectionIsEqual(target: pc.Entity | pc.Entity[]): boolean
    {
        if (target == null && this.trackEntities.length <= 0) { return true; }

        if (!Array.isArray(target)) {
            return this.trackEntities.length == 1 && target == this.trackEntities[0];
        }

        return this.trackEntities.length == target.length && this.trackEntities.every((e, index) => e == target[index]);
    }

    /**
     * 帧更新
     * @param dt 本帧的时长
     */
    private update(dt: number): void
    {
        // 没有选中模型时不更新
        if (this.trackEntities.length <= 0) { return; }

        const toolOptions = this.toolOptions;
        this.updateTransform(toolOptions.mainCamera);
        this.updateDisplay(toolOptions.mainCamera);
        this.updateHandle(toolOptions.mainCamera);
    }

    /**
     * 根据选中的物体，更新坐标轴的几何状态
     * @param camera 当前渲染相机
     */
    private updateTransform(camera: pc.CameraComponent): void
    {
        if (this.trackEntities.length <= 0) { return; }

        if (!this.isDragging) {
            const targets = this.trackEntities;
            const targetsLength = targets.length;
            if (this.pivotType === PivotType.World) {
                if (this.handleType != HandleType.Scale) {
                    // 计算中心点的位移
                    this.centerPos.set(0, 0, 0);
                    targets.forEach(target =>
                    {
                        this.centerPos.add(target.getPosition());
                    });
                    this.centerPos.divScalar(targetsLength);
                    this.centerRot.copy(pc.Quat.ZERO);
                }
                else {
                    // 取第一个选中物体的位置和旋转
                    this.centerPos.copy(targets.at(-1).getPosition());
                    this.centerRot.copy(targets.at(-1).getRotation());
                }
            }
            else if (this.pivotType === PivotType.Local) {
                this.centerPos.copy(targets.at(-1).getPosition());
                this.centerRot.copy(targets.at(-1).getRotation());
            }

            // 坐标轴追踪模型的位置
            this.transformHandle.setPosition(this.centerPos);
            // 坐标轴追踪模型的旋转
            this.transformHandle.setRotation(this.centerRot);
        }

        // 保持坐标轴模型大小恒定
        const camPos = camera.entity.getPosition();
        const track2CamDistance = this.transformHandle.getPosition().distance(camPos);
        const ratio = track2CamDistance / this.basePlaneDistance;
        this.transformHandle.setLocalScale(ratio, ratio, ratio);
    }

    /**
     * 根据相机的角度，更新坐标轴的显示状态
     * @param camera 当前渲染相机
     */
    // TODO:优化材质更新逻辑，不需要每帧都更新；检查并删除多余的运算
    private updateDisplay(camera: pc.CameraComponent): void
    {
        if (this.trackEntities.length <= 0) { return; }

        this.centerToCamVec.sub2(camera.entity.getPosition(), this.centerPos).normalize();

        if (!this.isDragging) {
            if (this.handleType === HandleType.Translation || this.handleType === HandleType.Scale) {
                // 更新坐标轴显隐
                const angleX = Math.abs(this.centerToCamVec.dot(this.transformHandle.right));
                angleX >= 0.95 ? axisXMat.opacity = (1 - angleX) * 20 : axisXMat.opacity = 1;
                axisXMat.update();

                const angleY = Math.abs(this.centerToCamVec.dot(this.transformHandle.up));
                angleY >= 0.95 ? axisYMat.opacity = (1 - angleY) * 20 : axisYMat.opacity = 1;
                axisYMat.update();

                const angleZ = Math.abs(this.centerToCamVec.dot(this.transformHandle.forward));
                angleZ >= 0.95 ? axisZMat.opacity = (1 - angleZ) * 20 : axisZMat.opacity = 1;
                axisZMat.update();
            }
            else if (this.handleType === HandleType.Rotation) {
                // 更新坐标轴显隐
                this.planeProject.copy(this.centerToCamVec);
                this.planeProject.project(this.transformHandle.right);
                const dx = this.planeProject.length();
                dx <= 0.05 ? axisXMat.opacity = Math.max(45 * dx - 1.25, 0.1) : axisXMat.opacity = 1;
                axisXMat.update();

                this.planeProject.copy(this.centerToCamVec);
                this.planeProject.project(this.transformHandle.up);
                const dy = this.planeProject.length();
                dy <= 0.05 ? axisYMat.opacity = Math.max(45 * dy - 1.25, 0.1) : axisYMat.opacity = 1;
                axisYMat.update();

                this.planeProject.copy(this.centerToCamVec);
                this.planeProject.project(this.transformHandle.forward);
                const dz = this.planeProject.length();
                dz <= 0.05 ? axisZMat.opacity = Math.max(45 * dz - 1.25, 0.1) : axisZMat.opacity = 1;
                axisZMat.update();
            }

            if (this.handleType === HandleType.Translation) {
                // 更新坐标平面显隐
                this.planeProject.copy(this.centerToCamVec);
                this.planeProject.project(this.transformHandle.right);
                const dx = this.planeProject.length();
                dx <= 0.1 ? (planXMat.opacity = 0, planeEdgeXMat.opacity = 0) : (planXMat.opacity = 0.3, planeEdgeXMat.opacity = 1);
                this.planeXAngle = dx;
                planXMat.update();
                planeEdgeXMat.update();

                this.planeProject.copy(this.centerToCamVec);
                this.planeProject.project(this.transformHandle.up);
                const dy = this.planeProject.length();
                this.planeYAngle = dy;
                dy <= 0.1 ? (planYMat.opacity = 0, planeEdgeYMat.opacity = 0) : (planYMat.opacity = 0.3, planeEdgeYMat.opacity = 1);
                planYMat.update();
                planeEdgeYMat.update();

                this.planeProject.copy(this.centerToCamVec);
                this.planeProject.project(this.transformHandle.forward);
                const dz = this.planeProject.length();
                this.planeZAngle = dz;
                dz <= 0.1 ? (planZMat.opacity = 0, planeEdgeZMat.opacity = 0) : (planZMat.opacity = 0.3, planeEdgeZMat.opacity = 1);
                planZMat.update();
                planeEdgeZMat.update();

                // 更新平面显示位置
                this.alignedCenterToCamVec.copy(this.centerToCamVec);
                this.invertTransformMat.copy(this.transformHandle.getWorldTransform());
                this.invertTransformMat.invert();
                this.invertTransformMat.transformVector(this.alignedCenterToCamVec, this.alignedCenterToCamVec);
                const x = this.alignedCenterToCamVec.x > 0 ? 1.5 : -1.5;
                const y = this.alignedCenterToCamVec.y > 0 ? 1.5 : -1.5;
                const z = this.alignedCenterToCamVec.z > 0 ? 1.5 : -1.5;

                this.planeXEntity.setLocalPosition(0, y, z);
                this.planeYEntity.setLocalPosition(x, 0, z);
                this.planeZEntity.setLocalPosition(x, y, 0);

                this.planeEdge1XEntity.setLocalPosition(0, y * 2, z);
                this.planeEdge2XEntity.setLocalPosition(0, y, z * 2);
                this.planeEdge1YEntity.setLocalPosition(x, 0, z * 2);
                this.planeEdge2YEntity.setLocalPosition(x * 2, 0, z);
                this.planeEdge1ZEntity.setLocalPosition(x * 2, y, 0);
                this.planeEdge2ZEntity.setLocalPosition(x, y * 2, 0);
            }
        }
        else {
            if (this.handleType === HandleType.Translation) {
                if (this.selectedType === SelectType.AxisX || this.selectedType === SelectType.PlaneY || this.selectedType === SelectType.PlaneZ) {
                    axisXMat.emissive.copy(pc.Color.YELLOW);
                    axisXMat.opacity = 1;
                }
                else {
                    axisXMat.emissive.copy(pc.Color.WHITE);
                    axisXMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AxisY || this.selectedType === SelectType.PlaneX || this.selectedType === SelectType.PlaneZ) {
                    axisYMat.emissive.copy(pc.Color.YELLOW);
                    axisYMat.opacity = 1;
                }
                else {
                    axisYMat.emissive.copy(pc.Color.WHITE);
                    axisYMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AxisZ || this.selectedType === SelectType.PlaneX || this.selectedType === SelectType.PlaneY) {
                    axisZMat.emissive.copy(pc.Color.YELLOW);
                    axisZMat.opacity = 1;
                }
                else {
                    axisZMat.emissive.copy(pc.Color.WHITE);
                    axisZMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.PlaneX) {
                    planXMat.emissive.copy(pc.Color.YELLOW);
                    planXMat.opacity = 1;
                }
                else {
                    planXMat.opacity = 0;
                }

                if (this.selectedType === SelectType.PlaneY) {
                    planYMat.emissive.copy(pc.Color.YELLOW);
                    planYMat.opacity = 1;
                }
                else {
                    planYMat.opacity = 0;
                }

                if (this.selectedType === SelectType.PlaneZ) {
                    planZMat.emissive.copy(pc.Color.YELLOW);
                    planZMat.opacity = 1;
                }
                else {
                    planZMat.opacity = 0;
                }

                planeEdgeXMat.opacity = 0;
                planeEdgeYMat.opacity = 0;
                planeEdgeZMat.opacity = 0;

                axisXMat.update();
                axisYMat.update();
                axisZMat.update();
                planXMat.update();
                planYMat.update();
                planZMat.update();
                planeEdgeXMat.update();
                planeEdgeYMat.update();
                planeEdgeZMat.update();
            }
            // TODO:美化旋转坐标轴旋转时的效果
            else if (this.handleType === HandleType.Rotation) {
                if (this.selectedType === SelectType.AxisX) {
                    axisXMat.emissive.copy(pc.Color.YELLOW);
                    axisXMat.opacity = 1;
                }
                else {
                    axisXMat.emissive.copy(pc.Color.RED);
                    axisXMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AxisY) {
                    axisYMat.emissive.copy(pc.Color.YELLOW);
                    axisYMat.opacity = 1;
                }
                else {
                    axisYMat.emissive.copy(pc.Color.GREEN);
                    axisYMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AxisZ) {
                    axisZMat.emissive.copy(pc.Color.YELLOW);
                    axisZMat.opacity = 1;
                }
                else {
                    axisZMat.emissive.copy(pc.Color.BLUE);
                    axisZMat.opacity = 0.3;
                }

                axisXMat.update();
                axisYMat.update();
                axisZMat.update();
            }
            else if (this.handleType === HandleType.Scale) {
                if (this.selectedType === SelectType.AxisX || this.selectedType === SelectType.AllAxis) {
                    axisXMat.emissive.copy(pc.Color.YELLOW);
                    axisXMat.opacity = 1;
                }
                else {
                    axisXMat.emissive.copy(pc.Color.WHITE);
                    axisXMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AxisY || this.selectedType === SelectType.AllAxis) {
                    axisYMat.emissive.copy(pc.Color.YELLOW);
                    axisYMat.opacity = 1;
                }
                else {
                    axisYMat.emissive.copy(pc.Color.WHITE);
                    axisYMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AxisZ || this.selectedType === SelectType.AllAxis) {
                    axisZMat.emissive.copy(pc.Color.YELLOW);
                    axisZMat.opacity = 1;
                }
                else {
                    axisZMat.emissive.copy(pc.Color.WHITE);
                    axisZMat.opacity = 0.3;
                }

                if (this.selectedType === SelectType.AllAxis) {
                    halfTransMat.emissive.copy(pc.Color.YELLOW);
                    halfTransMat.opacity = 1;
                }
                else {
                    halfTransMat.emissive.copy(pc.Color.WHITE);
                    halfTransMat.opacity = 0.3;
                }

                axisXMat.update();
                axisYMat.update();
                axisZMat.update();
                halfTransMat.update();
            }
        }
    }

    /**
     * 根据鼠标的位置，更新坐标轴的选中状态
     * @param camera 当前渲染相机
     */
    private updateHandle(camera: pc.CameraComponent)
    {
        if (this.isDragging || this.trackEntities.length <= 0) { return; }

        const mouse = this.app.mouse;
        const resMI = MeshRaycaster.rayCast(camera, { x: mouse._lastX, y: mouse._lastY });

        if (resMI) {
            var selectType = HandleMap[(resMI.node as any)._guid];
            this.selectedType = selectType;
        }
        else {
            this.selectedType = null;
        }
    }

    /**
     * 根据鼠标移动对选中物体进行位移
     * @param currentCamera 当前渲染相机
     * @param x 鼠标x
     * @param y 鼠标y
     */
    // TODO:找到更好的算法，避免重复多余的运算
    private onTranslationHandleMove(currentCamera: pc.CameraComponent, x: number, y: number): void
    {
        if (this.trackEntities.length <= 0) { return; }

        const handlePos = this.transformHandle.getPosition();
        const cameraPos = currentCamera.entity.getPosition();
        let intersected = false;

        const camera = this.toolOptions.mainCamera;
        camera.screenToWorld(x, y, camera.farClip, this.screenVec);
        intersected = this.planeToMove.intersectsLine(cameraPos, this.screenVec, this.planeIntersectPoint);
        if (!intersected) { return; }
        this.planeToFollow.point.copy(this.planeIntersectPoint);

        // 设置选中物体的位置
        this.trackEntities.forEach((entity, index) =>
        {
            if (this.selectedType == SelectType.AxisX || this.selectedType == SelectType.AxisY || this.selectedType == SelectType.AxisZ) {
                const entityPos = entity.getPosition();
                intersected = this.planeToFollow.intersectsLine(entityPos, this.screenVec.copy(entityPos).add(this.planeHitVec.copy(this.planeFollowNormal).mulScalar(camera.farClip)), this.planesIntersectPoint) ||
                    this.planeToFollow.intersectsLine(entityPos, this.screenVec.copy(entityPos).add(this.planeHitVec.copy(this.planeFollowNormal).mulScalar(-camera.farClip)), this.planesIntersectPoint);
                if (!intersected) { return; }

                this.planesIntersectPoint.add(this.planeHitVec.copy(this.planeFollowNormal).mulScalar(-this.planesOffset[index]));
            }
            else if (this.selectedType == SelectType.PlaneX || this.selectedType == SelectType.PlaneY || this.selectedType == SelectType.PlaneZ) {
                this.planesIntersectPoint.copy(this.planeIntersectPoint);
                this.planesIntersectPoint.sub(this.planesOffsetVec[index]);
            }
            entity.setPosition(this.planesIntersectPoint);
        });

        // 设置handle的位置
        if (this.selectedType == SelectType.AxisX || this.selectedType == SelectType.AxisY || this.selectedType == SelectType.AxisZ) {
            intersected = this.planeToFollow.intersectsLine(handlePos, this.screenVec.copy(handlePos).add(this.planeHitVec.copy(this.planeFollowNormal).mulScalar(camera.farClip)), this.planeIntersectPoint) ||
                this.planeToFollow.intersectsLine(handlePos, this.screenVec.copy(handlePos).add(this.planeHitVec.copy(this.planeFollowNormal).mulScalar(-camera.farClip)), this.planeIntersectPoint);
            if (!intersected) { return; }

            this.planeIntersectPoint.add(this.planeHitVec.copy(this.planeFollowNormal).mulScalar(-this.planeOffset));
        }
        else if (this.selectedType == SelectType.PlaneX || this.selectedType == SelectType.PlaneY || this.selectedType == SelectType.PlaneZ) {
            this.planeIntersectPoint.sub(this.planeOffsetVec);
        }
        this.transformHandle.setPosition(this.planeIntersectPoint);
    }

    /**
     * 根据鼠标移动对选中物体进行旋转
     * @param currentCamera 当前渲染相机
     * @param dx 鼠标x增量
     * @param dy 鼠标y增量
     */
    private onRotationHandleMove(currentCamera: pc.CameraComponent, dx: number, dy: number)
    {
        if (this.trackEntities.length <= 0) { return; }

        this.screenVec.copy(this.startRotateVerticalVec);
        this.viewMat.copy(currentCamera.entity.getWorldTransform()).invert();
        this.viewMat.transformVector(this.screenVec, this.screenVec);
        this.screenVec2.set(this.screenVec.x, this.screenVec.y).normalize();
        this.dragVec.set(dx, -dy);

        const handlePos = this.transformHandle.getPosition();
        const deltaRotation = this.dragVec.dot(this.screenVec2) * this.rotateHandleScaler;
        this.deltaRotateMat.setFromAxisAngle(this.planeMoveNormal, deltaRotation);
        this.deltaRotateMat.getEulerAngles(this.deltaElr);

        this.trackEntities.forEach((entity, index) =>
        {
            const entityRotationOffset = this.entitysRotationOffset[index];
            if (this.pivotType === PivotType.World) {
                this.deltaRotateMat.transformPoint(entityRotationOffset, entityRotationOffset);
                entity.setPosition(new pc.Vec3().copy(handlePos).add(entityRotationOffset));
                entity.rotate(this.deltaElr);
            }
            else if (this.pivotType === PivotType.Local) {
                this.deltaRotateMat.setFromAxisAngle(entityRotationOffset, deltaRotation);
                entity.rotate(this.deltaRotateMat.getEulerAngles());
            }
        });
        this.transformHandle.rotate(this.deltaElr);
    }

    /**
     * 根据鼠标移动对选中物体进行放缩
     * @param currentCamera 当前渲染相机
     * @param dx 鼠标x增量
     * @param dy 鼠标y增量
     */
    // TODO:处理尺寸为负的情况；实现缩放时handle长度跟着变化
    private onScaleHandleMove(currentCamera: pc.CameraComponent, dx: number, dy: number): void
    {
        if (this.trackEntities.length <= 0) { return; }

        this.trackEntities.forEach((entity, index) =>
        {
            const preScale = entity.getLocalScale();
            const startScale = this.startScales[index];
            if (this.selectedType === SelectType.AllAxis) {
                const deltaScale = (dx - dy) * this.scaleHandleScaler;
                const scaleXNow = preScale.x + startScale.x * deltaScale;
                const scaleYNow = preScale.y + startScale.y * deltaScale;
                const scaleZNow = preScale.z + startScale.z * deltaScale;
                entity.setLocalScale(scaleXNow, scaleYNow, scaleZNow);
            }
            else {
                this.screenVec.copy(this.planeMoveNormal);
                this.viewMat.copy(currentCamera.entity.getWorldTransform()).invert();
                this.viewMat.transformVector(this.screenVec, this.screenVec);
                this.screenVec2.set(this.screenVec.x, this.screenVec.y).normalize();
                this.dragVec.set(dx, -dy);

                const deltaScale = this.dragVec.dot(this.screenVec2) * this.scaleHandleScaler;
                if (this.selectedType === SelectType.AxisX) {
                    const deltaScaleX = startScale.x * deltaScale;
                    const scaleXNow = preScale.x + deltaScaleX;
                    entity.setLocalScale(scaleXNow, preScale.y, preScale.z);
                }
                else if (this.selectedType === SelectType.AxisY) {
                    const deltaScaleY = startScale.y * deltaScale;
                    const scaleYNow = preScale.y + deltaScaleY;
                    entity.setLocalScale(preScale.x, scaleYNow, preScale.z);
                }
                else if (this.selectedType === SelectType.AxisZ) {
                    const deltaScaleZ = startScale.z * deltaScale;
                    const scaleZNow = preScale.z + deltaScaleZ;
                    entity.setLocalScale(preScale.x, preScale.y, scaleZNow);
                }
            }
        });
    }

    /**
     * 根据记录还原模型的空间信息
     * @param selections 选中模型
     * @param transforms 选中模型的空间信息
     */
    private resetTransforms(selections: pc.Entity[] | null, transforms: pc.Mat4[] | null): void
    {
        this.select(selections);

        if (selections === null) { return; }

        selections.forEach((entity, index) =>
        {
            const transform = transforms[index];
            entity.setLocalPosition(transform.getTranslation());
            entity.setLocalEulerAngles(transform.getEulerAngles());
            entity.setLocalScale(transform.getScale());
        });
    }

    /**
     * 鼠标或触屏按下时触发的事件
     * @param event 事件
     */
    private onControlDown(event: { x: number, y: number }): void
    {
        if (this.selectedType == null) { return; }

        const camera = this.toolOptions.mainCamera;
        const handlePos = this.transformHandle.getPosition();
        const cameraPos = camera.entity.getPosition();

        // 针对位移坐标轴设置平移平面及计算初始偏移
        if (this.handleType === HandleType.Translation) {
            this.planeToMove.point.copy(handlePos);
            // console.log(`dx: ${this.planeXAngle}, dy: ${this.planeYAngle}, dz:${this.planeZAngle}`);
            if (this.selectedType === SelectType.AxisX) {
                this.planeMoveNormal.copy(this.planeYAngle > this.planeZAngle ? this.transformHandle.up : this.transformHandle.forward);
                this.planeFollowNormal.copy(this.transformHandle.right);
            }
            else if (this.selectedType === SelectType.AxisY) {
                this.planeMoveNormal.copy(this.planeXAngle > this.planeZAngle ? this.transformHandle.right : this.transformHandle.forward);
                this.planeFollowNormal.copy(this.transformHandle.up);
            }
            else if (this.selectedType === SelectType.AxisZ) {
                this.planeMoveNormal.copy(this.planeXAngle > this.planeYAngle ? this.transformHandle.right : this.transformHandle.up);
                this.planeFollowNormal.copy(this.transformHandle.forward);
            }
            else if (this.selectedType === SelectType.PlaneX) {
                this.planeMoveNormal.copy(this.transformHandle.right);
            }
            else if (this.selectedType === SelectType.PlaneY) {
                this.planeMoveNormal.copy(this.transformHandle.up);
            }
            else if (this.selectedType === SelectType.PlaneZ) {
                this.planeMoveNormal.copy(this.transformHandle.forward);
            }

            this.planeToMove.normal.copy(this.planeMoveNormal);
            this.planeToFollow.normal.copy(this.planeFollowNormal);
            camera.screenToWorld(event.x, event.y, camera.farClip, this.screenVec);

            this.planeToMove.intersectsLine(cameraPos, this.screenVec, this.planeIntersectPoint);
            this.planeOffsetVec.sub2(this.planeIntersectPoint, handlePos);
            this.planeOffset = this.planeOffsetVec.dot(this.planeFollowNormal);

            this.planesOffsetVec = [];
            this.planesOffset = [];
            this.trackEntities.forEach(entity =>
            {
                const planeOffsetVec = new pc.Vec3().sub2(this.planeIntersectPoint, entity.getPosition());
                const planeOffset = planeOffsetVec.dot(this.planeFollowNormal);
                this.planesOffsetVec.push(planeOffsetVec);
                this.planesOffset.push(planeOffset);
            });
        }
        // 针对旋转坐标轴设置初始旋转参考向量
        else if (this.handleType === HandleType.Rotation) {
            this.planeToMove.point.copy(handlePos);
            if (this.selectedType === SelectType.AxisX) {
                this.planeMoveNormal.copy(this.transformHandle.right);
            }
            else if (this.selectedType === SelectType.AxisY) {
                this.planeMoveNormal.copy(this.transformHandle.up);
            }
            else if (this.selectedType === SelectType.AxisZ) {
                this.planeMoveNormal.copy(this.transformHandle.forward);
            }

            this.planeToMove.normal.copy(this.planeMoveNormal);
            camera.screenToWorld(event.x, event.y, camera.farClip, this.screenVec);
            this.planeToMove.intersectsLine(cameraPos, this.screenVec, this.planeIntersectPoint);

            this.startRotateVec.sub2(this.planeIntersectPoint, handlePos);
            this.startRotateVerticalVec.cross(this.startRotateVec, this.planeMoveNormal).mulScalar(-1);

            this.entitysRotationOffset = [];
            this.trackEntities.forEach(entity =>
            {
                if (this.pivotType === PivotType.World) {
                    this.entitysRotationOffset.push(new pc.Vec3().sub2(entity.getPosition(), handlePos));
                }
                else if (this.pivotType === PivotType.Local) {
                    const rotateNormal = new pc.Vec3();
                    if (this.selectedType === SelectType.AxisX) {
                        rotateNormal.copy(entity.right);
                    }
                    else if (this.selectedType === SelectType.AxisY) {
                        rotateNormal.copy(entity.up);
                    }
                    else if (this.selectedType === SelectType.AxisZ) {
                        rotateNormal.copy(entity.forward);
                    }
                    this.entitysRotationOffset.push(rotateNormal);
                }
            });
        }
        // 针对放缩坐标轴设置初始参考尺寸
        else if (this.handleType === HandleType.Scale) {
            this.startScales = [];
            this.trackEntities.forEach(entity =>
            {
                this.startScales.push(entity.getLocalScale());
            });

            if (this.selectedType === SelectType.AxisX) {
                this.planeMoveNormal.copy(this.transformHandle.right);
            }
            else if (this.selectedType === SelectType.AxisY) {
                this.planeMoveNormal.copy(this.transformHandle.up);
            }
            else if (this.selectedType === SelectType.AxisZ) {
                this.planeMoveNormal.copy(this.transformHandle.forward).mulScalar(-1);
            }
        }

        this.isDragging = true;

        this.outLineCamera.updateOptions({ mainCamra: camera, outlineColor: pc.Color.WHITE });
    }

    /**
     * 鼠标或触屏移动时触发的事件
     * @param event 事件
     */
    private onControlMove(event: { x: number, y: number, dx: number, dy: number }): void
    {
        if (!this.isDragging || this.trackEntities.length <= 0) { return; }

        const currentCamera = this.toolOptions.mainCamera;
        if (this.handleType === HandleType.Translation) {
            this.onTranslationHandleMove(currentCamera, event.x, event.y);
        }
        else if (this.handleType === HandleType.Rotation) {
            this.onRotationHandleMove(currentCamera, event.dx, event.dy);
        }
        else if (this.handleType === HandleType.Scale) {
            this.onScaleHandleMove(currentCamera, event.dx, event.dy);
        }
    }

    /**
     * 鼠标或触屏按键抬起时触发的事件
     * @param event 事件
     */
    // TODO:保存空间信息记录时还要考虑选中物体的层级发生变化的情况
    private onControlUp(event: { x: number, y: number }): void
    {
        this.updateRecord();

        if (!this.isDragging) { return; }

        this.outLineCamera.updateOptions({ mainCamra: this.toolOptions.mainCamera, outlineColor: this.outLineColor });

        this.isDragging = false;
        this.selectedType = null;
    }

    // 更新记录数据
    private updateRecord(): void
    {
        if (!this.toolOptions.enableUndoRedo) { return; }

        // 保存记录
        if (this.trackEntities.length == 0) {
            this.record.set(null, null);
        }
        else {
            this.trackTransforms = this.trackEntities.map(entity => entity.getLocalTransform());
            this.record.set(this.trackEntities, this.trackTransforms);
        }
        Recorder.save(this.record);
    }

    protected override onEnable(): void { }

    protected override onDisable(): void { }
}