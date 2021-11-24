[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / PathCurve

# Class: PathCurve

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#constructor)

### Properties

- [curveMode](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#curvemode)
- [nodePercent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#nodepercent)
- [nodes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#nodes)
- [parent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#parent)
- [pathLength](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#pathlength)
- [percentPreUnit](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#percentpreunit)

### Methods

- [cancelDraw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#canceldraw)
- [draw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#draw)
- [getCurrentPath](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getcurrentpath)
- [getPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getposition)
- [getRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getrotation)
- [getTangent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#gettangent)
- [updateNodes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#updatenodes)

## Constructors

### constructor

• **new PathCurve**(`parent`, `curveMode?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Entity` |
| `curveMode?` | `number` |

#### Defined in

src/extensions/newClasses/pathCurve.ts:55

## Properties

### curveMode

• **curveMode**: `number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:33

___

### nodePercent

• **nodePercent**: `number`[]

#### Defined in

src/extensions/newClasses/pathCurve.ts:35

___

### nodes

• **nodes**: `Entity`[]

#### Defined in

src/extensions/newClasses/pathCurve.ts:32

___

### parent

• **parent**: `Entity`

#### Defined in

src/extensions/newClasses/pathCurve.ts:31

___

### pathLength

• **pathLength**: `number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:36

___

### percentPreUnit

• **percentPreUnit**: `number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:37

## Methods

### cancelDraw

▸ **cancelDraw**(): `void`

#### Returns

`void`

#### Defined in

src/extensions/newClasses/pathCurve.ts:183

___

### draw

▸ **draw**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`void`

#### Defined in

src/extensions/newClasses/pathCurve.ts:136

___

### getCurrentPath

▸ **getCurrentPath**(`percent`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

`number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:218

___

### getPosition

▸ **getPosition**(`percent`): `Vec3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

`Vec3`

#### Defined in

src/extensions/newClasses/pathCurve.ts:189

___

### getRotation

▸ **getRotation**(`percent`, `nodeRotation?`, `inverse?`): `Quat`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |
| `nodeRotation?` | `boolean` |
| `inverse?` | `boolean` |

#### Returns

`Quat`

#### Defined in

src/extensions/newClasses/pathCurve.ts:196

___

### getTangent

▸ **getTangent**(`percent`): `Vec3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

`Vec3`

#### Defined in

src/extensions/newClasses/pathCurve.ts:228

___

### updateNodes

▸ **updateNodes**(): `void`

#### Returns

`void`

#### Defined in

src/extensions/newClasses/pathCurve.ts:95
