[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Curve\_EX

# Class: Curve\_EX

## Hierarchy

- `Curve`

  ↳ **`Curve_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#constructor)

### Properties

- [keys](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#keys)
- [tension](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#tension)
- [type](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#type)

### Accessors

- [length](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#length)

### Methods

- [add](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#add)
- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#clone)
- [closest](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#closest)
- [get](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#get)
- [getNormal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#getnormal)
- [getTangent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#gettangent)
- [sort](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#sort)
- [value](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#value)

## Constructors

### constructor

• **new Curve_EX**(`data?`)

Creates a new Curve instance.

**`Example`**

```ts
var curve = new pc.Curve([
    0, 0,        // At 0 time, value of 0
    0.33, 2,     // At 0.33 time, value of 2
    0.66, 2.6,   // At 0.66 time, value of 2.6
    1, 3         // At 1 time, value of 3
]);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `number`[] | An array of keys (pairs of numbers with the time first and value second). |

#### Inherited from

pc.Curve.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19621

## Properties

### keys

• **keys**: `number`[][]

#### Inherited from

pc.Curve.keys

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19622

___

### tension

• **tension**: `number`

Controls how CURVE_SPLINE tangents are calculated. Valid range is between 0 and
1 where 0 results in a non-smooth curve (equivalent to linear interpolation) and 1
results in a very smooth curve. Use 0.5 for a Catmull-rom spline.

#### Inherited from

pc.Curve.tension

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19643

___

### type

• **type**: `number`

The curve interpolation scheme. Can be:

- CURVE_LINEAR
- CURVE_SMOOTHSTEP
- CURVE_SPLINE
- CURVE_STEP

Defaults to CURVE_SMOOTHSTEP.

#### Inherited from

pc.Curve.type

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19635

## Accessors

### length

• `get` **length**(): `number`

Get the number of keys in the curve.

#### Returns

`number`

#### Inherited from

pc.Curve.length

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19654

## Methods

### add

▸ **add**(`time`, `value`): `number`[]

Add a new key to the curve.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | Time to add new key. |
| `value` | `number` | Value of new key. |

#### Returns

`number`[]

[time, value] pair.

#### Inherited from

pc.Curve.add

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19662

___

### clone

▸ **clone**(): [`Curve_EX`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md)

Returns a clone of the specified curve object.

#### Returns

[`Curve_EX`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md)

A clone of the specified curve.

#### Inherited from

pc.Curve.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19687

___

### closest

▸ **closest**(`time`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `any` |

#### Returns

`number`[]

#### Inherited from

pc.Curve.closest

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19681

___

### get

▸ **get**(`index`): `number`[]

Return a specific key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the key to return. |

#### Returns

`number`[]

The key at the specified index.

#### Inherited from

pc.Curve.get

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19669

___

### getNormal

▸ **getNormal**(`percent`): `number`

获得曲线在此处的法线斜率

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | `number` | 在曲线上的百分比位置 |

#### Returns

`number`

法线斜率

#### Defined in

src/extensions/curve.ts:36

___

### getTangent

▸ **getTangent**(`percent`): `number`

获得曲线在此处的切线斜率

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `percent` | `number` | 在曲线上的百分比位置 |

#### Returns

`number`

切线斜率

#### Defined in

src/extensions/curve.ts:23

___

### sort

▸ **sort**(): `void`

Sort keys by time.

#### Returns

`void`

#### Inherited from

pc.Curve.sort

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19673

___

### value

▸ **value**(`time`): `number`

Returns the interpolated value of the curve at specified time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | The time at which to calculate the value. |

#### Returns

`number`

The interpolated value.

#### Inherited from

pc.Curve.value

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:19680
