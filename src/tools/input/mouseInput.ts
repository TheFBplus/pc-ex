/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 17:01:01
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-09 15:01:40
 * @ 详情: 鼠标操作
 */

import * as pc from "playcanvas";

import { Tool } from "../../lib/toolHelper";

type InputEvents = "down" | "move" | "click" | "up" | "pinch" | "dragging" | "dragEnd";
type MouseInputOptions = { clickError: number };

export class MouseInputer extends Tool<MouseInputOptions, InputEvents>
{
    private mouseDownVec: pc.Vec2;
    private mouseMoveVec: pc.Vec2;
    private mouseUpVec: pc.Vec2;

    private clickError: number;

    private isDragging: boolean;

    constructor(option?: MouseInputOptions)
    {
        super();

        this.mouseDownVec = new pc.Vec2();
        this.mouseMoveVec = new pc.Vec2();
        this.mouseUpVec = new pc.Vec2();
        this.clickError = option?.clickError ?? 1;
    }

    private onMouseDown(event: any): void
    {
        this.isDragging = true;

        this.mouseDownVec.set(event.x, event.y);
        this.mouseMoveVec.set(event.x, event.y);
        this.eventHandler.fire("down", {
            x: this.mouseDownVec.x,
            y: this.mouseDownVec.y
        });
    }

    private onMouseMove(event: any): void
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

    private onMouseUp(event: any): void
    {
        this.mouseUpVec.set(event.x, event.y);

        if (this.mouseUpVec.distance(this.mouseDownVec) < this.clickError) {
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

    private onMouseWheel(event: any): void
    {
        this.eventHandler.fire("pinch", { delta: event.wheel, event: event.event });
    }

    public override setOption(option: MouseInputOptions): void
    {
        this.clickError = option.clickError;
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