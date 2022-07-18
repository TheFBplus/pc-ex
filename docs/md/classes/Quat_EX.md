[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Quat\_EX

# Class: Quat\_EX

## Hierarchy

- `Quat`

  ↳ **`Quat_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#constructor)

### Properties

- [w](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#w)
- [x](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#x)
- [y](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#y)
- [z](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#z)
- [IDENTITY](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#identity)
- [ZERO](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#zero)

### Methods

- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#clone)
- [conjugate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#conjugate)
- [copy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#copy)
- [equals](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#equals)
- [getAxisAngle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#getaxisangle)
- [getEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#geteulerangles)
- [invert](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#invert)
- [length](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#length)
- [lengthSq](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#lengthsq)
- [mul](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#mul)
- [mul2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#mul2)
- [normalize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#normalize)
- [set](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#set)
- [setFromAxisAngle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#setfromaxisangle)
- [setFromEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#setfromeulerangles)
- [setFromMat4](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#setfrommat4)
- [setLookRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#setlookrotation)
- [slerp](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#slerp)
- [toString](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#tostring)
- [transformVector](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md#transformvector)

## Constructors

### constructor

• **new Quat_EX**(`x?`, `y?`, `z?`, `w?`)

Create a new Quat instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` \| `number`[] | The quaternion's x component. Defaults to 0. If x is an array of length 4, the array will be used to populate all components. |
| `y?` | `number` | The quaternion's y component. Defaults to 0. |
| `z?` | `number` | The quaternion's z component. Defaults to 0. |
| `w?` | `number` | The quaternion's w component. Defaults to 1. |

#### Inherited from

pc.Quat.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4189

## Properties

### w

• **w**: `number`

The w component of the quaternion.

#### Inherited from

pc.Quat.w

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4213

___

### x

• **x**: `number`

The x component of the quaternion.

#### Inherited from

pc.Quat.x

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4195

___

### y

• **y**: `number`

The y component of the quaternion.

#### Inherited from

pc.Quat.y

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4201

___

### z

• **z**: `number`

The z component of the quaternion.

#### Inherited from

pc.Quat.z

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4207

___

### IDENTITY

▪ `Static` `Readonly` **IDENTITY**: `Quat`

A constant quaternion set to [0, 0, 0, 1] (the identity).

#### Inherited from

pc.Quat.IDENTITY

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4172

___

### ZERO

▪ `Static` `Readonly` **ZERO**: `Quat`

A constant quaternion set to [0, 0, 0, 0].

#### Inherited from

pc.Quat.ZERO

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4179

## Methods

### clone

▸ **clone**(): `Quat`

Returns an identical copy of the specified quaternion.

**`Example`**

```ts
var q = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
var qclone = q.clone();

console.log("The result of the cloning is: " + q.toString());
```

#### Returns

`Quat`

A quaternion containing the result of the cloning.

#### Inherited from

pc.Quat.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4224

___

### conjugate

▸ **conjugate**(): `Quat`

#### Returns

`Quat`

#### Inherited from

pc.Quat.conjugate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4225

___

### copy

▸ **copy**(`rhs`): `Quat`

Copies the contents of a source quaternion to a destination quaternion.

**`Example`**

```ts
var src = new pc.Quat();
var dst = new pc.Quat();
dst.copy(src, src);
console.log("The two quaternions are " + (src.equals(dst) ? "equal" : "different"));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Quat` | The quaternion to be copied. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.copy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4237

___

### equals

▸ **equals**(`rhs`): `boolean`

Reports whether two quaternions are equal.

**`Example`**

```ts
var a = new pc.Quat();
var b = new pc.Quat();
console.log("The two quaternions are " + (a.equals(b) ? "equal" : "different"));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Quat` | The quaternion to be compared against. |

#### Returns

`boolean`

True if the quaternions are equal and false otherwise.

#### Inherited from

pc.Quat.equals

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4248

___

### getAxisAngle

▸ **getAxisAngle**(`axis`): `number`

Gets the rotation axis and angle for a given quaternion. If a quaternion is created with
`setFromAxisAngle`, this method will return the same values as provided in the original
parameter list OR functionally equivalent values.

**`Example`**

```ts
var q = new pc.Quat();
q.setFromAxisAngle(new pc.Vec3(0, 1, 0), 90);
var v = new pc.Vec3();
var angle = q.getAxisAngle(v);
// Outputs 90
console.log(angle);
// Outputs [0, 1, 0]
console.log(v.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vec3` | The 3-dimensional vector to receive the axis of rotation. |

#### Returns

`number`

Angle, in degrees, of the rotation.

#### Inherited from

pc.Quat.getAxisAngle

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4266

___

### getEulerAngles

▸ **getEulerAngles**(`eulers?`): `Vec3`

Converts the supplied quaternion to Euler angles.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eulers?` | `Vec3` | The 3-dimensional vector to receive the Euler angles. |

#### Returns

`Vec3`

The 3-dimensional vector holding the Euler angles that
correspond to the supplied quaternion.

#### Inherited from

pc.Quat.getEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4274

___

### invert

▸ **invert**(): `Quat`

Generates the inverse of the specified quaternion.

**`Example`**

```ts
// Create a quaternion rotated 180 degrees around the y-axis
var rot = new pc.Quat().setFromEulerAngles(0, 180, 0);

// Invert in place
rot.invert();
```

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.invert

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4286

___

### length

▸ **length**(): `number`

Returns the magnitude of the specified quaternion.

**`Example`**

```ts
var q = new pc.Quat(0, 0, 0, 5);
var len = q.length();
// Outputs 5
console.log("The length of the quaternion is: " + len);
```

#### Returns

`number`

The magnitude of the specified quaternion.

#### Inherited from

pc.Quat.length

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4297

___

### lengthSq

▸ **lengthSq**(): `number`

Returns the magnitude squared of the specified quaternion.

**`Example`**

```ts
var q = new pc.Quat(3, 4, 0);
var lenSq = q.lengthSq();
// Outputs 25
console.log("The length squared of the quaternion is: " + lenSq);
```

#### Returns

`number`

The magnitude of the specified quaternion.

#### Inherited from

pc.Quat.lengthSq

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4308

___

### mul

▸ **mul**(`rhs`): `Quat`

Returns the result of multiplying the specified quaternions together.

**`Example`**

```ts
var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
var b = new pc.Quat().setFromEulerAngles(0, 60, 0);

// a becomes a 90 degree rotation around the Y axis
// In other words, a = a * b
a.mul(b);

console.log("The result of the multiplication is: " + a.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Quat` | The quaternion used as the second multiplicand of the operation. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.mul

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4324

___

### mul2

▸ **mul2**(`lhs`, `rhs`): `Quat`

Returns the result of multiplying the specified quaternions together.

**`Example`**

```ts
var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
var r = new pc.Quat();

// r is set to a 90 degree rotation around the Y axis
// In other words, r = a * b
r.mul2(a, b);

console.log("The result of the multiplication is: " + r.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Quat` | The quaternion used as the first multiplicand of the operation. |
| `rhs` | `Quat` | The quaternion used as the second multiplicand of the operation. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.mul2

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4342

___

### normalize

▸ **normalize**(): `Quat`

Returns the specified quaternion converted in place to a unit quaternion.

**`Example`**

```ts
var v = new pc.Quat(0, 0, 0, 5);

v.normalize();

// Outputs 0, 0, 0, 1
console.log("The result of the vector normalization is: " + v.toString());
```

#### Returns

`Quat`

The result of the normalization.

#### Inherited from

pc.Quat.normalize

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4355

___

### set

▸ **set**(`x`, `y`, `z`, `w`): `Quat`

Sets the specified quaternion to the supplied numerical values.

**`Example`**

```ts
var q = new pc.Quat();
q.set(1, 0, 0, 0);

// Outputs 1, 0, 0, 0
console.log("The result of the vector set is: " + q.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x component of the quaternion. |
| `y` | `number` | The y component of the quaternion. |
| `z` | `number` | The z component of the quaternion. |
| `w` | `number` | The w component of the quaternion. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.set

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4371

___

### setFromAxisAngle

▸ **setFromAxisAngle**(`axis`, `angle`): `Quat`

Sets a quaternion from an angular rotation around an axis.

**`Example`**

```ts
var q = new pc.Quat();
q.setFromAxisAngle(pc.Vec3.UP, 90);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | `Vec3` | World space axis around which to rotate. |
| `angle` | `number` | Angle to rotate around the given axis in degrees. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.setFromAxisAngle

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4382

___

### setFromEulerAngles

▸ **setFromEulerAngles**(`ex`, `ey?`, `ez?`): `Quat`

Sets a quaternion from Euler angles specified in XYZ order.

**`Example`**

```ts
// Create a quaternion from 3 euler angles
var q = new pc.Quat();
q.setFromEulerAngles(45, 90, 180);

// Create the same quaternion from a vector containing the same 3 euler angles
var v = new pc.Vec3(45, 90, 180);
var r = new pc.Quat();
r.setFromEulerAngles(v);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ex` | `number` \| `Vec3` | Angle to rotate around X axis in degrees. If ex is a Vec3, the three angles will be read from it instead. |
| `ey?` | `number` | Angle to rotate around Y axis in degrees. |
| `ez?` | `number` | Angle to rotate around Z axis in degrees. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.setFromEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4401

___

### setFromMat4

▸ **setFromMat4**(`m`): `Quat`

Converts the specified 4x4 matrix to a quaternion. Note that since a quaternion is purely a
representation for orientation, only the translational part of the matrix is lost.

**`Example`**

```ts
// Create a 4x4 rotation matrix of 180 degrees around the y-axis
var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);

// Convert to a quaternion
var q = new pc.Quat().setFromMat4(rot);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `Mat4` | The 4x4 matrix to convert. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.setFromMat4

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4415

___

### setLookRotation

▸ **setLookRotation**(`position`, `target`, `up?`): `Quat`

根据朝向关系设置rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `Vec3` | 起点 |
| `target` | `Vec3` | 目标点 |
| `up?` | `Vec3` | 上方向 |

#### Returns

`Quat`

朝向rotation

#### Defined in

src/extensions/quat.ts:25

___

### slerp

▸ **slerp**(`lhs`, `rhs`, `alpha`): `Quat`

Performs a spherical interpolation between two quaternions. The result of the interpolation
is written to the quaternion calling the function.

**`Example`**

```ts
var q1 = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
var q2 = new pc.Quat(-0.21, -0.21, -0.67, 0.68);

var result;
result = new pc.Quat().slerp(q1, q2, 0);   // Return q1
result = new pc.Quat().slerp(q1, q2, 0.5); // Return the midpoint interpolant
result = new pc.Quat().slerp(q1, q2, 1);   // Return q2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Quat` | The quaternion to interpolate from. |
| `rhs` | `Quat` | The quaternion to interpolate to. |
| `alpha` | `number` | The value controlling the interpolation in relation to the two input quaternions. The value is in the range 0 to 1, 0 generating q1, 1 generating q2 and anything in between generating a spherical interpolation between the two. |

#### Returns

`Quat`

Self for chaining.

#### Inherited from

pc.Quat.slerp

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4435

___

### toString

▸ **toString**(): `string`

Converts the quaternion to string form.

**`Example`**

```ts
var v = new pc.Quat(0, 0, 0, 1);
// Outputs [0, 0, 0, 1]
console.log(v.toString());
```

#### Returns

`string`

The quaternion in string form.

#### Inherited from

pc.Quat.toString

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4461

___

### transformVector

▸ **transformVector**(`vec`, `res?`): `Vec3`

Transforms a 3-dimensional vector by the specified quaternion.

**`Example`**

```ts
// Create a 3-dimensional vector
var v = new pc.Vec3(1, 2, 3);

// Create a 4x4 rotation matrix
var q = new pc.Quat().setFromEulerAngles(10, 20, 30);

var tv = q.transformVector(v);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vec` | `Vec3` | The 3-dimensional vector to be transformed. |
| `res?` | `Vec3` | An optional 3-dimensional vector to receive the result of the transformation. |

#### Returns

`Vec3`

The input vector v transformed by the current instance.

#### Inherited from

pc.Quat.transformVector

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4451
