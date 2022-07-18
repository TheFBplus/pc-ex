[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / RuntimeTransformHandle

# Class: RuntimeTransformHandle

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`RTHOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/RTHOptions.md), `RTHEventsMap`\>

  ↳ **`RuntimeTransformHandle`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#eventhandler)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#tooloptionsdefault)

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
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#setoptions)
- [setPivotType](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#setpivottype)
- [switchPivot](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#switchpivot)
- [undo](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#undo)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/RuntimeTransformHandle.md#updateoptions)

## Constructors

### constructor

• **new RuntimeTransformHandle**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RTHOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/RTHOptions.md) |

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

• **eventHandler**: `ExEventHandler`<`RTHEventsMap`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### toolOptions

• **toolOptions**: [`RTHOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/RTHOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`RTHOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/RTHOptions.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/runtimeTransformHandle/runtimeTransformHandle.ts:55

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
| `K` | extends keyof `RTHEventsMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `RTHEventsMap`[`K`] | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)

___

### focus

▸ **focus**(): `void`

聚焦选中物体

#### Returns

`void`

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

### redo

▸ **redo**(): `void`

重做

#### Returns

`void`

___

### removeListener

▸ **removeListener**<`K`\>(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `RTHEventsMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | 监听事件名称 |
| `callback` | `RTHEventsMap`[`K`] | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#removelistener)

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

___

### setHandleType

▸ **setHandleType**(`type`): `void`

设置坐标轴类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`HandleType`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/enums/HandleType.md) | 坐标轴类型 |

#### Returns

`void`

___

### setOptions

▸ **setOptions**(`options`): `void`

设置选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`RTHOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/RTHOptions.md) | 选项 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)

___

### setPivotType

▸ **setPivotType**(`type`): `void`

设置中心点类型

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`PivotType`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/enums/PivotType.md) | 中心点类型 |

#### Returns

`void`

___

### switchPivot

▸ **switchPivot**(`pivot?`): `void`

切换轴心模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `pivot?` | [`PivotType`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/enums/PivotType.md) |

#### Returns

`void`

___

### undo

▸ **undo**(): `void`

撤销

#### Returns

`void`

___

### updateOptions

▸ **updateOptions**(`options`): `void`

更新选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | 选项 |
| `options.enableHotKey?` | `boolean` | - |
| `options.enableUndoRedo?` | `boolean` | - |
| `options.mainCamera?` | `CameraComponent` | - |
| `options.multiSelect?` | `boolean` | - |
| `options.selectCondition?` | () => `boolean` | - |
| `options.selectNull?` | `boolean` | - |
| `options.selectTags?` | `string` | - |
| `options.showGrid?` | `boolean` | - |
| `options.showHandle?` | `boolean` | - |
| `options.showOutline?` | `boolean` | - |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)
