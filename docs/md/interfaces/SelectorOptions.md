[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / SelectorOptions

# Interface: SelectorOptions

模型点选选项

## Table of contents

### Properties

- [excludeLayers](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#excludelayers)
- [inputHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#inputhandler)
- [pickAreaScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#pickareascale)
- [pickCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#pickcamera)
- [pickCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#pickcondition)
- [pickNull](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#picknull)
- [pickSame](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#picksame)
- [pickTag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md#picktag)

## Properties

### excludeLayers

• `Optional` **excludeLayers**: `Layer`[]

#### Defined in

src/tools/selector/selector.ts:36

___

### inputHandler

• **inputHandler**: [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`unknown`, [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)\>

#### Defined in

src/tools/selector/selector.ts:29

___

### pickAreaScale

• `Optional` **pickAreaScale**: `number`

#### Defined in

src/tools/selector/selector.ts:31

___

### pickCamera

• `Optional` **pickCamera**: `CameraComponent`

#### Defined in

src/tools/selector/selector.ts:30

___

### pickCondition

• `Optional` **pickCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/selector/selector.ts:35

___

### pickNull

• `Optional` **pickNull**: `boolean`

#### Defined in

src/tools/selector/selector.ts:33

___

### pickSame

• `Optional` **pickSame**: `boolean`

#### Defined in

src/tools/selector/selector.ts:34

___

### pickTag

• `Optional` **pickTag**: `string`

#### Defined in

src/tools/selector/selector.ts:32
