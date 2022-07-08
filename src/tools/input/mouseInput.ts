/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 17:01:01
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 18:30:05
 * @ 详情: 鼠标操作
 */

import * as pc from "playcanvas";

import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";

/**
 * 输入事件-回调表
 */
export interface InputEventsMap
{
    down: (event: { x: number, y: number }) => any;
    move: (evemt: { x: number, y: number, dx: number, dy: number }) => any;
    click: (event: { x: number, y: number }) => any;
    up: (event: { x: number, y: number }) => any;
    pinch: (event: { delta: number, event: MouseEvent }) => any;
    dragging: (event: { x: number, y: number, dx: number, dy: number, ox: number, oy: number }) => any;
    dragEnd: (event: { x: number, y: number }) => any;
}
/**
 * 鼠标输入选项
 */
export interface MouseInputOptions { clickError: number };
@tool("MouseInputer")
export class MouseInputer extends Tool<MouseInputOptions, InputEventsMap>
{
    // 默认选项
    protected toolOptionsDefault: MouseInputOptions = {
        clickError: 1
    };

    private mouseDownVec: pc.Vec2;
    private mouseMoveVec: pc.Vec2;
    private mouseUpVec: pc.Vec2;

    private isDragging: boolean;

    constructor(option?: MouseInputOptions)
    {
        super();

        this.setOptions(option);

        this.mouseDownVec = new pc.Vec2();
        this.mouseMoveVec = new pc.Vec2();
        this.mouseUpVec = new pc.Vec2();
    }

    private onMouseDown(event: pc.MouseEvent): void
    {
        this.isDragging = true;

        this.mouseDownVec.set(event.x, event.y);
        this.mouseMoveVec.set(event.x, event.y);
        this.eventHandler.fire("down", {
            x: this.mouseDownVec.x,
            y: this.mouseDownVec.y
        });
    }

    private onMouseMove(event: pc.MouseEvent): void
    {
        const dx = event.x - this.mouseMoveVec.x;
        const dy = event.y - this.mouseMoveVec.y;
        this.mouseMoveVec.set(event.x, event.y);
        this.eventHandler.fire("move", {
            x: this.mouseMoveVec.x,
            y: this.mouseMoveVec.y,
            dx: dx,
            dy: dy
        });

        if (this.isDragging) {
            this.eventHandler.fire("dragging", {
                x: this.mouseMoveVec.x,
                y: this.mouseMoveVec.y,
                dx: dx,
                dy: dy,
                ox: this.mouseDownVec.x,
                oy: this.mouseDownVec.y
            });
        }
    }

    private onMouseUp(event: pc.MouseEvent): void
    {
        this.mouseUpVec.set(event.x, event.y);

        if (this.mouseUpVec.distance(this.mouseDownVec) < this.toolOptions.clickError) {
            this.eventHandler.fire("click", {
                x: this.mouseUpVec.x,
                y: this.mouseUpVec.y
            });
        }

        this.eventHandler.fire("up", {
            x: this.mouseUpVec.x,
            y: this.mouseUpVec.y
        });

        if (this.isDragging) {
            this.eventHandler.fire("dragEnd", {
                x: this.mouseUpVec.x,
                y: this.mouseUpVec.y
            });
        }

        this.isDragging = false;
    }

    private onMouseWheel(event: pc.MouseEvent): void
    {
        this.eventHandler.fire("pinch", { delta: event.wheelDelta, event: event.event });
    }

    protected override onEnable(): void
    {
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
        this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    }

    protected override onDisable(): void
    {
        this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
        this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this);
        this.app.mouse.off(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
        this.app.mouse.off(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    }
}