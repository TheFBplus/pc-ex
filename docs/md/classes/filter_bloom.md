[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Filter\_Bloom

# Class: Filter\_Bloom

## Hierarchy

- [`Filter`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md)

  ↳ **`Filter_Bloom`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#constructor)

### Properties

- [args](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#args)
- [binbMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#binbmap)
- [depthMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#depthmap)
- [device](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#device)
- [needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#needsdepthbuffer)
- [rtCache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#rtcache)
- [shader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#shader)
- [vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#vertexbuffer)

### Methods

- [addPasses](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#addpasses)
- [cache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#cache)
- [createTargetCache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#createtargetcache)
- [render](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#render)
- [value](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#value)
- [parseValueToShader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md#parsevaluetoshader)

## Constructors

### constructor

• **new Filter_Bloom**(`option?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Ioption_Filter_Bloom` |

#### Overrides

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#constructor)

#### Defined in

src/classes/filters/filter_bloom.ts:16

## Properties

### args

• `Optional` **args**: `Object`

#### Index signature

▪ [paraName: `string`]: `any`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[args](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#args)

#### Defined in

src/classes/utils/filter.ts:32

___

### binbMap

• **binbMap**: `Map`<`string`, `string`\>

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[binbMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#binbmap)

#### Defined in

src/classes/utils/filter.ts:33

___

### depthMap

• **depthMap**: `any`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[depthMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#depthmap)

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7165

___

### device

• **device**: `GraphicsDevice`

The graphics device of the application.

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[device](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#device)

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7144

___

### needsDepthBuffer

• **needsDepthBuffer**: `boolean`

The property that should to be set to `true` (by the custom post effect) if a depth map
is necessary (default is false).

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#needsdepthbuffer)

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7164

___

### rtCache

• **rtCache**: `RenderTarget`[] = `[]`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[rtCache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#rtcache)

#### Defined in

src/classes/utils/filter.ts:34

___

### shader

• **shader**: `Shader`

The shader definition for the fullscreen quad. Needs to be set by the custom post effect
(default is null). Used when calling {@link drawFullscreenQuad}.

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[shader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#shader)

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7151

___

### vertexBuffer

• **vertexBuffer**: `VertexBuffer`

The vertex buffer for the fullscreen quad. Used when calling {@link drawFullscreenQuad}.

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#vertexbuffer)

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7157

## Methods

### addPasses

▸ `Protected` **addPasses**(...`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `IfilterPass`[] |

#### Returns

`void`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[addPasses](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#addpasses)

#### Defined in

src/classes/utils/filter.ts:75

___

### cache

▸ `Protected` **cache**(`index`, `option?`): `ICacheOption`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `option?` | `Object` |
| `option.scale` | `number` |

#### Returns

`ICacheOption`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[cache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#cache)

#### Defined in

src/classes/utils/filter.ts:130

___

### createTargetCache

▸ `Protected` **createTargetCache**(`index`, `scale?`, `width?`, `height?`): `RenderTarget`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `scale` | `number` | `1` |
| `width?` | `number` | `undefined` |
| `height?` | `number` | `undefined` |

#### Returns

`RenderTarget`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[createTargetCache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#createtargetcache)

#### Defined in

src/classes/utils/filter.ts:138

___

### render

▸ **render**(`inputTarget`, `outputTarget`, `rect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputTarget` | `RenderTarget` |
| `outputTarget` | `RenderTarget` |
| `rect` | `Vec4` |

#### Returns

`void`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[render](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#render)

#### Defined in

src/classes/utils/filter.ts:90

___

### value

▸ `Protected` **value**(`para`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `para` | `any` |

#### Returns

`any`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[value](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#value)

#### Defined in

src/classes/utils/filter.ts:85

___

### parseValueToShader

▸ `Static` **parseValueToShader**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md).[parseValueToShader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#parsevaluetoshader)

#### Defined in

src/classes/utils/filter.ts:39
