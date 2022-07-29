/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-07-09 10:35:55
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-28 09:33:13
 * @ 详情: 通用输入事件-回调表
 */

/**
 * 输入事件-回调表
 */
export interface InputEventsMap
{
    down: (event: { x: number, y: number }) => any;
    move: (evemt: { x: number, y: number, dx: number, dy: number }) => any;
    click: (event: { x: number, y: number }) => any;
    up: (event: { x: number, y: number }) => any;
    pinch: (event: { delta: number, event: MouseEvent }) => any;
    dragging: (event: { x: number, y: number, dx: number, dy: number, ox: number, oy: number }) => any;
    dragEnd: (event: { x: number, y: number }) => any;
}