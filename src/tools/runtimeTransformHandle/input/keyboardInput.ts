/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-16 14:40:16
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-22 10:49:42
 * @ 详情: 键盘快捷键
 */

import * as pc from "playcanvas";

import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";

import { HandleType } from "../common/enum";

type KeyCode = number;
/**
 * 键盘快捷键选项
 */
export interface KeyboardInputOptions
{
    translateKey: KeyCode;
    rotateKey: KeyCode;
    scaleKey: KeyCode;
    focusKey: KeyCode;
    pivotKey: KeyCode;
    comboKey: KeyCode;
    undoKey: KeyCode;
    redoKey: KeyCode;
};

/**
 * 键盘快捷键-回调表
 */
interface ShortcutEventsMap
{
    setHandleType: (handleType: HandleType) => any;
    focus: () => any;
    switchPivot: () => any;
    undo: () => any;
    redo: () => any;
}

@tool("RTH_KeyboardInputer")
export class RTH_KeyboardInputer extends Tool<KeyboardInputOptions, ShortcutEventsMap>
{
    // 默认选项
    protected toolOptionsDefault: KeyboardInputOptions = {
        translateKey: pc.KEY_W,
        rotateKey: pc.KEY_E,
        scaleKey: pc.KEY_R,
        focusKey: pc.KEY_F,
        pivotKey: pc.KEY_X,
        comboKey: pc.KEY_CONTROL,
        undoKey: pc.KEY_Z,
        redoKey: pc.KEY_Y
    };

    constructor(options?: KeyboardInputOptions)
    {
        super();

        this.setOptions(options);
    }

    private onKeyDown(event: any): void
    {
        const toolOptions = this.toolOptions;
        switch (event.key) {
            case toolOptions.translateKey:
                this.fire("setHandleType", HandleType.Translation);
                break;
            case toolOptions.rotateKey:
                this.fire("setHandleType", HandleType.Rotation);
                break;
            case toolOptions.scaleKey:
                this.fire("setHandleType", HandleType.Scale);
                break;
            case toolOptions.focusKey:
                this.fire("focus");
                break;
            case toolOptions.pivotKey:
                this.fire("switchPivot");
                break;
            case toolOptions.undoKey:
                if (!this.app.keyboard.isPressed(toolOptions.comboKey)) { break; }
                this.fire("undo");
                break;
            case toolOptions.redoKey:
                if (!this.app.keyboard.isPressed(toolOptions.comboKey)) { break; }
                this.fire("redo");
                break;
            default:
                break;
        }

        event.event.preventDefault();
    }

    protected override onEnable(): void
    {
        this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }

    protected override onDisable(): void
    {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }
}