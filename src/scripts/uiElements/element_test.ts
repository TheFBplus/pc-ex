import * as pc from "playcanvas";

import { attr, createScript } from "../../utils/helpers/create-script-decorator";

@createScript("element_test")
export class Element_Test extends pc.ScriptType
{
    @attr({ type: "entity", default: false }) testEntity: pc.Entity;

    public initialize(): void
    {
        console.log(this.testEntity);
    }
}

