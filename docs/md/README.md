pc-ex

# pc-ex

## Table of contents

### Classes

- [CameraComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md)
- [Color\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md)
- [Curve\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md)
- [DebugLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DebugLine.md)
- [Entity\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md)
- [Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md)
- [Filter\_Bloom](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md)
- [Filter\_Empty](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Empty.md)
- [MeshesRaycaster](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshesRaycaster.md)
- [PathCurve](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md)
- [ScriptTypeBase](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md)
- [Vec2\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md)

### Type aliases

- [AttributeParams](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attributeparams)

### Functions

- [attr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attr)
- [createScript](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#createscript)

## Type aliases

### AttributeParams

Ƭ **AttributeParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array?` | `boolean` |
| `assetType?` | `string` |
| `color?` | `string` |
| `curves?` | `string`[] |
| `default?` | `any` |
| `description?` | `string` |
| `enum?` | `object`[] |
| `max?` | `number` |
| `min?` | `number` |
| `placeholder?` | `string` \| `string`[] |
| `precision?` | `number` |
| `size?` | `number` |
| `step?` | `number` |
| `title?` | `string` |
| `type` | ``"boolean"`` \| ``"number"`` \| ``"string"`` \| ``"json"`` \| ``"asset"`` \| ``"entity"`` \| ``"rgb"`` \| ``"rgba"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` \| ``"curve"`` |

#### Defined in

src/classes/utils/create-script-decorator.ts:58

## Functions

### attr

▸ **attr**<`T`\>(`params`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AttributeParams`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attributeparams) |

#### Returns

`any`

#### Defined in

src/classes/utils/create-script-decorator.ts:46

___

### createScript

▸ **createScript**(`name`): (`obj`: `any`) => `void`

Class decorator allowing the use of ES6 classes
to define and create PlayCanvas script types.
Caveat is: There is a slight iterative runtime overhead to this. (unlike Haxe which can utilize precompiled-macros)
The cool thing is that your script (if it uses properties) has an additional property called `attributesData` that can facilitate offboard property reflection/runtime-component
property GUI creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`fn`

▸ (`obj`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

##### Returns

`void`

#### Defined in

src/classes/utils/create-script-decorator.ts:13
