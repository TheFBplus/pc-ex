/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 16:09:29
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-20 09:35:29
 * @ 详情: 工具类扩展辅助
 */

import * as pc from "playcanvas";

import GlobalVariables from "../common/GlobalVariables";

// 包含事件监听的新类型
interface ExEventHandler<EventsMap> extends Tool<any, EventsMap>
{
    on<K extends keyof EventsMap>(eventName: K, linstener: EventsMap[K], scope?: any): void;
    off<K extends keyof EventsMap>(eventName: K, linstener: EventsMap[K], scope?: any): void;
    fire<K extends keyof EventsMap>(eventName: K, ...args: any): void;
    has<K extends keyof EventsMap>(eventName: K): boolean;
}

export abstract class Tool<Options extends { [index: string]: any }, EventsMap extends { [index: string]: any }>
{
    public app: pc.AppBase;
    public eventHandler: ExEventHandler<EventsMap>;

    protected toolOptionsDefault: Options;
    public toolOptions: Options;

    private _enabled: boolean;

    /**
     * 创建新的工具实例
     */
    constructor()
    {
        pc.events.attach(this);
        this.app = GlobalVariables.app;
        this.eventHandler = this as any as ExEventHandler<EventsMap>;

        this.enabled = true;
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
    public addListener<K extends keyof EventsMap>(eventName: K, callback: EventsMap[K], scope?: any): void
    {
        this.eventHandler.on(eventName, callback, scope);
    };

    /**
     * 移除事件监听
     * @param eventName 监听事件名称
     * @param callback 回调
     * @param scope 范围
     */
    public removeListener<K extends keyof EventsMap>(eventName: K, callback: EventsMap[K], scope?: any): void
    {
        this.eventHandler.off(eventName, callback, scope);
    };

    /**
     * 设置选项
     * @param options 选项 
     */
    public setOptions(options: Options): void
    {
        this.toolOptions = { ...options };
        Object.keys(this.toolOptionsDefault).forEach(key =>
        {
            (this.toolOptions as any)[key] = this.toolOptions[key] ?? this.toolOptionsDefault[key];
        });
    };

    /**
     * 更新选项
     * @param options 选项
     */
    public updateOptions(options: { [P in keyof Options]?: Options[P] }): void
    {
        Object.keys(options).forEach(key =>
        {
            (this.toolOptions as any)[key] = options[key];
        });
    };

    protected onEnable(): void { };
    protected onDisable(): void { };
}