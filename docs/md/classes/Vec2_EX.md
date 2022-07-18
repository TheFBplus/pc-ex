[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Vec2\_EX

# Class: Vec2\_EX

## Hierarchy

- `Vec2`

  ↳ **`Vec2_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#constructor)

### Properties

- [x](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#x)
- [y](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#y)
- [DOWN](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#down)
- [LEFT](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#left)
- [ONE](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#one)
- [RIGHT](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#right)
- [UP](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#up)
- [ZERO](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#zero)

### Accessors

- [shaderData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#shaderdata)

### Methods

- [add](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#add)
- [add2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#add2)
- [addScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#addscalar)
- [ceil](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#ceil)
- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#clone)
- [copy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#copy)
- [cross](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#cross)
- [distance](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#distance)
- [div](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#div)
- [div2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#div2)
- [divScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#divscalar)
- [dot](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#dot)
- [equals](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#equals)
- [floor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#floor)
- [length](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#length)
- [lengthSq](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#lengthsq)
- [lerp](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#lerp)
- [max](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#max)
- [min](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#min)
- [mul](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#mul)
- [mul2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#mul2)
- [mulScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#mulscalar)
- [normalize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#normalize)
- [round](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#round)
- [set](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#set)
- [sub](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#sub)
- [sub2](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#sub2)
- [subScalar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#subscalar)
- [toString](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md#tostring)

## Constructors

### constructor

• **new Vec2_EX**(`x?`, `y?`)

Create a new Vec2 instance.

**`Example`**

```ts
var v = new pc.Vec2(1, 2);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` \| `number`[] | The x value. Defaults to 0. If x is an array of length 2, the array will be used to populate all components. |
| `y?` | `number` | The y value. Defaults to 0. |

#### Inherited from

pc.Vec2.constructor

## Properties

### x

• **x**: `number`

The first component of the vector.

#### Inherited from

pc.Vec2.x

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8787

___

### y

• **y**: `number`

The second component of the vector.

#### Inherited from

pc.Vec2.y

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8793

___

### DOWN

▪ `Static` `Readonly` **DOWN**: `Vec2`

A constant vector set to [0, -1].

#### Inherited from

pc.Vec2.DOWN

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8757

___

### LEFT

▪ `Static` `Readonly` **LEFT**: `Vec2`

A constant vector set to [-1, 0].

#### Inherited from

pc.Vec2.LEFT

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8771

___

### ONE

▪ `Static` `Readonly` **ONE**: `Vec2`

A constant vector set to [1, 1].

#### Inherited from

pc.Vec2.ONE

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8743

___

### RIGHT

▪ `Static` `Readonly` **RIGHT**: `Vec2`

A constant vector set to [1, 0].

#### Inherited from

pc.Vec2.RIGHT

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8764

___

### UP

▪ `Static` `Readonly` **UP**: `Vec2`

A constant vector set to [0, 1].

#### Inherited from

pc.Vec2.UP

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8750

___

### ZERO

▪ `Static` `Readonly` **ZERO**: `Vec2`

A constant vector set to [0, 0].

#### Inherited from

pc.Vec2.ZERO

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8736

## Accessors

### shaderData

• `get` **shaderData**(): `Float32Array`

用于传入shader的数据

#### Returns

`Float32Array`

## Methods

### add

▸ **add**(`rhs`): `Vec2`

Adds a 2-dimensional vector to another in place.

**`Example`**

```ts
var a = new pc.Vec2(10, 10);
var b = new pc.Vec2(20, 20);

a.add(b);

// Outputs [30, 30]
console.log("The result of the addition is: " + a.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The vector to add to the specified vector. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.add

___

### add2

▸ **add2**(`lhs`, `rhs`): `Vec2`

Adds two 2-dimensional vectors together and returns the result.

**`Example`**

```ts
var a = new pc.Vec2(10, 10);
var b = new pc.Vec2(20, 20);
var r = new pc.Vec2();

r.add2(a, b);
// Outputs [30, 30]

console.log("The result of the addition is: " + r.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec2` | The first vector operand for the addition. |
| `rhs` | `Vec2` | The second vector operand for the addition. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.add2

___

### addScalar

▸ **addScalar**(`scalar`): `Vec2`

Adds a number to each element of a vector.

**`Example`**

```ts
var vec = new pc.Vec2(3, 4);

vec.addScalar(2);

// Outputs [5, 6]
console.log("The result of the addition is: " + vec.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to add. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.addScalar

___

### ceil

▸ **ceil**(): `Vec2`

Each element is rounded up to the next largest integer.

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.ceil

___

### clone

▸ **clone**(): `Vec2`

Returns an identical copy of the specified 2-dimensional vector.

**`Example`**

```ts
var v = new pc.Vec2(10, 20);
var vclone = v.clone();
console.log("The result of the cloning is: " + vclone.toString());
```

#### Returns

`Vec2`

A 2-dimensional vector containing the result of the cloning.

#### Inherited from

pc.Vec2.clone

___

### copy

▸ **copy**(`rhs`): `Vec2`

Copies the contents of a source 2-dimensional vector to a destination 2-dimensional vector.

**`Example`**

```ts
var src = new pc.Vec2(10, 20);
var dst = new pc.Vec2();

dst.copy(src);

console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | A vector to copy to the specified vector. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.copy

___

### cross

▸ **cross**(`rhs`): `number`

Returns the result of a cross product operation performed on the two specified 2-dimensional
vectors.

**`Example`**

```ts
var right = new pc.Vec2(1, 0);
var up = new pc.Vec2(0, 1);
var crossProduct = right.cross(up);

// Prints 1
console.log("The result of the cross product is: " + crossProduct);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The second 2-dimensional vector operand of the cross product. |

#### Returns

`number`

The cross product of the two vectors.

#### Inherited from

pc.Vec2.cross

___

### distance

▸ **distance**(`rhs`): `number`

Returns the distance between the two specified 2-dimensional vectors.

**`Example`**

```ts
var v1 = new pc.Vec2(5, 10);
var v2 = new pc.Vec2(10, 20);
var d = v1.distance(v2);
console.log("The distance between v1 and v2 is: " + d);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The second 2-dimensional vector to test. |

#### Returns

`number`

The distance between the two vectors.

#### Inherited from

pc.Vec2.distance

___

### div

▸ **div**(`rhs`): `Vec2`

Divides a 2-dimensional vector by another in place.

**`Example`**

```ts
var a = new pc.Vec2(4, 9);
var b = new pc.Vec2(2, 3);

a.div(b);

// Outputs [2, 3]
console.log("The result of the division is: " + a.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The vector to divide the specified vector by. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.div

___

### div2

▸ **div2**(`lhs`, `rhs`): `Vec2`

Divides one 2-dimensional vector by another and writes the result to the specified vector.

**`Example`**

```ts
var a = new pc.Vec2(4, 9);
var b = new pc.Vec2(2, 3);
var r = new pc.Vec2();

r.div2(a, b);
// Outputs [2, 3]

console.log("The result of the division is: " + r.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec2` | The dividend vector (the vector being divided). |
| `rhs` | `Vec2` | The divisor vector (the vector dividing the dividend). |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.div2

___

### divScalar

▸ **divScalar**(`scalar`): `Vec2`

Divides each element of a vector by a number.

**`Example`**

```ts
var vec = new pc.Vec2(3, 6);

vec.divScalar(3);

// Outputs [1, 2]
console.log("The result of the division is: " + vec.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to divide by. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.divScalar

___

### dot

▸ **dot**(`rhs`): `number`

Returns the result of a dot product operation performed on the two specified 2-dimensional
vectors.

**`Example`**

```ts
var v1 = new pc.Vec2(5, 10);
var v2 = new pc.Vec2(10, 20);
var v1dotv2 = v1.dot(v2);
console.log("The result of the dot product is: " + v1dotv2);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The second 2-dimensional vector operand of the dot product. |

#### Returns

`number`

The result of the dot product operation.

#### Inherited from

pc.Vec2.dot

___

### equals

▸ **equals**(`rhs`): `boolean`

Reports whether two vectors are equal.

**`Example`**

```ts
var a = new pc.Vec2(1, 2);
var b = new pc.Vec2(4, 5);
console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The vector to compare to the specified vector. |

#### Returns

`boolean`

True if the vectors are equal and false otherwise.

#### Inherited from

pc.Vec2.equals

___

### floor

▸ **floor**(): `Vec2`

Each element is set to the largest integer less than or equal to its value.

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.floor

___

### length

▸ **length**(): `number`

Returns the magnitude of the specified 2-dimensional vector.

**`Example`**

```ts
var vec = new pc.Vec2(3, 4);
var len = vec.length();
// Outputs 5
console.log("The length of the vector is: " + len);
```

#### Returns

`number`

The magnitude of the specified 2-dimensional vector.

#### Inherited from

pc.Vec2.length

___

### lengthSq

▸ **lengthSq**(): `number`

Returns the magnitude squared of the specified 2-dimensional vector.

**`Example`**

```ts
var vec = new pc.Vec2(3, 4);
var len = vec.lengthSq();
// Outputs 25
console.log("The length squared of the vector is: " + len);
```

#### Returns

`number`

The magnitude of the specified 2-dimensional vector.

#### Inherited from

pc.Vec2.lengthSq

___

### lerp

▸ **lerp**(`lhs`, `rhs`, `alpha`): `Vec2`

Returns the result of a linear interpolation between two specified 2-dimensional vectors.

**`Example`**

```ts
var a = new pc.Vec2(0, 0);
var b = new pc.Vec2(10, 10);
var r = new pc.Vec2();

r.lerp(a, b, 0);   // r is equal to a
r.lerp(a, b, 0.5); // r is 5, 5
r.lerp(a, b, 1);   // r is equal to b
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec2` | The 2-dimensional to interpolate from. |
| `rhs` | `Vec2` | The 2-dimensional to interpolate to. |
| `alpha` | `number` | The value controlling the point of interpolation. Between 0 and 1, the linear interpolant will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on a ray extrapolated from this line. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.lerp

___

### max

▸ **max**(`rhs`): `Vec2`

Each element is assigned a value from rhs parameter if it is larger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The 2-dimensional vector used as the source of elements to compare to. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.max

___

### min

▸ **min**(`rhs`): `Vec2`

Each element is assigned a value from rhs parameter if it is smaller.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The 2-dimensional vector used as the source of elements to compare to. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.min

___

### mul

▸ **mul**(`rhs`): `Vec2`

Multiplies a 2-dimensional vector to another in place.

**`Example`**

```ts
var a = new pc.Vec2(2, 3);
var b = new pc.Vec2(4, 5);

a.mul(b);

// Outputs 8, 15
console.log("The result of the multiplication is: " + a.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The 2-dimensional vector used as the second multiplicand of the operation. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.mul

___

### mul2

▸ **mul2**(`lhs`, `rhs`): `Vec2`

Returns the result of multiplying the specified 2-dimensional vectors together.

**`Example`**

```ts
var a = new pc.Vec2(2, 3);
var b = new pc.Vec2(4, 5);
var r = new pc.Vec2();

r.mul2(a, b);

// Outputs 8, 15
console.log("The result of the multiplication is: " + r.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec2` | The 2-dimensional vector used as the first multiplicand of the operation. |
| `rhs` | `Vec2` | The 2-dimensional vector used as the second multiplicand of the operation. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.mul2

___

### mulScalar

▸ **mulScalar**(`scalar`): `Vec2`

Multiplies each element of a vector by a number.

**`Example`**

```ts
var vec = new pc.Vec2(3, 6);

vec.mulScalar(3);

// Outputs [9, 18]
console.log("The result of the multiplication is: " + vec.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to multiply by. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.mulScalar

___

### normalize

▸ **normalize**(): `Vec2`

Returns this 2-dimensional vector converted to a unit vector in place. If the vector has a
length of zero, the vector's elements will be set to zero.

**`Example`**

```ts
var v = new pc.Vec2(25, 0);

v.normalize();

// Outputs 1, 0
console.log("The result of the vector normalization is: " + v.toString());
```

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.normalize

___

### round

▸ **round**(): `Vec2`

Each element is rounded up or down to the nearest integer.

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.round

___

### set

▸ **set**(`x`, `y`): `Vec2`

Sets the specified 2-dimensional vector to the supplied numerical values.

**`Example`**

```ts
var v = new pc.Vec2();
v.set(5, 10);

// Outputs 5, 10
console.log("The result of the vector set is: " + v.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The value to set on the first component of the vector. |
| `y` | `number` | The value to set on the second component of the vector. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.set

___

### sub

▸ **sub**(`rhs`): `Vec2`

Subtracts a 2-dimensional vector from another in place.

**`Example`**

```ts
var a = new pc.Vec2(10, 10);
var b = new pc.Vec2(20, 20);

a.sub(b);

// Outputs [-10, -10]
console.log("The result of the subtraction is: " + a.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Vec2` | The vector to add to the specified vector. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.sub

___

### sub2

▸ **sub2**(`lhs`, `rhs`): `Vec2`

Subtracts two 2-dimensional vectors from one another and returns the result.

**`Example`**

```ts
var a = new pc.Vec2(10, 10);
var b = new pc.Vec2(20, 20);
var r = new pc.Vec2();

r.sub2(a, b);

// Outputs [-10, -10]
console.log("The result of the subtraction is: " + r.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Vec2` | The first vector operand for the addition. |
| `rhs` | `Vec2` | The second vector operand for the addition. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.sub2

___

### subScalar

▸ **subScalar**(`scalar`): `Vec2`

Subtracts a number from each element of a vector.

**`Example`**

```ts
var vec = new pc.Vec2(3, 4);

vec.subScalar(2);

// Outputs [1, 2]
console.log("The result of the subtraction is: " + vec.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scalar` | `number` | The number to subtract. |

#### Returns

`Vec2`

Self for chaining.

#### Inherited from

pc.Vec2.subScalar

___

### toString

▸ **toString**(): `string`

Converts the vector to string form.

**`Example`**

```ts
var v = new pc.Vec2(20, 10);
// Outputs [20, 10]
console.log(v.toString());
```

#### Returns

`string`

The vector in string form.

#### Inherited from

pc.Vec2.toString
