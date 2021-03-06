pc-ex

# pc-ex

## Table of contents

### Namespaces

- [Tools](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/Tools.md)

### Classes

- [CameraComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md)
- [Color\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md)
- [Curve\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md)
- [DebugLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DebugLine.md)
- [ElementComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ElementComponent_EX.md)
- [Entity\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md)
- [GraphNode\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md)
- [MaterialController](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md)
- [MeshInstance\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md)
- [PostEffectOutline](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md)
- [Quat\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Quat_EX.md)
- [Ray\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Ray_EX.md)
- [ScriptTypeBase](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md)
- [ScriptTypeEX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md)
- [Texture\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md)
- [Toggle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Toggle.md)
- [ToggleGroup](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md)
- [Tool](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Tool.md)
- [Vec2\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec2_EX.md)
- [Vec3\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec3_EX.md)
- [Vec4\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Vec4_EX.md)

### Interfaces

- [Constructable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Constructable.md)
- [InputEventsMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)

### Type Aliases

- [Constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#constructor)

### Functions

- [attr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attr)
- [attrEX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attrex)
- [cast](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#cast)
- [createScript](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#createscript)
- [createScriptEX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#createscriptex)
- [drawScreenQuad](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#drawscreenquad)
- [drawScreenRect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#drawscreenrect)
- [drawSelectionBox](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#drawselectionbox)
- [extendClass](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#extendclass)
- [frag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#frag)
- [glsl](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#glsl)
- [glslify](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#glslify)
- [vert](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#vert)

## Type Aliases

### Constructor

?? **Constructor**<`T`\>: (...`args`: `any`) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

??? (...`args`)

?????????????????????????????????

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Defined in

src/utils/common/TypesAndInterfaces.ts:12

## Functions

### attr

??? **attr**<`T`\>(`params`): `any`

??????????????????????????????

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `AttributeParams` | ???????????????????????? |

#### Returns

`any`

#### Defined in

src/utils/helpers/create-script-decorator.ts:173

___

### attrEX

??? **attrEX**<`T`\>(`params`): `any`

??????????????????????????????

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `AttributeParams` | ???????????????????????? |

#### Returns

`any`

#### Defined in

src/utils/helpers/create-script-decorator_ex.ts:61

___

### cast

??? **cast**<`NewType`\>(`obj`): `NewType`

????????????

#### Type parameters

| Name |
| :------ |
| `NewType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | ??????????????? |

#### Returns

`NewType`

????????????????????????

#### Defined in

src/utils/helpers/extend-decorator.ts:46

___

### createScript

??? **createScript**(`name`): (`target`: typeof [`ScriptTypeBase`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md)) => `void`

?????????????????????

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | ???????????? |

#### Returns

`fn`

??? (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | typeof [`ScriptTypeBase`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md) |

##### Returns

`void`

#### Defined in

src/utils/helpers/create-script-decorator.ts:84

___

### createScriptEX

??? **createScriptEX**<`Attrs`\>(`name`, `attrs`): (`target`: `Object`) => `void`

??????????????????

#### Type parameters

| Name |
| :------ |
| `Attrs` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | ???????????? |
| `attrs` | `AttributeParamsType`<`Attrs`\> | ?????????????????? |

#### Returns

`fn`

??? (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |

##### Returns

`void`

#### Defined in

src/utils/helpers/create-script-decorator_ex.ts:43

___

### drawScreenQuad

??? **drawScreenQuad**(`rect?`, `color?`, `layer?`): `void`

????????????????????????

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rect` | `Vec4` | `defaultRect` | ???????????? |
| `color` | `Color` | `defaultColor` | ?????? |
| `layer?` | `Layer` | `undefined` | layer |

#### Returns

`void`

#### Defined in

src/utils/func/drawSelectionBox/drawScreenQuad.ts:34

___

### drawScreenRect

??? **drawScreenRect**(`rect?`, `color?`, `layer?`): `void`

????????????????????????

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rect` | `Vec4` | `defaultRect` | ???????????? |
| `color` | `Color` | `defaultColor` | ?????? |
| `layer?` | `Layer` | `undefined` | layer |

#### Returns

`void`

#### Defined in

src/utils/func/drawSelectionBox/drawScreenRect.ts:34

___

### drawSelectionBox

??? **drawSelectionBox**(`startPoint`, `endPoint`, `boxLayer`): `pc.Vec4`

??????????????????

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPoint` | `Object` | ????????? |
| `startPoint.x` | `number` | - |
| `startPoint.y` | `number` | - |
| `endPoint` | `Object` | ????????? |
| `endPoint.x` | `number` | - |
| `endPoint.y` | `number` | - |
| `boxLayer` | `Layer` | - |

#### Returns

`pc.Vec4`

??????????????????

#### Defined in

src/utils/func/drawSelectionBox/drawSelectionBox.ts:27

___

### extendClass

??? **extendClass**<`T`\>(`extendClass`): (`target`: `T`) => `void`

??????pc??? //TODO: ????????????????????????

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructable`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/Constructable.md)<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `extendClass` | `T` |

#### Returns

`fn`

?????????

??? (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

##### Returns

`void`

#### Defined in

src/utils/helpers/extend-decorator.ts:67

___

### frag

??? **frag**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

#### Defined in

src/utils/helpers/shaderHelper.ts:11

___

### glsl

??? **glsl**(`x`): `string`

@ ?????????: FBplus
@ ????????????: 2022-07-08 14:21:44
@ ?????????: FBplus
@ ????????????: 2022-07-08 15:07:41
@ ??????: javascript??????glsl????????????

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

#### Defined in

src/utils/helpers/shaderHelper.ts:9

___

### glslify

??? **glslify**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

#### Defined in

src/utils/helpers/shaderHelper.ts:10

___

### vert

??? **vert**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

#### Defined in

src/utils/helpers/shaderHelper.ts:12
