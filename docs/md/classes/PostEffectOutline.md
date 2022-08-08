[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / PostEffectOutline

# Class: PostEffectOutline

## Hierarchy

- `PostEffect$1`

  ↳ **`PostEffectOutline`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#constructor)

### Properties

- [depthMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#depthmap)
- [device](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#device)
- [needsDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#needsdepthbuffer)
- [shader](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#shader)
- [vertexBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#vertexbuffer)

### Methods

- [refresh](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#refresh)
- [render](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/PostEffectOutline.md#render)

## Constructors

### constructor

• **new PostEffectOutline**(`graphicsDevice`, `option`)

创建描边特效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphicsDevice` | `GraphicsDevice` | 当前app的graphicsDevice |
| `option` | `OutlineEffectOption` | 描边设置 |

#### Overrides

pc.PostEffect.constructor

#### Defined in

src/utils/postEffects/posteffectOutline.ts:34

## Properties

### depthMap

• **depthMap**: `any`

#### Inherited from

pc.PostEffect.depthMap

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6968

___

### device

• **device**: `GraphicsDevice`

The graphics device of the application.

#### Inherited from

pc.PostEffect.device

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6947

___

### needsDepthBuffer

• **needsDepthBuffer**: `boolean`

The property that should to be set to `true` (by the custom post effect) if a depth map
is necessary (default is false).

#### Inherited from

pc.PostEffect.needsDepthBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6967

___

### shader

• **shader**: `Shader`

The shader definition for the fullscreen quad. Needs to be set by the custom post effect
(default is null). Used when calling drawFullscreenQuad.

#### Inherited from

pc.PostEffect.shader

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6954

___

### vertexBuffer

• **vertexBuffer**: `VertexBuffer`

The vertex buffer for the fullscreen quad. Used when calling drawFullscreenQuad.

#### Inherited from

pc.PostEffect.vertexBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6960

## Methods

### refresh

▸ **refresh**(): `void`

刷新特效，一般用于窗口尺寸改变时

#### Returns

`void`

#### Defined in

src/utils/postEffects/posteffectOutline.ts:116

___

### render

▸ **render**(`inputTarget`, `outputTarget`, `rect`): `void`

渲染函数，由引擎自动每帧调用

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputTarget` | `RenderTarget` | 引擎输入renderTaget，为当前的渲染画面 |
| `outputTarget` | `RenderTarget` | 引擎输出的renderTarget，即经过后期处理之后的画面 |
| `rect` | `Vec4` | 引擎传入的矩形，用来表示整个屏幕的范围 |

#### Returns

`void`

#### Overrides

pc.PostEffect.render

#### Defined in

src/utils/postEffects/posteffectOutline.ts:100
