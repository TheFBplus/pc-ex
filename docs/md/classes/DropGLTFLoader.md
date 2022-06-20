[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / DropGLTFLoader

# Class: DropGLTFLoader

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`unknown`, `DropGLTFLoaderEvents`\>

  ↳ **`DropGLTFLoader`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#constructor)

### Properties

- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#eventhandler)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#addlistener)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#removelistener)
- [setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md#setoption)

## Constructors

### constructor

• **new DropGLTFLoader**()

创建新的工具实例

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

#### Defined in

src/tools/loaders/dropGLTFLoader.ts:31

## Properties

### eventHandler

• **eventHandler**: `ExEventHandler`<``"modelLoaded"``\>

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
| `eventName` | ``"modelLoaded"`` | 监听事件名称 |
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

src/tools/loaders/dropGLTFLoader.ts:45

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/loaders/dropGLTFLoader.ts:43

___

### removeListener

▸ **removeListener**(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | ``"modelLoaded"`` | 监听事件名称 |
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

▸ **setOption**(): `void`

设置选项

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoption)

#### Defined in

src/tools/loaders/dropGLTFLoader.ts:41
