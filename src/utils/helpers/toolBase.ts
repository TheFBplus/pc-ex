/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 16:09:29
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-22 14:00:44
 * @ 详情: 工具类扩展辅助
 */

import * as pc from "playcanvas";

import { cast } from "./extend-decorator";

export abstract class Tool<Options extends { [optionName: string]: any }, EventsMap extends { [callbackName: string]: any }>
{
    public app: pc.AppBase;

    protected toolOptionsDefault: Options;
    public toolOptions: Options;

    private _enabled: boolean;

    /**
     * 创建新的工具实例
     */
    constructor()
    {
        this.app = pc.AppBase.getApplication();
        pc.events.attach(this);
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

    /**
     * 注册事件监听
     * @param eventName 事件名称
     * @param linstener 监听回调
     * @param scope 回调函数this指向
     * @returns EventHandler
     */
    public on<EventName extends keyof EventsMap>(eventName: EventName, linstener: EventsMap[EventName], scope?: object): pc.EventHandler
    {
        return cast<pc.EventHandler>(this).on(eventName as string, linstener, scope);
    }
    /**
     * 注册单次事件监听
     * @param eventName 事件名称
     * @param linstener 监听回调
     * @param scope 回调函数this指向
     * @returns EventHandler
     */
    public once<EventName extends keyof EventsMap>(eventName: EventName, linstener: EventsMap[EventName], scope?: object): pc.EventHandler
    {
        return cast<pc.EventHandler>(this).once(eventName as string, linstener, scope);
    }
    /**
     * 注销事件监听
     * @param eventName 事件名称
     * @param linstener 监听回调
     * @param scope 回调函数this指向
     * @returns EventHandler
     */
    public off<EventName extends keyof EventsMap>(eventName: EventName, linstener: EventsMap[EventName], scope?: object): pc.EventHandler
    {
        return cast<pc.EventHandler>(this).off(eventName as string, linstener, scope);
    }
    /**
     * 检测是否监听此事件
     * @param eventName 事件名称 
     * @returns 是否监听此事件
     */
    public hasEvent<EventName extends keyof EventsMap>(eventName: EventName): boolean
    {
        return cast<pc.EventHandler>(this).hasEvent(eventName as string);
    }
    /**
     * 手动触发事件
     * @param eventName 事件名称
     * @param arg1 参数1
     * @param arg2 参数2
     * @param arg3 参数3
     * @param arg4 参数4
     * @param arg5 参数5
     * @param arg6 参数6
     * @param arg7 参数7
     * @param arg8 参数8
     * @returns EventHandler
     */
    protected fire<EventName extends keyof EventsMap>(eventName: EventName, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): pc.EventHandler
    {
        return cast<pc.EventHandler>(this).fire(eventName as string, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
    }

    protected onEnable(): void { };
    protected onDisable(): void { };
}