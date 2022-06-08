/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-06 23:17:10
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-07 09:20:18
 * @ 详情: 类型转换
 */

/**
 * 转换类型
 * @param obj 待转换对象
 * @returns 转换类型后的对象
 */
export function cast<T>(obj: any)
{
    return obj as T;
}