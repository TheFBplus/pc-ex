[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / CameraComponent\_EX

# Class: CameraComponent\_EX

## Hierarchy

- `CameraComponent`

  ↳ **`CameraComponent_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#constructor)

### Properties

- [\_camera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#_camera)
- [\_disablePostEffectsLayer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#_disableposteffectslayer)
- [\_postEffects](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#_posteffects)
- [\_priority](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#_priority)
- [aspectRatio](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#aspectratio)
- [onPostRender](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onpostrender)
- [onPreRender](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onprerender)

### Accessors

- [aspectRatioMode](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#aspectratiomode)
- [calculateProjection](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#calculateprojection)
- [calculateTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#calculatetransform)
- [camera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#camera)
- [clearColor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#clearcolor)
- [clearColorBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#clearcolorbuffer)
- [clearDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#cleardepthbuffer)
- [clearStencilBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#clearstencilbuffer)
- [cullFaces](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#cullfaces)
- [data](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#data)
- [disablePostEffectsLayer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#disableposteffectslayer)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#enabled)
- [farClip](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#farclip)
- [flipFaces](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#flipfaces)
- [fov](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#fov)
- [frustum](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#frustum)
- [frustumCulling](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#frustumculling)
- [horizontalFov](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#horizontalfov)
- [layers](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#layers)
- [nearClip](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#nearclip)
- [orthoHeight](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#orthoheight)
- [postEffects](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#posteffects)
- [postEffectsEnabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#posteffectsenabled)
- [priority](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#priority)
- [projection](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#projection)
- [projectionMatrix](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#projectionmatrix)
- [rect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#rect)
- [renderSceneColorMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#renderscenecolormap)
- [renderSceneDepthMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#renderscenedepthmap)
- [renderTarget](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#rendertarget)
- [scissorRect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#scissorrect)
- [viewMatrix](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#viewmatrix)

### Methods

- [\_enableDepthLayer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#_enabledepthlayer)
- [addCameraToLayers](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#addcameratolayers)
- [buildAccessors](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#buildaccessors)
- [calculateAspectRatio](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#calculateaspectratio)
- [copy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#copy)
- [dirtyLayerCompositionCameras](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#dirtylayercompositioncameras)
- [endXr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#endxr)
- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#fire)
- [follow](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#follow)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#on)
- [onAppPrerender](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onappprerender)
- [onDisable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#ondisable)
- [onEnable](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onenable)
- [onLayerAdded](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onlayeradded)
- [onLayerRemoved](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onlayerremoved)
- [onLayersChanged](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onlayerschanged)
- [onPostStateChange](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onpoststatechange)
- [onRemove](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onremove)
- [onSetEnabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#onsetenabled)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#once)
- [raycastMeshInstances](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#raycastmeshinstances)
- [removeCameraFromLayers](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#removecamerafromlayers)
- [requestSceneColorMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#requestscenecolormap)
- [requestSceneDepthMap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#requestscenedepthmap)
- [screenToWorld](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#screentoworld)
- [startXr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#startxr)
- [worldToScreen](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#worldtoscreen)
- [\_buildAccessors](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#_buildaccessors)

## Constructors

### constructor

• **new CameraComponent_EX**(`system`, `entity`)

Create a new CameraComponent instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `system` | `CameraComponentSystem` | The ComponentSystem that created this Component. |
| `entity` | `Entity` | The Entity that this Component is attached to. |

#### Inherited from

pc.CameraComponent.constructor

## Properties

### \_camera

• **\_camera**: `Camera`

#### Inherited from

pc.CameraComponent.\_camera

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29293

___

### \_disablePostEffectsLayer

• **\_disablePostEffectsLayer**: `number`

#### Inherited from

pc.CameraComponent.\_disablePostEffectsLayer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29295

___

### \_postEffects

• **\_postEffects**: `PostEffectQueue`

#### Inherited from

pc.CameraComponent.\_postEffects

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29296

___

### \_priority

• **\_priority**: `number`

#### Inherited from

pc.CameraComponent.\_priority

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29294

___

### aspectRatio

• **aspectRatio**: `number`

#### Inherited from

pc.CameraComponent.aspectRatio

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29463

___

### onPostRender

• **onPostRender**: `Function`

Custom function that is called after the camera renders the scene.

#### Inherited from

pc.CameraComponent.onPostRender

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29278

___

### onPreRender

• **onPreRender**: `Function`

Custom function that is called before the camera renders the scene.

#### Inherited from

pc.CameraComponent.onPreRender

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29272

## Accessors

### aspectRatioMode

• `get` **aspectRatioMode**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.aspectRatioMode

• `set` **aspectRatioMode**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.aspectRatioMode

___

### calculateProjection

• `get` **calculateProjection**(): `CalculateMatrixCallback`

#### Returns

`CalculateMatrixCallback`

#### Inherited from

pc.CameraComponent.calculateProjection

• `set` **calculateProjection**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `CalculateMatrixCallback` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.calculateProjection

___

### calculateTransform

• `get` **calculateTransform**(): `CalculateMatrixCallback`

#### Returns

`CalculateMatrixCallback`

#### Inherited from

pc.CameraComponent.calculateTransform

• `set` **calculateTransform**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `CalculateMatrixCallback` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.calculateTransform

___

### camera

• **camera**: `Object`

#### Inherited from

pc.CameraComponent.camera

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:29303

___

### clearColor

• `get` **clearColor**(): `Color`

#### Returns

`Color`

#### Inherited from

pc.CameraComponent.clearColor

• `set` **clearColor**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Color` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.clearColor

___

### clearColorBuffer

• `get` **clearColorBuffer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.clearColorBuffer

• `set` **clearColorBuffer**(`arg`): `void`

If true the camera will clear the color buffer to the color set in clearColor. Defaults to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.clearColorBuffer

___

### clearDepthBuffer

• `get` **clearDepthBuffer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.clearDepthBuffer

• `set` **clearDepthBuffer**(`arg`): `void`

If true the camera will clear the depth buffer. Defaults to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.clearDepthBuffer

___

### clearStencilBuffer

• `get` **clearStencilBuffer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.clearStencilBuffer

• `set` **clearStencilBuffer**(`arg`): `void`

If true the camera will clear the stencil buffer. Defaults to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.clearStencilBuffer

___

### cullFaces

• `get` **cullFaces**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.cullFaces

• `set` **cullFaces**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.cullFaces

___

### data

• **data**: `Object`

#### Inherited from

pc.CameraComponent.data

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:7573

___

### disablePostEffectsLayer

• `get` **disablePostEffectsLayer**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.disablePostEffectsLayer

• `set` **disablePostEffectsLayer**(`arg`): `void`

Layer ID of a layer on which the postprocessing of the camera stops being applied to.
Defaults to LAYERID_UI, which causes post processing to not be applied to UI layer and any
following layers for the camera. Set to undefined for post-processing to be applied to all
layers of the camera.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.disablePostEffectsLayer

___

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.enabled

• `set` **enabled**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.enabled

___

### farClip

• `get` **farClip**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.farClip

• `set` **farClip**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.farClip

___

### flipFaces

• `get` **flipFaces**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.flipFaces

• `set` **flipFaces**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.flipFaces

___

### fov

• `get` **fov**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.fov

• `set` **fov**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.fov

___

### frustum

• `get` **frustum**(): `Frustum`

Queries the camera's frustum shape.

#### Returns

`Frustum`

#### Inherited from

pc.CameraComponent.frustum

___

### frustumCulling

• `get` **frustumCulling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.frustumCulling

• `set` **frustumCulling**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.frustumCulling

___

### horizontalFov

• `get` **horizontalFov**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.horizontalFov

• `set` **horizontalFov**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.horizontalFov

___

### layers

• `get` **layers**(): `number`[]

#### Returns

`number`[]

#### Inherited from

pc.CameraComponent.layers

• `set` **layers**(`arg`): `void`

An array of layer IDs (Layer#id) to which this camera should belong. Don't push,
pop, splice or modify this array, if you want to change it, set a new one instead. Defaults
to [LAYERID_WORLD, LAYERID_DEPTH, LAYERID_SKYBOX, LAYERID_UI, LAYERID_IMMEDIATE].

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number`[] |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.layers

___

### nearClip

• `get` **nearClip**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.nearClip

• `set` **nearClip**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.nearClip

___

### orthoHeight

• `get` **orthoHeight**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.orthoHeight

• `set` **orthoHeight**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.orthoHeight

___

### postEffects

• `get` **postEffects**(): `PostEffectQueue`

#### Returns

`PostEffectQueue`

#### Inherited from

pc.CameraComponent.postEffects

___

### postEffectsEnabled

• `get` **postEffectsEnabled**(): `PostEffectQueue`

The post effects queue for this camera. Use this to add or remove post effects from the camera.

#### Returns

`PostEffectQueue`

#### Inherited from

pc.CameraComponent.postEffectsEnabled

___

### priority

• `get` **priority**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.priority

• `set` **priority**(`arg`): `void`

Controls the order in which cameras are rendered. Cameras with smaller values for priority
are rendered first. Defaults to 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.priority

___

### projection

• `get` **projection**(): `number`

#### Returns

`number`

#### Inherited from

pc.CameraComponent.projection

• `set` **projection**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.projection

___

### projectionMatrix

• `get` **projectionMatrix**(): `Mat4`

Queries the camera's projection matrix.

#### Returns

`Mat4`

#### Inherited from

pc.CameraComponent.projectionMatrix

___

### rect

• `get` **rect**(): `Vec4`

#### Returns

`Vec4`

#### Inherited from

pc.CameraComponent.rect

• `set` **rect**(`arg`): `void`

Controls where on the screen the camera will be rendered in normalized screen coordinates.
Defaults to [0, 0, 1, 1].

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Vec4` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.rect

___

### renderSceneColorMap

• `get` **renderSceneColorMap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.renderSceneColorMap

___

### renderSceneDepthMap

• `get` **renderSceneDepthMap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.renderSceneDepthMap

___

### renderTarget

• `get` **renderTarget**(): `any`

#### Returns

`any`

#### Inherited from

pc.CameraComponent.renderTarget

• `set` **renderTarget**(`arg`): `void`

Render target to which rendering of the cameras is performed. If not set, it will render
simply to the screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.renderTarget

___

### scissorRect

• `get` **scissorRect**(): `Vec4`

#### Returns

`Vec4`

#### Inherited from

pc.CameraComponent.scissorRect

• `set` **scissorRect**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Vec4` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.scissorRect

___

### viewMatrix

• `get` **viewMatrix**(): `Mat4`

Queries the camera's view matrix.

#### Returns

`Mat4`

#### Inherited from

pc.CameraComponent.viewMatrix

## Methods

### \_enableDepthLayer

▸ **_enableDepthLayer**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

pc.CameraComponent.\_enableDepthLayer

___

### addCameraToLayers

▸ **addCameraToLayers**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.addCameraToLayers

___

### buildAccessors

▸ **buildAccessors**(`schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.buildAccessors

___

### calculateAspectRatio

▸ **calculateAspectRatio**(`rt?`): `number`

Calculates aspect ratio value for a given render target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rt?` | `RenderTarget` | Optional render target. If unspecified, the backbuffer is used. |

#### Returns

`number`

The aspect ratio of the render target (or backbuffer).

#### Inherited from

pc.CameraComponent.calculateAspectRatio

___

### copy

▸ **copy**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.copy

___

### dirtyLayerCompositionCameras

▸ **dirtyLayerCompositionCameras**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.dirtyLayerCompositionCameras

___

### endXr

▸ **endXr**(`callback?`): `void`

Attempt to end XR session of this camera.

**`Example`**

```ts
// On an entity with a camera component
this.entity.camera.endXr(function (err) {
    // not anymore in XR
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | `XrErrorCallback` | Optional callback function called once session is ended. The callback has one argument Error - it is null if successfully ended XR session. |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.endXr

___

### fire

▸ **fire**(`name`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`, `arg8?`): `EventHandler`

Fire an event, all additional arguments are passed on to the event listener.

**`Example`**

```ts
obj.fire('test', 'This is the message');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of event to fire. |
| `arg1?` | `any` | First argument that is passed to the event handler. |
| `arg2?` | `any` | Second argument that is passed to the event handler. |
| `arg3?` | `any` | Third argument that is passed to the event handler. |
| `arg4?` | `any` | Fourth argument that is passed to the event handler. |
| `arg5?` | `any` | Fifth argument that is passed to the event handler. |
| `arg6?` | `any` | Sixth argument that is passed to the event handler. |
| `arg7?` | `any` | Seventh argument that is passed to the event handler. |
| `arg8?` | `any` | Eighth argument that is passed to the event handler. |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.fire

___

### follow

▸ **follow**(`camera`): `void`

跟随另一个相机（与另一相机的几何信息保持相同）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera` | `CameraComponent` | 要跟随的相机 |

#### Returns

`void`

___

### hasEvent

▸ **hasEvent**(`name`): `boolean`

Test if there are any handlers bound to an event name.

**`Example`**

```ts
obj.on('test', function () { }); // bind an event to 'test'
obj.hasEvent('test'); // returns true
obj.hasEvent('hello'); // returns false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the event to test. |

#### Returns

`boolean`

True if the object has handlers bound to the specified event name.

#### Inherited from

pc.CameraComponent.hasEvent

___

### off

▸ **off**(`name?`, `callback?`, `scope?`): `EventHandler`

Detach an event handler from an event. If callback is not provided then all callbacks are
unbound from the event, if scope is not provided then all events with the callback will be
unbound.

**`Example`**

```ts
var handler = function () {
};
obj.on('test', handler);

obj.off(); // Removes all events
obj.off('test'); // Removes all events called 'test'
obj.off('test', handler); // Removes all handler functions, called 'test'
obj.off('test', handler, this); // Removes all handler functions, called 'test' with scope this
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the event to unbind. |
| `callback?` | `HandleEventCallback` | Function to be unbound. |
| `scope?` | `object` | Scope that was used as the this when the event is fired. |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.off

___

### on

▸ **on**(`name`, `callback`, `scope?`): `EventHandler`

Attach an event handler to an event.

**`Example`**

```ts
obj.on('test', function (a, b) {
    console.log(a + b);
});
obj.fire('test', 1, 2); // prints 3 to the console
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the event to bind the callback to. |
| `callback` | `HandleEventCallback` | Function that is called when event is fired. Note the callback is limited to 8 arguments. |
| `scope?` | `object` | Object to use as 'this' when the event is fired, defaults to current this. |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.on

___

### onAppPrerender

▸ **onAppPrerender**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onAppPrerender

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onDisable

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onEnable

___

### onLayerAdded

▸ **onLayerAdded**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onLayerAdded

___

### onLayerRemoved

▸ **onLayerRemoved**(`layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onLayerRemoved

___

### onLayersChanged

▸ **onLayersChanged**(`oldComp`, `newComp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldComp` | `any` |
| `newComp` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onLayersChanged

___

### onPostStateChange

▸ **onPostStateChange**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onPostStateChange

___

### onRemove

▸ **onRemove**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onRemove

___

### onSetEnabled

▸ **onSetEnabled**(`name`, `oldValue`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `oldValue` | `any` |
| `newValue` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.onSetEnabled

___

### once

▸ **once**(`name`, `callback`, `scope?`): `EventHandler`

Attach an event handler to an event. This handler will be removed after being fired once.

**`Example`**

```ts
obj.once('test', function (a, b) {
    console.log(a + b);
});
obj.fire('test', 1, 2); // prints 3 to the console
obj.fire('test', 1, 2); // not going to get handled
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the event to bind the callback to. |
| `callback` | `HandleEventCallback` | Function that is called when event is fired. Note the callback is limited to 8 arguments. |
| `scope?` | `object` | Object to use as 'this' when the event is fired, defaults to current this. |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.once

___

### raycastMeshInstances

▸ **raycastMeshInstances**(`ray`, `meshInstances`): `intersect`[]

从此相机发射射线，检测一系列mesh的交点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | `Ray` | 要检测的射线 |
| `meshInstances` | `MeshInstance`[] | 要检测的meshInstance集合 |

#### Returns

`intersect`[]

交点集合

___

### removeCameraFromLayers

▸ **removeCameraFromLayers**(): `void`

#### Returns

`void`

#### Inherited from

pc.CameraComponent.removeCameraFromLayers

___

### requestSceneColorMap

▸ **requestSceneColorMap**(`enabled`): `void`

Request the scene to generate a texture containing the scene color map. Note that this call
is accummulative, and for each enable request, a disable request need to be called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | True to request the generation, false to disable it. |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.requestSceneColorMap

___

### requestSceneDepthMap

▸ **requestSceneDepthMap**(`enabled`): `void`

Request the scene to generate a texture containing the scene depth map. Note that this call
is accummulative, and for each enable request, a disable request need to be called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | True to request the generation, false to disable it. |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.requestSceneDepthMap

___

### screenToWorld

▸ **screenToWorld**(`screenx`, `screeny`, `cameraz`, `worldCoord?`): `Vec3`

Convert a point from 2D screen space to 3D world space.

**`Example`**

```ts
// Get the start and end points of a 3D ray fired from a screen click position
var start = entity.camera.screenToWorld(clickX, clickY, entity.camera.nearClip);
var end = entity.camera.screenToWorld(clickX, clickY, entity.camera.farClip);

// Use the ray coordinates to perform a raycast
app.systems.rigidbody.raycastFirst(start, end, function (result) {
    console.log("Entity " + result.entity.name + " was selected");
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenx` | `number` | X coordinate on PlayCanvas' canvas element. Should be in the range 0 to `canvas.offsetWidth` of the application's canvas element. |
| `screeny` | `number` | Y coordinate on PlayCanvas' canvas element. Should be in the range 0 to `canvas.offsetHeight` of the application's canvas element. |
| `cameraz` | `number` | The distance from the camera in world space to create the new point. |
| `worldCoord?` | `Vec3` | 3D vector to receive world coordinate result. |

#### Returns

`Vec3`

The world space coordinate.

#### Inherited from

pc.CameraComponent.screenToWorld

___

### startXr

▸ **startXr**(`type`, `spaceType`, `options?`): `void`

Attempt to start XR session with this camera.

**`Example`**

```ts
// On an entity with a camera component
this.entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCAL, {
    callback: function (err) {
        if (err) {
            // failed to start XR session
        } else {
            // in XR
        }
    }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of session. Can be one of the following:  - XRTYPE_INLINE: Inline - always available type of session. It has limited feature availability and is rendered into HTML element. - XRTYPE_VR: Immersive VR - session that provides exclusive access to the VR device with the best available tracking features. - XRTYPE_AR: Immersive AR - session that provides exclusive access to the VR/AR device that is intended to be blended with the real-world environment. |
| `spaceType` | `string` | Reference space type. Can be one of the following:  - XRSPACE_VIEWER: Viewer - always supported space with some basic tracking capabilities. - XRSPACE_LOCAL: Local - represents a tracking space with a native origin near the viewer at the time of creation. It is meant for seated or basic local XR sessions. - XRSPACE_LOCALFLOOR: Local Floor - represents a tracking space with a native origin at the floor in a safe position for the user to stand. The y-axis equals 0 at floor level. Floor level value might be estimated by the underlying platform. It is meant for seated or basic local XR sessions. - XRSPACE_BOUNDEDFLOOR: Bounded Floor - represents a tracking space with its native origin at the floor, where the user is expected to move within a pre-established boundary. - XRSPACE_UNBOUNDED: Unbounded - represents a tracking space where the user is expected to move freely around their environment, potentially long distances from their starting point. |
| `options?` | `Object` | Object with options for XR session initialization. |
| `options.callback?` | `XrErrorCallback` | Optional callback function called once the session is started. The callback has one argument Error - it is null if the XR session started successfully. |
| `options.depthSensing?` | `Object` | Optional object with depth sensing parameters to attempt to enable XrDepthSensing. |
| `options.depthSensing.dataFormatPreference?` | `string` | - |
| `options.depthSensing.usagePreference?` | `string` | - |
| `options.imageTracking?` | `boolean` | Set to true to attempt to enable XrImageTracking. |
| `options.optionalFeatures?` | `string`[] | Optional features for XRSession start. It is used for getting access to additional WebXR spec extensions. |
| `options.planeDetection?` | `boolean` | Set to true to attempt to enable XrPlaneDetection. |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.startXr

___

### worldToScreen

▸ **worldToScreen**(`worldCoord`, `screenCoord?`): `Vec3`

Convert a point from 3D world space to 2D screen space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldCoord` | `Vec3` | The world space coordinate. |
| `screenCoord?` | `Vec3` | 3D vector to receive screen coordinate result. |

#### Returns

`Vec3`

The screen space coordinate.

#### Inherited from

pc.CameraComponent.worldToScreen

___

### \_buildAccessors

▸ `Static` **_buildAccessors**(`obj`, `schema`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `schema` | `any` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.\_buildAccessors
