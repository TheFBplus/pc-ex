/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-04-22 10:00:25
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-22 17:01:22
 * @ 详情: runtime transform handle的相关材质
 */

import * as pc from "playcanvas";

// 自定义endPS，去除环境光对材质颜色的影响
export const noAmbientEndPS = `
    dDiffuseLight = vec3(0.0);
#ifdef CLEARCOAT
    gl_FragColor.rgb = combineColorCC();
#else
    gl_FragColor.rgb = combineColor();
#endif 
    gl_FragColor.rgb += getEmission();
    gl_FragColor.rgb = addFog(gl_FragColor.rgb);
#ifndef HDR
    gl_FragColor.rgb = toneMap(gl_FragColor.rgb);
    gl_FragColor.rgb = gammaCorrectOutput(gl_FragColor.rgb);
#endif
`;

// x轴材质
const axisXMat = new pc.StandardMaterial();
axisXMat.chunks.endPS = noAmbientEndPS;
axisXMat.blendType = pc.BLEND_NORMAL;
axisXMat.opacity = 1;
axisXMat.emissive.set(1, 0, 0);
axisXMat.useLighting = false;
axisXMat.useSkybox = false;
axisXMat.depthTest = false;
axisXMat.update();

// y轴材质
const axisYMat = new pc.StandardMaterial();
axisYMat.chunks.endPS = noAmbientEndPS;
axisYMat.blendType = pc.BLEND_NORMAL;
axisYMat.opacity = 1;
axisYMat.emissive.set(0, 1, 0);
axisYMat.useLighting = false;
axisYMat.useSkybox = false;
axisYMat.depthTest = false;
axisYMat.update();

// z轴材质
const axisZMat = new pc.StandardMaterial();
axisZMat.chunks.endPS = noAmbientEndPS;
axisZMat.blendType = pc.BLEND_NORMAL;
axisZMat.opacity = 1;
axisZMat.emissive.set(0, 0, 1);
axisZMat.useLighting = false;
axisZMat.useSkybox = false;
axisZMat.depthTest = false;
axisZMat.update();

// x平面材质
const planXMat = new pc.StandardMaterial();
planXMat.chunks.endPS = noAmbientEndPS;
planXMat.emissive.set(1, 0, 0);
planXMat.blendType = pc.BLEND_NORMAL;
planXMat.opacity = 0.3;
planXMat.useLighting = false;
planXMat.useSkybox = false;
planXMat.depthTest = false;
planXMat.cull = pc.CULLFACE_NONE;
planXMat.update();

// y平面材质
const planYMat = new pc.StandardMaterial();
planYMat.chunks.endPS = noAmbientEndPS;
planYMat.emissive.set(0, 1, 0);
planYMat.blendType = pc.BLEND_NORMAL;
planYMat.opacity = 0.3;
planYMat.useLighting = false;
planYMat.useSkybox = false;
planYMat.depthTest = false;
planYMat.cull = pc.CULLFACE_NONE;
planYMat.update();

// z平面材质
const planZMat = new pc.StandardMaterial();
planZMat.chunks.endPS = noAmbientEndPS;
planZMat.emissive.set(0, 0, 1);
planZMat.blendType = pc.BLEND_NORMAL;
planZMat.opacity = 0.3;
planZMat.useLighting = false;
planZMat.useSkybox = false;
planZMat.depthTest = false;
planZMat.cull = pc.CULLFACE_NONE;
planZMat.update();

// x平面边框材质
const planeEdgeXMat = new pc.StandardMaterial();
planeEdgeXMat.chunks.endPS = noAmbientEndPS;
planeEdgeXMat.blendType = pc.BLEND_NORMAL;
planeEdgeXMat.opacity = 1;
planeEdgeXMat.emissive.set(1, 0, 0);
planeEdgeXMat.useLighting = false;
planeEdgeXMat.useSkybox = false;
planeEdgeXMat.depthTest = false;
planeEdgeXMat.update();

// y平面边框材质
const planeEdgeYMat = new pc.StandardMaterial();
planeEdgeYMat.chunks.endPS = noAmbientEndPS;
planeEdgeYMat.blendType = pc.BLEND_NORMAL;
planeEdgeYMat.opacity = 1;
planeEdgeYMat.emissive.set(0, 1, 0);
planeEdgeYMat.useLighting = false;
planeEdgeYMat.useSkybox = false;
planeEdgeYMat.depthTest = false;
planeEdgeYMat.update();

// z平面边框材质
const planeEdgeZMat = new pc.StandardMaterial();
planeEdgeZMat.chunks.endPS = noAmbientEndPS;
planeEdgeZMat.blendType = pc.BLEND_NORMAL;
planeEdgeZMat.opacity = 1;
planeEdgeZMat.emissive.set(0, 0, 1);
planeEdgeZMat.useLighting = false;
planeEdgeZMat.useSkybox = false;
planeEdgeZMat.depthTest = false;
planeEdgeZMat.update();

// 全透明材质
const transparentMat = new pc.StandardMaterial();
transparentMat.chunks.endPS = noAmbientEndPS;
transparentMat.blendType = pc.BLEND_NORMAL;
transparentMat.opacity = 0;
transparentMat.useLighting = false;
transparentMat.useSkybox = false;
transparentMat.depthTest = false;
transparentMat.update();

// 半透明材质
const halfTransMat = new pc.StandardMaterial();
halfTransMat.chunks.endPS = noAmbientEndPS;
halfTransMat.emissive.set(1, 1, 1, 1);
halfTransMat.blendType = pc.BLEND_NORMAL;
halfTransMat.opacity = 0.5;
halfTransMat.useLighting = false;
halfTransMat.useSkybox = false;
halfTransMat.depthTest = false;
halfTransMat.update();

export { axisXMat, axisYMat, axisZMat, planXMat, planYMat, planZMat, planeEdgeXMat, planeEdgeYMat, planeEdgeZMat, transparentMat, halfTransMat };

