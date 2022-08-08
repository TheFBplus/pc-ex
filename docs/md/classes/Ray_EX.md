[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Ray\_EX

# Class: Ray\_EX

## Hierarchy

- `Ray`

  ↳ **`Ray_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md#constructor)

### Properties

- [direction](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md#direction)
- [origin](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md#origin)

### Methods

- [intersectTriangle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md#intersecttriangle)
- [set](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md#set)

## Constructors

### constructor

• **new Ray_EX**(`origin?`, `direction?`)

Creates a new Ray instance. The ray is infinite, starting at a given origin and pointing in
a given direction.

**`Example`**

```ts
// Create a new ray starting at the position of this entity and pointing down
// the entity's negative Z axis
var ray = new pc.Ray(this.entity.getPosition(), this.entity.forward);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin?` | `Vec3` | The starting point of the ray. The constructor takes a reference of this parameter. Defaults to the origin (0, 0, 0). |
| `direction?` | `Vec3` | The direction of the ray. The constructor takes a reference of this parameter. Defaults to a direction down the world negative Z axis (0, 0, -1). |

#### Inherited from

pc.Ray.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:3612

## Properties

### direction

• **direction**: `Vec3`

The direction of the ray.

#### Inherited from

pc.Ray.direction

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:3624

___

### origin

• **origin**: `Vec3`

The starting point of the ray.

#### Inherited from

pc.Ray.origin

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:3618

## Methods

### intersectTriangle

▸ **intersectTriangle**(`a`, `b`, `c`, `backfaceCulling`, `res?`): `Vec3`

获得射线和指定三角形的交点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Vec3` | 三角形a点坐标 |
| `b` | `Vec3` | 三角形b点坐标 |
| `c` | `Vec3` | 三角形c点坐标 |
| `backfaceCulling` | `boolean` | 是否剔除背面 |
| `res?` | `Vec3` | 交点（不传则创建新的向量） |

#### Returns

`Vec3`

射线和三角形的交点

#### Defined in

src/extensions/ray.ts:30

___

### set

▸ **set**(`origin`, `direction`): `Ray`

Sets origin and direction to the supplied vector values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | `Vec3` | The starting point of the ray. |
| `direction` | `Vec3` | The direction of the ray. |

#### Returns

`Ray`

Self for chaining.

#### Inherited from

pc.Ray.set

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:3632
