[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Vec4\_EX

# Class: Vec4\_EX

## Hierarchy

- `Vec4`

  ↳ **`Vec4_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#constructor)

### Properties

- [w](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#w)
- [x](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#x)
- [y](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#y)
- [z](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#z)
- [ONE](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#one)
- [ZERO](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#zero)

### Accessors

- [shaderData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#shaderdata)

### Methods

- [add](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#add)
- [add2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#add2)
- [addScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#addscalar)
- [ceil](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#ceil)
- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#clone)
- [copy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#copy)
- [div](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#div)
- [div2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#div2)
- [divScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#divscalar)
- [dot](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#dot)
- [equals](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#equals)
- [floor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#floor)
- [length](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#length)
- [lengthSq](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#lengthsq)
- [lerp](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#lerp)
- [max](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#max)
- [min](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#min)
- [mul](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#mul)
- [mul2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#mul2)
- [mulScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#mulscalar)
- [normalize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#normalize)
- [round](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#round)
- [set](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#set)
- [sub](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#sub)
- [sub2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#sub2)
- [subScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#subscalar)
- [toString](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md#tostring)

## Constructors

### constructor

• **new Vec4_EX**(`x?`, `y?`, `z?`, `w?`)

Creates a new Vec4 object.

**`example`**
var v = new pc.Vec4(1, 2, 3, 4);

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` \| `number`[] |
| `y?` | `number` |
| `z?` | `number` |
| `w?` | `number` |

#### Inherited from

pc.Vec4.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4493

## Properties

### w

• **w**: `number`

The fourth component of the vector.

#### Inherited from

pc.Vec4.w

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4517

___

### x

• **x**: `number`

The first component of the vector.

#### Inherited from

pc.Vec4.x

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4499

___

### y

• **y**: `number`

The second component of the vector.

#### Inherited from

pc.Vec4.y

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4505

___

### z

• **z**: `number`

The third component of the vector.

#### Inherited from

pc.Vec4.z

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4511

___

### ONE

▪ `Static` `Readonly` **ONE**: `Vec4`

A constant vector set to [1, 1, 1, 1].

**`readonly`**

#### Inherited from

pc.Vec4.ONE

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4481

___

### ZERO

▪ `Static` `Readonly` **ZERO**: `Vec4`

A constant vector set to [0, 0, 0, 0].

**`readonly`**

#### Inherited from

pc.Vec4.ZERO

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4474

## Accessors

### shaderData

• `get` **shaderData**(): `Float32Array`

用于传入shader的数据

#### Returns

`Float32Array`

#### Defined in

src/extension/extendClasses/vec4.ts:21

## Methods

### add

▸ **add**(`rhs`): `Vec4`

Adds a 4-dimensional vector to another in place.

**`example`**
var a = new pc.Vec4(10, 10, 10, 10);
var b = new pc.Vec4(20, 20, 20, 20);

a.add(b);

// Outputs [30, 30, 30]
console.log("The result of the addition is: " + a.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The vector to add to the specified vector. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.add

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4532

___

### add2

▸ **add2**(`lhs`, `rhs`): `Vec4`

Adds two 4-dimensional vectors together and returns the result.

**`example`**
var a = new pc.Vec4(10, 10, 10, 10);
var b = new pc.Vec4(20, 20, 20, 20);
var r = new pc.Vec4();

r.add2(a, b);
// Outputs [30, 30, 30]

console.log("The result of the addition is: " + r.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec4` | The first vector operand for the addition. |
| `rhs` | `Vec4` | The second vector operand for the addition. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.add2

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4549

___

### addScalar

▸ **addScalar**(`scalar`): `Vec4`

Adds a number to each element of a vector.

**`example`**
var vec = new pc.Vec4(3, 4, 5, 6);

vec.addScalar(2);

// Outputs [5, 6, 7, 8]
console.log("The result of the addition is: " + vec.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to add. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.addScalar

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4563

___

### ceil

▸ **ceil**(): `Vec4`

Each element is rounded up to the next largest integer.

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.ceil

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4770

___

### clone

▸ **clone**(): `Vec4`

Returns an identical copy of the specified 4-dimensional vector.

**`example`**
var v = new pc.Vec4(10, 20, 30, 40);
var vclone = v.clone();
console.log("The result of the cloning is: " + vclone.toString());

#### Returns

`Vec4`

A 4-dimensional vector containing the result of the cloning.

#### Inherited from

pc.Vec4.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4573

___

### copy

▸ **copy**(`rhs`): `Vec4`

Copies the contents of a source 4-dimensional vector to a destination 4-dimensional vector.

**`example`**
var src = new pc.Vec4(10, 20, 30, 40);
var dst = new pc.Vec4();

dst.copy(src);

console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | A vector to copy to the specified vector. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.copy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4587

___

### div

▸ **div**(`rhs`): `Vec4`

Divides a 4-dimensional vector by another in place.

**`example`**
var a = new pc.Vec4(4, 9, 16, 25);
var b = new pc.Vec4(2, 3, 4, 5);

a.div(b);

// Outputs [2, 3, 4, 5]
console.log("The result of the division is: " + a.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The vector to divide the specified vector by. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.div

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4602

___

### div2

▸ **div2**(`lhs`, `rhs`): `Vec4`

Divides one 4-dimensional vector by another and writes the result to the specified vector.

**`example`**
var a = new pc.Vec4(4, 9, 16, 25);
var b = new pc.Vec4(2, 3, 4, 5);
var r = new pc.Vec4();

r.div2(a, b);
// Outputs [2, 3, 4, 5]

console.log("The result of the division is: " + r.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec4` | The dividend vector (the vector being divided). |
| `rhs` | `Vec4` | The divisor vector (the vector dividing the dividend). |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.div2

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4619

___

### divScalar

▸ **divScalar**(`scalar`): `Vec4`

Divides each element of a vector by a number.

**`example`**
var vec = new pc.Vec4(3, 6, 9, 12);

vec.divScalar(3);

// Outputs [1, 2, 3, 4]
console.log("The result of the division is: " + vec.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to divide by. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.divScalar

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4633

___

### dot

▸ **dot**(`rhs`): `number`

Returns the result of a dot product operation performed on the two specified 4-dimensional
vectors.

**`example`**
var v1 = new pc.Vec4(5, 10, 20, 40);
var v2 = new pc.Vec4(10, 20, 40, 80);
var v1dotv2 = v1.dot(v2);
console.log("The result of the dot product is: " + v1dotv2);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The second 4-dimensional vector operand of the dot product. |

#### Returns

`number`

The result of the dot product operation.

#### Inherited from

pc.Vec4.dot

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4646

___

### equals

▸ **equals**(`rhs`): `boolean`

Reports whether two vectors are equal.

**`example`**
var a = new pc.Vec4(1, 2, 3, 4);
var b = new pc.Vec4(5, 6, 7, 8);
console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The vector to compare to the specified vector. |

#### Returns

`boolean`

True if the vectors are equal and false otherwise.

#### Inherited from

pc.Vec4.equals

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4657

___

### floor

▸ **floor**(): `Vec4`

Each element is set to the largest integer less than or equal to its value.

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.floor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4764

___

### length

▸ **length**(): `number`

Returns the magnitude of the specified 4-dimensional vector.

**`example`**
var vec = new pc.Vec4(3, 4, 0, 0);
var len = vec.length();
// Outputs 5
console.log("The length of the vector is: " + len);

#### Returns

`number`

The magnitude of the specified 4-dimensional vector.

#### Inherited from

pc.Vec4.length

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4668

___

### lengthSq

▸ **lengthSq**(): `number`

Returns the magnitude squared of the specified 4-dimensional vector.

**`example`**
var vec = new pc.Vec4(3, 4, 0);
var len = vec.lengthSq();
// Outputs 25
console.log("The length squared of the vector is: " + len);

#### Returns

`number`

The magnitude of the specified 4-dimensional vector.

#### Inherited from

pc.Vec4.lengthSq

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4679

___

### lerp

▸ **lerp**(`lhs`, `rhs`, `alpha`): `Vec4`

Returns the result of a linear interpolation between two specified 4-dimensional vectors.

**`example`**
var a = new pc.Vec4(0, 0, 0, 0);
var b = new pc.Vec4(10, 10, 10, 10);
var r = new pc.Vec4();

r.lerp(a, b, 0);   // r is equal to a
r.lerp(a, b, 0.5); // r is 5, 5, 5, 5
r.lerp(a, b, 1);   // r is equal to b

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec4` | The 4-dimensional to interpolate from. |
| `rhs` | `Vec4` | The 4-dimensional to interpolate to. |
| `alpha` | `number` | The value controlling the point of interpolation. Between 0 and 1, the linear interpolant will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on a ray extrapolated from this line. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.lerp

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4698

___

### max

▸ **max**(`rhs`): `Vec4`

Each element is assigned a value from rhs parameter if it is larger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The 4-dimensional vector used as the source of elements to compare to. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.max

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4790

___

### min

▸ **min**(`rhs`): `Vec4`

Each element is assigned a value from rhs parameter if it is smaller.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The 4-dimensional vector used as the source of elements to compare to. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.min

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4783

___

### mul

▸ **mul**(`rhs`): `Vec4`

Multiplies a 4-dimensional vector to another in place.

**`example`**
var a = new pc.Vec4(2, 3, 4, 5);
var b = new pc.Vec4(4, 5, 6, 7);

a.mul(b);

// Outputs 8, 15, 24, 35
console.log("The result of the multiplication is: " + a.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The 4-dimensional vector used as the second multiplicand of the operation. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.mul

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4713

___

### mul2

▸ **mul2**(`lhs`, `rhs`): `Vec4`

Returns the result of multiplying the specified 4-dimensional vectors together.

**`example`**
var a = new pc.Vec4(2, 3, 4, 5);
var b = new pc.Vec4(4, 5, 6, 7);
var r = new pc.Vec4();

r.mul2(a, b);

// Outputs 8, 15, 24, 35
console.log("The result of the multiplication is: " + r.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec4` | The 4-dimensional vector used as the first multiplicand of the operation. |
| `rhs` | `Vec4` | The 4-dimensional vector used as the second multiplicand of the operation. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.mul2

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4730

___

### mulScalar

▸ **mulScalar**(`scalar`): `Vec4`

Multiplies each element of a vector by a number.

**`example`**
var vec = new pc.Vec4(3, 6, 9, 12);

vec.mulScalar(3);

// Outputs [9, 18, 27, 36]
console.log("The result of the multiplication is: " + vec.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to multiply by. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.mulScalar

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4744

___

### normalize

▸ **normalize**(): `Vec4`

Returns this 4-dimensional vector converted to a unit vector in place. If the vector has a
length of zero, the vector's elements will be set to zero.

**`example`**
var v = new pc.Vec4(25, 0, 0, 0);

v.normalize();

// Outputs 1, 0, 0, 0
console.log("The result of the vector normalization is: " + v.toString());

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.normalize

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4758

___

### round

▸ **round**(): `Vec4`

Each element is rounded up or down to the nearest integer.

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.round

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4776

___

### set

▸ **set**(`x`, `y`, `z`, `w`): `Vec4`

Sets the specified 4-dimensional vector to the supplied numerical values.

**`example`**
var v = new pc.Vec4();
v.set(5, 10, 20, 40);

// Outputs 5, 10, 20, 40
console.log("The result of the vector set is: " + v.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The value to set on the first component of the vector. |
| `y` | `number` | The value to set on the second component of the vector. |
| `z` | `number` | The value to set on the third component of the vector. |
| `w` | `number` | The value to set on the fourth component of the vector. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.set

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4806

___

### sub

▸ **sub**(`rhs`): `Vec4`

Subtracts a 4-dimensional vector from another in place.

**`example`**
var a = new pc.Vec4(10, 10, 10, 10);
var b = new pc.Vec4(20, 20, 20, 20);

a.sub(b);

// Outputs [-10, -10, -10, -10]
console.log("The result of the subtraction is: " + a.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec4` | The vector to add to the specified vector. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.sub

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4821

___

### sub2

▸ **sub2**(`lhs`, `rhs`): `Vec4`

Subtracts two 4-dimensional vectors from one another and returns the result.

**`example`**
var a = new pc.Vec4(10, 10, 10, 10);
var b = new pc.Vec4(20, 20, 20, 20);
var r = new pc.Vec4();

r.sub2(a, b);

// Outputs [-10, -10, -10, -10]
console.log("The result of the subtraction is: " + r.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec4` | The first vector operand for the subtraction. |
| `rhs` | `Vec4` | The second vector operand for the subtraction. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.sub2

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4838

___

### subScalar

▸ **subScalar**(`scalar`): `Vec4`

Subtracts a number from each element of a vector.

**`example`**
var vec = new pc.Vec4(3, 4, 5, 6);

vec.subScalar(2);

// Outputs [1, 2, 3, 4]
console.log("The result of the subtraction is: " + vec.toString());

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to subtract. |

#### Returns

`Vec4`

Self for chaining.

#### Inherited from

pc.Vec4.subScalar

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4852

___

### toString

▸ **toString**(): `string`

Converts the vector to string form.

**`example`**
var v = new pc.Vec4(20, 10, 5, 0);
// Outputs [20, 10, 5, 0]
console.log(v.toString());

#### Returns

`string`

The vector in string form.

#### Inherited from

pc.Vec4.toString

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:4862
