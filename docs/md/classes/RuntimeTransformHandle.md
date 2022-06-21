[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / RuntimeTransformHandle

# Class: RuntimeTransformHandle

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`RTHOptions`, `RTHEvents`\>

  ↳ **`RuntimeTransformHandle`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#constructor)

### Properties

- [camera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#camera)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#eventhandler)

### Accessors

- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#enabled)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#addlistener)
- [focus](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#focus)
- [look](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#look)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#onenable)
- [redo](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#redo)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#removelistener)
- [select](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#select)
- [setHandleType](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#sethandletype)
- [setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#setoption)
- [setPivotType](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#setpivottype)
- [switchPivot](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#switchpivot)
- [undo](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#undo)

## Constructors

### constructor

• **new RuntimeTransformHandle**(`options`)

创建新的工具实例

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RTHOptions` |

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:159

## Properties

### camera

• **camera**: `CameraComponent`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:51

___

### eventHandler

• **eventHandler**: `ExEventHandler`<`RTHEvents`\>

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
| `eventName` | `RTHEvents` | 监听事件名称 |
| `callback` | `Function` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)

#### Defined in

src/libs/libs/toolHelper.ts:96

___

### focus

▸ **focus**(): `void`

聚焦选中物体

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:368

___

### look

▸ **look**(`target`): `void`

相机看向目标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Entity` \| `Entity`[] | 目标物体 |

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:421

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:1093

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:1091

___

### redo

▸ **redo**(): `void`

重做

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:410

___

### removeListener

▸ **removeListener**(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `RTHEvents` | 监听事件名称 |
| `callback` | `Function` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)

#### Defined in

src/libs/libs/toolHelper.ts:107

___

### select

▸ **select**(`target`, `saveRecord?`): `void`

选中模型

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `Entity` \| `Entity`[] | `undefined` | 选中的单个模型或模型数组（传入null时则取消选中） |
| `saveRecord` | `boolean` | `false` | 是否保存记录 |

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:339

___

### setHandleType

▸ **setHandleType**(`type`): `void`

设置坐标轴类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `HandleType` | 坐标轴类型 |

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:314

___

### setOption

▸ **setOption**(`options`): `void`

设置RTH

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RTHOptions` |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoption)

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:296

___

### setPivotType

▸ **setPivotType**(`type`): `void`

设置中心点类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `PivotType` | 中心点类型 |

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:328

___

### switchPivot

▸ **switchPivot**(`pivot?`): `void`

切换轴心模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `pivot?` | `PivotType` |

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:380

___

### undo

▸ **undo**(): `void`

撤销

#### Returns

`void`

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:400
