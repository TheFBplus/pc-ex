[pc-ex](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/README.md) / Filter_Empty

# Class: Filter\_Empty

## Hierarchy

- [*Filter*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

  ↳ **Filter_Empty**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#constructor)

### Properties

- [args](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#args)
- [binbMap](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#binbmap)
- [device](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#device)
- [needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#needsdepthbuffer)
- [rtCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#rtcache)
- [shader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#shader)
- [vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#vertexbuffer)

### Methods

- [addPasses](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#addpasses)
- [cache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#cache)
- [createTargetCache](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#createtargetcache)
- [render](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#render)
- [value](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#value)
- [parseValueToShader](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md#parsevaluetoshader)

## Constructors

### constructor

\+ **new Filter_Empty**(`option?`: Ioption\_Filter\_Empty): [*Filter\_Empty*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | Ioption\_Filter\_Empty |

**Returns:** [*Filter\_Empty*](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter_empty.md)

Overrides: [Filter](https://github.com/TheFBplus/pc-ex/blob/main/docs/md/classes/filter.md)

Defined in: src/classes/filters/filter_empty.ts:9

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
