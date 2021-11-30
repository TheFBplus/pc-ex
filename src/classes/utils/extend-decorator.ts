import * as pc from "playcanvas";

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
export function extendClass(extendClassName: string = null)
{
    // 创建新类，在pc命名空间下
    if (!extendClassName) {
        return function (target: any)
        {
            (pc as any).extend(pc, function ()
            {
                return { [target.name]: target };
            }());
        }
    }

    // 扩展已有类
    return function (target: any)
    {
        // 添加实例属性成员
        if (target.instancePrpts) {
            for (let prpt in target.instancePrpts) {
                (pc as any)[extendClassName].prototype[prpt] = target.instancePrpts[prpt];
            }
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
                (pc as any)[extendClassName].prototype[fnName] = descriptor.value;
            }
            // 添加访问器
            else {
                if (descriptor.get || descriptor.set) {
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

// 扩展实例属性
export function prpt(data: { default: any } = null)
{
    return function (target: any, propertyKey: string)
    {
        target.constructor.instancePrpts = target.constructor.instancePrpts || {};
        target.constructor.instancePrpts[propertyKey] = data ? data.default : null;
    }
}

// 创建新的工具类，放在指定命名空间下
export function newUtil(target: any)
{
    (pc as any)[target.name] = target;
}