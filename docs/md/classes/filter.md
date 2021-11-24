[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Filter

# Class: Filter

## Hierarchy

- `PostEffect`

  ↳ **`Filter`**

  ↳↳ [`Filter_Bloom`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Bloom.md)

  ↳↳ [`Filter_Empty`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter_Empty.md)

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#constructor)

### Properties

- [args](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#args)
- [binbMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#binbmap)
- [device](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#device)
- [needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#needsdepthbuffer)
- [rtCache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#rtcache)
- [shader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#shader)
- [vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#vertexbuffer)

### Methods

- [addPasses](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#addpasses)
- [cache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#cache)
- [createTargetCache](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#createtargetcache)
- [render](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#render)
- [value](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#value)
- [parseValueToShader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Filter.md#parsevaluetoshader)

## Constructors

### constructor

• **new Filter**(`option?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Object` |

#### Overrides

pc.PostEffect.constructor

#### Defined in

src/classes/utils/filter.ts:49

## Properties

### args

• `Optional` **args**: `Object`

#### Index signature

▪ [paraName: `string`]: `any`

#### Defined in

src/classes/utils/filter.ts:32

___

### binbMap

• **binbMap**: `Map`<`string`, `string`\>

#### Defined in

src/classes/utils/filter.ts:33

___

### device

• **device**: `GraphicsDevice`

The graphics device of the application. [read only].

#### Inherited from

pc.PostEffect.device

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7325

___

### needsDepthBuffer

• **needsDepthBuffer**: `boolean`

The property that should to be set to `true` (by the custom post effect) if a depth map is necessary (default is false).

#### Inherited from

pc.PostEffect.needsDepthBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7337

___

### rtCache

• **rtCache**: `RenderTarget`[] = `[]`

#### Defined in

src/classes/utils/filter.ts:34

___

### shader

• **shader**: `Shader`

The shader definition for the fullscreen quad. Needs to be set by the custom post effect (default is null). Used when calling {@link drawFullscreenQuad}.

#### Inherited from

pc.PostEffect.shader

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7333

___

### vertexBuffer

• **vertexBuffer**: `VertexBuffer`

The vertex buffer for the fullscreen quad. Used when calling {@link drawFullscreenQuad}. [read only].

#### Inherited from

pc.PostEffect.vertexBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7329

## Methods

### addPasses

▸ `Protected` **addPasses**(...`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `IfilterPass`[] |

#### Returns

`void`

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

#### Overrides

pc.PostEffect.render

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

#### Defined in

src/classes/utils/filter.ts:39
