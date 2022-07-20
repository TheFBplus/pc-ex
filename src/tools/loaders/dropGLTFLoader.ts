/**
 * @ 创建者: FBplus
 * @ 创建时间: 2022-06-20 10:49:14
 * @ 修改者: FBplus
 * @ 修改时间: 2022-07-20 09:31:13
 * @ 详情: 拖拽gltf到窗口加载模型
 */

import * as pc from "playcanvas";

import GlobalVariables from "@/utils/common/GlobalVariables";
import { Tool } from "@/utils/helpers/toolBase";
import { tool } from "@/utils/helpers/useToolHelper";

import * as MeshoptDecoder from "../../utils/libs/meshopt_decoder";

// 文件类型
interface File
{
    url: string,
    filename?: string
}
// 拖放事件
type DropHandlerFunc = (files: Array<File>, resetScene: boolean) => void;
// 模型后缀
const modelExtensions = ['.gltf', '.glb', '.vox'];

/**
 * 加载器事件-回调表
 */
interface DropGLTFLoaderEventsMap
{
    modelLoaded: (entity: pc.Entity) => any
}
@tool("DropGLTFLoader")
export class DropGLTFLoader extends Tool<any, DropGLTFLoaderEventsMap>
{
    private dropHandler: DropHandler;

    constructor()
    {
        super();

        this.dropHandler = new DropHandler((files: Array<File>, resetScene: boolean) =>
        {
            this.loadFiles(files);
        });
    }

    private isModelFilename(filename: string): boolean
    {
        const filenameExt = pc.path.getExtension(filename).toLowerCase();
        return modelExtensions.indexOf(filenameExt) !== -1;
    }

    // load gltf model given its url and list of external urls
    private loadGltf(gltfUrl: File, externalUrls: Array<File>, finishedCallback: (err: string | null, asset: pc.Asset) => void)
    {
        const app = GlobalVariables.app;
        // provide buffer view callback so we can handle models compressed with MeshOptimizer
        // https://github.com/zeux/meshoptimizer
        const processBufferView = function (gltfBuffer: any, buffers: Array<any>, continuation: (err: string, result: any) => void)
        {
            if (gltfBuffer.extensions && gltfBuffer.extensions.EXT_meshopt_compression) {
                const extensionDef = gltfBuffer.extensions.EXT_meshopt_compression;

                const decoder = MeshoptDecoder;

                decoder.ready.then(() =>
                {
                    const byteOffset = extensionDef.byteOffset || 0;
                    const byteLength = extensionDef.byteLength || 0;

                    const count = extensionDef.count;
                    const stride = extensionDef.byteStride;

                    const result = new Uint8Array(count * stride);
                    const source = new Uint8Array(buffers[extensionDef.buffer].buffer,
                        buffers[extensionDef.buffer].byteOffset + byteOffset,
                        byteLength);

                    decoder.decodeGltfBuffer(result, count, stride, source, extensionDef.mode, extensionDef.filter);

                    continuation(null, result);
                });
            } else {
                continuation(null, null);
            }
        };

        const processImage = function (gltfImage: any, continuation: (err: string, result: any) => void)
        {
            const u: File = externalUrls.find((url) =>
            {
                return url.filename === pc.path.normalize(gltfImage.uri || "");
            });
            if (u) {
                const textureAsset = new pc.Asset(u.filename, 'texture', {
                    url: u.url,
                    filename: u.filename
                });
                textureAsset.on('load', () =>
                {
                    continuation(null, textureAsset);
                });
                app.assets.add(textureAsset);
                app.assets.load(textureAsset);
            } else {
                continuation(null, null);
            }
        };

        const postProcessImage = (gltfImage: any, textureAsset: pc.Asset) =>
        {
            // max anisotropy on all textures
            textureAsset.resource.anisotropy = app.graphicsDevice.maxAnisotropy;
        };

        const processBuffer = function (gltfBuffer: any, continuation: (err: string, result: any) => void)
        {
            const u = externalUrls.find((url) =>
            {
                return url.filename === pc.path.normalize(gltfBuffer.uri || "");
            });
            if (u) {
                const bufferAsset = new pc.Asset(u.filename, 'binary', {
                    url: u.url,
                    filename: u.filename
                });
                bufferAsset.on('load', () =>
                {
                    continuation(null, new Uint8Array(bufferAsset.resource));
                });
                app.assets.add(bufferAsset);
                app.assets.load(bufferAsset);
            } else {
                continuation(null, null);
            }
        };

        const containerAsset = new pc.Asset(gltfUrl.filename, 'container', gltfUrl, null, {
            // @ts-ignore TODO no definition in pc
            bufferView: {
                processAsync: processBufferView.bind(this)
            },
            image: {
                processAsync: processImage.bind(this),
                postprocess: postProcessImage
            },
            buffer: {
                processAsync: processBuffer.bind(this)
            }
        });
        containerAsset.on('load', () =>
        {
            finishedCallback(null, containerAsset);
        });
        containerAsset.on('error', (err: string) =>
        {
            finishedCallback(err, containerAsset);
        });

        app.assets.add(containerAsset);
        app.assets.load(containerAsset);
    }

