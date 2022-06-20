/**
 * @ 创建者: 陈伟
 * @ 创建时间: 2022-05-16 14:40:16
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-20 09:56:57
 * @ 详情: 键盘快捷键
 */

import * as pc from "playcanvas";

import { Tool } from "../../../libs/libs/toolHelper";
import { HandleType } from "../common/enum";

type KeyCode = number;

type ShortcutTypes = "setHandleType" | "focus" | "switchPivot" | "undo" | "redo";
type KeyboardInputOptions = {
    translateKey: KeyCode;
    rotateKey: KeyCode;
    scaleKey: KeyCode;
    focusKey: KeyCode;
    pivotKey: KeyCode;
    comboKey: KeyCode;
    undoKey: KeyCode;
    redoKey: KeyCode;
};

export default class RTH_KeyboardInputer extends Tool<KeyboardInputOptions, ShortcutTypes>
{
    private translateKey: KeyCode;
    private rotateKey: KeyCode;
    private scaleKey: KeyCode;
    private focusKey: KeyCode;
    private pivotKey: KeyCode;
    private comboKey: KeyCode;
    private undoKey: KeyCode;
    private redoKey: KeyCode;

    constructor(option?: KeyboardInputOptions)
    {
        super();

        this.translateKey = option.translateKey;
        this.rotateKey = option.rotateKey;
        this.scaleKey = option.scaleKey;
        this.focusKey = option.focusKey;
        this.pivotKey = option.pivotKey;
        this.comboKey = option.comboKey;
        this.undoKey = option.undoKey;
        this.redoKey = option.redoKey;
    }

    private onKeyDown(event: any): void
    {
        switch (event.key) {
            case this.translateKey:
                this.eventHandler.fire("setHandleType", HandleType.Translation);
                break;
            case this.rotateKey:
                this.eventHandler.fire("setHandleType", HandleType.Rotation);
                break;
            case this.scaleKey:
                this.eventHandler.fire("setHandleType", HandleType.Scale);
                break;
            case this.focusKey:
                this.eventHandler.fire("focus");
                break;
            case this.pivotKey:
                this.eventHandler.fire("switchPivot");
                break;
            case this.undoKey:
                if (!pc.app.keyboard.isPressed(this.comboKey)) { break; }
                this.eventHandler.fire("undo");
                break;
            case this.redoKey:
                if (!pc.app.keyboard.isPressed(this.comboKey)) { break; }
                this.eventHandler.fire("redo");
                break;
            default:
                break;
        }

        event.event.preventDefault();
    }

    public override setOption(option: KeyboardInputOptions): void
    {
        this.translateKey = option.translateKey;
        this.rotateKey = option.rotateKey;
        this.scaleKey = option.scaleKey;
        this.focusKey = option.focusKey;
        this.pivotKey = option.pivotKey;
        this.comboKey = option.comboKey;
        this.undoKey = option.undoKey;
        this.redoKey = option.redoKey;
    }

    protected override onEnable(): void
    {
        pc.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }

    protected override onDisable(): void
    {
        pc.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }
}