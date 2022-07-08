[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / MouseInputer

# Class: MouseInputer

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`MouseInputOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/MouseInputOptions.md), [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)\>

  ↳ **`MouseInputer`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#eventhandler)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#removelistener)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#setoptions)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md#updateoptions)

## Constructors

### constructor

• **new MouseInputer**(`option?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | [`MouseInputOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/MouseInputOptions.md) |

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

• **eventHandler**: `ExEventHandler`<[`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### toolOptions

• **toolOptions**: [`MouseInputOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/MouseInputOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`MouseInputOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/MouseInputOptions.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/input/mouseInput.ts:35

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
| `K` | extends keyof [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)[`K`] | 回调 |
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
| `K` | extends keyof [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)[`K`] | 回调 |
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
| `options` | [`MouseInputOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/MouseInputOptions.md) | 选项 |

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
| `options.clickError?` | `number` | - |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)
