[pc-ex](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/README.md) / Filter

# Class: Filter

## Hierarchy

- *PostEffect*

  ↳ **Filter**

  ↳↳ [*Filter\_Bloom*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md)

  ↳↳ [*Filter\_Empty*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md)

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#constructor)

### Properties

- [args](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#args)
- [binbMap](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#binbmap)
- [device](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#device)
- [needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#needsdepthbuffer)
- [rtCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#rtcache)
- [shader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#shader)
- [vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#vertexbuffer)

### Methods

- [addPasses](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#addpasses)
- [cache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#cache)
- [createTargetCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#createtargetcache)
- [render](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#render)
- [value](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#value)
- [parseValueToShader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#parsevaluetoshader)

## Constructors

### constructor

\+ **new Filter**(`option?`: { [paraName: string]: *any*;  }): [*Filter*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | *object* |

**Returns:** [*Filter*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

Overrides: pc.PostEffect.constructor

Defined in: src/classes/utils/filter.ts:47

## Properties

### args

• `Optional` **args**: *object*

#### Type declaration

Defined in: src/classes/utils/filter.ts:32

___

### binbMap

• **binbMap**: *Map*<string, string\>

Defined in: src/classes/utils/filter.ts:33

___

### device

• **device**: *GraphicsDevice*

The graphics device of the application. [read only].

Inherited from: pc.PostEffect.device

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7152

___

### needsDepthBuffer

• **needsDepthBuffer**: *boolean*

The property that should to be set to `true` (by the custom post effect) if a depth map is necessary (default is false).

Inherited from: pc.PostEffect.needsDepthBuffer

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7164

___

### rtCache

• **rtCache**: *RenderTarget*[]= []

Defined in: src/classes/utils/filter.ts:34

___

### shader

• **shader**: *Shader*

The shader definition for the fullscreen quad. Needs to be set by the custom post effect (default is null). Used when calling {@link drawFullscreenQuad}.

Inherited from: pc.PostEffect.shader

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7160

___

### vertexBuffer

• **vertexBuffer**: *VertexBuffer*

The vertex buffer for the fullscreen quad. Used when calling {@link drawFullscreenQuad}. [read only].

Inherited from: pc.PostEffect.vertexBuffer

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7156

## Methods

### addPasses

▸ `Protected` **addPasses**(...`params`: IfilterPass[]): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | IfilterPass[] |

**Returns:** *void*

Defined in: src/classes/utils/filter.ts:75

___

### cache

▸ `Protected` **cache**(`index`: *number*, `option?`: { `scale`: *number*  }): ICacheOption

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | *number* |
| `option?` | *object* |
| `option.scale` | *number* |

**Returns:** ICacheOption

Defined in: src/classes/utils/filter.ts:130

___

### createTargetCache

▸ `Protected` **createTargetCache**(`index`: *number*, `scale?`: *number*, `width?`: *number*, `height?`: *number*): *RenderTarget*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | *number* | - |
| `scale` | *number* | 1 |
| `width?` | *number* | - |
| `height?` | *number* | - |

**Returns:** *RenderTarget*

Defined in: src/classes/utils/filter.ts:138

___

### render

▸ **render**(`inputTarget`: *RenderTarget*, `outputTarget`: *RenderTarget*, `rect`: *Vec4*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputTarget` | *RenderTarget* |
| `outputTarget` | *RenderTarget* |
| `rect` | *Vec4* |

**Returns:** *void*

Overrides: pc.PostEffect.render

Defined in: src/classes/utils/filter.ts:90

___

### value

▸ `Protected` **value**(`para`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `para` | *any* |

**Returns:** *any*

Defined in: src/classes/utils/filter.ts:85

___

### parseValueToShader

▸ `Static` **parseValueToShader**(`value`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** *any*

Defined in: src/classes/utils/filter.ts:39
