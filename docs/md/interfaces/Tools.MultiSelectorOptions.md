[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / [Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md) / MultiSelectorOptions

# Interface: MultiSelectorOptions

[Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md).MultiSelectorOptions

模型多选选项

## Table of contents

### Properties

- [boxLayer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.MultiSelectorOptions.md#boxlayer)
- [excludeLayers](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.MultiSelectorOptions.md#excludelayers)
- [expectCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.MultiSelectorOptions.md#expectcondition)
- [inputHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.MultiSelectorOptions.md#inputhandler)
- [pickAreaScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.MultiSelectorOptions.md#pickareascale)
- [pickCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.MultiSelectorOptions.md#pickcamera)

## Properties

### boxLayer

• `Optional` **boxLayer**: `Layer`

#### Defined in

src/tools/selector/multiSelector.ts:37

___

### excludeLayers

• `Optional` **excludeLayers**: `Layer`[]

#### Defined in

src/tools/selector/multiSelector.ts:38

___

### expectCondition

• `Optional` **expectCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/selector/multiSelector.ts:39

___

### inputHandler

• `Optional` **inputHandler**: [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`any`, [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)\>

#### Defined in

src/tools/selector/multiSelector.ts:34

___

### pickAreaScale

• `Optional` **pickAreaScale**: `number`

#### Defined in

src/tools/selector/multiSelector.ts:36

___

### pickCamera

• `Optional` **pickCamera**: `CameraComponent`

#### Defined in

src/tools/selector/multiSelector.ts:35
