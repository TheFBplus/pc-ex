/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-16 13:41:42
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-08 17:20:22
 * @ 详情: 在屏幕空间绘制矩形
 */

import * as pc from "playcanvas";

import { Color_EX } from "@/extensions/color";
import { cast } from "@/utils/helpers/extend-decorator";
import fs from "@/utils/shaders/screenQuad/ScreenQuadPS.frag";
import vs from "@/utils/shaders/screenQuad/ScreenQuadVS.vert";

const defaultRect = new pc.Vec4(0, 0, 1, 1);
const defaultColor = pc.Color.WHITE.clone();
const app = pc.Application.getApplication();

let rectShader: pc.Shader;
let rectMesh: pc.Mesh;
let rectColor: pc.Color;
let rectMaterial: pc.Material;
let rectEntity: pc.Entity;
let rectLayer: pc.Layer;
let screenRect: pc.Vec4;

/**
 * 绘制框选矩形边框
 * @param rect 矩形范围
 * @param color 颜色
 * @param layer layer
 */
export function drawScreenRect(rect = defaultRect, color = defaultColor, layer?: pc.Layer): void
{
    rectEntity ?? createRectEntity(rect, color);
    rectEntity.enabled = true;

    if (layer && (rectLayer != layer)) {
        rectEntity.render.layers = [layer.id];
        rectLayer = layer;
    }

    if (!rectColor.equals(color)) {
        rectMaterial.setParameter("uColor", cast<Color_EX>(color).shaderData);
        rectMaterial.update();
        rectColor.copy(color);
    }

    if (!screenRect.equals(rect)) {
        updateRectMesh(rect);
        screenRect.copy(rect);
    }
}

/**
 * 清除框选矩形边框
 */
export function clearScreenRect()
{
    if (rectEntity) {
        rectEntity.enabled = false;
    }
}

/**
 * 创建框选矩形边框物体实例
 * @param rect 矩形范围
 * @param color 颜色
 * @param layer layer
 * @returns 框选矩形边框物体实例
 */
function createRectEntity(rect: pc.Vec4, color: pc.Color, layer?: pc.Layer): pc.Entity
{
    screenRect = new pc.Vec4().copy(rect);
    rectMesh = updateRectMesh(screenRect);

    rectColor = new pc.Color().copy(color);
    rectShader = createRectShader();
    rectMaterial = new pc.Material();
    rectMaterial.shader = rectShader;
    rectMaterial.blendType = pc.BLEND_NORMAL;
    rectMaterial.setParameter("uColor", cast<Color_EX>(rectColor).shaderData);
    rectMaterial.update();

    const meshInstance = new pc.MeshInstance(rectMesh, rectMaterial);
    meshInstance.cull = false;

    const entity = new pc.Entity("ScreenQuad");
    entity.addComponent("render", {
        meshInstances: [meshInstance]
    });
    rectEntity = entity;

    rectLayer = layer;
    if (rectLayer) {
        entity.render.layers = [rectLayer.id];
    }

    app.root.addChild(entity);

    return entity;
}

/**
 * 创建shader
 * @returns shader
 */
function createRectShader(): pc.Shader
{
    // shander定义
    const shaderDefinition = {
        attributes: {
            aPosition: pc.gfx.SEMANTIC_POSITION
        },
        vshader: vs,
        fshader: fs
    };

    rectShader = new pc.Shader(app.graphicsDevice, shaderDefinition);

    return rectShader;
}

/**
 * 更新框选矩形边框mesh
 * @param rect 矩形范围
 * @returns 更新后的mesh
 */
function updateRectMesh(rect: pc.Vec4 = new pc.Vec4(0, 0, 1, 1)): pc.Mesh
{
    const positions = [
        rect.x * 2 - 1, 1 - 2 * rect.y, 0,
        (rect.x + rect.z) * 2 - 1, 1 - 2 * rect.y, 0,
        (rect.x + rect.z) * 2 - 1, 1 - 2 * (rect.y + rect.w), 0,
        rect.x * 2 - 1, 1 - 2 * (rect.y + rect.w), 0
    ];

    if (!rectMesh) {
        rectMesh = new pc.Mesh(app.graphicsDevice);
        rectMesh.clear(true, false);
    }

    rectMesh.setPositions(positions);

    rectMesh.update(pc.PRIMITIVE_LINELOOP);

    return rectMesh;
}