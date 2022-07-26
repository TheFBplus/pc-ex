/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-18 15:30:31
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-26 16:30:14
 * @ 详情: 通过装饰器便捷创建脚本
 */

import * as pc from "playcanvas";

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
 * 脚本属性类型
 */
export type AttributeParamsType<Attrs> = { [K in keyof Attrs]: AttributeParams };

/**
 * 便捷添加脚本
 * @param name 脚本名称
 * @param attrs 脚本属性定义
 */
export function createScriptEX<Attrs>(name: string, attrs: AttributeParamsType<Attrs>)
{
    return function (target: typeof ScriptTypeEX<any>)
    {
        // 注册脚本
        pc.registerScript(target, name);

        // 添加属性
        for (let attr in attrs) {
            target.attributes.add(attr, attrs[attr]);
        }
    }
}

/**
 * 便捷添加脚本属性数据
 * @param params 脚本属性对应数据
 */
export function attrEX<T>(params: AttributeParams): any
{
    return function (target: pc.ScriptType, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): any
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
export class ScriptTypeEX<Attrs> extends pc.ScriptType
{
    /**
     * 获得脚本属性
     */
    protected get attrs(): Attrs
    {
        return (this as any).__attributes;
    };

    /**
     * 添加脚本属性监听
     * @param propertyName 脚本属性名称
     * @param callback 属性变化回调函数
     * @param scope 回调函数this指向
     */
    public onAttr<K extends keyof Attrs>(propertyName: K, callback: (value: Attrs[K], preValue: Attrs[K]) => any, scope?: object): void
    {
        this.on(`attr:${propertyName.toString()}`, callback, scope);
    }
}
