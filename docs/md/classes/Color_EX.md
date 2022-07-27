[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Color\_EX

# Class: Color\_EX

## Hierarchy

- `Color`

  ↳ **`Color_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#constructor)

### Properties

- [a](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#a)
- [b](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#b)
- [g](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#g)
- [r](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#r)
- [BLACK](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#black)
- [BLUE](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#blue)
- [CYAN](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#cyan)
- [GRAY](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#gray)
- [GREEN](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#green)
- [MAGENTA](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#magenta)
- [RED](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#red)
- [WHITE](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#white)
- [YELLOW](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#yellow)

### Accessors

- [shaderData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#shaderdata)

### Methods

- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#clone)
- [copy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#copy)
- [equals](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#equals)
- [fromString](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#fromstring)
- [lerp](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#lerp)
- [set](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#set)
- [toString](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md#tostring)

## Constructors

### constructor

• **new Color_EX**(`r?`, `g?`, `b?`, `a?`)

Create a new Color object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r?` | `number` \| `number`[] | The value of the red component (0-1). Defaults to 0. If r is an array of length 3 or 4, the array will be used to populate all components. |
| `g?` | `number` | The value of the green component (0-1). Defaults to 0. |
| `b?` | `number` | The value of the blue component (0-1). Defaults to 0. |
| `a?` | `number` | The value of the alpha component (0-1). Defaults to 1. |

#### Inherited from

pc.Color.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8355

## Properties

### a

• **a**: `number`

The alpha component of the color.

#### Inherited from

pc.Color.a

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8379

___

### b

• **b**: `number`

The blue component of the color.

#### Inherited from

pc.Color.b

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8373

___

### g

• **g**: `number`

The green component of the color.

#### Inherited from

pc.Color.g

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8367

___

### r

• **r**: `number`

The red component of the color.

#### Inherited from

pc.Color.r

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8361

___

### BLACK

▪ `Static` `Readonly` **BLACK**: `Color`

A constant color set to black [0, 0, 0, 1].

#### Inherited from

pc.Color.BLACK

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8289

___

### BLUE

▪ `Static` `Readonly` **BLUE**: `Color`

A constant color set to blue [0, 0, 1, 1].

#### Inherited from

pc.Color.BLUE

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8296

___

### CYAN

▪ `Static` `Readonly` **CYAN**: `Color`

A constant color set to cyan [0, 1, 1, 1].

#### Inherited from

pc.Color.CYAN

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8303

___

### GRAY

▪ `Static` `Readonly` **GRAY**: `Color`

A constant color set to gray [0.5, 0.5, 0.5, 1].

#### Inherited from

pc.Color.GRAY

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8310

___

### GREEN

▪ `Static` `Readonly` **GREEN**: `Color`

A constant color set to green [0, 1, 0, 1].

#### Inherited from

pc.Color.GREEN

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8317

___

### MAGENTA

▪ `Static` `Readonly` **MAGENTA**: `Color`

A constant color set to magenta [1, 0, 1, 1].

#### Inherited from

pc.Color.MAGENTA

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8324

___

### RED

▪ `Static` `Readonly` **RED**: `Color`

A constant color set to red [1, 0, 0, 1].

#### Inherited from

pc.Color.RED

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8331

___

### WHITE

▪ `Static` `Readonly` **WHITE**: `Color`

A constant color set to white [1, 1, 1, 1].

#### Inherited from

pc.Color.WHITE

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8338

___

### YELLOW

▪ `Static` `Readonly` **YELLOW**: `Color`

A constant color set to yellow [1, 1, 0, 1].

#### Inherited from

pc.Color.YELLOW

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8345

## Accessors

### shaderData

• `get` **shaderData**(): `Float32Array`

用于传入shader的数据

#### Returns

`Float32Array`

#### Defined in

src/extensions/color.ts:21

## Methods

### clone

▸ **clone**(): [`Color_EX`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md)

Returns a clone of the specified color.

#### Returns

[`Color_EX`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md)

A duplicate color object.

#### Inherited from

pc.Color.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8385

___

### copy

▸ **copy**(`rhs`): `Color`

Copies the contents of a source color to a destination color.

**`Example`**

```ts
var src = new pc.Color(1, 0, 0, 1);
var dst = new pc.Color();

dst.copy(src);

console.log("The two colors are " + (dst.equals(src) ? "equal" : "different"));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Color` | A color to copy to the specified color. |

#### Returns

`Color`

Self for chaining.

#### Inherited from

pc.Color.copy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8399

___

### equals

▸ **equals**(`rhs`): `boolean`

Reports whether two colors are equal.

**`Example`**

```ts
var a = new pc.Color(1, 0, 0, 1);
var b = new pc.Color(1, 1, 0, 1);
console.log("The two colors are " + (a.equals(b) ? "equal" : "different"));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rhs` | `Color` | The color to compare to the specified color. |

#### Returns

`boolean`

True if the colors are equal and false otherwise.

#### Inherited from

pc.Color.equals

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8410

___

### fromString

▸ **fromString**(`hex`): `Color`

Set the values of the color from a string representation '#11223344' or '#112233'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | A string representation in the format '#RRGGBBAA' or '#RRGGBB'. Where RR, GG, BB, AA are red, green, blue and alpha values. This is the same format used in HTML/CSS. |

#### Returns

`Color`

Self for chaining.

#### Inherited from

pc.Color.fromString

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8448

___

### lerp

▸ **lerp**(`lhs`, `rhs`, `alpha`): `Color`

Returns the result of a linear interpolation between two specified colors.

**`Example`**

```ts
var a = new pc.Color(0, 0, 0);
var b = new pc.Color(1, 1, 0.5);
var r = new pc.Color();

r.lerp(a, b, 0);   // r is equal to a
r.lerp(a, b, 0.5); // r is 0.5, 0.5, 0.25
r.lerp(a, b, 1);   // r is equal to b
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lhs` | `Color` | The color to interpolate from. |
| `rhs` | `Color` | The color to interpolate to. |
| `alpha` | `number` | The value controlling the point of interpolation. Between 0 and 1, the linear interpolant will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on a ray extrapolated from this line. |

#### Returns

`Color`

Self for chaining.

#### Inherited from

pc.Color.lerp

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8439

___

### set

▸ **set**(`r`, `g`, `b`, `a?`): `Color`

Assign values to the color components, including alpha.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `r` | `number` | The value for red (0-1). |
| `g` | `number` | The value for blue (0-1). |
| `b` | `number` | The value for green (0-1). |
| `a?` | `number` | The value for the alpha (0-1), defaults to 1. |

#### Returns

`Color`

Self for chaining.

#### Inherited from

pc.Color.set

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8420

___

### toString

▸ **toString**(`alpha`): `string`

Converts the color to string form. The format is '#RRGGBBAA', where RR, GG, BB, AA are the
red, green, blue and alpha values. When the alpha value is not included (the default), this
is the same format as used in HTML/CSS.

**`Example`**

```ts
var c = new pc.Color(1, 1, 1);
// Outputs #ffffffff
console.log(c.toString());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alpha` | `boolean` | If true, the output string will include the alpha value. |

#### Returns

`string`

The color in string form.

#### Inherited from

pc.Color.toString

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8461
