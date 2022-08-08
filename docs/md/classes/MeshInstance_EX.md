[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / MeshInstance\_EX

# Class: MeshInstance\_EX

## Hierarchy

- `MeshInstance`

  ↳ **`MeshInstance_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#constructor)

### Properties

- [\_aabb](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_aabb)
- [\_aabbVer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_aabbver)
- [\_calculateSortDistance](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_calculatesortdistance)
- [\_key](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_key)
- [\_layer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_layer)
- [\_lightHash](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_lighthash)
- [\_mesh](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_mesh)
- [\_noDepthDrawGl1](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_nodepthdrawgl1)
- [\_receiveShadow](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_receiveshadow)
- [\_screenSpace](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_screenspace)
- [\_shaderDefs](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_shaderdefs)
- [\_staticLightList](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_staticlightlist)
- [\_staticSource](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_staticsource)
- [\_updateAabb](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_updateaabb)
- [\_updateAabbFunc](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_updateaabbfunc)
- [castShadow](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#castshadow)
- [cull](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#cull)
- [drawOrder](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#draworder)
- [flipFaces](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#flipfaces)
- [instancingData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#instancingdata)
- [isStatic](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#isstatic)
- [isVisibleFunc](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#isvisiblefunc)
- [node](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#node)
- [parameters](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#parameters)
- [stencilBack](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#stencilback)
- [stencilFront](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#stencilfront)
- [visible](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#visible)
- [visibleThisFrame](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#visiblethisframe)
- [lightmapParamNames](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#lightmapparamnames)

### Accessors

- [aabb](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#aabb)
- [calculateSortDistance](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#calculatesortdistance)
- [instancingCount](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#instancingcount)
- [key](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#key)
- [layer](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#layer)
- [mask](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#mask)
- [material](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#material)
- [mesh](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#mesh)
- [morphInstance](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#morphinstance)
- [receiveShadow](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#receiveshadow)
- [renderStyle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#renderstyle)
- [screenSpace](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#screenspace)
- [skinInstance](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#skininstance)

### Methods

- [\_isVisible](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_isvisible)
- [\_setupSkinUpdate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_setupskinupdate)
- [clearParameters](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#clearparameters)
- [deleteParameter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#deleteparameter)
- [destroy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#destroy)
- [getParameter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#getparameter)
- [getParameters](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#getparameters)
- [intersectsRay](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#intersectsray)
- [setCustomAabb](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#setcustomaabb)
- [setInstancing](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#setinstancing)
- [setLightmapped](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#setlightmapped)
- [setParameter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#setparameter)
- [setParameters](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#setparameters)
- [setRealtimeLightmap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#setrealtimelightmap)
- [updateKey](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#updatekey)
- [\_prepareRenderStyleForArray](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MeshInstance_EX.md#_preparerenderstyleforarray)

## Constructors

### constructor

• **new MeshInstance_EX**(`mesh`, `material`, `node?`)

Create a new MeshInstance instance.

**`Example`**

```ts
// Create a mesh instance pointing to a 1x1x1 'cube' mesh
var mesh = pc.createBox(graphicsDevice);
var material = new pc.StandardMaterial();

var meshInstance = new pc.MeshInstance(mesh, material);

var entity = new pc.Entity();
entity.addComponent('render', {
    meshInstances: [meshInstance]
});

// Add the entity to the scene hierarchy
this.app.scene.root.addChild(entity);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mesh` | `Mesh` | The graphics mesh to instance. |
| `material` | `Material` | The material to use for this mesh instance. |
| `node?` | `GraphNode` | The graph node defining the transform for this instance. This parameter is optional when used with RenderComponent and will use the node the component is attached to. |

#### Inherited from

pc.MeshInstance.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12595

## Properties

### \_aabb

• **\_aabb**: `any`

#### Inherited from

pc.MeshInstance.\_aabb

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12726

___

### \_aabbVer

• **\_aabbVer**: `number`

#### Inherited from

pc.MeshInstance.\_aabbVer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12684

___

### \_calculateSortDistance

• **\_calculateSortDistance**: `any`

#### Inherited from

pc.MeshInstance.\_calculateSortDistance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12660

___

### \_key

• **\_key**: `number`[]

#### Inherited from

pc.MeshInstance.\_key

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12608

___

### \_layer

• **\_layer**: `any`

#### Inherited from

pc.MeshInstance.\_layer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12733

___

### \_lightHash

• **\_lightHash**: `number`

#### Inherited from

pc.MeshInstance.\_lightHash

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12627

___

### \_mesh

• **\_mesh**: `Mesh`

#### Inherited from

pc.MeshInstance.\_mesh

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12618

___

### \_noDepthDrawGl1

• **\_noDepthDrawGl1**: `boolean`

#### Inherited from

pc.MeshInstance.\_noDepthDrawGl1

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12643

___

### \_receiveShadow

• **\_receiveShadow**: `boolean`

#### Inherited from

pc.MeshInstance.\_receiveShadow

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12641

___

### \_screenSpace

• **\_screenSpace**: `boolean`

#### Inherited from

pc.MeshInstance.\_screenSpace

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12642

___

### \_shaderDefs

• **\_shaderDefs**: `number`

#### Inherited from

pc.MeshInstance.\_shaderDefs

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12626

___

### \_staticLightList

• **\_staticLightList**: `any`

#### Inherited from

pc.MeshInstance.\_staticLightList

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12610

___

### \_staticSource

• **\_staticSource**: `any`

#### Inherited from

pc.MeshInstance.\_staticSource

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12611

___

### \_updateAabb

• **\_updateAabb**: `boolean`

#### Inherited from

pc.MeshInstance.\_updateAabb

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12658

___

### \_updateAabbFunc

• **\_updateAabbFunc**: `any`

#### Inherited from

pc.MeshInstance.\_updateAabbFunc

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12659

___

### castShadow

• **castShadow**: `boolean`

#### Inherited from

pc.MeshInstance.castShadow

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12640

___

### cull

• **cull**: `boolean`

Controls whether the mesh instance can be culled by frustum culling
(CameraComponent#frustumCulling).

#### Inherited from

pc.MeshInstance.cull

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12650

___

### drawOrder

• **drawOrder**: `number`

Use this value to affect rendering order of mesh instances. Only used when mesh
instances are added to a Layer with Layer#opaqueSortMode or
Layer#transparentSortMode (depending on the material) set to
SORTMODE_MANUAL.

#### Inherited from

pc.MeshInstance.drawOrder

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12693

___

### flipFaces

• **flipFaces**: `boolean`

#### Inherited from

pc.MeshInstance.flipFaces

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12705

___

### instancingData

• **instancingData**: `InstancingData`

#### Inherited from

pc.MeshInstance.instancingData

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12671

___

### isStatic

• **isStatic**: `boolean`

#### Inherited from

pc.MeshInstance.isStatic

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12609

___

### isVisibleFunc

• **isVisibleFunc**: `any`

#### Inherited from

pc.MeshInstance.isVisibleFunc

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12701

___

### node

• **node**: `GraphNode`

The graph node defining the transform for this instance.

#### Inherited from

pc.MeshInstance.node

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12617

___

### parameters

• **parameters**: `Object`

#### Inherited from

pc.MeshInstance.parameters

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12702

___

### stencilBack

• **stencilBack**: `any`

#### Inherited from

pc.MeshInstance.stencilBack

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12704

___

### stencilFront

• **stencilFront**: `any`

#### Inherited from

pc.MeshInstance.stencilFront

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12703

___

### visible

• **visible**: `boolean`

Enable rendering for this mesh instance. Use visible property to enable/disable
rendering without overhead of removing from scene. But note that the mesh instance is
still in the hierarchy and still in the draw call list.

#### Inherited from

pc.MeshInstance.visible

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12635

___

### visibleThisFrame

• **visibleThisFrame**: `boolean`

Read this value in Layer#onPostCull to determine if the object is actually going
to be rendered.

#### Inherited from

pc.MeshInstance.visibleThisFrame

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12700

___

### lightmapParamNames

▪ `Static` **lightmapParamNames**: `string`[]

#### Inherited from

pc.MeshInstance.lightmapParamNames

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12570

## Accessors

### aabb

• `get` **aabb**(): `any`

#### Returns

`any`

#### Inherited from

pc.MeshInstance.aabb

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12683

• `set` **aabb**(`arg`): `void`

The world space axis-aligned bounding box for this mesh instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.aabb

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12682

___

### calculateSortDistance

• `get` **calculateSortDistance**(): `any`

#### Returns

`any`

#### Inherited from

pc.MeshInstance.calculateSortDistance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12744

• `set` **calculateSortDistance**(`arg`): `void`

In some circumstances mesh instances are sorted by a distance calculation to determine their
rendering order. Set this callback to override the default distance calculation, which gives
the dot product of the camera forward vector and the vector between the camera position and
the center of the mesh instance's axis-aligned bounding box. This option can be particularly
useful for rendering transparent meshes in a better order than default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.calculateSortDistance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12743

___

### instancingCount

• `get` **instancingCount**(): `number`

#### Returns

`number`

#### Inherited from

pc.MeshInstance.instancingCount

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12779

• `set` **instancingCount**(`arg`): `void`

Number of instances when using hardware instancing to render the mesh.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.instancingCount

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12778

___

### key

• `get` **key**(): `number`

#### Returns

`number`

#### Inherited from

pc.MeshInstance.key

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12764

• `set` **key**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.key

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12763

___

### layer

• `get` **layer**(): `any`

#### Returns

`any`

#### Inherited from

pc.MeshInstance.layer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12637

• `set` **layer**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.layer

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12636

___

### mask

• `get` **mask**(): `number`

#### Returns

`number`

#### Inherited from

pc.MeshInstance.mask

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12772

• `set` **mask**(`arg`): `void`

Mask controlling which LightComponents light this mesh instance, which
CameraComponent sees it and in which Layer it is rendered. Defaults to 1.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.mask

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12771

___

### material

• `get` **material**(): `Material`

#### Returns

`Material`

#### Inherited from

pc.MeshInstance.material

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12625

• `set` **material**(`arg`): `void`

The material used by this mesh instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Material` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.material

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12624

___

### mesh

• `get` **mesh**(): `Mesh`

#### Returns

`Mesh`

#### Inherited from

pc.MeshInstance.mesh

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12725

• `set` **mesh**(`arg`): `void`

The graphics mesh being instanced.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Mesh` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.mesh

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12724

___

### morphInstance

• `get` **morphInstance**(): `MorphInstance`

#### Returns

`MorphInstance`

#### Inherited from

pc.MeshInstance.morphInstance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12760

• `set` **morphInstance**(`arg`): `void`

The morph instance managing morphing of this mesh instance, or null if morphing is not used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `MorphInstance` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.morphInstance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12759

___

### receiveShadow

• `get` **receiveShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.MeshInstance.receiveShadow

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12746

• `set` **receiveShadow**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.receiveShadow

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12745

___

### renderStyle

• `get` **renderStyle**(): `number`

#### Returns

`number`

#### Inherited from

pc.MeshInstance.renderStyle

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12718

• `set` **renderStyle**(`arg`): `void`

The render style of the mesh instance. Can be:

- RENDERSTYLE_SOLID
- RENDERSTYLE_WIREFRAME
- RENDERSTYLE_POINTS

Defaults to RENDERSTYLE_SOLID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.renderStyle

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12717

___

### screenSpace

• `get` **screenSpace**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.MeshInstance.screenSpace

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12762

• `set` **screenSpace**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.screenSpace

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12761

___

### skinInstance

• `get` **skinInstance**(): `SkinInstance`

#### Returns

`SkinInstance`

#### Inherited from

pc.MeshInstance.skinInstance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12753

• `set` **skinInstance**(`arg`): `void`

The skin instance managing skinning of this mesh instance, or null if skinning is not used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `SkinInstance` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.skinInstance

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12752

## Methods

### \_isVisible

▸ **_isVisible**(`camera`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | `any` |

#### Returns

`any`

#### Inherited from

pc.MeshInstance.\_isVisible

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12781

___

### \_setupSkinUpdate

▸ **_setupSkinUpdate**(): `void`

#### Returns

`void`

#### Inherited from

pc.MeshInstance.\_setupSkinUpdate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12831

___

### clearParameters

▸ **clearParameters**(): `void`

#### Returns

`void`

#### Inherited from

pc.MeshInstance.clearParameters

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12802

___

### deleteParameter

▸ **deleteParameter**(`name`): `void`

Deletes a shader parameter on a mesh instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter to delete. |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.deleteParameter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12827

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

pc.MeshInstance.destroy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12780

___

### getParameter

▸ **getParameter**(`name`): `object`

Retrieves the specified shader parameter from a mesh instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter to query. |

#### Returns

`object`

The named parameter.

#### Inherited from

pc.MeshInstance.getParameter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12810

___

### getParameters

▸ **getParameters**(): `Object`

#### Returns

`Object`

#### Inherited from

pc.MeshInstance.getParameters

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12803

___

### intersectsRay

▸ **intersectsRay**(`worldRay`, `intersects?`): `intersect`[]

检测射线与此meshInstance的交点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `worldRay` | `Ray` | 要求交的射线 |
| `intersects?` | `intersect`[] | 交点集合（不传则创建新的数组） |

#### Returns

`intersect`[]

交点集合

#### Defined in

src/extensions/meshInstance.ts:112

___

### setCustomAabb

▸ **setCustomAabb**(`aabb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aabb` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.setCustomAabb

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12830

___

### setInstancing

▸ **setInstancing**(`vertexBuffer`): `void`

Sets up MeshInstance to be rendered using Hardware Instancing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vertexBuffer` | `VertexBuffer` | Vertex buffer to hold per-instance vertex data (usually world matrices). Pass null to turn off hardware instancing. |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.setInstancing

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12789

___

### setLightmapped

▸ **setLightmapped**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.setLightmapped

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12829

___

### setParameter

▸ **setParameter**(`name`, `data`, `passFlags?`): `void`

Sets a shader parameter on a mesh instance. Note that this parameter will take precedence
over parameter of the same name if set on Material this mesh instance uses for rendering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the parameter to set. |
| `data` | `number` \| `number`[] \| `Texture` | The value for the specified parameter. |
| `passFlags?` | `number` | Mask describing which passes the material should be included in. |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.setParameter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12820

___

### setParameters

▸ **setParameters**(`device`, `passFlag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | `any` |
| `passFlag` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.setParameters

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12828

___

### setRealtimeLightmap

▸ **setRealtimeLightmap**(`name`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `texture` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.setRealtimeLightmap

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12821

___

### updateKey

▸ **updateKey**(): `void`

#### Returns

`void`

#### Inherited from

pc.MeshInstance.updateKey

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12782

___

### \_prepareRenderStyleForArray

▸ `Static` **_prepareRenderStyleForArray**(`meshInstances`, `renderStyle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `meshInstances` | `any` |
| `renderStyle` | `any` |

#### Returns

`void`

#### Inherited from

pc.MeshInstance.\_prepareRenderStyleForArray

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:12571
