/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-25 17:58:39
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-27 11:21:35
 * @ 详情: 脚本创建装饰器
 */

import * as pc from "playcanvas";

import { Constructor } from "../common/TypesAndInterfaces";

// 排除的实例成员名称
const exceptInstanceMemberNames = [
    "_attributesData", "attributes", "app", "entity", "enabled"
];

// 排除的原型成员名称
const exceptPrototypeMemberNames = [
    "constructor", "_attributesData"
];

// 排除的静态成员名称
const exceptStaticMemberNames = [
    "length", "name", "prototype", "scriptName"
];

/**
 * 脚本属性数据模板
 */
type AttributeParams = {
    type: ("boolean" | "number" | "string" | "json" | "asset" | "entity" | "rgb" | "rgba" | "vec2" | "vec3" | "vec4" | "curve");
    default?: any;
    title?: string;
    description?: string;
    placeholder?: string | string[];
    array?: boolean;
    size?: number;
    min?: number;
    max?: number;
    precision?: number;
    step?: number;
    assetType?: string;
    curves?: string[];
    color?: string;
    enum?: object[];
    schema?: object[];
};

/**
 * 获得该类所有原型成员的名称数组
 * @param value 类型
 * @returns 该类所有原型成员的名称数组
 */
function getPrototypeMemberNames<T>(value: Constructor<T>)
{
    return Reflect.ownKeys(value.prototype);
}

/**
 * 获得该类所有静态成员的名称数组
 * @param value 类型
 * @returns 该类所有静态成员的名称数组
 */
function getStaticMemberNames<T>(value: Constructor<T>)
{
    return Reflect.ownKeys(value);
}

/**
 * 获得实例成员的名称数组
 * @param value 实例 
 * @returns 该实例的所有实例成员的名称数组
 */
function getInstanceMemberNames(value: object)
{
    return Reflect.ownKeys(value);
}

/**
 * 创建脚本装饰器
 * @param name 脚本名称
 */
export function createScript(name: string): (target: typeof ScriptTypeBase) => void
{
    return function (target: typeof ScriptTypeBase): void
    {
        // 设置脚本名称
        target.scriptName = name;

        const instance = new target();
        const script: any = pc.createScript(name);

        // 暴露属性到编辑器中显示
        if (instance.attributesData) {
            for (let attr in instance.attributesData) {
                script.attributes.add(attr, instance.attributesData[attr])
            }
        }

        /* --------------------------------------------------- 新方法 -------------------------------------------------- */

        // 添加实例成员
        const instanceMemberNames = getInstanceMemberNames(instance);
        instanceMemberNames.forEach(instanceMemberName =>
        {
            if (exceptInstanceMemberNames.includes(instanceMemberName as string) || instance.attributesData[instanceMemberName as string]) { return; }

            const descriptor = Object.getOwnPropertyDescriptor(instance, instanceMemberName);
            if (descriptor?.value) {
                // console.log("添加实例成员", instanceMemberName, descriptor.value);
                script.prototype[instanceMemberName] = descriptor.value;
            }
        });

        // 添加原型成员
        const prototypeMemberNames = getPrototypeMemberNames(target);
        prototypeMemberNames.forEach(prototypeMemberName =>
        {
            if (exceptPrototypeMemberNames.includes(prototypeMemberName as string)) { return; }

            // 获得成员
            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, prototypeMemberName);
            // 添加方法成员
            if (descriptor?.value) {
                // console.log("添加原型方法", prototypeMemberName, descriptor.value);
                script.prototype[prototypeMemberName] = descriptor.value;
            }
            // 添加访问器
            else {
                if (descriptor?.get || descriptor?.set) {
                    // console.log("添加原型访问器", prototypeMemberName, descriptor.get, descriptor.set);
                    Object.defineProperty(script.prototype, prototypeMemberName, { get: descriptor?.get, set: descriptor?.set });
                }
            }
        });

        // 添加静态成员
        const staticMemberNames = getStaticMemberNames(target);
        staticMemberNames.forEach(staticMemberName =>
        {
            if (exceptStaticMemberNames.includes(staticMemberName as string)) { return; }

            const descriptor = Object.getOwnPropertyDescriptor(target, staticMemberName);
            if (descriptor?.value) {
                // console.log("添加静态成员", staticMemberName, descriptor.value);
                script[staticMemberName] = descriptor?.value;
            }
        });

        /* ------------------------------------------------ 原始方法，已失效 ------------------------------------------------ */
        // // Add instance properties and methods to prototype
        // let proto = script.__proto__;
        // for (let prop in instance) {
        //     if (prop !== 'attributes' && !instance.attributesData[prop]) {
        //         console.log("add prop", prop);
        //         proto[prop] = instance[prop];
        //     }
        // }

        // // Add static properties
        // for (let prop in obj) {
        //     console.log("add staic", prop);
        //     script[prop] = obj[prop];
        // }
    }
}

