/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 17:01:01
 * @ 修改者: FBplus
 * @ 修改时间: 2022-08-09 15:24:08
 * @ 详情: 鼠标操作
 */

import * as pc from "playcanvas";

import { InputEventsMap } from "@/utils/common/InputEventsMap";
import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";

/**
 * 鼠标输入选项
 */
export interface TouchInputOptions { clickError: number };

@tool("TouchInputer")
export class TouchInputer extends Tool<TouchInputOptions, InputEventsMap>
{
    // 默认选项
    protected toolOptionsDefault: TouchInputOptions = {
        clickError: 1
    };

    private pinchMidPoint: pc.Vec2;
    private lastTouchPoint: pc.Vec2;
    private touchDownPoint: pc.Vec2;
    private touchUpPoint: pc.Vec2;
    private lastPinchMidPoint: pc.Vec2;
    private lastPinchDistance: number;

    private isDragging: boolean;

    constructor(option?: TouchInputOptions)
    {
        super();

        this.setOptions(option);

        this.pinchMidPoint = new pc.Vec2();
        this.lastTouchPoint = new pc.Vec2();
        this.touchDownPoint = new pc.Vec2();
        this.touchUpPoint = new pc.Vec2();
        this.lastPinchMidPoint = new pc.Vec2();
        this.lastPinchDistance = 0;
    }

    /**
    * 触屏操作开始事件回调
    * @param event 触屏开始事件
    */
    private onTouchStart(event: pc.TouchEvent): void
    {
        var touches = event.touches;
        if (touches.length == 1) {
            this.isDragging = true;
            this.touchDownPoint.set(touches[0].x, touches[0].y);
            this.lastTouchPoint.set(touches[0].x, touches[0].y);
            this.fire("down", {
                x: touches[0].x,
                y: touches[0].y
            });
        } else if (touches.length == 2) {
            this.lastPinchDistance = this.getPinchDistance(touches[0], touches[1]);
            this.calcMidPoint(touches[0], touches[1], this.lastPinchMidPoint);
        }
    }

    /**
    * 触屏操作结束，取消事件回调
    * @param event 触屏结束，取消事件
    */
    private onTouchEndCancel(event: pc.TouchEvent): void
    {
        var touches = event.touches;
        if (touches.length <= 0) {
            this.touchUpPoint.copy(this.lastTouchPoint);
            if (this.touchUpPoint.distance(this.touchDownPoint) < this.toolOptions.clickError) {
                this.fire("click", {
                    x: this.touchUpPoint.x,
                    y: this.touchUpPoint.y
                });
            }
            this.fire("up", {
                x: this.touchUpPoint.x,
                y: this.touchUpPoint.y
            });
            if (this.isDragging) {
                this.fire("dragEnd", {
                    x: this.touchUpPoint.x,
                    y: this.touchUpPoint.y
                });
            }
            this.isDragging = false;
        }
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
    private onTouchMove(event: pc.TouchEvent): void
    {
        var touches = event.touches;
        if (touches.length == 1) {
            const touch = touches[0];
            this.fire("move", {
                x: touch.x,
                y: touch.y,
                dx: touch.x - this.lastTouchPoint.x,
                dy: touch.y - this.lastTouchPoint.y
            });
            if (this.isDragging) {
                this.fire("dragging", {
                    x: touch.x,
                    y: touch.y,
                    dx: touch.x - this.lastTouchPoint.x,
                    dy: touch.y - this.lastTouchPoint.y,
                    ox: this.touchDownPoint.x,
                    oy: this.touchDownPoint.y
                });
            }
            this.lastTouchPoint.set(touch.x, touch.y);
        } else if (touches.length == 2) {
            const currentPinchDistance = this.getPinchDistance(touches[0], touches[1]);
            const diffInPinchDistance = currentPinchDistance - this.lastPinchDistance;
            this.lastPinchDistance = currentPinchDistance;
            this.fire("pinch", { delta: diffInPinchDistance, event: event.event });
            this.calcMidPoint(touches[0], touches[1], this.pinchMidPoint);
            this.lastPinchMidPoint.copy(this.pinchMidPoint);
        }
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
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchEndCancel, this);
        this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    }

    protected override onDisable(): void
    {
        this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this);
        this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEndCancel, this);
        this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchEndCancel, this);
        this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this);
    }
}