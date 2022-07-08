/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-21 16:10:55
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-06 16:49:30
 * @ 详情: 用于扩展pc类的装饰器
 */

import * as pc from "playcanvas";

interface Type<T> extends Function
{
    new(...args: any[]): T;
}

/**
 * 获得该类所有原型方法
 * @param value 类型
 * @returns 该类所有原型方法
 */
function cls<T>(value: Type<T>)
{
    return Reflect.ownKeys(value.prototype);
}

/**
 * 可扩展类型
 */
export interface ExtendClassName
{
    Application: pc.Application,
    CameraComponent: pc.CameraComponent,
    Color: pc.Color,
    Curve: pc.Curve,
    ElementComponent: pc.ElementComponent,
    Entity: pc.Entity,
    MeshInstance: pc.MeshInstance,
    Quat: pc.Quat,
    Ray: pc.Ray,
    Texture: pc.Texture,
    Vec2: pc.Vec2,
    Vec3: pc.Vec3,
    Vec4: pc.Vec4
};

/**
 * 转换类型
 * @param obj 待转换对象
 * @returns 转换类型后的对象
 */
export function cast<T>(obj: any)
{
    return obj as T;
}

/**
 * 扩展pc类
 * @param extendClassName 扩展类名称
 * @returns 扩展类
 */
export function extendClass(extendClassName: keyof ExtendClassName): (target: any) => void
{
    const playcanvasMoudle = pc as any;
    // 扩展已有类
    return function (target: any)
    {
        // 找到要扩展的类型原型链
        if (!playcanvasMoudle[extendClassName]?.prototype) {
            console.error(`找不到要扩展的类，请检查类型 ${extendClassName} 是否在pc命名空间下。`)
            return;
        }

        // 添加实例函数成员
        const functions = cls(target);
        functions.forEach(fnName =>
        {
            // 不添加构造函数
            if (fnName == "constructor") {
                return;
            }

            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, fnName);
            // 添加方法成员
            if (descriptor.value) {
                if (playcanvasMoudle[extendClassName].prototype[fnName]) {
                    console.error(`${fnName.toString()} 方法已存在于 ${extendClassName} 类中，请更改方法名，否则此扩展方法不会生效！`);
                    return;
                }
                playcanvasMoudle[extendClassName].prototype[fnName] = descriptor.value;
            }
            // 添加访问器
            else {
                if (descriptor.get || descriptor.set) {
                    if (Object.getOwnPropertyDescriptor(playcanvasMoudle[extendClassName].prototype, fnName)) {
                        console.error(`${fnName.toString()} 属性已存在于 ${extendClassName} 类中，请更改属性名，否则此扩展属性不会生效！`);
                        return;
                    }
                    Object.defineProperty(playcanvasMoudle[extendClassName].prototype, fnName, { get: descriptor.get, set: descriptor.set });
                }
            }
        });

        // 添加静态成员
        for (let prop in target) {
            playcanvasMoudle[extendClassName][prop] = target[prop];
        }
    }
}