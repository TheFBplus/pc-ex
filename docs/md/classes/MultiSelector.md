[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / MultiSelector

# Class: MultiSelector

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`SelectorOptions`, `MultiSelectorEventType`\>

  ↳ **`MultiSelector`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#constructor)

### Properties

- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#eventhandler)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#removelistener)
- [setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md#setoption)

## Constructors

### constructor

• **new MultiSelector**(`option`)

创建新的工具实例

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `SelectorOptions` |

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

#### Defined in

src/tools/selector/multiSelector.ts:43

## Properties

### eventHandler

• **eventHandler**: `ExEventHandler`<`MultiSelectorEventType`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/libs/libs/toolHelper.ts:60

## Accessors

### enabled

• `get` **enabled**(): `boolean`

获得工具的启用状态

#### Returns

`boolean`

#### Inherited from

Tool.enabled

#### Defined in

src/libs/libs/toolHelper.ts:85

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

src/libs/libs/toolHelper.ts:76

## Methods

### addListener

▸ **addListener**(`eventName`, `callback`, `scope?`): `void`

添加事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `MultiSelectorEventType` | 监听事件名称 |
| `callback` | `Function` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)

#### Defined in

src/libs/libs/toolHelper.ts:96

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/tools/selector/multiSelector.ts:195

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/selector/multiSelector.ts:188

___

### removeListener

▸ **removeListener**(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `MultiSelectorEventType` | 监听事件名称 |
| `callback` | `Function` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)

#### Defined in

src/libs/libs/toolHelper.ts:107

___

### setOption

▸ **setOption**(`option`): `void`

设置多选模型选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | `SelectorOptions` | 多选模型选项 |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoption)

#### Defined in

src/tools/selector/multiSelector.ts:57
