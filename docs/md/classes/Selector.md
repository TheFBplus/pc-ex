[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Selector

# Class: Selector

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`SelectorOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md), `SelectorEventsMap`\>

  ↳ **`Selector`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#eventhandler)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#tooloptionsdefault)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#removelistener)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#setoptions)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md#updateoptions)

## Constructors

### constructor

• **new Selector**(`options`)

创建模型点选器

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SelectorOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md) |

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

• **eventHandler**: `ExEventHandler`<`SelectorEventsMap`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### toolOptions

• **toolOptions**: [`SelectorOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`SelectorOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/selector/selector.ts:42

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
| `K` | extends ``"select"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `SelectorEventsMap`[`K`] | 回调 |
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
| `K` | extends ``"select"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `SelectorEventsMap`[`K`] | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)

___

### setOptions

▸ **setOptions**(`options`): `void`

设置模型点选器

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SelectorOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md) |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)

___

### updateOptions

▸ **updateOptions**(`options`): `void`

更新选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | 选项 |
| `options.excludeLayers?` | `Layer`[] | - |
| `options.inputHandler?` | [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`unknown`, [`InputEventsMap`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)\> | - |
| `options.pickAreaScale?` | `number` | - |
| `options.pickCamera?` | `CameraComponent` | - |
| `options.pickCondition?` | () => `boolean` | - |
| `options.pickNull?` | `boolean` | - |
| `options.pickSame?` | `boolean` | - |
| `options.pickTag?` | `string` | - |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)
