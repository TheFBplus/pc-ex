import * as pc from "playcanvas";

import { Filter, IattributesBinder } from "./filter";

/**
 * Class decorator allowing the use of ES6 classes
 * to define and create PlayCanvas script types.
 * Caveat is: There is a slight iterative runtime overhead to this. (unlike Haxe which can utilize precompiled-macros)
 * The cool thing is that your script (if it uses properties) has an additional property called `attributesData` that can facilitate offboard property reflection/runtime-component
 * property GUI creation.
 * @param {pc.Application} [app]
 */
export function createScript(name: string)
{
    return function (obj: any)
    {
        const instance = new obj();
        const script: any = pc.createScript(name);

        // 确保非undefined
        if (!instance.attributesData) {
            instance.attributesData = {};
        }

        // Add public attributes accessible in the editor
        if (instance.attributesData) {
            for (let attr in instance.attributesData) {
                script.attributes.add(attr, instance.attributesData[attr])
            }
        }
        // Add instance properties and methods to prototype
        let proto = script.prototype;
        for (let prop in instance) {
            if (prop !== 'attributes' && !instance.attributesData[prop]) {
                proto[prop] = instance[prop];
            }
        }

        // Add static properties
        for (let prop in obj) {
            script[prop] = obj[prop];
        }
    }
}

export function attr<T>(params: AttributeParams): any
{
    return function (target: ScriptTypeBase, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): any
    {
        if (!target.attributesData) {
            target.attributesData = {};
        }
        target.attributesData[propertyKey] = params;
    }
};

// A duplicate copy of the inline type definition in Playcanvas attributes.add(param1...)
export type AttributeParams = {
    type: "boolean" | "number" | "string" | "json" | "asset" | "entity" | "rgb" | "rgba" | "vec2" | "vec3" | "vec4" | "curve";
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
};

/**
 * Base dummy duplicated pc.ScriptType class to be extended when defining.
 * All parameters and useful event-based methods made optional to avoid inadvertedly extending them or having to define them.
 * Caveat is: tsconfig.json needs to be set to: "strictNullChecks": false
 * @export
 * @class ScriptTypeBase
 */
export class ScriptTypeBase
{

    // custom holder to contain attributesData used for initialization of attributes
    attributesData?: { [key: string]: AttributeParams }

    // -- PLAYCANVAS stuff from here onwards

    // lifecycle methods
    /**
     * @function
     * @name pc.ScriptType#[initialize]
     * @description Called when script is about to run for the first time.
     */
    initialize?(): void;
    /**
     * @function
     * @name pc.ScriptType#[postInitialize]
     * @description Called after all initialize methods are executed in the same tick or enabling chain of actions.
     */
    postInitialize?(): void;
    /**
     * @function
     * @name pc.ScriptType#[update]
     * @description Called for enabled (running state) scripts on each tick.
     * @param {number} dt - The delta time in seconds since the last frame.
     */
    update?(dt: number): void;
    /**
     * @function
     * @name pc.ScriptType#[postUpdate]
     * @description Called for enabled (running state) scripts on each tick, after update.
     * @param {number} dt - The delta time in seconds since the last frame.
     */
    postUpdate?(dt: number): void;
    /**
     * @function
     * @name pc.ScriptType#[swap]
     * @description Called when a ScriptType that already exists in the registry
     * gets redefined. If the new ScriptType has a `swap` method in its prototype,
     * then it will be executed to perform hot-reload at runtime.
     */
    swap?(): void;
    /**
     * @function
     * @name pc.EventHandler#on
     * @description Attach an event handler to an event.
     * @param {string} name - Name of the event to bind the callback to.
     * @param {pc.callbacks.HandleEvent} callback - Function that is called when event is fired. Note the callback is limited to 8 arguments.
     * @param {object} [scope] - Object to use as 'this' when the event is fired, defaults to current this.
     * @returns {pc.EventHandler} Self for chaining.
     * @example
     * obj.on('test', function (a, b) {
     *     console.log(a + b);
     * });
     * obj.fire('test', 1, 2); // prints 3 to the console
     */

    // attributes
    readonly attributes: pc.ScriptAttributes;

