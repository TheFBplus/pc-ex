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

src/extensions/newClasses/pathCurve.ts:52

## Properties

### curveMode

• **curveMode**: `number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:30

___

### nodePercent

• **nodePercent**: `number`[]

#### Defined in

src/extensions/newClasses/pathCurve.ts:32

___

### nodes

• **nodes**: `Entity`[]

#### Defined in

src/extensions/newClasses/pathCurve.ts:29

___

### parent

• **parent**: `Entity`

#### Defined in

src/extensions/newClasses/pathCurve.ts:28

___

### pathLength

• **pathLength**: `number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:33

___

### percentPreUnit

• **percentPreUnit**: `number`

#### Defined in

src/extensions/newClasses/pathCurve.ts:34

## Methods

### cancelDraw

▸ **cancelDraw**(): `void`

#### Returns

`void`

#### Defined in

src/extensions/newClasses/pathCurve.ts:180

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

src/extensions/newClasses/pathCurve.ts:133

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

src/extensions/newClasses/pathCurve.ts:215

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

src/extensions/newClasses/pathCurve.ts:186

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

src/extensions/newClasses/pathCurve.ts:193

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

src/extensions/newClasses/pathCurve.ts:225

___

### updateNodes

▸ **updateNodes**(): `void`

#### Returns

`void`

#### Defined in

src/extensions/newClasses/pathCurve.ts:92
