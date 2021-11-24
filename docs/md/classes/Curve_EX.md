[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Curve\_EX

# Class: Curve\_EX

## Hierarchy

- `Curve`

  ↳ **`Curve_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#constructor)

### Properties

- [length](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#length)
- [tension](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#tension)
- [type](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#type)

### Methods

- [add](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#add)
- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#clone)
- [get](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#get)
- [getNormal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#getnormal)
- [getTangent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#gettangent)
- [sort](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#sort)
- [value](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md#value)

## Constructors

### constructor

• **new Curve_EX**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `number`[] |

#### Inherited from

pc.Curve.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9682

## Properties

### length

• **length**: `number`

The number of keys in the curve. [read only].

#### Inherited from

pc.Curve.length

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9714

___

### tension

• **tension**: `number`

Controls how {@link CURVE_SPLINE} tangents are calculated.
Valid range is between 0 and 1 where 0 results in a non-smooth curve (equivalent to linear
interpolation) and 1 results in a very smooth curve. Use 0.5 for a Catmull-rom spline.

#### Inherited from

pc.Curve.tension

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9731

___

### type

• **type**: `number`

The curve interpolation scheme. Can be:

- {@link CURVE_LINEAR}
- {@link CURVE_SMOOTHSTEP}
- {@link CURVE_SPLINE}
- {@link CURVE_STEP}

Defaults to {@link CURVE_SMOOTHSTEP}.

#### Inherited from

pc.Curve.type

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9725

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

pair.

#### Inherited from

pc.Curve.add

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9689

___

### clone

▸ **clone**(): `Curve`

Returns a clone of the specified curve object.

#### Returns

`Curve`

A clone of the specified curve.

#### Inherited from

pc.Curve.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9710

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

node_modules/playcanvas/build/playcanvas.d.ts:9695

___

### getNormal

▸ **getNormal**(`percent`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

`number`

#### Overrides

pc.Curve.getNormal

#### Defined in

src/extensions/extendClasses/curve.ts:31

___

### getTangent

▸ **getTangent**(`percent`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `percent` | `number` |

#### Returns

`number`

#### Overrides

pc.Curve.getTangent

#### Defined in

src/extensions/extendClasses/curve.ts:22

___

### sort

▸ **sort**(): `void`

Sort keys by time.

#### Returns

`void`

#### Inherited from

pc.Curve.sort

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9699

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

node_modules/playcanvas/build/playcanvas.d.ts:9705