    // add a loaded asset to the scene
    // asset is a container asset with renders and/or animations
    private addToScene(err: string, asset: pc.Asset)
    {
        const entity = asset.resource.instantiateRenderEntity();

        this.eventHandler.fire("modelLoaded", entity);
    }

    private loadFiles(files: Array<File>)
    {
        // convert single url to list
        if (!Array.isArray(files)) {
            files = [files];
        }

        // check if any file is a model
        const hasModelFilename = files.reduce((p, f) => p || this.isModelFilename(f.filename), false);

        if (hasModelFilename) {
            // kick off simultaneous asset load
            let awaiting = 0;
            const assets: { err: string, asset: pc.Asset }[] = [];
            files.forEach((file, index) =>
            {
                if (this.isModelFilename(file.filename)) {
                    awaiting++;
                    this.loadGltf(file, files, (err, asset) =>
                    {
                        assets[index] = { err: err, asset: asset };
                        if (--awaiting === 0) {
                            // done loading assets, add them to the scene
                            assets.forEach((asset) =>
                            {
                                if (asset) {
                                    this.addToScene(asset.err, asset.asset);
                                }
                            });
                        }
                    });
                }
            });
        }
        // return true if a model/scene was loaded and false otherwise
        return hasModelFilename;
    }
}

class DropHandler
{
    dropHandler: DropHandlerFunc;

    constructor(dropHandler: DropHandlerFunc)
    {
        this.dropHandler = dropHandler;

        // configure drag and drop
        window.addEventListener('dragstart', (ev) =>
        {
            ev.preventDefault();
            ev.stopPropagation();
            ev.dataTransfer.effectAllowed = "all";
        }, false);
        window.addEventListener('dragover', (ev) =>
        {
            ev.preventDefault();
            ev.stopPropagation();
            ev.dataTransfer.effectAllowed = "all";
        }, false);
        window.addEventListener('drop', event => this.handleDrop(event), false);
    }

    // use webkitGetAsEntry to extract files so we can include folders
    private handleDrop(event: DragEvent)
    {

        const removeCommonPrefix = (urls: Array<File>) =>
        {
            const split = (pathname: string) =>
            {
                const parts = pathname.split(pc.path.delimiter);
                const base = parts[0];
                const rest = parts.slice(1).join(pc.path.delimiter);
                return [base, rest];
            };
            while (true) {
                const parts = split(urls[0].filename);
                if (parts[1].length === 0) {
                    return;
                }
                for (let i = 1; i < urls.length; ++i) {
                    const other = split(urls[i].filename);
                    if (parts[0] !== other[0]) {
                        return;
                    }
                }
                for (let i = 0; i < urls.length; ++i) {
                    urls[i].filename = split(urls[i].filename)[1];
                }
            }
        };

        const resolveFiles = (entries: Array<FileSystemFileEntry>) =>
        {
            const files: Array<File> = [];
            entries.forEach((entry: FileSystemFileEntry) =>
            {
                entry.file((entryFile: any) =>
                {
                    files.push({
                        url: URL.createObjectURL(entryFile),
                        filename: entry.fullPath.substring(1)
                    });
                    if (files.length === entries.length) {
                        // remove common prefix from files in order to support dragging in the
                        // root of a folder containing related assets
                        if (files.length > 1) {
                            removeCommonPrefix(files);
                        }

                        // keep shift in to add files to the scene
                        this.dropHandler(files, !event.shiftKey);
                    }
                });
            });
        };

        const resolveDirectories = (entries: Array<FileSystemEntry>) =>
        {
            let awaiting = 0;
            const files: Array<FileSystemFileEntry> = [];
            const recurse = (entries: Array<FileSystemEntry>) =>
            {
                entries.forEach((entry: FileSystemEntry) =>
                {
                    if (entry.isFile) {
                        files.push(entry as FileSystemFileEntry);
                    } else if (entry.isDirectory) {
                        awaiting++;
                        const reader = (entry as FileSystemDirectoryEntry).createReader();
                        reader.readEntries((subEntries: Array<FileSystemEntry>) =>
                        {
                            awaiting--;
                            recurse(subEntries);
                        });
                    }
                });
                if (awaiting === 0) {
                    resolveFiles(files);
                }
            };
            recurse(entries);
        };

        // first things first
        event.preventDefault();

        const items = event.dataTransfer.items;
        if (!items) {
            return;
        }

        const entries = [];
        for (let i = 0; i < items.length; ++i) {
            entries.push(items[i].webkitGetAsEntry());
        }
        resolveDirectories(entries);
    }
}