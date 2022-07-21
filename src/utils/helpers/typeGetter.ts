/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-21 17:38:14
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-21 17:38:48
 * @ 详情: 类型获取器
 */

export type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
