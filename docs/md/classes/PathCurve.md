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
- [nodePercent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#nodepercent)
- [nodes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#nodes)
- [pathLength](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#pathlength)
- [percentPreUnit](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#percentpreunit)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#enabled)

### Methods

- [cancelDraw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#canceldraw)
- [draw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#draw)
- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#fire)
- [getCurrentPath](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getcurrentpath)
- [getPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getposition)
- [getRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#getrotation)
- [getTangent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#gettangent)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#on)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#onenable)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md#once)
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

#### Defined in

src/tools/pathCurve.ts:61

## Properties

### app

• **app**: `AppBase`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#app)

#### Defined in

src/utils/helpers/toolBase.ts:15

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

src/utils/helpers/toolBase.ts:18

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

#### Defined in

src/utils/helpers/toolBase.ts:43

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

#### Defined in

src/utils/helpers/toolBase.ts:34

## Methods

### cancelDraw

▸ **cancelDraw**(): `void`

取消曲线绘制

#### Returns

`void`

#### Defined in

src/tools/pathCurve.ts:201

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

src/tools/pathCurve.ts:152

___

### fire

▸ `Protected` **fire**<`EventName`\>(`eventName`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`, `arg8?`): `EventHandler`

手动触发事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `arg1?` | `any` | 参数1 |
| `arg2?` | `any` | 参数2 |
| `arg3?` | `any` | 参数3 |
| `arg4?` | `any` | 参数4 |
| `arg5?` | `any` | 参数5 |
| `arg6?` | `any` | 参数6 |
| `arg7?` | `any` | 参数7 |
| `arg8?` | `any` | 参数8 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#fire)

#### Defined in

src/utils/helpers/toolBase.ts:128

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

src/tools/pathCurve.ts:260

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

src/tools/pathCurve.ts:211

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

src/tools/pathCurve.ts:224

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

src/tools/pathCurve.ts:250

___

### hasEvent

▸ **hasEvent**<`EventName`\>(`eventName`): `boolean`

检测是否监听此事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |

#### Returns

`boolean`

是否监听此事件

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#hasevent)

#### Defined in

src/utils/helpers/toolBase.ts:111

___

### off

▸ **off**<`EventName`\>(`eventName`, `linstener`, `scope?`): `EventHandler`

注销事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `linstener` | `any` | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#off)

#### Defined in

src/utils/helpers/toolBase.ts:102

___

### on

▸ **on**<`EventName`\>(`eventName`, `linstener`, `scope?`): `EventHandler`

注册事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `linstener` | `any` | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#on)

#### Defined in

src/utils/helpers/toolBase.ts:80

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/utils/helpers/toolBase.ts:134

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/utils/helpers/toolBase.ts:133

___

### once

▸ **once**<`EventName`\>(`eventName`, `linstener`, `scope?`): `EventHandler`

注册单次事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `linstener` | `any` | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#once)

#### Defined in

src/utils/helpers/toolBase.ts:91

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

#### Defined in

src/utils/helpers/toolBase.ts:52

___

### updateNodes

▸ **updateNodes**(): `void`

更新节点

#### Returns

`void`

#### Defined in

src/tools/pathCurve.ts:106

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

#### Defined in

src/utils/helpers/toolBase.ts:65
