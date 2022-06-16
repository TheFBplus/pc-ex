/**
 * @ 创建者: 陈伟
 * @ 创建时间: 2022-05-05 10:56:15
 * @ 修改者: FBplus
 * @ 修改时间: 2022-06-16 11:27:03
 * @ 详情: 控制runtime transform的撤销和重做
 */
import * as pc from "playcanvas";

export class Record
{
    selections: pc.Entity[] | null;
    transforms: pc.Mat4[] | null;

    constructor(selections: pc.Entity[] | null = null, transforms: pc.Mat4[] | null = null)
    {
        this.selections = selections;
        this.transforms = transforms;
    }

    public equals(record: Record): boolean
    {
        if (this.selections === null && record.selections === null) { return true; }

        if (this.selections === null || record.selections === null ||
            this.selections.length != record.selections.length || this.transforms.length != record.transforms.length) { return false; }

        const selectionIsEqual = this.selections?.every((selection, index) => selection === record.selections[index]);
        const transformIsEqual = this.transforms?.every((transform, index) => transform.equals(record.transforms[index]));

        return selectionIsEqual && transformIsEqual;
    }

    public set(selections: pc.Entity[] | null, transforms: pc.Mat4[] | null): Record
    {
        this.selections = selections;
        this.transforms = transforms;

        return this;
    }

    public clone(): Record
    {
        let selections: pc.Entity[] | null;
        let transforms: pc.Mat4[] | null;
        if (this.selections === null) {
            selections = null;
        }
        else {
            selections = [].concat(this.selections);
        }

        if (this.transforms === null) {
            transforms = null
        }
        else {
            transforms = [];
            this.transforms.forEach(transform =>
            {
                transforms.push(transform.clone());
            });
        }

        return new Record(selections, transforms);
    }
}

export default class Recorder
{
    private static records: Record[] = [];
    private static index: number = 0;

    public static init(record: Record): void
    {
        this.records.length = 1;
        this.records[0] = record.clone();
        this.index = 0;
    }

    public static save(record: Record): void
    {
        if (this.records[this.index]?.equals(record)) { return; }

        this.records.length = ++this.index;
        this.records.push(record.clone());
    }

    public static undo(): Record
    {
        if (--this.index <= 0) { this.index = 0; }

        return this.records[this.index];
    }

    public static redo(): Record
    {
        if (++this.index > this.records.length - 1) { this.index = this.records.length - 1; }

        return this.records[this.index];
    }
}
