[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / PathCurve

# Class: PathCurve

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`PathCurveOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/PathCurveOptions.md), `any`\>

  ↳ **`PathCurve`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#eventhandler)
- [nodePercent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#nodepercent)
- [nodes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#nodes)
- [pathLength](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#pathlength)
- [percentPreUnit](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#percentpreunit)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#addlistener)
- [cancelDraw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#canceldraw)
- [draw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#draw)
- [getCurrentPath](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getcurrentpath)
- [getPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getposition)
- [getRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getrotation)
- [getTangent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#gettangent)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#removelistener)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#setoptions)
- [updateNodes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#updatenodes)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#updateoptions)

## Constructors

### constructor

• **new PathCurve**(`options`)

创建路径曲线

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PathCurveOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/PathCurveOptions.md) | 路径曲线选项 |

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

## Properties

### app

• **app**: `AppBase`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#app)

#### Defined in

src/utils/helpers/toolBase.ts:22

___

### eventHandler

• **eventHandler**: `ExEventHandler`<`any`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### nodePercent

• **nodePercent**: `number`[]

#### Defined in

src/tools/pathCurve.ts:37

___

### nodes

• **nodes**: `GraphNode`[]

#### Defined in

src/tools/pathCurve.ts:35

___

### pathLength

• **pathLength**: `number`

#### Defined in

src/tools/pathCurve.ts:38

___

### percentPreUnit

• **percentPreUnit**: `number`

#### Defined in

src/tools/pathCurve.ts:39

___

### toolOptions

• **toolOptions**: [`PathCurveOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/PathCurveOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`PathCurveOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/PathCurveOptions.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/pathCurve.ts:30

## Accessors

### enabled

• `get` **enabled**(): `boolean`

获得工具的启用状态

#### Returns

`boolean`

#### Inherited from

Tool.enabled

• `set` **enabled**(`value`): `void`

设置工具启用状态（触发启用和禁用时的额外操作）

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Tool.enabled

## Methods

### addListener

▸ **addListener**<`K`\>(`eventName`, `callback`, `scope?`): `void`

添加事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `any` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)

___

### cancelDraw

▸ **cancelDraw**(): `void`

取消曲线绘制

#### Returns

`void`

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

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

___

### removeListener

▸ **removeListener**<`K`\>(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `any` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)

___

### setOptions

▸ **setOptions**(`options`): `void`

设置选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`PathCurveOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/PathCurveOptions.md) | 选项 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)

___

### updateNodes

▸ **updateNodes**(): `void`

更新节点

#### Returns

`void`

___

### updateOptions

▸ **updateOptions**(`options`): `void`

更新选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | 选项 |
| `options.curveMode?` | `number` | - |
| `options.parentNode?` | `Entity` | - |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)
