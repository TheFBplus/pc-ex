[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / [Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md) / SelectorOptions

# Interface: SelectorOptions

[Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md).SelectorOptions

模型点选选项

## Table of contents

### Properties

- [excludeLayers](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#excludelayers)
- [inputHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#inputhandler)
- [pickAreaScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#pickareascale)
- [pickCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#pickcamera)
- [pickCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#pickcondition)
- [pickNull](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#picknull)
- [pickSame](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#picksame)
- [pickTag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.SelectorOptions.md#picktag)

## Properties

### excludeLayers

• `Optional` **excludeLayers**: `Layer`[]

#### Defined in

src/tools/selector/selector.ts:35

___

### inputHandler

• `Optional` **inputHandler**: [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`any`, [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)\>

#### Defined in

src/tools/selector/selector.ts:28

___

### pickAreaScale

• `Optional` **pickAreaScale**: `number`

#### Defined in

src/tools/selector/selector.ts:30

___

### pickCamera

• `Optional` **pickCamera**: `CameraComponent`

#### Defined in

src/tools/selector/selector.ts:29

___

### pickCondition

• `Optional` **pickCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/selector/selector.ts:34

___

### pickNull

• `Optional` **pickNull**: `boolean`

#### Defined in

src/tools/selector/selector.ts:32

___

### pickSame

• `Optional` **pickSame**: `boolean`

#### Defined in

src/tools/selector/selector.ts:33

___

### pickTag

• `Optional` **pickTag**: `string`

#### Defined in

src/tools/selector/selector.ts:31
