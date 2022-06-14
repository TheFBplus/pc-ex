pc-ex

# pc-ex

## Table of contents

### Classes

- [CameraComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md)
- [Color\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md)
- [Curve\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md)
- [DebugLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DebugLine.md)
- [ElementComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ElementComponent_EX.md)
- [Entity\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md)
- [MeshInstance\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md)
- [MouseInputer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md)
- [MultiSelector](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MultiSelector.md)
- [OrbitCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md)
- [OutlineCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md)
- [PathCurve](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PathCurve.md)
- [Quat\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md)
- [Ray\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md)
- [ScriptTypeBase](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md)
- [Selector](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Selector.md)
- [Texture\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md)
- [Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)
- [Vec2\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md)
- [Vec3\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec3_EX.md)
- [Vec4\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md)

### Interfaces

- [intersect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/intersect.md)

### Type Aliases

- [AttributeParams](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attributeparams)

### Functions

- [attr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attr)
- [cast](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#cast)
- [createScript](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#createscript)
- [extend](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#extend)
- [newUtil](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#newutil)
- [use](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#use)
- [useGlobal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#useglobal)

## Type Aliases

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

src/lib/create-script-decorator.ts:56

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

src/lib/create-script-decorator.ts:44

___

### cast

▸ **cast**<`T`\>(`obj`): `T`

转换类型

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | 待转换对象 |

#### Returns

`T`

转换类型后的对象

#### Defined in

src/lib/cast.ts:14

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

src/lib/create-script-decorator.ts:11

___

### extend

▸ **extend**(`extendClass?`): (`target`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `extendClass?` | `any` |

#### Returns

`fn`

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

##### Returns

`void`

#### Defined in

src/lib/extend-decorator.ts:23

___

### newUtil

▸ **newUtil**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

`void`

#### Defined in

src/lib/extend-decorator.ts:91

___

### use

▸ **use**<`ToolType`, `Options`\>(`tool`, `options?`): `ToolType`

使用工具（创建一个工具实例）

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`Options`, `unknown`, `ToolType`\> |
| `Options` | `Options` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | (`options?`: `Options`) => `ToolType` | 工具类 |
| `options?` | `Options` | 工具选项 |

#### Returns

`ToolType`

工具实例

#### Defined in

src/lib/toolHelper.ts:29

___

### useGlobal

▸ **useGlobal**<`ToolType`, `Options`\>(`tool`, `options?`): `ToolType`

使用全局工具（使用全局工具实例）

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToolType` | extends [`Tool`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)<`Options`, `unknown`, `ToolType`\> |
| `Options` | `Options` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | (`options?`: `Options`) => `ToolType` | 工具类 |
| `options?` | `Options` | 工具选项 |

#### Returns

`ToolType`

全局工具实例

#### Defined in

src/lib/toolHelper.ts:42
