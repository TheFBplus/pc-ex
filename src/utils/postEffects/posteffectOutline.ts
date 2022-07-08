/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-07 16:06:56
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 16:08:53
 * @ 详情: 描边特效
 */

import * as pc from "playcanvas";

// 描边特效参数
interface OutlineEffectOption
{
    outlineLayer: pc.Layer,
    color: pc.Color,
    thickness: number
}

// 描边特效
export class PostEffectOutline extends pc.PostEffect
{
    private texture: pc.Texture;
    private colorData: Float32Array;
    private outlineLayer: pc.Layer;

    /**
     * 创建描边特效
     * @param graphicsDevice 当前app的graphicsDevice
     * @param option 描边设置
     * @param option.outlineLayer 描边Layer，用于从中读取描边相机的内容
     * @param option.color 描边颜色
     * @param option.thickness 描边粗细
     */
    constructor(graphicsDevice: pc.GraphicsDevice, option: OutlineEffectOption)
    {
        super(graphicsDevice);

        this.shader = new pc.Shader(graphicsDevice, {
            attributes: {
                aPosition: pc.SEMANTIC_POSITION
            },
            vshader: [
                "attribute vec2 aPosition;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = vec4(aPosition, 0.0, 1.0);",
                "    vUv0 = (aPosition.xy + 1.0) * 0.5;",
                "}"
            ].join("\n"),
            fshader: [
                "precision " + graphicsDevice.precision + " float;",
                "",
                "#define THICKNESS " + (option.thickness ? option.thickness.toFixed(0) : 1),
                "uniform float uWidth;",
                "uniform float uHeight;",
                "uniform vec4 uOutlineCol;",
                "uniform sampler2D uColorBuffer;",
                "uniform sampler2D uOutlineTex;",
                "",
                "varying vec2 vUv0;",
                "",
                "void main(void)",
                "{",
                "    vec4 texel1 = texture2D(uColorBuffer, vUv0);",
                "    float sample0 = texture2D(uOutlineTex, vUv0).a;",
                "    float outline = 0.0;",
                "    if (sample0==0.0)",
                "    {",
                "        for (int x=-THICKNESS;x<=THICKNESS;x++)",
                "        {",
                "            for (int y=-THICKNESS;y<=THICKNESS;y++)",
                "            {    ",
                "                float sample=texture2D(uOutlineTex, vUv0+vec2(float(x)/uWidth, float(y)/uHeight)).a;",
                "                if (sample>0.0)",
                "                {",
                "                    outline=1.0;",
                "                }",
                "            }",
                "        } ",
                "    }",
                "    gl_FragColor = mix(texel1, uOutlineCol, outline * uOutlineCol.a);",
                "}"
            ].join("\n")
        });

        this.colorData = new Float32Array([option.color.r, option.color.g, option.color.b, option.color.a]);
        this.texture = option.outlineLayer.renderTarget.colorBuffer;
        this.outlineLayer = option.outlineLayer;
    }

    /**
     * 渲染函数，由引擎自动每帧调用
     * @param inputTarget 引擎输入renderTaget，为当前的渲染画面
     * @param outputTarget 引擎输出的renderTarget，即经过后期处理之后的画面
     * @param rect 引擎传入的矩形，用来表示整个屏幕的范围
     */
    render(inputTarget: pc.RenderTarget, outputTarget: pc.RenderTarget, rect: pc.Vec4): void
    {
        var device = this.device;
        var scope = device.scope;

        scope.resolve("uWidth").setValue(inputTarget.width); // 设置uWidth为整个屏幕的宽
        scope.resolve("uHeight").setValue(inputTarget.height); // 设置uHeight为整个屏幕的高
        scope.resolve("uOutlineCol").setValue(this.colorData); // 设置uOutlineCol为描边颜色
        scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer); // 设置uColorBuffer为相机的colorBuffer
        scope.resolve("uOutlineTex").setValue(this.texture); // 设置uOutlineTex，此处应将只渲染描边layer的相机的内容传入
        pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect); // 用渲染结果覆盖整个屏幕，实现后期效果
    }

    /**
     * 刷新特效，一般用于窗口尺寸改变时
     */
    refresh(): void
    {
        this.texture = this.outlineLayer.renderTarget.colorBuffer;
    }
}