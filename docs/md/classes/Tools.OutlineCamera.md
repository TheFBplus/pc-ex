[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / [Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md) / OutlineCamera

# Class: OutlineCamera

[Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md).OutlineCamera

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.outlineCameraOptions.md), `any`\>

  ↳ **`OutlineCamera`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#app)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#enabled)

### Methods

- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#fire)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#on)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#onenable)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#once)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#setoptions)
- [toggleOutLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#toggleoutline)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tools.OutlineCamera.md#updateoptions)

## Constructors

### constructor

• **new OutlineCamera**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.outlineCameraOptions.md) |

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

#### Defined in

src/tools/camera/outlineCamera.ts:51

## Properties

### app

• **app**: `AppBase`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#app)

#### Defined in

src/utils/helpers/toolBase.ts:15

___

### toolOptions

• **toolOptions**: [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.outlineCameraOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:18

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.outlineCameraOptions.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/camera/outlineCamera.ts:41

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

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/tools/camera/outlineCamera.ts:193

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/camera/outlineCamera.ts:188

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

设置外边框相机选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.outlineCameraOptions.md) | 外边框相机选项 |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)

#### Defined in

src/tools/camera/outlineCamera.ts:61

___

### toggleOutLine

▸ **toggleOutLine**(`entity`, `isOn`): `void`

开启或关闭描边特效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `Entity` | 节点 |
| `isOn` | `boolean` | - |

#### Returns

`void`

#### Defined in

src/tools/camera/outlineCamera.ts:84

___

### updateOptions

▸ **updateOptions**(`options`): `void`

更新外边框相机选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Tools.outlineCameraOptions.md) | 外边框相机选项 |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)

#### Defined in

src/tools/camera/outlineCamera.ts:72
