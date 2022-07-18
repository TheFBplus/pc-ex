[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / OrbitCamera

# Class: OrbitCamera

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<[`OrbitCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraOptions.md), `any`\>

  ↳ **`OrbitCamera`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#app)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#eventhandler)
- [isLooking](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#islooking)
- [isPaning](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#ispaning)
- [isRotating](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#isrotating)
- [toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#tooloptions)
- [toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#tooloptionsdefault)

### Accessors

- [device](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#device)
- [distance](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#distance)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#enabled)
- [pitch](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#pitch)
- [pivotPoint](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#pivotpoint)
- [yaw](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#yaw)

### Methods

- [addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#addlistener)
- [focus](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#focus)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#onenable)
- [removeListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#removelistener)
- [setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#setoptions)
- [stopInertia](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#stopinertia)
- [updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#updateoptions)

## Constructors

### constructor

• **new OrbitCamera**(`options?`)

创建观测相机

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`OrbitCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraOptions.md) | 观测相机选项 |

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

• **eventHandler**: `ExEventHandler`<`any`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/utils/helpers/toolBase.ts:23

___

### isLooking

• **isLooking**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:73

___

### isPaning

• **isPaning**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:72

___

### isRotating

• **isRotating**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:71

___

### toolOptions

• **toolOptions**: [`OrbitCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraOptions.md)

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptions)

#### Defined in

src/utils/helpers/toolBase.ts:26

___

### toolOptionsDefault

• `Protected` **toolOptionsDefault**: [`OrbitCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraOptions.md)

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[toolOptionsDefault](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#tooloptionsdefault)

#### Defined in

src/tools/camera/orbitCamera.ts:55

## Accessors

### device

• `get` **device**(): `AvailableDevices`

输入设备

#### Returns

`AvailableDevices`

• `set` **device**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `AvailableDevices` |

#### Returns

`void`

___

### distance

• `get` **distance**(): `number`

离焦点的距离

#### Returns

`number`

• `set` **distance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

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

___

### pitch

• `get` **pitch**(): `number`

俯视角

#### Returns

`number`

• `set` **pitch**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

___

### pivotPoint

• `get` **pivotPoint**(): `Vec3`

焦点坐标

#### Returns

`Vec3`

• `set` **pivotPoint**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vec3` |

#### Returns

`void`

___

### yaw

• `get` **yaw**(): `number`

航向角

#### Returns

`number`

• `set` **yaw**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

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
| `callback` | `any` | 回调 |
| `scope?` | `any` | 范围 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[addListener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#addlistener)

___

### focus

▸ **focus**(`entity`): `void`

聚焦

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `Entity` \| `Entity`[] | 聚焦物体 |

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

___

### setOptions

▸ **setOptions**(`options`): `void`

设置选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`OrbitCameraOptions`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraOptions.md) | 选项 |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoptions)

___

### stopInertia

▸ **stopInertia**(): `void`

结束目标缓动

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
| `options.device?` | `AvailableDevices` | - |
| `options.distanceCondition?` | () => `boolean` | - |
| `options.distanceMax?` | `number` | - |
| `options.distanceMin?` | `number` | - |
| `options.distanceSensitivity?` | `number` | - |
| `options.inertiaFactor?` | `number` | - |
| `options.lookCondition?` | () => `boolean` | - |
| `options.mainCamra?` | `CameraComponent` | - |
| `options.orbitSensitivity?` | `number` | - |
| `options.panCondition?` | () => `boolean` | - |
| `options.pitchMax?` | `number` | - |
| `options.pitchMin?` | `number` | - |
| `options.rotateCondition?` | () => `boolean` | - |

#### Returns

`void`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[updateOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#updateoptions)
