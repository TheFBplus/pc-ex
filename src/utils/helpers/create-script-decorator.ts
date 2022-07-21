/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-18 15:30:31
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-21 13:53:54
 * @ 详情: 通过装饰器便捷创建脚本
 */

import * as pc from "playcanvas";

/**
 * 脚本属性数据模板
 */
export type AttributeParams = {
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
 * 便捷添加脚本
 * @param name 脚本名称
 */
export function createScript(name: string)
{
    return function (target: typeof pc.ScriptType | typeof ScriptTypeBase)
    {
        // 注册脚本
        pc.registerScript(target, name);

        // 添加属性
        const attributesData = (target as any).attributesData;
        if (attributesData) {
            for (let attr in attributesData) {
                target.attributes.add(attr, attributesData[attr]);
            }
        }
    }
}

/**
 * 便捷添加脚本属性数据
 * @param params 脚本属性对应数据
 */
export function attr<T>(params: AttributeParams): any
{
    return function (target: pc.ScriptType | ScriptTypeBase, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): any
    {
        if (!(target as any).constructor.attributesData) {
            (target as any).constructor.attributesData = {};
        }
        (target as any).constructor.attributesData[propertyKey] = params;
    }
};

/**
 * 扩展脚本类
 */
export class ScriptTypeBase extends pc.ScriptType
{
    /**
     * 添加脚本属性监听
     * @param propertyName 脚本属性名称
     * @param callback 属性变化回调函数
     * @param scope 回调函数this指向
     */
    public addPropertyListener<K extends keyof this>(propertyName: K, callback: (value: this[K], preValue: this[K]) => any, scope?: object): void
    {
        this.on(`attr:${propertyName.toString()}`, callback, scope);
    }
}
