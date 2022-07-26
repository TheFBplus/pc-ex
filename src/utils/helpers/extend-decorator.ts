/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-21 16:10:55
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-26 17:29:42
 * @ 详情: 用于扩展pc类的装饰器
 */

/**
 * 带有构造函数的类型
 */
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
 * 转换类型 //TODO: 实现对输入参数的类型限制
 * @param obj 待转换对象
 * @returns 转换类型后的对象
 */
export function cast<T>(obj: any, type?: T): T
{
    return obj as T;
}

/**
 * 转换类型
 * @param obj 待转换对象
 * @param newType 要转换类型
 * @returns 转换类型后的对象
 */
export function castEX<T extends new (...args: any) => any>(newType: T, obj: any): InstanceType<T>
{
    return obj as InstanceType<T>;
}

/**
 * 扩展pc类 //TODO: 实现实例属性和静态成员扩展
 * @param extendClassName 扩展类名称
 * @returns 扩展类
 */
export function extendClass(extendClass: Type<any>): (target: any) => void
{
    // 扩展已有类
    return function (target: any): void
    {
        // 找到要扩展的类型原型链
        if (!extendClass.prototype) {
            console.error(`找不到要扩展的类，请检查类型是否在pc命名空间下。`)
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
                if (extendClass.prototype[fnName]) {
                    console.error(`${fnName.toString()} 方法已存在于类中，请更改方法名，否则此扩展方法不会生效！`);
                    return;
                }
                extendClass.prototype[fnName] = descriptor.value;
            }
            // 添加访问器
            else {
                if (descriptor.get || descriptor.set) {
                    if (Object.getOwnPropertyDescriptor(extendClass.prototype, fnName)) {
                        console.error(`${fnName.toString()} 属性已存在于类中，请更改属性名，否则此扩展属性不会生效！`);
                        return;
                    }
                    Object.defineProperty(extendClass.prototype, fnName, { get: descriptor.get, set: descriptor.set });
                }
            }
        });
    }
}