    // Events (modded to be optional below to get it to run!)
    /**
     * @readonly
     * @static
     * @function
     * @name pc.ScriptType.extend
     * @param {object} methods - Object with methods, where key - is name of method, and value - is function.
     * @description Shorthand function to extend Script Type prototype with list of methods.
     * @example
     * var PlayerController = pc.createScript('playerController');
     *
     * PlayerController.extend({
     *     initialize: function () {
     *         // called once on initialize
     *     },
     *     update: function (dt) {
     *         // called each tick
     *     }
     * });
     */
    /**
     * @function
     * @name pc.ScriptType#[initialize]
     * @description Called when script is about to run for the first time.
     */
    on?(name: string, callback: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler;
    /**
     * @function
     * @name pc.EventHandler#off
     * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
     * if scope is not provided then all events with the callback will be unbound.
     * @param {string} [name] - Name of the event to unbind.
     * @param {pc.callbacks.HandleEvent} [callback] - Function to be unbound.
     * @param {object} [scope] - Scope that was used as the this when the event is fired.
     * @returns {pc.EventHandler} Self for chaining.
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
    off?(name?: string, callback?: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler;
    /**
     * @function
     * @name pc.EventHandler#fire
     * @description Fire an event, all additional arguments are passed on to the event listener.
     * @param {object} name - Name of event to fire.
     * @param {*} [arg1] - First argument that is passed to the event handler.
     * @param {*} [arg2] - Second argument that is passed to the event handler.
     * @param {*} [arg3] - Third argument that is passed to the event handler.
     * @param {*} [arg4] - Fourth argument that is passed to the event handler.
     * @param {*} [arg5] - Fifth argument that is passed to the event handler.
     * @param {*} [arg6] - Sixth argument that is passed to the event handler.
     * @param {*} [arg7] - Seventh argument that is passed to the event handler.
     * @param {*} [arg8] - Eighth argument that is passed to the event handler.
     * @returns {pc.EventHandler} Self for chaining.
     * @example
     * obj.fire('test', 'This is the message');
     */
    fire?(name: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any, arg7?: any, arg8?: any): pc.EventHandler;
    /**
     * @function
     * @name pc.EventHandler#once
     * @description Attach an event handler to an event. This handler will be removed after being fired once.
     * @param {string} name - Name of the event to bind the callback to.
     * @param {pc.callbacks.HandleEvent} callback - Function that is called when event is fired. Note the callback is limited to 8 arguments.
     * @param {object} [scope] - Object to use as 'this' when the event is fired, defaults to current this.
     * @returns {pc.EventHandler} Self for chaining.
     * @example
     * obj.once('test', function (a, b) {
     *     console.log(a + b);
     * });
     * obj.fire('test', 1, 2); // prints 3 to the console
     * obj.fire('test', 1, 2); // not going to get handled
     */
    once?(name: string, callback: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler;
    /**
     * @function
     * @name pc.EventHandler#hasEvent
     * @description Test if there are any handlers bound to an event name.
     * @param {string} name - The name of the event to test.
     * @returns {boolean} True if the object has handlers bound to the specified event name.
     * @example
     * obj.on('test', function () { }); // bind an event to 'test'
     * obj.hasEvent('test'); // returns true
     * obj.hasEvent('hello'); // returns false
     */
    hasEvent?(name: string): boolean;

    /**
     * The {@link pc.Application} that the instance of this type
     * belongs to.
    */
    app: pc.Application;
    /**
     * The {@link pc.Entity} that the instance of this type belongs to.
    */
    entity: pc.Entity;
    /**
     * True if the instance of this type is in running state. False
     * when script is not running, because the Entity or any of its parents are disabled or the
     * Script Component is disabled or the Script Instance is disabled. When disabled no update
     * methods will be called on each tick. initialize and postInitialize methods will run once
     * when the script instance is in `enabled` state during app tick.
    */
    enabled: boolean;

    /**
     * @description: 给这个脚本挂载的相机添加滤镜
     * @param {Filter} filter 滤镜
     */
    addFilters?(filter: Filter): void
    {
        const camera = this.entity.camera;
        if (!camera) {
            console.error("后期脚本必须绑定在相机上");
            return;
        }

        const queue = camera.postEffects;
        queue.addEffect(filter);

        this.on("attr", (name, value) =>
        {
            if (!filter.binbMap) return;
            let key = filter.binbMap.get(name);
            if (!key) return;
            filter.args[key].value = value;
        });
        this.on("state", (enabled) =>
        {
            if (enabled) {
                queue.addEffect(filter);
            } else {
                queue.removeEffect(filter);
            }
        });
        this.on("destroy", () =>
        {
            queue.removeEffect(filter);
        });
    }

    /**
     * @description: 绑定此脚本属性到滤镜并根据属性实时更新
     * @param {string} attrName 要绑定的属性名
     */
    bindAttribute?(attrName: string): IattributesBinder
    {
        return { name: attrName, value: eval(`this.${attrName}`) };
    }
}