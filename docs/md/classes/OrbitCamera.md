[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / OrbitCamera

# Class: OrbitCamera

## Hierarchy

- [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`OrbitCameraOptions`, `unknown`\>

  ↳ **`OrbitCamera`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#constructor)

### Properties

- [distanceCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#distancecondition)
- [eventHandler](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#eventhandler)
- [isLooking](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#islooking)
- [isPaning](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#ispaning)
- [isRotating](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#isrotating)
- [lookCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#lookcondition)
- [mainCamra](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#maincamra)
- [panCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#pancondition)
- [rotateCondition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#rotatecondition)

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
- [stopInertia](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md#stopinertia)

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

src/tools/camera/orbitCamera.ts:74

## Properties

### distanceCondition

• **distanceCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:42

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

src/tools/camera/orbitCamera.ts:39

___

### isPaning

• **isPaning**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:38

___

### isRotating

• **isRotating**: `boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:37

___

### lookCondition

• **lookCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:44

___

### mainCamra

• **mainCamra**: `CameraComponent`

#### Defined in

src/tools/camera/orbitCamera.ts:35

___

### panCondition

• **panCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:43

___

### rotateCondition

• **rotateCondition**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

src/tools/camera/orbitCamera.ts:41

## Accessors

### device

• `get` **device**(): `AvailableDevices`

输入设备

#### Returns

`AvailableDevices`

#### Defined in

src/tools/camera/orbitCamera.ts:181

• `set` **device**(`value`): `void`

输入设备

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `AvailableDevices` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:185

___

### distance

• `get` **distance**(): `number`

离焦点的距离

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:157

• `set` **distance**(`value`): `void`

离焦点的距离

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:161

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

src/tools/camera/orbitCamera.ts:145

• `set` **pitch**(`value`): `void`

俯视角

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:149

___

### pivotPoint

• `get` **pivotPoint**(): `Vec3`

焦点坐标

#### Returns

`Vec3`

#### Defined in

src/tools/camera/orbitCamera.ts:169

• `set` **pivotPoint**(`value`): `void`

焦点坐标

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vec3` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:173

___

### yaw

• `get` **yaw**(): `number`

航向角

#### Returns

`number`

#### Defined in

src/tools/camera/orbitCamera.ts:123

• `set` **yaw**(`value`): `void`

航向角

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:127

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

src/tools/camera/orbitCamera.ts:209

___

### onDisable

▸ `Protected` **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#ondisable)

#### Defined in

src/tools/camera/orbitCamera.ts:393

___

### onEnable

▸ `Protected` **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md).[onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md#onenable)

#### Defined in

src/tools/camera/orbitCamera.ts:379

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

src/tools/camera/orbitCamera.ts:102

___

### stopInertia

▸ **stopInertia**(): `void`

结束目标缓动

#### Returns

`void`

#### Defined in

src/tools/camera/orbitCamera.ts:229
