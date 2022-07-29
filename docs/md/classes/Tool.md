[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Tool

# Class: Tool<Options, EventsMap\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Object` |
| `EventsMap` | extends `Object` |

## Hierarchy

- **`Tool`**

  ↳ [`OrbitCamera`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OrbitCamera.md)

  ↳ [`OrbitCameraInput_Mouse`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OrbitCameraInput_Mouse.md)

  ↳ [`OrbitCameraInput_TouchScreen`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OrbitCameraInput_TouchScreen.md)

  ↳ [`OutlineCamera`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md)

  ↳ [`PathCurve`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.PathCurve.md)

  ↳ [`MouseInputer`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.MouseInputer.md)

  ↳ [`DropGLTFLoader`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.DropGLTFLoader.md)

  ↳ [`RTH_RuntimeGrid`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.RTH_RuntimeGrid.md)

  ↳ [`RTH_KeyboardInputer`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.RTH_KeyboardInputer.md)

  ↳ [`RuntimeTransformHandle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.RuntimeTransformHandle.md)

  ↳ [`MultiSelector`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.MultiSelector.md)

  ↳ [`Selector`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.Selector.md)

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#app)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#enabled)

### Methods

- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#fire)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#on)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#once)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)

## Constructors

### constructor

• **new Tool**<`Options`, `EventsMap`\>()

创建新的工具实例

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Object` |
| `EventsMap` | extends `Object` |

#### Defined in

src/utils/helpers/toolBase.ts:25

## Properties

### app

• **app**: `AppBase`

#### Defined in

src/utils/helpers/toolBase.ts:15

___

### toolOptions

• **toolOptions**: `Options`

#### Defined in

src/utils/helpers/toolBase.ts:18

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: `Options`

#### Defined in

src/utils/helpers/toolBase.ts:17

## Accessors

### enabled

• `get` **enabled**(): `boolean`

获得工具的启用状态

#### Returns

`boolean`

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

#### Defined in

src/utils/helpers/toolBase.ts:34

## Methods

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

#### Defined in

src/utils/helpers/toolBase.ts:128

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
| `linstener` | `EventsMap`[`EventName`] | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

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
| `linstener` | `EventsMap`[`EventName`] | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Defined in

src/utils/helpers/toolBase.ts:80

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Defined in

src/utils/helpers/toolBase.ts:134

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

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
| `linstener` | `EventsMap`[`EventName`] | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Defined in

src/utils/helpers/toolBase.ts:91

___

### setOptions

▸ **setOptions**(`options`): `void`

设置选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Options` | 选项 |

#### Returns

`void`

#### Defined in

src/utils/helpers/toolBase.ts:52

___

### updateOptions

▸ **updateOptions**(`options`): `void`

更新选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | { [P in string \| number \| symbol]?: Options[P] } | 选项 |

#### Returns

`void`

#### Defined in

src/utils/helpers/toolBase.ts:65
