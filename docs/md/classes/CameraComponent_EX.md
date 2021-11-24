[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / CameraComponent\_EX

# Class: CameraComponent\_EX

## Hierarchy

- `CameraComponent`

  ↳ **`CameraComponent_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#constructor)

### Properties

- [aspectRatio](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#aspectratio)
- [aspectRatioMode](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#aspectratiomode)
- [calculateProjection](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#calculateprojection)
- [calculateTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#calculatetransform)
- [clearColor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#clearcolor)
- [clearColorBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#clearcolorbuffer)
- [clearDepthBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#cleardepthbuffer)
- [clearStencilBuffer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#clearstencilbuffer)
- [cullFaces](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#cullfaces)
- [disablePostEffectsLayer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#disableposteffectslayer)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#enabled)
- [entity](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#entity)
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
- [priority](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#priority)
- [projection](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#projection)
- [projectionMatrix](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#projectionmatrix)
- [rect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#rect)
- [renderTarget](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#rendertarget)
- [scissorRect](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#scissorrect)
- [system](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#system)
- [viewMatrix](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#viewmatrix)

### Methods

- [calculateAspectRatio](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#calculateaspectratio)
- [endXr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#endxr)
- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#fire)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#on)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#once)
- [raycastMeshInstances](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#raycastmeshinstances)
- [screenToWorld](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#screentoworld)
- [startXr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#startxr)
- [syncCamera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#synccamera)
- [worldToScreen](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/CameraComponent_EX.md#worldtoscreen)

## Constructors

### constructor

• **new CameraComponent_EX**(`system`, `entity`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `system` | `CameraComponentSystem` |
| `entity` | `Entity` |

#### Inherited from

pc.CameraComponent.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2254

## Properties

### aspectRatio

• **aspectRatio**: `number`

The aspect ratio (width divided by height) of the
camera. If aspectRatioMode is {@link ASPECT_AUTO}, then this value will be automatically
calculated every frame, and you can only read it. If it's ASPECT_MANUAL, you can set
the value.

#### Inherited from

pc.CameraComponent.aspectRatio

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2387

___

### aspectRatioMode

• **aspectRatioMode**: `number`

The aspect ratio mode of the camera. Can be:
- {@link ASPECT_AUTO}: aspect ratio will be calculated from the current render
target's width divided by height.
- {@link ASPECT_MANUAL}: use the aspectRatio value.
Defaults to {@link ASPECT_AUTO}.

#### Inherited from

pc.CameraComponent.aspectRatioMode

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2395

___

### calculateProjection

• **calculateProjection**: `CalculateMatrix`

Custom function you can
provide to calculate the camera projection matrix manually. Can be used for complex
effects like doing oblique projection. Function is called using component's scope.
Arguments:
- {{@link Mat4}} transformMatrix: output of the function
- {number} view: Type of view. Can be {@link VIEW_CENTER}, {@link VIEW_LEFT} or {@link VIEW_RIGHT}.
Left and right are only used in stereo rendering.

#### Inherited from

pc.CameraComponent.calculateProjection

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2493

___

### calculateTransform

• **calculateTransform**: `CalculateMatrix`

Custom function you can
provide to calculate the camera transformation matrix manually. Can be used for complex
effects like reflections. Function is called using component's scope.
Arguments:
- {@link Mat4} transformMatrix: output of the function.
- {number} view: Type of view. Can be {@link VIEW_CENTER}, {@link VIEW_LEFT} or {@link VIEW_RIGHT}.
Left and right are only used in stereo rendering.

#### Inherited from

pc.CameraComponent.calculateTransform

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2483

___

### clearColor

• **clearColor**: `Color`

The color used to clear the canvas to before the
camera starts to render. Defaults to [0.75, 0.75, 0.75, 1].

#### Inherited from

pc.CameraComponent.clearColor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2400

___

### clearColorBuffer

• **clearColorBuffer**: `boolean`

If true the camera will clear the color buffer
to the color set in clearColor. Defaults to true.

#### Inherited from

pc.CameraComponent.clearColorBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2405

___

### clearDepthBuffer

• **clearDepthBuffer**: `boolean`

If true the camera will clear the depth buffer.
Defaults to true.

#### Inherited from

pc.CameraComponent.clearDepthBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2410

___

### clearStencilBuffer

• **clearStencilBuffer**: `boolean`

If true the camera will clear the stencil
buffer. Defaults to true.

#### Inherited from

pc.CameraComponent.clearStencilBuffer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2415

___

### cullFaces

• **cullFaces**: `boolean`

If true the camera will take material.cull into account.
Otherwise both front and back faces will be rendered. Defaults to true.

#### Inherited from

pc.CameraComponent.cullFaces

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2498

___

### disablePostEffectsLayer

• **disablePostEffectsLayer**: `number`

Layer ID of a layer on which the postprocessing of the camera stops being applied to.
Defaults to LAYERID_UI, which causes post processing to not be applied to UI layer and
any following layers for the camera. Set to undefined for post-processing to be applied to all layers of the camera.

#### Inherited from

pc.CameraComponent.disablePostEffectsLayer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2516

___

### enabled

• **enabled**: `boolean`

Enables or disables the component.

#### Inherited from

pc.CameraComponent.enabled

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2680

___

### entity

• **entity**: `Entity`

The Entity that this Component is attached to.

#### Inherited from

pc.CameraComponent.entity

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2676

___

### farClip

• **farClip**: `number`

The distance from the camera after which no rendering
will take place. Defaults to 1000.

#### Inherited from

pc.CameraComponent.farClip

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2420

___

### flipFaces

• **flipFaces**: `boolean`

If true the camera will invert front and back faces.
Can be useful for reflection rendering. Defaults to false.

#### Inherited from

pc.CameraComponent.flipFaces

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2503

___

### fov

• **fov**: `number`

The field of view of the camera in degrees. Usually this is
the Y-axis field of view, see {@link CameraComponent#horizontalFov}. Used for
{@link PROJECTION_PERSPECTIVE} cameras only. Defaults to 45.

#### Inherited from

pc.CameraComponent.fov

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2426

___

### frustum

• `Readonly` **frustum**: `Frustum`

Queries the camera's frustum shape.

#### Inherited from

pc.CameraComponent.frustum

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2258

___

### frustumCulling

• **frustumCulling**: `boolean`

Controls the culling of mesh instances against
the camera frustum, i.e. if objects outside of camera should be omitted from rendering.
If false, all mesh instances in the scene are rendered by the camera, regardless of
visibility. Defaults to false.

#### Inherited from

pc.CameraComponent.frustumCulling

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2473

___

### horizontalFov

• **horizontalFov**: `boolean`

Set which axis to use for the Field of View
calculation. Defaults to false.

#### Inherited from

pc.CameraComponent.horizontalFov

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2431

___

### layers

• **layers**: `number`[]

An array of layer IDs ({@link Layer#id}) to which this
camera should belong. Don't push/pop/splice or modify this array, if you want to
change it, set a new one instead. Defaults to [LAYERID_WORLD, LAYERID_DEPTH,
LAYERID_SKYBOX, LAYERID_UI, LAYERID_IMMEDIATE].

#### Inherited from

pc.CameraComponent.layers

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2510

___

### nearClip

• **nearClip**: `number`

The distance from the camera before which no rendering
will take place. Defaults to 0.1.

#### Inherited from

pc.CameraComponent.nearClip

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2436

___

### orthoHeight

• **orthoHeight**: `number`

The half-height of the orthographic view window (in
the Y-axis). Used for {@link PROJECTION_ORTHOGRAPHIC} cameras only. Defaults to 10.

#### Inherited from

pc.CameraComponent.orthoHeight

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2441

___

### postEffects

• **postEffects**: `PostEffectQueue`

The post effects queue for this camera.
Use this to add or remove post effects from the camera.

#### Inherited from

pc.CameraComponent.postEffects

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2466

___

### priority

• **priority**: `number`

Controls the order in which cameras are rendered. Cameras
with smaller values for priority are rendered first. Defaults to 0.

#### Inherited from

pc.CameraComponent.priority

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2446

___

### projection

• **projection**: `number`

The type of projection used to render the camera.
Can be:
- {@link PROJECTION_PERSPECTIVE}: A perspective projection. The camera frustum
resembles a truncated pyramid.
- {@link PROJECTION_ORTHOGRAPHIC}: An orthographic projection. The camera
frustum is a cuboid.
Defaults to {@link PROJECTION_PERSPECTIVE}.

#### Inherited from

pc.CameraComponent.projection

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2380

___

### projectionMatrix

• `Readonly` **projectionMatrix**: `Mat4`

Queries the camera's projection matrix.

#### Inherited from

pc.CameraComponent.projectionMatrix

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2262

___

### rect

• **rect**: `Vec4`

Controls where on the screen the camera will be rendered in
normalized screen coordinates. Defaults to [0, 0, 1, 1].

#### Inherited from

pc.CameraComponent.rect

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2456

___

### renderTarget

• **renderTarget**: `RenderTarget`

Render target to which rendering of the cameras
is performed. If not set, it will render simply to the screen.

#### Inherited from

pc.CameraComponent.renderTarget

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2451

___

### scissorRect

• **scissorRect**: `Vec4`

Clips all pixels which are not in the rectangle.
The order of the values is [x, y, width, height]. Defaults to [0, 0, 1, 1].

#### Inherited from

pc.CameraComponent.scissorRect

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2461

___

### system

• **system**: `ComponentSystem`

The ComponentSystem used to create this Component.

#### Inherited from

pc.CameraComponent.system

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2672

___

### viewMatrix

• `Readonly` **viewMatrix**: `Mat4`

Queries the camera's view matrix.

#### Inherited from

pc.CameraComponent.viewMatrix

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2266

## Methods

### calculateAspectRatio

▸ **calculateAspectRatio**(`rt?`): `number`

Calculates aspect ratio value for a given render target.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rt?` | `RenderTarget` |

#### Returns

`number`

The aspect ratio of the render target (or backbuffer).

#### Inherited from

pc.CameraComponent.calculateAspectRatio

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2299

___

### endXr

▸ **endXr**(`callback?`): `void`

Attempt to end XR session of this camera.

**`example`**
// On an entity with a camera component
this.entity.camera.endXr(function (err) {
// not anymore in XR
});

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | `XrError` |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.endXr

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2370

___

### fire

▸ **fire**(`name`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`, `arg8?`): `EventHandler`

Fire an event, all additional arguments are passed on to the event listener.

**`example`**
obj.fire('test', 'This is the message');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | Name of event to fire. |
| `arg1?` | `any` | - |
| `arg2?` | `any` | - |
| `arg3?` | `any` | - |
| `arg4?` | `any` | - |
| `arg5?` | `any` | - |
| `arg6?` | `any` | - |
| `arg7?` | `any` | - |
| `arg8?` | `any` | - |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.fire

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:851

___

### hasEvent

▸ **hasEvent**(`name`): `boolean`

Test if there are any handlers bound to an event name.

**`example`**
obj.on('test', function () { }); // bind an event to 'test'
obj.hasEvent('test'); // returns true
obj.hasEvent('hello'); // returns false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the event to test. |

#### Returns

`boolean`

True if the object has handlers bound to the specified event name.

#### Inherited from

pc.CameraComponent.hasEvent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:875

___

### off

▸ **off**(`name?`, `callback?`, `scope?`): `EventHandler`

Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
if scope is not provided then all events with the callback will be unbound.

**`example`**
var handler = function () {
};
obj.on('test', handler);

obj.off(); // Removes all events
obj.off('test'); // Removes all events called 'test'
obj.off('test', handler); // Removes all handler functions, called 'test'
obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `callback?` | `HandleEvent` |
| `scope?` | `any` |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.off

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:835

___

### on

▸ **on**(`name`, `callback`, `scope?`): `EventHandler`

Attach an event handler to an event.

**`example`**
obj.on('test', function (a, b) {
    console.log(a + b);
});
obj.fire('test', 1, 2); // prints 3 to the console

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the event to bind the callback to. |
| `callback` | `HandleEvent` | Function that is called when event is fired. Note the callback is limited to 8 arguments. |
| `scope?` | `any` | - |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.on

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:817

___

### once

▸ **once**(`name`, `callback`, `scope?`): `EventHandler`

Attach an event handler to an event. This handler will be removed after being fired once.

**`example`**
obj.once('test', function (a, b) {
    console.log(a + b);
});
obj.fire('test', 1, 2); // prints 3 to the console
obj.fire('test', 1, 2); // not going to get handled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the event to bind the callback to. |
| `callback` | `HandleEvent` | Function that is called when event is fired. Note the callback is limited to 8 arguments. |
| `scope?` | `any` | - |

#### Returns

`EventHandler`

Self for chaining.

#### Inherited from

pc.CameraComponent.once

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:865

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

#### Overrides

pc.CameraComponent.raycastMeshInstances

#### Defined in

src/extensions/extendClasses/cameraComponent.ts:56

___

### screenToWorld

▸ **screenToWorld**(`screenx`, `screeny`, `cameraz`, `worldCoord?`): `Vec3`

Convert a point from 2D screen space to 3D world space.

**`example`**
// Get the start and end points of a 3D ray fired from a screen click position
var start = entity.camera.screenToWorld(clickX, clickY, entity.camera.nearClip);
var end = entity.camera.screenToWorld(clickX, clickY, entity.camera.farClip);

// Use the ray coordinates to perform a raycast
app.systems.rigidbody.raycastFirst(start, end, function (result) {
console.log("Entity " + result.entity.name + " was selected");
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `screenx` | `number` | X coordinate on PlayCanvas' canvas element. |
| `screeny` | `number` | Y coordinate on PlayCanvas' canvas element. |
| `cameraz` | `number` | The distance from the camera in world space to create the new point. |
| `worldCoord?` | `Vec3` | - |

#### Returns

`Vec3`

The world space coordinate.

#### Inherited from

pc.CameraComponent.screenToWorld

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2285

___

### startXr

▸ **startXr**(`type`, `spaceType`, `options?`): `void`

Attempt to start XR session with this camera.

**`example`**
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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The type of session. Can be one of the following:  - {@link XRTYPE_INLINE}: Inline - always available type of session. It has limited feature availability and is rendered into HTML element. - {@link XRTYPE_VR}: Immersive VR - session that provides exclusive access to the VR device with the best available tracking features. - {@link XRTYPE_AR}: Immersive AR - session that provides exclusive access to the VR/AR device that is intended to be blended with the real-world environment. |
| `spaceType` | `string` | Reference space type. Can be one of the following:  - {@link XRSPACE_VIEWER}: Viewer - always supported space with some basic tracking capabilities. - {@link XRSPACE_LOCAL}: Local - represents a tracking space with a native origin near the viewer at the time of creation. It is meant for seated or basic local XR sessions. - {@link XRSPACE_LOCALFLOOR}: Local Floor - represents a tracking space with a native origin at the floor in a safe position for the user to stand. The y-axis equals 0 at floor level. Floor level value might be estimated by the underlying platform. It is meant for seated or basic local XR sessions. - {@link XRSPACE_BOUNDEDFLOOR}: Bounded Floor - represents a tracking space with its native origin at the floor, where the user is expected to move within a pre-established boundary. - {@link XRSPACE_UNBOUNDED}: Unbounded - represents a tracking space where the user is expected to move freely around their environment, potentially long distances from their starting point. |
| `options?` | `Object` | - |
| `options.callback?` | `XrError` | - |
| `options.depthSensing?` | `Object` | - |
| `options.depthSensing.dataFormatPreference?` | `string` | - |
| `options.depthSensing.usagePreference?` | `string` | - |
| `options.imageTracking?` | `boolean` | - |
| `options.optionalFeatures?` | `string`[] | - |
| `options.planeDetection?` | `boolean` | - |

#### Returns

`void`

#### Inherited from

pc.CameraComponent.startXr

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2349

___

### syncCamera

▸ **syncCamera**(`camera`): `void`

让两个相机同步

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `camera` | `CameraComponent` | 要同步的相机 |

#### Returns

`void`

#### Overrides

pc.CameraComponent.syncCamera

#### Defined in

src/extensions/extendClasses/cameraComponent.ts:34

___

### worldToScreen

▸ **worldToScreen**(`worldCoord`, `screenCoord?`): `Vec3`

Convert a point from 3D world space to 2D screen space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldCoord` | `Vec3` | The world space coordinate. |
| `screenCoord?` | `Vec3` | - |

#### Returns

`Vec3`

The screen space coordinate.

#### Inherited from

pc.CameraComponent.worldToScreen

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:2292
