[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Tool

# Class: Tool<Options, EventsMap\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Options` | extends `Object` |
| `EventsMap` | extends `Object` |

## Hierarchy

- **`Tool`**

  ↳ [`OrbitCamera`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md)

  ↳ [`OrbitCameraInput_Mouse`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md)

  ↳ [`OrbitCameraInput_TouchScreen`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_TouchScreen.md)

  ↳ [`OutlineCamera`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md)

  ↳ [`MouseInputer`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md)

  ↳ [`DropGLTFLoader`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md)

  ↳ [`PathCurve`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md)

  ↳ [`RTH_RuntimeGrid`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RTH_RuntimeGrid.md)

  ↳ [`RTH_KeyboardInputer`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RTH_KeyboardInputer.md)

  ↳ [`RuntimeTransformHandle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md)

  ↳ [`MultiSelector`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md)

  ↳ [`Selector`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md)

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)
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

## Properties

### app

• **app**: `AppBase`

#### Defined in

src/utils/helpers/toolBase.ts:22

___

### eventHandler

• **eventHandler**: `ExEventHandler`<`EventsMap`\>

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### toolOptions

• **toolOptions**: `Options`

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: `Options`

#### Defined in

src/utils/helpers/toolBase.ts:25

## Accessors

### enabled

• `get` **enabled**(): `boolean`

获得工具的启用状态

#### Returns

`boolean`

• `set` **enabled**(`value`): `void`

设置工具启用状态（触发启用和禁用时的额外操作）

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

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
| `callback` | `EventsMap`[`K`] | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

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
| `callback` | `EventsMap`[`K`] | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

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
