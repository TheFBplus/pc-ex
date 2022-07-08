[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / OrbitCameraInput\_Mouse

# Class: OrbitCameraInput\_Mouse

观测相机鼠标输入

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`OrbitCameraInputOption`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraInputOption.md), `unknown`\>

  ↳ **`OrbitCameraInput_Mouse`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#eventhandler)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#removelistener)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#setoptions)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md#updateoptions)

## Constructors

### constructor

• **new OrbitCameraInput_Mouse**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OrbitCameraInputOption`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraInputOption.md) |

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

• **eventHandler**: `ExEventHandler`<`unknown`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### toolOptions

• **toolOptions**: [`OrbitCameraInputOption`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraInputOption.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`OrbitCameraInputOption`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraInputOption.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/camera/orbitCamera.ts:427

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
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `unknown` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

___

### removeListener

▸ **removeListener**<`K`\>(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `unknown` | 回调 |
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
| `options` | [`OrbitCameraInputOption`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraInputOption.md) | 选项 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)

___

### updateOptions

▸ **updateOptions**(`options`): `void`

更新选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | 选项 |
| `options.distanceSensitivity?` | `number` | - |
| `options.orbitCamera?` | [`OrbitCamera`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md) | - |
| `options.orbitSensitivity?` | `number` | - |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)
