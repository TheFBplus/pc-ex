[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / OutlineCamera

# Class: OutlineCamera

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md), `any`\>

  ↳ **`OutlineCamera`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#eventhandler)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#removelistener)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#setoptions)
- [toggleOutLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#toggleoutline)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md#updateoptions)

## Constructors

### constructor

• **new OutlineCamera**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md) |

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

src/utils/helpers/toolBase.ts:22

___

### eventHandler

• **eventHandler**: `ExEventHandler`<`any`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### toolOptions

• **toolOptions**: [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md)

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

src/utils/helpers/toolBase.ts:52

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

src/utils/helpers/toolBase.ts:43

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

#### Defined in

src/utils/helpers/toolBase.ts:63

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

#### Defined in

src/utils/helpers/toolBase.ts:74

___

### setOptions

▸ **setOptions**(`options`): `void`

设置外边框相机选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md) | 外边框相机选项 |

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
| `options` | [`outlineCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md) | 外边框相机选项 |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)

#### Defined in

src/tools/camera/outlineCamera.ts:72
