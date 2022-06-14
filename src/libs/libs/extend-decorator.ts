/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-21 16:10:55
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-14 15:51:32
 * @ 详情: 用于扩展pc类的装饰器
 */

import * as pc from "playcanvas";

type extendClass = "CameraComponent" | "Color" | "Curve" | "ElementComponent" |
    "Entity" | "MeshInstance" | "Quat" | "Ray" |
    "Texture" | "Vec2" | "Vec3" | "Vec4";

interface Type<T> extends Function
{
    new(...args: any[]): T;
}

// 获得该类所有原型方法
function cls<T>(value: Type<T>)
{
    return Reflect.ownKeys(value.prototype);
}

// 扩展pc类，若类名为空，则在pc命名空间下创建新类
export function extend(extendClassName?: extendClass)
{
    // 创建新类，在pc命名空间下
    if (!extendClassName) {
        return function (target: any)
        {
            if ((pc as any)[target.name]) {
                console.error(`${target.name} 类已存在与pc下，请更改类名，否则此扩展类不会生效！`);
                return;
            }

            (pc as any).extend(pc, function ()
            {
                return { [target.name]: target };
            }());
        }
    }

    // 扩展已有类
    return function (target: any)
    {
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
                if ((pc as any)[extendClassName].prototype[fnName]) {
                    console.error(`${fnName.toString()} 方法已存在于 ${extendClassName} 类中，请更改方法名，否则此扩展方法不会生效！`);
                    return;
                }
                (pc as any)[extendClassName].prototype[fnName] = descriptor.value;
            }
            // 添加访问器
            else {
                if (descriptor.get || descriptor.set) {
                    if (Object.getOwnPropertyDescriptor((pc as any)[extendClassName].prototype, fnName)) {
                        console.error(`${fnName.toString()} 属性已存在于 ${extendClassName} 类中，请更改属性名，否则此扩展属性不会生效！`);
                        return;
                    }
                    Object.defineProperty((pc as any)[extendClassName].prototype, fnName, { get: descriptor.get, set: descriptor.set });
                }
            }
        });

        // 添加静态成员
        for (let prop in target) {
            (pc as any)[extendClassName][prop] = target[prop];
        }
    }
}

// 创建新的工具类，放在指定命名空间下
export function newUtil(target: any)
{
    if ((pc as any)[target.name]) {
        console.error(`${target.name} 类已存在与pc下，请更改类名，否则此扩展类不会生效！`);
        return;
    }
    (pc as any)[target.name] = target;
}