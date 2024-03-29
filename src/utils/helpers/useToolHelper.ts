/* ----------------------------------------- 已弃用，采用更合理的Tools.@toolName获取工具类 ----------------------------------------- */

/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 16:09:29
 * @ 修改者: FBplus
 * @ 修改时间: 2022-08-09 14:47:45
 * @ 详情: 工具类扩展辅助
 */

import {
    OrbitCamera, OrbitCameraInput_Mouse, OrbitCameraInput_TouchScreen, OrbitCameraInputOption,
    OrbitCameraOptions
} from "@/tools/camera/orbitCamera";
import { OutlineCamera, outlineCameraOptions } from "@/tools/camera/outlineCamera";
import { PathCurve, PathCurveOptions } from "@/tools/curve/pathCurve";
import { MouseInputer, MouseInputOptions } from "@/tools/input/mouseInput";
import { TouchInputer, TouchInputOptions } from "@/tools/input/touchInput";
import { DropGLTFLoader } from "@/tools/loaders/dropGLTFLoader";
import {
    RTH_RuntimeGrid, RuntimeGridOptions
} from "@/tools/runtimeTransformHandle/features/runtimeGrid";
import {
    KeyboardInputOptions, RTH_KeyboardInputer
} from "@/tools/runtimeTransformHandle/input/keyboardInput";
import {
    RTHOptions, RuntimeTransformHandle
} from "@/tools/runtimeTransformHandle/runtimeTransformHandle";
import { MultiSelector, MultiSelectorOptions } from "@/tools/selector/multiSelector";
import { Selector, SelectorOptions } from "@/tools/selector/selector";

import { Tool } from "./toolBase";

// 工具名称
interface ToolName
{
    OrbitCamera: OrbitCamera;
    OrbitCameraInput_Mouse: OrbitCameraInput_Mouse;
    OrbitCameraInput_TouchScreen: OrbitCameraInput_TouchScreen;
    OutlineCamera: OutlineCamera;
    MouseInputer: MouseInputer;
    TouchInputer: TouchInputer;
    DropGLTFLoader: DropGLTFLoader;
    Selector: Selector;
    MultiSelector: MultiSelector;
    PathCurve: PathCurve;
    RTH_RuntimeGrid: RTH_RuntimeGrid;
    RTH_KeyboardInputer: RTH_KeyboardInputer;
    RuntimeTransformHandle: RuntimeTransformHandle;
}

// 工具选项
interface ToolOptions
{
    OrbitCamera: OrbitCameraOptions;
    OrbitCameraInput_Mouse: OrbitCameraInputOption;
    OrbitCameraInput_TouchScreen: OrbitCameraInputOption;
    OutlineCamera: outlineCameraOptions;
    MouseInputer: MouseInputOptions;
    TouchInputer: TouchInputOptions;
    DropGLTFLoader: null;
    Selector: SelectorOptions;
    MultiSelector: MultiSelectorOptions;
    PathCurve: PathCurveOptions;
    RTH_RuntimeGrid: RuntimeGridOptions;
    RTH_KeyboardInputer: KeyboardInputOptions;
    RuntimeTransformHandle: RTHOptions;
}

// 保存tool名-构造函数图
const toolNameMap: Map<string, new (options: any) => any> = new Map<string, new (options: any) => any>();

// 保存全局tool
const toolMap: Map<string, Tool<any, any>> = new Map<string, Tool<any, any>>();

/**
 * 工具装饰器，用于将工具添加至工具表中方便调用
 * @param toolName 工具名称
 */
export function tool(toolName: keyof ToolName): (target: any) => void
{
    return function (target: any)
    {
        toolNameMap.set(toolName, target);
    }
}

/**
 * 使用工具
 * @param toolName 工具名称
 * @param options 工具设置
 * @returns 工具实例
 */
export function use<K extends keyof ToolOptions>(toolName: K, options?: ToolOptions[K]): ToolName[K]
{
    const constructor = toolNameMap.get(toolName);
    if (!constructor) {
        console.error(`找不到工具 ${toolName} ,请检查工具名是否输入正确`);
        return;
    }

    const ex = new constructor(options) as ToolName[K];
    ex.enabled = true;
    return ex;
}

/**
 * 全局使用工具
 * @param toolName 工具名称
 * @param options 工具设置
 * @returns 工具实例
 */
export function useGlobal<K extends keyof ToolOptions>(toolName: K, options?: ToolOptions[K]): ToolName[K]
{
    if (toolMap.get(toolName)) {
        const ex = toolMap.get(toolName) as ToolName[K];
        ex.enabled = true;
        ex.updateOptions(options);
        return ex;
    }

    const constructor = toolNameMap.get(toolName);
    if (!constructor) {
        console.error(`找不到工具 ${toolName} ,请检查工具名是否输入正确`);
        return;
    }

    const ex = new constructor(options) as ToolName[K];
    ex.enabled = true;
    toolMap.set(toolName, ex);

    return ex;
}

/**
 * 获得全局工具
 * @param toolName 工具名称
 * @returns 工具实例
 */
export function getGlobal<K extends keyof ToolOptions>(toolName: K): ToolName[K]
{
    return toolMap.get(toolName) as ToolName[K];
}