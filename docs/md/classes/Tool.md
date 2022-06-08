[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Tool

# Class: Tool<Options, EventsType\>

## Type parameters

| Name |
| :------ |
| `Options` |
| `EventsType` |

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

### Properties

- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)
- [setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoption)

## Constructors

### constructor

• **new Tool**<`Options`, `EventsType`\>()

创建新的工具实例

#### Type parameters

| Name |
| :------ |
| `Options` |
| `EventsType` |

#### Defined in

src/lib/toolHelper.ts:67

## Properties

### eventHandler

• **eventHandler**: `ExEventHandler`<`EventsType`\>

#### Defined in

src/lib/toolHelper.ts:60

## Accessors

### enabled

• `get` **enabled**(): `boolean`

获得工具的启用状态

#### Returns

`boolean`

#### Defined in

src/lib/toolHelper.ts:85

• `set` **enabled**(`value`): `void`

设置工具启用状态（触发启用和禁用时的额外操作）

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

src/lib/toolHelper.ts:76

## Methods

### addListener

▸ **addListener**(`eventName`, `callback`, `scope?`): `void`

添加事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventsType` | 监听事件名称 |
| `callback` | `Function` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Defined in

src/lib/toolHelper.ts:96

___

### onDisable

▸ `Protected` `Abstract` **onDisable**(): `void`

#### Returns

`void`

#### Defined in

src/lib/toolHelper.ts:119

___

### onEnable

▸ `Protected` `Abstract` **onEnable**(): `void`

#### Returns

`void`

#### Defined in

src/lib/toolHelper.ts:118

___

### removeListener

▸ **removeListener**(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventsType` | 监听事件名称 |
| `callback` | `Function` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Defined in

src/lib/toolHelper.ts:107

___

### setOption

▸ `Abstract` **setOption**(`options`): `void`

设置选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Options` | 选项 |

#### Returns

`void`

#### Defined in

src/lib/toolHelper.ts:116
