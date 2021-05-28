[pc-ex](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/README.md) / Filter_Bloom

# Class: Filter\_Bloom

## Hierarchy

- [*Filter*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

  ↳ **Filter_Bloom**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#constructor)

### Properties

- [args](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#args)
- [binbMap](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#binbmap)
- [device](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#device)
- [needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#needsdepthbuffer)
- [rtCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#rtcache)
- [shader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#shader)
- [vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#vertexbuffer)

### Methods

- [addPasses](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#addpasses)
- [cache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#cache)
- [createTargetCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#createtargetcache)
- [render](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#render)
- [value](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#value)
- [parseValueToShader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md#parsevaluetoshader)

## Constructors

### constructor

\+ **new Filter_Bloom**(`option?`: Ioption\_Filter\_Bloom): [*Filter\_Bloom*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | Ioption\_Filter\_Bloom |

**Returns:** [*Filter\_Bloom*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_bloom.md)

Overrides: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

Defined in: src/classes/filters/filter_bloom.ts:14

## Properties

### args

• `Optional` **args**: *object*

#### Type declaration

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[args](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#args)

Defined in: src/classes/utils/filter.ts:32

___

### binbMap

• **binbMap**: *Map*<string, string\>

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[binbMap](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#binbmap)

Defined in: src/classes/utils/filter.ts:33

___

### device

• **device**: *GraphicsDevice*

The graphics device of the application. [read only].

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[device](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#device)

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7152

___

### needsDepthBuffer

• **needsDepthBuffer**: *boolean*

The property that should to be set to `true` (by the custom post effect) if a depth map is necessary (default is false).

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#needsdepthbuffer)

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7164

___

### rtCache

• **rtCache**: *RenderTarget*[]= []

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[rtCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#rtcache)

Defined in: src/classes/utils/filter.ts:34

___

### shader

• **shader**: *Shader*

The shader definition for the fullscreen quad. Needs to be set by the custom post effect (default is null). Used when calling {@link drawFullscreenQuad}.

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[shader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#shader)

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7160

___

### vertexBuffer

• **vertexBuffer**: *VertexBuffer*

The vertex buffer for the fullscreen quad. Used when calling {@link drawFullscreenQuad}. [read only].

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md).[vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md#vertexbuffer)

Defined in: node_modules/playcanvas/build/playcanvas.d.ts:7156

## Methods

### addPasses

▸ `Protected` **addPasses**(...`params`: IfilterPass[]): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | IfilterPass[] |

**Returns:** *void*

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

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

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

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

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

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

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

Defined in: src/classes/utils/filter.ts:90

___

### value

▸ `Protected` **value**(`para`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `para` | *any* |

**Returns:** *any*

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

Defined in: src/classes/utils/filter.ts:85

___

### parseValueToShader

▸ `Static` **parseValueToShader**(`value`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** *any*

Inherited from: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

Defined in: src/classes/utils/filter.ts:39
