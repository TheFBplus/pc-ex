[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / OrbitCamera

# Class: OrbitCamera

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`OrbitCameraOptions`, `unknown`\>

  ↳ **`OrbitCamera`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#constructor)

### Properties

- [disablePan](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#disablepan)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#eventhandler)
- [isLooking](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#islooking)
- [mainCamra](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#maincamra)

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
- [setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#setoption)

## Constructors

### constructor

• **new OrbitCamera**(`option`)

创建观测相机

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | `OrbitCameraOptions` | 观测相机选项 |

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#constructor)

#### Defined in

src/tools/camera/orbitCamera.ts:63

## Properties

### disablePan

• **disablePan**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:33

___

### eventHandler

• **eventHandler**: `ExEventHandler`<`unknown`\>

#### Inherited from

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#eventhandler)

#### Defined in

src/libs/libs/toolHelper.ts:60

___

### isLooking

• **isLooking**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:32

___

### mainCamra

• **mainCamra**: `CameraComponent`

#### Defined in

src/tools/camera/orbitCamera.ts:31

## Accessors

### device

• `get` **device**(): `AvailableDevices`

输入设备

#### Returns

`AvailableDevices`

#### Defined in

src/tools/camera/orbitCamera.ts:166

• `set` **device**(`value`): `void`

输入设备

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `AvailableDevices` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:170

___

### distance

• `get` **distance**(): `number`

离焦点的距离

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:142

• `set` **distance**(`value`): `void`

离焦点的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:146

___

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

___

### pitch

• `get` **pitch**(): `number`

俯视角

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:130

• `set` **pitch**(`value`): `void`

俯视角

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:134

___

### pivotPoint

• `get` **pivotPoint**(): `Vec3`

焦点坐标

#### Returns

`Vec3`

#### Defined in

src/tools/camera/orbitCamera.ts:154

• `set` **pivotPoint**(`value`): `void`

焦点坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vec3` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:158

___

### yaw

• `get` **yaw**(): `number`

航向角

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:108

• `set` **yaw**(`value`): `void`

航向角

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:112

## Methods

### addListener

▸ **addListener**(`eventName`, `callback`, `scope?`): `void`

添加事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `unknown` | 监听事件名称 |
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

▸ **focus**(`entity`): `void`

聚焦

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `Entity` \| `Entity`[] | 聚焦物体 |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:194

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/tools/camera/orbitCamera.ts:369

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/camera/orbitCamera.ts:355

___

### removeListener

▸ **removeListener**(`eventName`, `callback`, `scope?`): `void`

移除事件监听

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `unknown` | 监听事件名称 |
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

设置观测相机选项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | `OrbitCameraOptions` | 观测相机选项 |

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[setOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#setoption)

#### Defined in

src/tools/camera/orbitCamera.ts:91
