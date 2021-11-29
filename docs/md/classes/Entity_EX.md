[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Entity\_EX

# Class: Entity\_EX

## Hierarchy

- `Entity`

  ↳ **`Entity_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#constructor)

### Properties

- [anim](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#anim)
- [animation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#animation)
- [audiolistener](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#audiolistener)
- [button](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#button)
- [camera](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#camera)
- [children](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#children)
- [collision](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#collision)
- [element](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#element)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#enabled)
- [forward](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#forward)
- [graphDepth](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#graphdepth)
- [layoutchild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#layoutchild)
- [layoutgroup](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#layoutgroup)
- [light](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#light)
- [model](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#model)
- [name](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#name)
- [parent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#parent)
- [particlesystem](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#particlesystem)
- [path](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#path)
- [render](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#render)
- [right](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#right)
- [rigidbody](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#rigidbody)
- [root](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#root)
- [screen](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#screen)
- [script](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#script)
- [scrollbar](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#scrollbar)
- [scrollview](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#scrollview)
- [sound](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#sound)
- [sprite](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#sprite)
- [tags](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#tags)
- [up](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#up)

### Accessors

- [changeFlag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#changeflag)
- [ignoreMeshes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#ignoremeshes)
- [meshesToRaycast](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#meshestoraycast)
- [resultNodeDepth](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#resultnodedepth)
- [useInput](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#useinput)

### Methods

- [addChild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#addchild)
- [addComponent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#addcomponent)
- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#clone)
- [destroy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#destroy)
- [find](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#find)
- [findByGuid](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findbyguid)
- [findByName](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findbyname)
- [findByPath](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findbypath)
- [findByTag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findbytag)
- [findComponent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findcomponent)
- [findComponents](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findcomponents)
- [findOne](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#findone)
- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#fire)
- [forEach](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#foreach)
- [getEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#geteulerangles)
- [getLocalEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getlocaleulerangles)
- [getLocalPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getlocalposition)
- [getLocalRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getlocalrotation)
- [getLocalScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getlocalscale)
- [getLocalTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getlocaltransform)
- [getPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getposition)
- [getRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getrotation)
- [getWorldTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#getworldtransform)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#hasevent)
- [insertChild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#insertchild)
- [isAncestorOf](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#isancestorof)
- [isDescendantOf](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#isdescendantof)
- [lookAt](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#lookat)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#on)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#once)
- [removeChild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#removechild)
- [removeComponent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#removecomponent)
- [reparent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#reparent)
- [reparentAndKeepTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#reparentandkeeptransform)
- [rotate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#rotate)
- [rotateLocal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#rotatelocal)
- [setEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#seteulerangles)
- [setLocalEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#setlocaleulerangles)
- [setLocalPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#setlocalposition)
- [setLocalRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#setlocalrotation)
- [setLocalScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#setlocalscale)
- [setPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#setposition)
- [setRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#setrotation)
- [translate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#translate)
- [translateLocal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Entity_EX.md#translatelocal)

## Constructors

### constructor

• **new Entity_EX**(`name?`, `app?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `app?` | `Application` |

#### Inherited from

pc.Entity.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5697

## Properties

### anim

• `Optional` **anim**: `AnimComponent`

Gets the {@link AnimComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.anim

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5797

___

### animation

• `Optional` **animation**: `AnimationComponent`

Gets the {@link AnimationComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.animation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5801

___

### audiolistener

• `Optional` **audiolistener**: `AudioListenerComponent`

Gets the {@link AudioListenerComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.audiolistener

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5805

___

### button

• `Optional` **button**: `ButtonComponent`

Gets the {@link ButtonComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.button

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5809

___

### camera

• `Optional` **camera**: `CameraComponent`

Gets the {@link CameraComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.camera

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5813

___

### children

• `Readonly` **children**: `GraphNode`[]

A read-only property to get the children of this graph node.

#### Inherited from

pc.Entity.children

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13690

___

### collision

• `Optional` **collision**: `CollisionComponent`

Gets the {@link CollisionComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.collision

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5817

___

### element

• `Optional` **element**: `ElementComponent`

Gets the {@link ElementComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.element

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5821

___

### enabled

• **enabled**: `boolean`

Enable or disable a GraphNode. If one of the GraphNode's parents is disabled
there will be no other side effects. If all the parents are enabled then
the new value will activate / deactivate all the enabled children of the GraphNode.

#### Inherited from

pc.Entity.enabled

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13673

___

### forward

• `Readonly` **forward**: `Vec3`

The normalized local space negative Z-axis vector of the graph node in world space.

#### Inherited from

pc.Entity.forward

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13667

___

### graphDepth

• `Readonly` **graphDepth**: `number`

A read-only property to get the depth of this child within the graph. Note that for performance reasons this is only recalculated when a node is added to a new parent, i.e. It is not recalculated when a node is simply removed from the graph.

#### Inherited from

pc.Entity.graphDepth

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13694

___

### layoutchild

• `Optional` **layoutchild**: `LayoutChildComponent`

Gets the {@link LayoutChildComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.layoutchild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5825

___

### layoutgroup

• `Optional` **layoutgroup**: `LayoutGroupComponent`

Gets the {@link LayoutGroupComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.layoutgroup

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5829

___

### light

• `Optional` **light**: `LightComponent`

Gets the {@link LightComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.light

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5833

___

### model

• `Optional` **model**: `ModelComponent`

Gets the {@link ModelComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.model

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5837

___

### name

• **name**: `string`

The non-unique name of a graph node.

#### Inherited from

pc.Entity.name

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14148

___

### parent

• `Readonly` **parent**: `GraphNode`

A read-only property to get a parent graph node.

#### Inherited from

pc.Entity.parent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13677

___

### particlesystem

• `Optional` **particlesystem**: `ParticleSystemComponent`

Gets the {@link ParticleSystemComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.particlesystem

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5841

___

### path

• `Readonly` **path**: `string`

A read-only property to get the path of the graph node relative to
the root of the hierarchy.

#### Inherited from

pc.Entity.path

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13682

___

### render

• `Optional` **render**: `RenderComponent`

Gets the {@link RenderComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.render

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5845

___

### right

• `Readonly` **right**: `Vec3`

The normalized local space X-axis vector of the graph node in world space.

#### Inherited from

pc.Entity.right

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13659

___

### rigidbody

• `Optional` **rigidbody**: `RigidBodyComponent`

Gets the {@link RigidBodyComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.rigidbody

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5849

___

### root

• `Readonly` **root**: `GraphNode`

A read-only property to get highest graph node from current node.

#### Inherited from

pc.Entity.root

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13686

___

### screen

• `Optional` **screen**: `ScreenComponent`

Gets the {@link ScreenComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.screen

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5853

___

### script

• `Optional` **script**: `ScriptComponent`

Gets the {@link ScriptComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.script

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5857

___

### scrollbar

• `Optional` **scrollbar**: `ScrollbarComponent`

Gets the {@link ScrollbarComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.scrollbar

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5861

___

### scrollview

• `Optional` **scrollview**: `ScrollViewComponent`

Gets the {@link ScrollViewComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.scrollview

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5865

___

### sound

• `Optional` **sound**: `SoundComponent`

Gets the {@link SoundComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.sound

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5869

___

### sprite

• `Optional` **sprite**: `SpriteComponent`

Gets the {@link SpriteComponent} attached to this entity. [read only]

#### Inherited from

pc.Entity.sprite

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5873

___

### tags

• **tags**: `Tags`

Interface for tagging graph nodes. Tag based searches can be performed using the {@link GraphNode#findByTag} function.

#### Inherited from

pc.Entity.tags

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14152

___

### up

• `Readonly` **up**: `Vec3`

The normalized local space Y-axis vector of the graph node in world space.

#### Inherited from

pc.Entity.up

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13663

## Accessors

### changeFlag

• `get` **changeFlag**(): `boolean`

#### Returns

`boolean`

#### Overrides

pc.Entity.changeFlag

#### Defined in

src/extensions/extendClasses/entity.ts:122

• `set` **changeFlag**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Overrides

pc.Entity.changeFlag

#### Defined in

src/extensions/extendClasses/entity.ts:118

___

### ignoreMeshes

• `get` **ignoreMeshes**(): `string`[]

#### Returns

`string`[]

#### Overrides

pc.Entity.ignoreMeshes

#### Defined in

src/extensions/extendClasses/entity.ts:103

• `set` **ignoreMeshes**(`ignoreNames`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreNames` | `string`[] |

#### Returns

`void`

#### Overrides

pc.Entity.ignoreMeshes

#### Defined in

src/extensions/extendClasses/entity.ts:91

___

### meshesToRaycast

• `get` **meshesToRaycast**(): `MeshInstance`[]

#### Returns

`MeshInstance`[]

#### Overrides

pc.Entity.meshesToRaycast

#### Defined in

src/extensions/extendClasses/entity.ts:79

___

### resultNodeDepth

• `get` **resultNodeDepth**(): `number`

#### Returns

`number`

#### Overrides

pc.Entity.resultNodeDepth

#### Defined in

src/extensions/extendClasses/entity.ts:112

• `set` **resultNodeDepth**(`depth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `depth` | `number` |

#### Returns

`void`

#### Overrides

pc.Entity.resultNodeDepth

#### Defined in

src/extensions/extendClasses/entity.ts:108

___

### useInput

• `get` **useInput**(): `boolean`

#### Returns

`boolean`

#### Overrides

pc.Entity.useInput

#### Defined in

src/extensions/extendClasses/entity.ts:64

• `set` **useInput**(`use`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `use` | `boolean` |

#### Returns

`void`

#### Overrides

pc.Entity.useInput

#### Defined in

src/extensions/extendClasses/entity.ts:68

## Methods

### addChild

▸ **addChild**(`node`): `void`

Add a new child to the child list and update the parent value of the child node.

**`example`**
var e = new pc.Entity(app);
this.entity.addChild(e);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | The new child to add. |

#### Returns

`void`

#### Inherited from

pc.Entity.addChild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14031

___

### addComponent

▸ **addComponent**(`type`, `data?`): `Component`

Create a new component and add it to the entity.
Use this to add functionality to the entity like rendering a model, playing sounds and so on.

**`example`**
var entity = new pc.Entity();

// Add a light component with default properties
entity.addComponent("light");

// Add a camera component with some specified properties
entity.addComponent("camera", {
    fov: 45,
    clearColor: new pc.Color(1, 0, 0)
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The name of the component to add. Valid strings are:  - "anim" - see {@link AnimComponent} - "animation" - see {@link AnimationComponent} - "audiolistener" - see {@link AudioListenerComponent} - "button" - see {@link ButtonComponent} - "camera" - see {@link CameraComponent} - "collision" - see {@link CollisionComponent} - "element" - see {@link ElementComponent} - "layoutchild" - see {@link LayoutChildComponent} - "layoutgroup" - see {@link LayoutGroupComponent} - "light" - see {@link LightComponent} - "model" - see {@link ModelComponent} - "particlesystem" - see {@link ParticleSystemComponent} - "render" - see {@link RenderComponent} - "rigidbody" - see {@link RigidBodyComponent} - "screen" - see {@link ScreenComponent} - "script" - see {@link ScriptComponent} - "scrollbar" - see {@link ScrollbarComponent} - "scrollview" - see {@link ScrollViewComponent} - "sound" - see {@link SoundComponent} - "sprite" - see {@link SpriteComponent} |
| `data?` | `any` | - |

#### Returns

`Component`

The new Component that was attached to the entity or null if there
was an error.

#### Inherited from

pc.Entity.addComponent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5739

___

### clone

▸ **clone**(): `Entity`

Create a deep copy of the Entity. Duplicate the full Entity hierarchy, with all Components and all descendants.
Note, this Entity is not in the hierarchy and must be added manually.

**`example`**
var e = this.entity.clone();

// Add clone as a sibling to the original
this.entity.parent.addChild(e);

#### Returns

`Entity`

A new Entity which is a deep copy of the original.

#### Inherited from

pc.Entity.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5793

___

### destroy

▸ **destroy**(): `void`

Remove all components from the Entity and detach it from the Entity hierarchy. Then recursively destroy all ancestor Entities.

**`example`**
var firstChild = this.entity.children[0];
firstChild.destroy(); // delete child, all components and remove from hierarchy

#### Returns

`void`

#### Inherited from

pc.Entity.destroy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5782

___

### find

▸ **find**(`attr`, `value?`): `GraphNode`[]

Search the graph node and all of its descendants for the nodes that satisfy some search criteria.

**`example`**
// Finds all nodes that have a model component and have `door` in their lower-cased name
var doors = house.find(function (node) {
    return node.model && node.name.toLowerCase().indexOf('door') !== -1;
});

**`example`**
// Finds all nodes that have the name property set to 'Test'
var entities = parent.find('name', 'Test');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attr` | `string` \| `FindNode` | This can either be a function or a string. If it's a function, it is executed for each descendant node to test if node satisfies the search logic. Returning true from the function will include the node into the results. If it's a string then it represents the name of a field or a method of the node. If this is the name of a field then the value passed as the second argument will be checked for equality. If this is the name of a function then the return value of the function will be checked for equality against the valued passed as the second argument to this function. |
| `value?` | `any` | - |

#### Returns

`GraphNode`[]

The array of graph nodes that match the search criteria.

#### Inherited from

pc.Entity.find

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13715

___

### findByGuid

▸ **findByGuid**(`guid`): `Entity`

Find a descendant of this Entity with the GUID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | The GUID to search for. |

#### Returns

`Entity`

The Entity with the GUID or null.

#### Inherited from

pc.Entity.findByGuid

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5775

___

### findByName

▸ **findByName**(`name`): `GraphNode`

Get the first node found in the graph with the name. The search
is depth first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the graph. |

#### Returns

`GraphNode`

The first node to be found matching the supplied name.

#### Inherited from

pc.Entity.findByName

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13764

___

### findByPath

▸ **findByPath**(`path`): `GraphNode`

Get the first node found in the graph by its full path in the graph.
The full path has this form 'parent/child/sub-child'. The search is depth first.

**`example`**
var path = this.entity.findByPath('child/another_child');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` \| `any`[] | The full path of the {@link GraphNode} as either a string or array of {@link GraphNode} names. |

#### Returns

`GraphNode`

The first node to be found matching the supplied path.

#### Inherited from

pc.Entity.findByPath

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13773

___

### findByTag

▸ **findByTag**(`query`): `GraphNode`[]

Return all graph nodes that satisfy the search query.
Query can be simply a string, or comma separated strings,
to have inclusive results of assets that match at least one query.
A query that consists of an array of tags can be used to match graph nodes that have each tag of array.

**`example`**
// Return all graph nodes that tagged by `animal`
var animals = node.findByTag("animal");

**`example`**
// Return all graph nodes that tagged by `bird` OR `mammal`
var birdsAndMammals = node.findByTag("bird", "mammal");

**`example`**
// Return all assets that tagged by `carnivore` AND `mammal`
var meatEatingMammals = node.findByTag(["carnivore", "mammal"]);

**`example`**
// Return all assets that tagged by (`carnivore` AND `mammal`) OR (`carnivore` AND `reptile`)
var meatEatingMammalsAndReptiles = node.findByTag(["carnivore", "mammal"], ["carnivore", "reptile"]);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` \| `string`[] | Name of a tag or array of tags. |

#### Returns

`GraphNode`[]

A list of all graph nodes that match the query.

#### Inherited from

pc.Entity.findByTag

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13757

___

### findComponent

▸ **findComponent**(`type`): `Component`

Search the entity and all of its descendants for the first component of specified type.

**`example`**
// Get the first found light component in the hierarchy tree that starts with this entity
var light = entity.findComponent("light");

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The name of the component type to retrieve. |

#### Returns

`Component`

A component of specified type, if the entity or any of its descendants has
one. Returns undefined otherwise.

#### Inherited from

pc.Entity.findComponent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5759

___

### findComponents

▸ **findComponents**(`type`): `Component`[]

Search the entity and all of its descendants for all components of specified type.

**`example`**
// Get all light components in the hierarchy tree that starts with this entity
var lights = entity.findComponents("light");

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The name of the component type to retrieve. |

#### Returns

`Component`[]

All components of specified type in the entity or any of its descendants.
Returns empty array if none found.

#### Inherited from

pc.Entity.findComponents

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5769

___

### findOne

▸ **findOne**(`attr`, `value?`): `GraphNode`

Search the graph node and all of its descendants for the first node that satisfies some search criteria.

**`example`**
// Find the first node that is called `head` and has a model component
var head = player.findOne(function (node) {
    return node.model && node.name === 'head';
});

**`example`**
// Finds the first node that has the name property set to 'Test'
var node = parent.findOne('name', 'Test');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attr` | `string` \| `FindNode` | This can either be a function or a string. If it's a function, it is executed for each descendant node to test if node satisfies the search logic. Returning true from the function will result in that node being returned from findOne. If it's a string then it represents the name of a field or a method of the node. If this is the name of a field then the value passed as the second argument will be checked for equality. If this is the name of a function then the return value of the function will be checked for equality against the valued passed as the second argument to this function. |
| `value?` | `any` | - |

#### Returns

`GraphNode`

A graph node that match the search criteria.

#### Inherited from

pc.Entity.findOne

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13736

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

pc.Entity.fire

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:851

___

### forEach

▸ **forEach**(`callback`, `thisArg?`): `void`

Executes a provided function once on this graph node and all of its descendants.

**`example`**
// Log the path and name of each node in descendant tree starting with "parent"
parent.forEach(function (node) {
    console.log(node.path + "/" + node.name);
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `ForEach` | The function to execute on the graph node and each descendant. |
| `thisArg?` | `any` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.forEach

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13784

___

### getEulerAngles

▸ **getEulerAngles**(): `Vec3`

Get the world space rotation for the specified GraphNode in Euler angle
form. The rotation is returned as euler angles in a {@link Vec3}. The value returned by this function
should be considered read-only. In order to set the world-space rotation of the graph
node, use {@link GraphNode#setEulerAngles}.

**`example`**
var angles = this.entity.getEulerAngles();
angles.y = 180; // rotate the entity around Y by 180 degrees
this.entity.setEulerAngles(angles);

#### Returns

`Vec3`

The world space rotation of the graph node in Euler angle form.

#### Inherited from

pc.Entity.getEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13816

___

### getLocalEulerAngles

▸ **getLocalEulerAngles**(): `Vec3`

Get the rotation in local space for the specified GraphNode. The rotation
is returned as euler angles in a {@link Vec3}. The
returned vector should be considered read-only. To update the local rotation, use
{@link GraphNode#setLocalEulerAngles}.

**`example`**
var angles = this.entity.getLocalEulerAngles();
angles.y = 180;
this.entity.setLocalEulerAngles(angles);

#### Returns

`Vec3`

The local space rotation of the graph node as euler angles in XYZ order.

#### Inherited from

pc.Entity.getLocalEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13828

___

### getLocalPosition

▸ **getLocalPosition**(): `Vec3`

Get the position in local space for the specified GraphNode. The position
is returned as a {@link Vec3}. The returned vector should be considered read-only.
To update the local position, use {@link GraphNode#setLocalPosition}.

**`example`**
var position = this.entity.getLocalPosition();
position.x += 1; // move the entity 1 unit along x.
this.entity.setLocalPosition(position);

#### Returns

`Vec3`

The local space position of the graph node.

#### Inherited from

pc.Entity.getLocalPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13839

___

### getLocalRotation

▸ **getLocalRotation**(): `Quat`

Get the rotation in local space for the specified GraphNode. The rotation
is returned as a {@link Quat}. The returned quaternion should be considered read-only.
To update the local rotation, use {@link GraphNode#setLocalRotation}.

**`example`**
var rotation = this.entity.getLocalRotation();

#### Returns

`Quat`

The local space rotation of the graph node as a quaternion.

#### Inherited from

pc.Entity.getLocalRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13848

___

### getLocalScale

▸ **getLocalScale**(): `Vec3`

Get the scale in local space for the specified GraphNode. The scale
is returned as a {@link Vec3}. The returned vector should be considered read-only.
To update the local scale, use {@link GraphNode#setLocalScale}.

**`example`**
var scale = this.entity.getLocalScale();
scale.x = 100;
this.entity.setLocalScale(scale);

#### Returns

`Vec3`

The local space scale of the graph node.

#### Inherited from

pc.Entity.getLocalScale

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13859

___

### getLocalTransform

▸ **getLocalTransform**(): `Mat4`

Get the local transform matrix for this graph node. This matrix
is the transform relative to the node's parent's world transformation matrix.

**`example`**
var transform = this.entity.getLocalTransform();

#### Returns

`Mat4`

The node's local transformation matrix.

#### Inherited from

pc.Entity.getLocalTransform

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13867

___

### getPosition

▸ **getPosition**(): `Vec3`

Get the world space position for the specified GraphNode. The position
is returned as a {@link Vec3}. The value returned by this function should be considered read-only.
In order to set the world-space position of the graph node, use {@link GraphNode#setPosition}.

**`example`**
var position = this.entity.getPosition();
position.x = 10;
this.entity.setPosition(position);

#### Returns

`Vec3`

The world space position of the graph node.

#### Inherited from

pc.Entity.getPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13878

___

### getRotation

▸ **getRotation**(): `Quat`

Get the world space rotation for the specified GraphNode. The rotation
is returned as a {@link Quat}. The value returned by this function should be considered read-only. In order
to set the world-space rotation of the graph node, use {@link GraphNode#setRotation}.

**`example`**
var rotation = this.entity.getRotation();

#### Returns

`Quat`

The world space rotation of the graph node as a quaternion.

#### Inherited from

pc.Entity.getRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13887

___

### getWorldTransform

▸ **getWorldTransform**(): `Mat4`

Get the world transformation matrix for this graph node.

**`example`**
var transform = this.entity.getWorldTransform();

#### Returns

`Mat4`

The node's world transformation matrix.

#### Inherited from

pc.Entity.getWorldTransform

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13894

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

pc.Entity.hasEvent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:875

___

### insertChild

▸ **insertChild**(`node`, `index`): `void`

Insert a new child to the child list at the specified index and update the parent value of the child node.

**`example`**
var e = new pc.Entity(app);
this.entity.insertChild(e, 1);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | The new child to insert. |
| `index` | `number` | The index in the child list of the parent where the new node will be inserted. |

#### Returns

`void`

#### Inherited from

pc.Entity.insertChild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14040

___

### isAncestorOf

▸ **isAncestorOf**(`node`): `boolean`

Check if node is ancestor for another node.

**`example`**
if (body.isAncestorOf(foot)) {
    // foot is within body's hierarchy
}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | Potential descendant of node. |

#### Returns

`boolean`

If node is ancestor for another node.

#### Inherited from

pc.Entity.isAncestorOf

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13804

___

### isDescendantOf

▸ **isDescendantOf**(`node`): `boolean`

Check if node is descendant of another node.

**`example`**
if (roof.isDescendantOf(house)) {
    // roof is descendant of house entity
}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | Potential ancestor of node. |

#### Returns

`boolean`

If node is descendant of another node.

#### Inherited from

pc.Entity.isDescendantOf

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13794

___

### lookAt

▸ **lookAt**(`x`, `y?`, `z?`, `ux?`, `uy?`, `uz?`): `void`

Reorients the graph node so that the negative z-axis points towards the target.
This function has two valid signatures. Either pass 3D vectors for the look at coordinate and up
vector, or pass numbers to represent the vectors.

**`example`**
// Look at another entity, using the (default) positive y-axis for up
var position = otherEntity.getPosition();
this.entity.lookAt(position);

**`example`**
// Look at another entity, using the negative world y-axis for up
var position = otherEntity.getPosition();
this.entity.lookAt(position, pc.Vec3.DOWN);

**`example`**
// Look at the world space origin, using the (default) positive y-axis for up
this.entity.lookAt(0, 0, 0);

**`example`**
// Look at world-space coordinate [10, 10, 10], using the negative world y-axis for up
this.entity.lookAt(10, 10, 10, 0, -1, 0);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | If passing a 3D vector, this is the world-space coordinate to look at. Otherwise, it is the x-component of the world-space coordinate to look at. |
| `y?` | `number` \| `Vec3` | - |
| `z?` | `number` | - |
| `ux?` | `number` | - |
| `uy?` | `number` | - |
| `uz?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.lookAt

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14076

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

pc.Entity.off

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

pc.Entity.on

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

pc.Entity.once

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:865

___

### removeChild

▸ **removeChild**(`child`): `void`

Remove the node from the child list and update the parent value of the child.

**`example`**
var child = this.entity.children[0];
this.entity.removeChild(child);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `GraphNode` | The node to remove. |

#### Returns

`void`

#### Inherited from

pc.Entity.removeChild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14048

___

### removeComponent

▸ **removeComponent**(`type`): `void`

Remove a component from the Entity.

**`example`**
var entity = new pc.Entity();
entity.addComponent("light"); // add new light component

entity.removeComponent("light"); // remove light component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The name of the Component type. |

#### Returns

`void`

#### Inherited from

pc.Entity.removeComponent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5749

___

### reparent

▸ **reparent**(`parent`, `index?`): `void`

Remove graph node from current parent and add as child to new parent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `GraphNode` | New parent to attach graph node to. |
| `index?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.reparent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13900

___

### reparentAndKeepTransform

▸ **reparentAndKeepTransform**(`parent`): `void`

**`description:`** 改变父节点并保持物体的transform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `Entity` | 父节点 |

#### Returns

`void`

#### Overrides

pc.Entity.reparentAndKeepTransform

#### Defined in

src/extensions/extendClasses/entity.ts:131

___

### rotate

▸ **rotate**(`x`, `y?`, `z?`): `void`

Rotates the graph node in world-space by the specified Euler angles.
Eulers are specified in degrees in XYZ order. This function has two valid signatures:
you can either pass a 3D vector or 3 numbers to specify the world-space rotation.

**`example`**
// Rotate via 3 numbers
this.entity.rotate(0, 90, 0);

**`example`**
// Rotate via vector
var r = new pc.Vec3(0, 90, 0);
this.entity.rotate(r);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding world-space rotation or rotation around world-space x-axis in degrees. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.rotate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14127

___

### rotateLocal

▸ **rotateLocal**(`x`, `y?`, `z?`): `void`

Rotates the graph node in local-space by the specified Euler angles.
Eulers are specified in degrees in XYZ order. This function has two valid signatures:
you can either pass a 3D vector or 3 numbers to specify the local-space rotation.

**`example`**
// Rotate via 3 numbers
this.entity.rotateLocal(0, 90, 0);

**`example`**
// Rotate via vector
var r = new pc.Vec3(0, 90, 0);
this.entity.rotateLocal(r);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space rotation or rotation around local-space x-axis in degrees. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.rotateLocal

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14144

___

### setEulerAngles

▸ **setEulerAngles**(`x`, `y?`, `z?`): `void`

Sets the world-space rotation of the specified graph node using euler angles.
Eulers are interpreted in XYZ order. Eulers must be specified in degrees. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
world-space euler rotation.

**`example`**
// Set rotation of 90 degrees around world-space y-axis via 3 numbers
this.entity.setEulerAngles(0, 90, 0);

**`example`**
// Set rotation of 90 degrees around world-space y-axis via a vector
var angles = new pc.Vec3(0, 90, 0);
this.entity.setEulerAngles(angles);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding eulers or rotation around world-space x-axis in degrees. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14023

___

### setLocalEulerAngles

▸ **setLocalEulerAngles**(`x`, `y?`, `z?`): `void`

Sets the local-space rotation of the specified graph node using euler angles.
Eulers are interpreted in XYZ order. Eulers must be specified in degrees. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
local-space euler rotation.

**`example`**
// Set rotation of 90 degrees around y-axis via 3 numbers
this.entity.setLocalEulerAngles(0, 90, 0);

**`example`**
// Set rotation of 90 degrees around y-axis via a vector
var angles = new pc.Vec3(0, 90, 0);
this.entity.setLocalEulerAngles(angles);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding eulers or rotation around local-space x-axis in degrees. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setLocalEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13918

___

### setLocalPosition

▸ **setLocalPosition**(`x`, `y?`, `z?`): `void`

Sets the local-space position of the specified graph node. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
local-space position.

**`example`**
// Set via 3 numbers
this.entity.setLocalPosition(0, 10, 0);

**`example`**
// Set via vector
var pos = new pc.Vec3(0, 10, 0);
this.entity.setLocalPosition(pos);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space position or x-coordinate of local-space position. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setLocalPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13935

___

### setLocalRotation

▸ **setLocalRotation**(`x`, `y?`, `z?`, `w?`): `void`

Sets the local-space rotation of the specified graph node. This function
has two valid signatures: you can either pass a quaternion or 3 numbers to specify the
local-space rotation.

**`example`**
// Set via 4 numbers
this.entity.setLocalRotation(0, 0, 0, 1);

**`example`**
// Set via quaternion
var q = pc.Quat();
this.entity.setLocalRotation(q);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Quat` | Quaternion holding local-space rotation or x-component of local-space quaternion rotation. |
| `y?` | `number` | - |
| `z?` | `number` | - |
| `w?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setLocalRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13953

___

### setLocalScale

▸ **setLocalScale**(`x`, `y?`, `z?`): `void`

Sets the local-space scale factor of the specified graph node. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
local-space scale.

**`example`**
// Set via 3 numbers
this.entity.setLocalScale(10, 10, 10);

**`example`**
// Set via vector
var scale = new pc.Vec3(10, 10, 10);
this.entity.setLocalScale(scale);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space scale or x-coordinate of local-space scale. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setLocalScale

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13970

___

### setPosition

▸ **setPosition**(`x`, `y?`, `z?`): `void`

Sets the world-space position of the specified graph node. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
world-space position.

**`example`**
// Set via 3 numbers
this.entity.setPosition(0, 10, 0);

**`example`**
// Set via vector
var position = new pc.Vec3(0, 10, 0);
this.entity.setPosition(position);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding world-space position or x-coordinate of world-space position. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:13987

___

### setRotation

▸ **setRotation**(`x`, `y?`, `z?`, `w?`): `void`

Sets the world-space rotation of the specified graph node. This function
has two valid signatures: you can either pass a quaternion or 3 numbers to specify the
world-space rotation.

**`example`**
// Set via 4 numbers
this.entity.setRotation(0, 0, 0, 1);

**`example`**
// Set via quaternion
var q = pc.Quat();
this.entity.setRotation(q);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Quat` | Quaternion holding world-space rotation or x-component of world-space quaternion rotation. |
| `y?` | `number` | - |
| `z?` | `number` | - |
| `w?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.setRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14005

___

### translate

▸ **translate**(`x`, `y?`, `z?`): `void`

Translates the graph node in world-space by the specified translation vector.
This function has two valid signatures: you can either pass a 3D vector or 3 numbers to
specify the world-space translation.

**`example`**
// Translate via 3 numbers
this.entity.translate(10, 0, 0);

**`example`**
// Translate via vector
var t = new pc.Vec3(10, 0, 0);
this.entity.translate(t);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding world-space translation or x-coordinate of world-space translation. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.translate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14093

___

### translateLocal

▸ **translateLocal**(`x`, `y?`, `z?`): `void`

Translates the graph node in local-space by the specified translation vector.
This function has two valid signatures: you can either pass a 3D vector or 3 numbers to
specify the local-space translation.

**`example`**
// Translate via 3 numbers
this.entity.translateLocal(10, 0, 0);

**`example`**
// Translate via vector
var t = new pc.Vec3(10, 0, 0);
this.entity.translateLocal(t);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space translation or x-coordinate of local-space translation. |
| `y?` | `number` | - |
| `z?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Entity.translateLocal

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:14110