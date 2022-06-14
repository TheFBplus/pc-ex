/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-16 09:46:02
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-14 15:17:40
 * @ 详情: 在屏幕空间绘制方片
 */

import * as pc from "playcanvas";

import { Color_EX } from "../../../extensions/extendClasses/color";
import { cast } from "../../../libs/libs/cast";
import fs from "../../../resources/shaders/ScreenQuadPS.frag";
import vs from "../../../resources/shaders/ScreenQuadVS.vert";

const defaultRect = new pc.Vec4(0, 0, 1, 1);
const defaultColor = pc.Color.WHITE.clone();

let quadShader: pc.Shader;
let quadMesh: pc.Mesh;
let quadColor: pc.Color;
let quadMaterial: pc.Material;
let quadEntity: pc.Entity;
let quadLayer: pc.Layer;
let screenRect: pc.Vec4;

/**
 * 绘制框选矩形内部
 * @param rect 矩形范围
 * @param color 颜色
 * @param layer layer
 */
export function drawScreenQuad(rect = defaultRect, color = defaultColor, layer?: pc.Layer): void
{
    quadEntity ?? createQuadEntity(rect, color);
    quadEntity.enabled = true;

    if (layer && (quadLayer != layer)) {
        quadEntity.render.layers = [layer.id];
        quadLayer = layer;
    }

    if (!quadColor.equals(color)) {
        quadMaterial.setParameter("uColor", cast<Color_EX>(color).shaderData);
        quadMaterial.update();
        quadColor.copy(color);
    }

    if (!screenRect.equals(rect)) {
        updateQuadMesh(rect);
        screenRect.copy(rect);
    }
}

/**
 * 清除框选矩形内部
 */
export function clearScreenQuad(): void
{
    if (quadEntity) {
        quadEntity.enabled = false;
    }
}

/**
 * 创建框选矩形内部物体实例
 * @param rect 矩形范围
 * @param color 颜色
 * @param layer layer
 * @returns 框选矩形内部物体实例
 */
function createQuadEntity(rect: pc.Vec4, color: pc.Color, layer?: pc.Layer): pc.Entity
{
    screenRect = new pc.Vec4().copy(rect);
    quadMesh = updateQuadMesh(screenRect);

    quadColor = new pc.Color().copy(color);
    quadShader = createQuadShader();
    quadMaterial = new pc.Material();
    quadMaterial.shader = quadShader;
    quadMaterial.blendType = pc.BLEND_NORMAL;
    quadMaterial.setParameter("uColor", cast<Color_EX>(quadColor).shaderData);
    quadMaterial.update();

    const meshInstance = new pc.MeshInstance(quadMesh, quadMaterial);
    meshInstance.cull = false;

    const entity = new pc.Entity("ScreenQuad");
    entity.addComponent("render", {
        meshInstances: [meshInstance]
    });
    quadEntity = entity;

    quadLayer = layer;
    if (quadLayer) {
        entity.render.layers = [quadLayer.id];
    }

    pc.app.root.addChild(entity);

    return entity;
}

/**
 * 创建shader
 * @returns shader
 */
function createQuadShader(): pc.Shader
{
    // shander定义
    const shaderDefinition = {
        attributes: {
            aPosition: pc.gfx.SEMANTIC_POSITION
        },
        vshader: vs,
        fshader: fs
    };

    quadShader = new pc.Shader(pc.app.graphicsDevice, shaderDefinition);

    return quadShader;
}

/**
 * 更新框选矩形内部mesh
 * @param rect 矩形范围
 * @returns 更新后的mesh
 */
function updateQuadMesh(rect: pc.Vec4 = new pc.Vec4(0, 0, 1, 1)): pc.Mesh
{
    const positions = [
        rect.x * 2 - 1, 1 - 2 * rect.y, 0,
        (rect.x + rect.z) * 2 - 1, 1 - 2 * rect.y, 0,
        (rect.x + rect.z) * 2 - 1, 1 - 2 * (rect.y + rect.w), 0,
        rect.x * 2 - 1, 1 - 2 * (rect.y + rect.w), 0
    ];
    const indices = new Array<number>(1, 0, 3, 3, 2, 1);
    const normals = pc.calculateNormals(positions, indices);

    if (!quadMesh) {
        quadMesh = new pc.Mesh(pc.app.graphicsDevice);
        quadMesh.clear(true, false);
    }

    quadMesh.setPositions(positions);
    quadMesh.setIndices(indices);
    quadMesh.setNormals(normals);

    quadMesh.update(pc.PRIMITIVE_TRIANGLES);

    return quadMesh;
}