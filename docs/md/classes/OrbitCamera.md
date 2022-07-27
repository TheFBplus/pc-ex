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

- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#fire)
- [focus](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#focus)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#on)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#onenable)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#once)
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

#### Defined in

src/tools/camera/orbitCamera.ts:94

## Properties

### app

• **app**: `AppBase`

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#app)

#### Defined in

src/utils/helpers/toolBase.ts:15

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

src/utils/helpers/toolBase.ts:18

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

#### Defined in

src/tools/camera/orbitCamera.ts:179

• `set` **device**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `AvailableDevices` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:183

___

### distance

• `get` **distance**(): `number`

离焦点的距离

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:155

• `set` **distance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:159

___

### enabled

• `get` **enabled**(): `boolean`

获得工具的启用状态

#### Returns

`boolean`

#### Inherited from

Tool.enabled

#### Defined in

src/utils/helpers/toolBase.ts:43

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

src/utils/helpers/toolBase.ts:34

___

### pitch

• `get` **pitch**(): `number`

俯视角

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:143

• `set` **pitch**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:147

___

### pivotPoint

• `get` **pivotPoint**(): `Vec3`

焦点坐标

#### Returns

`Vec3`

#### Defined in

src/tools/camera/orbitCamera.ts:167

• `set` **pivotPoint**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vec3` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:171

___

### yaw

• `get` **yaw**(): `number`

航向角

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:121

• `set` **yaw**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:125

## Methods

### fire

▸ `Protected` **fire**<`EventName`\>(`eventName`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`, `arg8?`): `EventHandler`

手动触发事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `arg1?` | `any` | 参数1 |
| `arg2?` | `any` | 参数2 |
| `arg3?` | `any` | 参数3 |
| `arg4?` | `any` | 参数4 |
| `arg5?` | `any` | 参数5 |
| `arg6?` | `any` | 参数6 |
| `arg7?` | `any` | 参数7 |
| `arg8?` | `any` | 参数8 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#fire)

#### Defined in

src/utils/helpers/toolBase.ts:128

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

#### Defined in

src/tools/camera/orbitCamera.ts:215

___

### hasEvent

▸ **hasEvent**<`EventName`\>(`eventName`): `boolean`

检测是否监听此事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |

#### Returns

`boolean`

是否监听此事件

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#hasevent)

#### Defined in

src/utils/helpers/toolBase.ts:111

___

### off

▸ **off**<`EventName`\>(`eventName`, `linstener`, `scope?`): `EventHandler`

注销事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `linstener` | `any` | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#off)

#### Defined in

src/utils/helpers/toolBase.ts:102

___

### on

▸ **on**<`EventName`\>(`eventName`, `linstener`, `scope?`): `EventHandler`

注册事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `linstener` | `any` | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#on)

#### Defined in

src/utils/helpers/toolBase.ts:80

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/tools/camera/orbitCamera.ts:407

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/camera/orbitCamera.ts:385

___

### once

▸ **once**<`EventName`\>(`eventName`, `linstener`, `scope?`): `EventHandler`

注册单次事件监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `EventName` | 事件名称 |
| `linstener` | `any` | 监听回调 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`EventHandler`

EventHandler

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#once)

#### Defined in

src/utils/helpers/toolBase.ts:91

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

#### Defined in

src/utils/helpers/toolBase.ts:52

___

### stopInertia

▸ **stopInertia**(): `void`

结束目标缓动

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:235

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

#### Defined in

src/utils/helpers/toolBase.ts:65
