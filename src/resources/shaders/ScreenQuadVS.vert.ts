/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-22 13:33:49
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-02 00:24:02
 * @ 详情: 在屏幕空间上画矩形的shander
 */

const ScreenQuadVS = `

attribute vec3 aPosition; // 顶点位置

void main(void)
{
    // 直接将顶点坐标作为屏幕坐标，通过改变顶点坐标来控制屏幕上矩形的显示
    gl_Position = vec4(aPosition.xy,0.0,1.0);
}

`;

export default ScreenQuadVS;