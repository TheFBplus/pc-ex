[pc-ex](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/README.md) / PathCurve

# Class: PathCurve

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#constructor)

### Properties

- [curveMode](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#curvemode)
- [nodePercent](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#nodepercent)
- [nodes](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#nodes)
- [parent](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#parent)
- [pathLength](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#pathlength)
- [percentPreUnit](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#percentpreunit)

### Methods

- [cancelDraw](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#canceldraw)
- [draw](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#draw)
- [getCurrentPath](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#getcurrentpath)
- [getPosition](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#getposition)
- [getRotation](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#getrotation)
- [getTangent](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#gettangent)
- [updateNodes](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md#updatenodes)

## Constructors

### constructor

\+ **new PathCurve**(`parent`: *Entity*, `curveMode?`: *number*): [*PathCurve*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | *Entity* |
| `curveMode?` | *number* |

**Returns:** [*PathCurve*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/pathcurve.md)

Defined in: src/extensions/newClasses/pathCurve.ts:50

## Properties

### curveMode

• **curveMode**: *number*

Defined in: src/extensions/newClasses/pathCurve.ts:30

___

### nodePercent

• **nodePercent**: *number*[]

Defined in: src/extensions/newClasses/pathCurve.ts:32

___

### nodes

• **nodes**: *Entity*[]

Defined in: src/extensions/newClasses/pathCurve.ts:29

___

### parent

• **parent**: *Entity*

Defined in: src/extensions/newClasses/pathCurve.ts:28

___

### pathLength

• **pathLength**: *number*

Defined in: src/extensions/newClasses/pathCurve.ts:33

___

### percentPreUnit

• **percentPreUnit**: *number*

Defined in: src/extensions/newClasses/pathCurve.ts:34

## Methods

### cancelDraw

▸ **cancelDraw**(): *void*

**Returns:** *void*

Defined in: src/extensions/newClasses/pathCurve.ts:180

___

### draw

▸ **draw**(`data`: { [paraName: string]: *any*;  }): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *object* |

**Returns:** *void*

Defined in: src/extensions/newClasses/pathCurve.ts:133

___

### getCurrentPath

▸ **getCurrentPath**(`percent`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | *number* |

**Returns:** *number*

Defined in: src/extensions/newClasses/pathCurve.ts:215

___

### getPosition

▸ **getPosition**(`percent`: *number*): *Vec3*

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | *number* |

**Returns:** *Vec3*

Defined in: src/extensions/newClasses/pathCurve.ts:186

___

### getRotation

▸ **getRotation**(`percent`: *number*, `nodeRotation?`: *boolean*, `inverse?`: *boolean*): *Quat*

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | *number* |
| `nodeRotation?` | *boolean* |
| `inverse?` | *boolean* |

**Returns:** *Quat*

Defined in: src/extensions/newClasses/pathCurve.ts:193

___

### getTangent

▸ **getTangent**(`percent`: *number*): *Vec3*

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | *number* |

**Returns:** *Vec3*

Defined in: src/extensions/newClasses/pathCurve.ts:225

___

### updateNodes

▸ **updateNodes**(): *void*

**Returns:** *void*

Defined in: src/extensions/newClasses/pathCurve.ts:92
