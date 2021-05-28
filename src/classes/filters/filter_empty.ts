import { Filter, IattributesBinder, IfilterPass } from "../utils/filter";

interface Ioption_Filter_Empty
{
    scale: number | IattributesBinder
}

export class Filter_Empty extends Filter
{
    constructor(option?: Ioption_Filter_Empty)
    {
        super(option);

        const emptyPs = `
            varying vec2 vUv0;
            uniform sampler2D uColorBuffer;
        
            void main(void)
            {
                gl_FragColor = texture2D(uColorBuffer, vUv0);
            }
        `
        const passEmpty: IfilterPass = {
            args: {
                "uColorBuffer": this
            },
            name: "fliter_empty",
            shaderSource: emptyPs,
        };

        this.addPasses(passEmpty);
    }
}