/**
 * 便捷添加脚本属性数据
 * @param params 脚本属性对应数据
 */
export function attr<T>(params: AttributeParams): any
{
    return function (target: ScriptTypeBase, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): any
    {
        target.attributesData[propertyKey] = params;
    }
};

/**
 * 扩展脚本类
 */
export class ScriptTypeBase
{
    /**
     * 此脚本的名称
     */
    public static scriptName: string;

    /**
     * 脚本属性设置
     */
    private _attributesData: { [key: string]: AttributeParams };
    public get attributesData(): { [key: string]: AttributeParams }
    {
        return this._attributesData || (this._attributesData = {});
    };

    /**
     * 脚本属性
     */
    readonly attributes: pc.ScriptAttributes;

    /**
     * 此脚本所在的app实例
     */
    app: pc.AppBase;

    /**
     * 此脚本所附加到的物体
     */
    entity: pc.Entity;

    /**
     * 此脚本是否运行
     */
    enabled: boolean;

    // 生命周期方法
    /**
     * Called when script is about to run for the first time.
     */
    initialize?(): void;
    /**
     * Called after all initialize methods are executed in the same tick or enabling chain of actions.
     */
    postInitialize?(): void;
    /**
     * Called for enabled (running state) scripts on each tick.
     * @param dt The delta time in seconds since the last frame.
     */
    update?(dt: number): void;
    /**
     * Called for enabled (running state) scripts on each tick, after update.
     * @param dt The delta time in seconds since the last frame.
     */
    postUpdate?(dt: number): void;
    /**
     * Called when a ScriptType that already exists in the registry
     * gets redefined. If the new ScriptType has a `swap` method in its prototype,
     * then it will be executed to perform hot-reload at runtime.
     */
    swap?(): void;
    /**
     * Attach an event handler to an event.
     * @param name Name of the event to bind the callback to.
     * @param callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
     * @param scope Object to use as 'this' when the event is fired, defaults to current this.
     * @returns Self for chaining.
     * @example
     * obj.on('test', function (a, b) {
     *     console.log(a + b);
     * });
     * obj.fire('test', 1, 2); // prints 3 to the console
     */
    on?(name: string, callback: pc.HandleEventCallback, scope?: any): pc.EventHandler;
    /**
     * Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
     * if scope is not provided then all events with the callback will be unbound.
     * @param name Name of the event to unbind.
     * @param callback Function to be unbound.
     * @param scope Scope that was used as the this when the event is fired.
     * @returns Self for chaining.
     * @example
     * var handler = function () {
     * };
     * obj.on('test', handler);
     *
     * obj.off(); // Removes all events
     * obj.off('test'); // Removes all events called 'test'
     * obj.off('test', handler); // Removes all handler functions, called 'test'
     * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
     */
    off?(name?: string, callback?: pc.HandleEventCallback, scope?: any): pc.EventHandler;
    /**
     * Fire an event, all additional arguments are passed on to the event listener.
     * @param name Name of event to fire.
     * @param arg1 First argument that is passed to the event handler.
     * @param arg2 Second argument that is passed to the event handler.
     * @param arg3 Third argument that is passed to the event handler.
     * @param arg4 Fourth argument that is passed to the event handler.
     * @param arg5 Fifth argument that is passed to the event handler.
     * @param arg6 Sixth argument that is passed to the event handler.
     * @param arg7 Seventh argument that is passed to the event handler.
     * @param arg8 Eighth argument that is passed to the event handler.
     * @returns Self for chaining.
     * @example
     * obj.fire('test', 'This is the message');
     */
    fire?(name: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): pc.EventHandler;
    /**
     * Attach an event handler to an event. This handler will be removed after being fired once.
     * @param name Name of the event to bind the callback to.
     * @param callback Function that is called when event is fired. Note the callback is limited to 8 arguments.
     * @param scope Object to use as 'this' when the event is fired, defaults to current this.
     * @returns Self for chaining.
     * @example
     * obj.once('test', function (a, b) {
     *     console.log(a + b);
     * });
     * obj.fire('test', 1, 2); // prints 3 to the console
     * obj.fire('test', 1, 2); // not going to get handled
     */
    once?(name: string, callback: pc.HandleEventCallback, scope?: any): pc.EventHandler;
    /**
     * Test if there are any handlers bound to an event name.
     * @param name The name of the event to test.
     * @returns True if the object has handlers bound to the specified event name.
     * @example
     * obj.on('test', function () { }); // bind an event to 'test'
     * obj.hasEvent('test'); // returns true
     * obj.hasEvent('hello'); // returns false
     */
    hasEvent?(name: string): boolean;
}