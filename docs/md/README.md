pc-ex

# pc-ex

## Table of contents

### Classes

- [CameraComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md)
- [Color\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Color_EX.md)
- [Curve\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Curve_EX.md)
- [DebugLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DebugLine.md)
- [DropGLTFLoader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/DropGLTFLoader.md)
- [ElementComponent\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ElementComponent_EX.md)
- [Entity\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md)
- [MaterialController](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md)
- [MeshInstance\_EX](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md)
- [MouseInputer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MouseInputer.md)
- [OrbitCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCamera.md)
- [OrbitCameraInput\_Mouse](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_Mouse.md)
- [OrbitCameraInput\_TouchScreen](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OrbitCameraInput_TouchScreen.md)
- [OutlineCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/OutlineCamera.md)
- [PostEffectOutline](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md)
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

- [ExtendClassName](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/ExtendClassName.md)
- [InputEventsMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md)
- [MouseInputOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/MouseInputOptions.md)
- [OrbitCameraInputOption](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraInputOption.md)
- [OrbitCameraOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/OrbitCameraOptions.md)
- [SelectorOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/SelectorOptions.md)
- [outlineCameraOptions](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/outlineCameraOptions.md)

### Type Aliases

- [AttributeParams](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attributeparams)

### Functions

- [attr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attr)
- [cast](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#cast)
- [createScript](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#createscript)
- [drawScreenQuad](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#drawscreenquad)
- [drawScreenRect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#drawscreenrect)
- [drawSelectionBox](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#drawselectionbox)
- [extendClass](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#extendclass)
- [frag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#frag)
- [glsl](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#glsl)
- [glslify](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#glslify)
- [use](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#use)
- [useGlobal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#useglobal)
- [vert](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#vert)

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

src/utils/helpers/create-script-decorator.ts:56

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

___

### drawScreenQuad

▸ **drawScreenQuad**(`rect?`, `color?`, `layer?`): `void`

绘制框选矩形内部

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rect` | `Vec4` | `defaultRect` | 矩形范围 |
| `color` | `Color` | `defaultColor` | 颜色 |
| `layer?` | `Layer` | `undefined` | layer |

#### Returns

`void`

___

### drawScreenRect

▸ **drawScreenRect**(`rect?`, `color?`, `layer?`): `void`

绘制框选矩形边框

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `rect` | `Vec4` | `defaultRect` | 矩形范围 |
| `color` | `Color` | `defaultColor` | 颜色 |
| `layer?` | `Layer` | `undefined` | layer |

#### Returns

`void`

___

### drawSelectionBox

▸ **drawSelectionBox**(`startPoint`, `endPoint`, `boxLayer`): `pc.Vec4`

绘制框选矩形

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPoint` | `Object` | 开始点 |
| `startPoint.x` | `number` | - |
| `startPoint.y` | `number` | - |
| `endPoint` | `Object` | 移动点 |
| `endPoint.x` | `number` | - |
| `endPoint.y` | `number` | - |
| `boxLayer` | `Layer` | - |

#### Returns

`pc.Vec4`

框选矩形范围

___

### extendClass

▸ **extendClass**(`extendClassName`): (`target`: `any`) => `void`

扩展pc类

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `extendClassName` | keyof [`ExtendClassName`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/ExtendClassName.md) | 扩展类名称 |

#### Returns

`fn`

扩展类

▸ (`target`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

##### Returns

`void`

___

### frag

▸ **frag**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

___

### glsl

▸ **glsl**(`x`): `string`

@ 创建者: FBplus
@ 创建时间: 2022-07-08 14:21:44
@ 修改者: FBplus
@ 修改时间: 2022-07-08 15:07:41
@ 详情: javascript内联glsl帮助函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

___

### glslify

▸ **glslify**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`

___

### use

▸ **use**<`K`\>(`toolName`, `options?`): `ToolName`[`K`]

使用工具

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ToolOptions` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toolName` | `K` | 工具名称 |
| `options?` | `ToolOptions`[`K`] | 工具设置 |

#### Returns

`ToolName`[`K`]

工具实例

___

### useGlobal

▸ **useGlobal**<`K`\>(`toolName`, `options?`): `ToolName`[`K`]

全局使用工具

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `ToolOptions` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toolName` | `K` | 工具名称 |
| `options?` | `ToolOptions`[`K`] | 工具设置 |

#### Returns

`ToolName`[`K`]

工具实例

___

### vert

▸ **vert**(`x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `TemplateStringsArray` |

#### Returns

`string`
