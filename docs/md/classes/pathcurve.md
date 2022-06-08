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

新建路径曲线（设置一个父节点，用其下的子节点坐标和旋转来构造曲线）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `Entity` | 父节点 |
| `curveMode?` | `number` | 曲线类型（可以是曲线或直线，详情参考playcanvas官方文档） |

#### Defined in

src/extension/newClasses/pathCurve.ts:48

## Properties

### curveMode

• **curveMode**: `number`

#### Defined in

src/extension/newClasses/pathCurve.ts:21

___

### nodePercent

• **nodePercent**: `number`[]

#### Defined in

src/extension/newClasses/pathCurve.ts:23

___

### nodes

• **nodes**: `Entity`[]

#### Defined in

src/extension/newClasses/pathCurve.ts:20

___

### parent

• **parent**: `Entity`

#### Defined in

src/extension/newClasses/pathCurve.ts:19

___

### pathLength

• **pathLength**: `number`

#### Defined in

src/extension/newClasses/pathCurve.ts:24

___

### percentPreUnit

• **percentPreUnit**: `number`

#### Defined in

src/extension/newClasses/pathCurve.ts:25

## Methods

### cancelDraw

▸ **cancelDraw**(): `void`

取消曲线绘制

#### Returns

`void`

#### Defined in

src/extension/newClasses/pathCurve.ts:184

___

### draw

▸ **draw**(`option`): `void`

绘制曲线，并随节点更新

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `Object` |
| `option.color?` | `Color` |
| `option.drawNormal?` | `boolean` |
| `option.drawTangent` | `boolean` |

#### Returns

`void`

#### Defined in

src/extension/newClasses/pathCurve.ts:136

___

### getCurrentPath

▸ **getCurrentPath**(`percent`): `number`

获得当前所处的节点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | `number` | 此位置在曲线上的百分比 |

#### Returns

`number`

当前所处节点

#### Defined in

src/extension/newClasses/pathCurve.ts:243

___

### getPosition

▸ **getPosition**(`percent`): `Vec3`

获得某处坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | `number` | 此位置在曲线上的百分比 |

#### Returns

`Vec3`

此处的坐标

#### Defined in

src/extension/newClasses/pathCurve.ts:194

___

### getRotation

▸ **getRotation**(`percent`, `nodeRotation?`, `inverse?`): `Quat`

获得某处rotation,可以是沿切线方向，也可以是路径点朝向的插值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | `number` | 此位置在曲线上的百分比 |
| `nodeRotation?` | `boolean` | 是否使用节点的旋转的插值作为曲线的旋转 |
| `inverse?` | `boolean` | 是否反向 |

#### Returns

`Quat`

此处的旋转

#### Defined in

src/extension/newClasses/pathCurve.ts:207

___

### getTangent

▸ **getTangent**(`percent`): `Vec3`

获得某处坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | `number` | 此位置在曲线上的百分比 |

#### Returns

`Vec3`

此处的切线方向

#### Defined in

src/extension/newClasses/pathCurve.ts:233

___

### updateNodes

▸ **updateNodes**(): `void`

更新节点

#### Returns

`void`

#### Defined in

src/extension/newClasses/pathCurve.ts:92
