/**
 * @ 创建者: 陈伟
 * @ 创建时间: 2022-05-18 17:27:16
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-20 17:02:25
 * @ 详情: 观测相机
 */

import * as pc from "playcanvas";

import { Tool } from "../../../libs/libs/toolHelper";
import { noAmbientEndPS } from "../utils/handleShader";

type RuntimeGridOptions = {
    mainCamera: pc.CameraComponent;
    range?: pc.Vec2;
};

// 添加layer
export const GridLayerName = "RTH_Grid"; // grid的layer名称
export const GridLayer = new pc.Layer({ name: GridLayerName });

export default class RTH_RuntimeGrid extends Tool<RuntimeGridOptions, unknown>
{
    private mainCamera: pc.CameraComponent;
    private grid: pc.Entity;

    constructor(option: RuntimeGridOptions)
    {
        super();

        this.setOption(option);

        // 添加layer到场景
        if (!pc.app.scene.layers.getLayerById(GridLayer.id)) {
            const worldLayerIndex = pc.app.scene.layers.getOpaqueIndex(pc.app.scene.layers.getLayerByName("World"));
            pc.app.scene.layers.insert(GridLayer, worldLayerIndex);
        }
    }

    public override setOption(option: RuntimeGridOptions): void
    {
        this.mainCamera = option.mainCamera;
        this.mainCamera.layers = this.mainCamera.layers.concat(GridLayer.id); // 相机添加layer

        const range = option?.range ?? new pc.Vec2(30, 30);
        this.grid && this.grid.destroy();
        this.grid = new pc.Entity("RTH_Grid");
        const grid1 = this.createGrid(range.x, range.y, range.x / 5, range.y / 5, pc.Color.BLACK);
        const grid2 = this.createGrid(range.x, range.y, range.x, range.y, pc.Color.GRAY);
        this.grid.addChild(grid1);
        this.grid.addChild(grid2);
        pc.app.root.addChild(this.grid);
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

    protected override onEnable(): void { }

    protected override onDisable(): void
    {
        this.grid && this.grid.destroy();
    }
}