/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-05-18 17:27:16
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-11 21:12:03
 * @ 详情: 观测相机
 */

import * as pc from "playcanvas";

import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";

import { noAmbientEndPS } from "../utils/handleShader";

// 添加layer
export const GridLayerName = "RTH_Grid"; // grid的layer名称
export const GridLayer = new pc.Layer({ name: GridLayerName }); // grid layer

/**
 * RuntimeGrid选项
 */
export interface RuntimeGridOptions
{
    mainCamera: pc.CameraComponent;
    range?: pc.Vec2;
};

@tool("RTH_RuntimeGrid")
export class RTH_RuntimeGrid extends Tool<RuntimeGridOptions, any>
{
    // 默认选项
    protected toolOptionsDefault: RuntimeGridOptions = {
        mainCamera: this.app.systems.camera.cameras[0],
        range: new pc.Vec2(30, 30)
    };

    private grid: pc.Entity;

    constructor(options: RuntimeGridOptions)
    {
        super();

        this.setOptions(options);

        // 添加layer到场景
        if (!this.app.scene.layers.getLayerById(GridLayer.id)) {
            const worldLayerIndex = this.app.scene.layers.getOpaqueIndex(this.app.scene.layers.getLayerByName("World"));
            this.app.scene.layers.insert(GridLayer, worldLayerIndex);
        }
    }

    /**
     * 设置RuntimeGrid选项
     * @param options RuntimeGrid选项
     */
    public override setOptions(options: RuntimeGridOptions): void
    {
        super.setOptions(options);

        const toolOptions = this.toolOptions;
        toolOptions.mainCamera.layers = toolOptions.mainCamera.layers.concat(GridLayer.id); // 相机添加layer
        this.grid && this.grid.destroy();
        this.grid = new pc.Entity("RTH_Grid");
        const range = toolOptions.range;
        const grid1 = this.createGrid(range.x, range.y, range.x / 5, range.y / 5, pc.Color.BLACK);
        const grid2 = this.createGrid(range.x, range.y, range.x, range.y, pc.Color.GRAY);
        this.grid.addChild(grid1);
        this.grid.addChild(grid2);
        this.app.root.addChild(this.grid);
    }

    /**
    * 创建grid
    * @param w grid宽度
    * @param h grid高度
    * @param [wd] grid宽维度
    * @param [hd] grid高维度
    * @returns  grid
    */
    private createGrid(w: number, h: number, wd: number = w, hd: number = h, color: pc.Color = pc.Color.BLACK): pc.Entity
    {
        const points = new Float32Array(3 * (wd + hd + 2) * 2);
        const dw = w / wd;
        const dh = h / hd;

        let index = 0;
        for (let z = 0; z <= hd; z++) {
            points[index * 6] = w / -2;
            points[index * 6 + 1] = 0;
            points[index * 6 + 2] = h / -2 + z * dh;
            points[index * 6 + 3] = w / 2;
            points[index * 6 + 4] = 0;
            points[index * 6 + 5] = h / -2 + z * dh;

            index++;
        }

        for (let x = 0; x <= wd; x++) {
            points[index * 6] = w / -2 + x * dw;
            points[index * 6 + 1] = 0;
            points[index * 6 + 2] = h / -2;
            points[index * 6 + 3] = w / -2 + x * dw;
            points[index * 6 + 4] = 0;
            points[index * 6 + 5] = h / 2;

            index++;
        }

        const mesh = new pc.Mesh(pc.app.graphicsDevice);
        mesh.clear(false, false);
        mesh.setPositions(points);
        mesh.update(pc.PRIMITIVE_LINES);

        const mat = new pc.StandardMaterial();
        mat.chunks.endPS = noAmbientEndPS;
        mat.useLighting = false;
        mat.useSkybox = false;
        mat.emissive.copy(color);
        const mi = new pc.MeshInstance(mesh, mat);
        const grid = new pc.Entity();
        grid.addComponent("render", {
            meshInstances: [mi],
        });
        grid.render.layers = [GridLayer.id];

        return grid;
    }

    protected override onDisable(): void
    {
        this.grid && this.grid.destroy();
    }
}