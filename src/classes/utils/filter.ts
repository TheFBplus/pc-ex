import * as pc from "playcanvas";

/**
 * @ignore
 */
export interface IattributesBinder
{
    name: string,
    value: any
}

/**
 * @ignore
 */
export interface IfilterPass
{
    name: string,
    shaderSource: string,
    args?: any,
    outputTarget?: ICacheOption
    preFunc?: Function
}

interface ICacheOption
{
    targetIndex: number,
    scale?: number
}

export class Filter extends pc.PostEffect
{
    public args?: { [paraName: string]: any };
    public binbMap: Map<string, string>;
    public rtCache: Array<pc.RenderTarget> = [];

    private passes: Array<IfilterPass> = [];
    private shaders: Array<pc.Shader> = [];

    static parseValueToShader(value: any): any
    {
        if (value instanceof pc.Color || value instanceof pc.Vec2 || value instanceof pc.Vec3 || value instanceof pc.Vec4)
            return value.shaderData;
        else if (value instanceof pc.Mat3 || value instanceof pc.Mat4)
            return value.data;
        else
            return value;
    }

    constructor(option?: { [paraName: string]: any })
    {
        super(pc.Application.getApplication().graphicsDevice);

        if (option) {
            this.args = {};
            for (let key in option) {
                if (option[key]) {
                    this.args[key] = option[key];
                    if (this.instanceOfBinder(option[key]) && option[key].value != undefined) {
                        this.addBinder(key, option[key] as IattributesBinder);
                    }
                }
            }
        }

        const app = pc.Application.getApplication();
        this.device.on('resizecanvas', () =>
        {
            app.once("postrender", () =>
            {
                this.refreshTargets();
            });
        });
    }

    protected addPasses(...params: Array<IfilterPass>): void
    {
        const chunks = pc.shaderChunks as any;
        params.forEach((pass) =>
        {
            this.passes.push(pass);
            this.shaders.push(chunks.createShaderFromCode(this.device, chunks.fullscreenQuadVS, pass.shaderSource, pass.name));
        });
    };

    protected value(para: any): any
    {
        return this.instanceOfBinder(para) ? para.value : para;
    }

    public render(inputTarget: pc.RenderTarget, outputTarget: pc.RenderTarget, rect: pc.Vec4): void
    {
        const device = this.device;
        const scope = device.scope;

        let value: any;
        let outPut: any;
        this.passes.forEach((pass, index) =>
        {
            if (pass.preFunc)
                pass.preFunc();

            for (let arg in pass.args) {
                value = pass.args[arg];
                if (value instanceof Filter) {
                    value = inputTarget.colorBuffer;
                }
                else if (this.instanceOfCache(value)) {
                    if (this.rtCache[value.targetIndex]) {
                        value = this.rtCache[value.targetIndex].colorBuffer;
                    }
                }
                else {
                    if (this.instanceOfBinder(value))
                        value = this.args[this.binbMap.get(value.name)].value;

                    value = Filter.parseValueToShader(value);
                }
                scope.resolve(arg).setValue(value);
            }
            outPut = pass.outputTarget;
            if (outPut != undefined && this.instanceOfCache(outPut))
                outPut = this.getTargetCache(outPut.targetIndex, outPut.scale);
            else
                outPut = outputTarget;

            pc.drawFullscreenQuad(device, outPut, this.vertexBuffer, this.shaders[index]);
        });
    }

    protected cache(index: number, option?: { scale: number }): ICacheOption
    {
        if (option)
            return { targetIndex: index, scale: option.scale };
        else
            return { targetIndex: index };
    }

    protected createTargetCache(index: number, scale: number = 1, width?: number, height?: number): pc.RenderTarget
    {
        const device = this.device as any;
        let texFormat = pc.PIXELFORMAT_R8_G8_B8_A8;
        if (device.webgl2 && device.extTextureFloatRenderable) {
            texFormat = pc.PIXELFORMAT_111110F;
        } else if (device.extTextureHalfFloatRenderable && device.extTextureHalfFloatLinear) {
            texFormat = pc.PIXELFORMAT_RGBA16F;
        }
        width = width || device.width * scale;
        height = height || device.height * scale;
        let colorBuffer = new pc.Texture(device, {
            width: width,
            height: height,
            format: texFormat,
            mipmaps: false,
            minFilter: pc.FILTER_LINEAR,
            magFilter: pc.FILTER_LINEAR,
            addressU: pc.ADDRESS_CLAMP_TO_EDGE,
            addressV: pc.ADDRESS_CLAMP_TO_EDGE
        });

        let renderTarget = new pc.RenderTarget({
            colorBuffer: colorBuffer,
            depth: false
        });
        this.rtCache[index] = renderTarget;

        return renderTarget;
    }

    private getTargetCache(index: number, scale: number = 1): pc.RenderTarget
    {
        return this.rtCache[index] || this.createTargetCache(index, scale);
    }

    private refreshTargets(): void
    {
        this.rtCache.forEach((rt, index) =>
        {
            if (rt) {
                if (rt.colorBuffer)
                    rt.colorBuffer.destroy();
                if (rt.depthBuffer)
                    rt.depthBuffer.destroy();
                rt.destroy();
                this.rtCache[index] = null;
                this.createTargetCache(index, 1, rt.width, rt.height);
            }
        });
    }

    private addBinder(arg: string, binder: IattributesBinder): void
    {
        if (!this.binbMap) this.binbMap = new Map<string, string>();
        this.binbMap.set(binder.name, arg);
    }

    private instanceOfBinder(object: any): object is IattributesBinder
    {
        return object.name != undefined && object.value != undefined;
    }

    private instanceOfCache(object: any): object is ICacheOption
    {
        return object.targetIndex != undefined;
    }
}