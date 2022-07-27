/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-21 17:38:14
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-27 11:11:28
 * @ 详情: 通用类型和接口
 */

/**
 * 根据实例类型获取类类型
 */
export type Constructor<T> = new (...args: any) => T;

/**
 * 确保此类型是可构造的
 */
export interface Constructable<T extends new (...args: any) => InstanceType<T>>
{
    new(...args: any): InstanceType<T>;
}