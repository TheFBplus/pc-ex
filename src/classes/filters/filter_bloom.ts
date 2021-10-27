import { Filter, IattributesBinder, IfilterPass } from "../utils/filter";

interface Ioption_Filter_Bloom
{
    bloomIntensity: number | IattributesBinder,
    bloomThreshold: number | IattributesBinder,
    blurAmount: number | IattributesBinder
}

export class Filter_Bloom extends Filter
{
    private sampleCount = 15;
    private sampleWeights = new Float32Array(this.sampleCount);
    private sampleOffsets = new Float32Array(this.sampleCount * 2);

    constructor(option?: Ioption_Filter_Bloom)
    {
        super(option);

        let passExtract: IfilterPass;
        let passGaussianBlurH: IfilterPass;
        let passGaussianBlurV: IfilterPass;
        let passBloomCombine: IfilterPass;
        [passExtract, passGaussianBlurH, passGaussianBlurV, passBloomCombine] = this.initPasses();

        this.createTargetCache(0, 0.25);
        this.createTargetCache(1, 0.25);
        this.addPasses(passExtract, passGaussianBlurH, passGaussianBlurV, passBloomCombine);
    }

    private initPasses(): Array<IfilterPass>
    {
        const extractPs = `
        varying vec2 vUv0;

        uniform sampler2D uBaseTexture;
        uniform float uBloomThreshold;
        
        void main(void)
        {
            vec4 color = texture2D(uBaseTexture, vUv0);
            gl_FragColor = clamp((color - uBloomThreshold) / (1.0 - uBloomThreshold), 0.0, 1.0);
        }
    `
        const gaussianBlurPs = `
        #define SAMPLE_COUNT ${this.sampleCount}

        varying vec2 vUv0;

        uniform sampler2D uBloomTexture;
        uniform vec2 uBlurOffsets[SAMPLE_COUNT];
        uniform float uBlurWeights[SAMPLE_COUNT];
    
        void main(void)
        {
            vec4 color = vec4(0.0);

            for (int i = 0; i < SAMPLE_COUNT; i++) {
                color += texture2D(uBloomTexture, vUv0 + uBlurOffsets[i]) * uBlurWeights[i];
            }

            gl_FragColor = color;;
        }
    `
        const bloomCombinePs = `
        varying vec2 vUv0;

        uniform float uBloomEffectIntensity;
        uniform sampler2D uBaseTexture;
        uniform sampler2D uBloomTexture;

        void main(void)
        {
            vec4 bloom = texture2D(uBloomTexture, vUv0) * uBloomEffectIntensity;
            vec4 base = texture2D(uBaseTexture, vUv0);

            base *= (1.0 - clamp(bloom, 0.0, 1.0));

            gl_FragColor = base + bloom;
        }
    `

        const passExtract = {
            args: {
                "uBaseTexture": this,
                "uBloomThreshold": this.args.bloomThreshold
            },
            outputTarget: this.cache(0),
            name: "filter_extract",
            shaderSource: extractPs
        };

        const passGaussianBlurH = {
            preFunc: () =>
            {
                this.calculateBlurValues(this.sampleWeights, this.sampleOffsets, 1.0 / this.rtCache[1].width, 0, this.value(this.args.blurAmount));
            },
            args: {
                "uBlurWeights[0]": this.sampleWeights,
                "uBlurOffsets[0]": this.sampleOffsets,
                "uBloomTexture": this.cache(0)
            },
            outputTarget: this.cache(1),
            name: "filter_gaussianBlur",
            shaderSource: gaussianBlurPs
        };

        const passGaussianBlurV = {
            preFunc: () =>
            {
                this.calculateBlurValues(this.sampleWeights, this.sampleOffsets, 0, 1.0 / this.rtCache[0].height, this.value(this.args.blurAmount));
            },
            args: {
                "uBlurWeights[0]": this.sampleWeights,
                "uBlurOffsets[0]": this.sampleOffsets,
                "uBloomTexture": this.cache(1)
            },
            outputTarget: this.cache(0),
            name: "filter_gaussianBlur",
            shaderSource: gaussianBlurPs
        };

        const passBloomCombine = {
            args: {
                "uBloomEffectIntensity": this.args.bloomIntensity,
                "uBloomTexture": this.cache(0),
                "uBaseTexture": this
            },
            name: "filter_bloomCombine",
            shaderSource: bloomCombinePs
        };

        return [passExtract, passGaussianBlurH, passGaussianBlurV, passBloomCombine];
    }

    private computeGaussian(n: number, theta: number): number
    {
        return ((1.0 / Math.sqrt(2 * Math.PI * theta)) * Math.exp(-(n * n) / (2 * theta * theta)));
    }

    private calculateBlurValues(sampleWeights: Float32Array, sampleOffsets: Float32Array, dx: number, dy: number, blurAmount: number): void
    {
        sampleWeights[0] = this.computeGaussian(0, blurAmount);
        sampleOffsets[0] = 0;
        sampleOffsets[1] = 0;

        let i, len, totalWeights = sampleWeights[0];
        for (i = 0, len = Math.floor(this.sampleCount / 2); i < len; i++) {
            let weight = this.computeGaussian(i + 1, blurAmount);
            sampleWeights[i * 2] = weight;
            sampleWeights[i * 2 + 1] = weight;
            totalWeights += weight * 2;

            let sampleOffset = i * 2 + 1.5;
            sampleOffsets[i * 4] = dx * sampleOffset;
            sampleOffsets[i * 4 + 1] = dy * sampleOffset;
            sampleOffsets[i * 4 + 2] = -dx * sampleOffset;
            sampleOffsets[i * 4 + 3] = -dy * sampleOffset;
        }
        for (i = 0, len = sampleWeights.length; i < len; i++) {
            sampleWeights[i] /= totalWeights;
        }
    }
}