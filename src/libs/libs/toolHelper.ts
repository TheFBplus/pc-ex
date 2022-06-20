/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 16:09:29
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-20 15:40:01
 * @ 详情: 工具类扩展辅助
 */

import * as pc from "playcanvas";

// 保存全局tool
const toolMap: Map<string, Tool<unknown, unknown>> = new Map<string, Tool<unknown, unknown>>();

// 包含事件监听的新类型
interface ExEventHandler<EventType> extends Tool<unknown, EventType>
{
    on(eventName: EventType, linstener: Function, scope?: any): void;
    fire(eventName: EventType, ...args: any): void;
    off(eventName: EventType, linstener?: Function, scope?: any): void;
    has(eventName: EventType): boolean;
}

/**
 * 使用工具（创建一个工具实例）
 * @param tool 工具类
 * @param options 工具选项
 * @returns 工具实例
 */
export function use<ToolType extends Tool<Options, unknown>, Options>(tool: new (options?: Options) => ToolType, options?: Options): ToolType 
{
    const ex = new tool(options);
    ex.enabled = true;
    return ex;
}

/**
 * 使用全局工具（使用全局工具实例）
 * @param tool 工具类
 * @param options 工具选项
 * @returns 全局工具实例
 */
export function useGlobal<ToolType extends Tool<Options, unknown>, Options>(tool: new (options?: Options) => ToolType, options?: Options): ToolType 
{
    if (toolMap.get(tool.name)) {
        const ex = toolMap.get(tool.name);
        ex.enabled = true;
        ex.setOption(options);
        return ex as ToolType;
    }

    const ex = new tool(options);
    ex.enabled = true;
    toolMap.set(tool.name, ex);

    return ex;
}

export abstract class Tool<Options, EventsType>
{
    public eventHandler: ExEventHandler<EventsType>;

    private _enabled: boolean;

    /**
     * 创建新的工具实例
     */
    constructor()
    {
        pc.events.attach(this);
        this.eventHandler = this as unknown as ExEventHandler<EventsType>;
    }

    /**
     * 设置工具启用状态（触发启用和禁用时的额外操作）
     */
    public set enabled(value: boolean)
    {
        if (this._enabled === value) { return; }
        this._enabled = value;
        this._enabled ? this.onEnable() : this.onDisable();
    }
    /**
     * 获得工具的启用状态
     */
    public get enabled(): boolean
    {
        return this._enabled;
    }

    /**
     * 添加事件监听
     * @param eventName 监听事件名称
     * @param callback 回调
     * @param scope 范围
     */
    public addListener(eventName: EventsType, callback: Function, scope?: any): void
    {
        this.eventHandler.on(eventName, callback, scope);
    };

    /**
     * 移除事件监听
     * @param eventName 监听事件名称
     * @param callback 回调
     * @param scope 范围
     */
    public removeListener(eventName: EventsType, callback: Function, scope?: any): void
    {
        this.eventHandler.off(eventName, callback, scope);
    };

    /**
     * 设置选项
     * @param options 选项 
     */
    public abstract setOption(options: Options): void;

    protected abstract onEnable(): void;
    protected abstract onDisable(): void;
}