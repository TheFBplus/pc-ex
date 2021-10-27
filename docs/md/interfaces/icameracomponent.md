[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / ICameraComponent

# Interface: ICameraComponent

## Table of contents

### Methods

- [raycastMeshInstances](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/ICameraComponent.md#raycastmeshinstances)
- [syncCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/ICameraComponent.md#synccamera)

## Methods

### raycastMeshInstances

▸ **raycastMeshInstances**(`ray`, `meshInstances`): `intersect`[]

从此相机发射射线，检测一系列mesh的交点 {@link playcanvas#Vec3 | the Vec3 class}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | `Ray` | 要检测的射线 |
| `meshInstances` | `MeshInstance`[] | 要检测的meshInstance集合 |

#### Returns

`intersect`[]

交点集合

#### Defined in

src/extensions/extendClasses/cameraComponent.ts:19

___

### syncCamera

▸ **syncCamera**(`camera`): `void`

让两个相机同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera` | `CameraComponent` | 要同步的相机 |

#### Returns

`void`

#### Defined in

src/extensions/extendClasses/cameraComponent.ts:11
