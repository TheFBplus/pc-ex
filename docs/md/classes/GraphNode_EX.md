[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / GraphNode\_EX

# Class: GraphNode\_EX

## Hierarchy

- `GraphNode`

  ↳ **`GraphNode_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#constructor)

### Properties

- [name](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#name)
- [tags](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#tags)

### Accessors

- [children](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#children)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#enabled)
- [forward](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#forward)
- [graphDepth](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#graphdepth)
- [parent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#parent)
- [path](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#path)
- [right](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#right)
- [root](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#root)
- [up](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#up)

### Methods

- [\_sync](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#_sync)
- [addChild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#addchild)
- [clone](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#clone)
- [find](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#find)
- [findByName](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#findbyname)
- [findByPath](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#findbypath)
- [findByTag](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#findbytag)
- [findOne](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#findone)
- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#fire)
- [forEach](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#foreach)
- [getEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#geteulerangles)
- [getLocalEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getlocaleulerangles)
- [getLocalPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getlocalposition)
- [getLocalRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getlocalrotation)
- [getLocalScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getlocalscale)
- [getLocalTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getlocaltransform)
- [getPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getposition)
- [getRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getrotation)
- [getWorldTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#getworldtransform)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#hasevent)
- [insertChild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#insertchild)
- [isAncestorOf](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#isancestorof)
- [isDescendantOf](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#isdescendantof)
- [lookAt](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#lookat)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#on)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#once)
- [removeChild](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#removechild)
- [reparent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#reparent)
- [reparentAndKeepTransform](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#reparentandkeeptransform)
- [rotate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#rotate)
- [rotateLocal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#rotatelocal)
- [setEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#seteulerangles)
- [setLocalEulerAngles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#setlocaleulerangles)
- [setLocalPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#setlocalposition)
- [setLocalRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#setlocalrotation)
- [setLocalScale](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#setlocalscale)
- [setPosition](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#setposition)
- [setRotation](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#setrotation)
- [translate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#translate)
- [translateLocal](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md#translatelocal)

## Constructors

### constructor

• **new GraphNode_EX**(`name?`)

Create a new GraphNode instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | The non-unique name of a graph node. Defaults to 'Untitled'. |

#### Inherited from

pc.GraphNode.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8956

## Properties

### name

• **name**: `string`

The non-unique name of a graph node. Defaults to 'Untitled'.

#### Inherited from

pc.GraphNode.name

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8962

___

### tags

• **tags**: `Tags`

Interface for tagging graph nodes. Tag based searches can be performed using the
GraphNode#findByTag function.

#### Inherited from

pc.GraphNode.tags

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:8969

## Accessors

### children

• `get` **children**(): `GraphNode`[]

A read-only property to get the children of this graph node.

#### Returns

`GraphNode`[]

#### Inherited from

pc.GraphNode.children

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9157

___

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.GraphNode.enabled

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9133

• `set` **enabled**(`arg`): `void`

Enable or disable a GraphNode. If one of the GraphNode's parents is disabled there will be
no other side effects. If all the parents are enabled then the new value will activate or
deactivate all the enabled children of the GraphNode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.GraphNode.enabled

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9132

___

### forward

• `get` **forward**(): `Vec3`

The normalized local space negative Z-axis vector of the graph node in world space.

#### Returns

`Vec3`

#### Inherited from

pc.GraphNode.forward

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9124

___

### graphDepth

• `get` **graphDepth**(): `number`

A read-only property to get the depth of this child within the graph. Note that for
performance reasons this is only recalculated when a node is added to a new parent, i.e. It
is not recalculated when a node is simply removed from the graph.

#### Returns

`number`

#### Inherited from

pc.GraphNode.graphDepth

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9165

___

### parent

• `get` **parent**(): `GraphNode`

A read-only property to get a parent graph node.

#### Returns

`GraphNode`

#### Inherited from

pc.GraphNode.parent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9139

___

### path

• `get` **path**(): `string`

A read-only property to get the path of the graph node relative to the root of the hierarchy.

#### Returns

`string`

#### Inherited from

pc.GraphNode.path

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9145

___

### right

• `get` **right**(): `Vec3`

The normalized local space X-axis vector of the graph node in world space.

#### Returns

`Vec3`

#### Inherited from

pc.GraphNode.right

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9112

___

### root

• `get` **root**(): `GraphNode`

A read-only property to get highest graph node from current node.

#### Returns

`GraphNode`

#### Inherited from

pc.GraphNode.root

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9151

___

### up

• `get` **up**(): `Vec3`

The normalized local space Y-axis vector of the graph node in world space.

#### Returns

`Vec3`

#### Inherited from

pc.GraphNode.up

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9118

## Methods

### \_sync

▸ **_sync**(): `void`

#### Returns

`void`

#### Inherited from

pc.GraphNode.\_sync

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9656

___

### addChild

▸ **addChild**(`node`): `void`

Add a new child to the child list and update the parent value of the child node.
If the node already had a parent, it is removed from its child list.

**`Example`**

```ts
var e = new pc.Entity(app);
this.entity.addChild(e);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | The new child to add. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.addChild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9593

___

### clone

▸ **clone**(): [`GraphNode_EX`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md)

Clone a graph node.

#### Returns

[`GraphNode_EX`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/GraphNode_EX.md)

A clone of the specified graph node.

#### Inherited from

pc.GraphNode.clone

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9189

___

### find

▸ **find**(`attr`, `value?`): `GraphNode`[]

Search the graph node and all of its descendants for the nodes that satisfy some search
criteria.

**`Example`**

// Finds all nodes that have a model component and have `door` in their lower-cased name
var doors = house.find(function (node) {
    return node.model && node.name.toLowerCase().indexOf('door') !== -1;
});

**`Example`**

```ts
// Finds all nodes that have the name property set to 'Test'
var entities = parent.find('name', 'Test');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attr` | `string` \| `FindNodeCallback` | This can either be a function or a string. If it's a function, it is executed for each descendant node to test if node satisfies the search logic. Returning true from the function will include the node into the results. If it's a string then it represents the name of a field or a method of the node. If this is the name of a field then the value passed as the second argument will be checked for equality. If this is the name of a function then the return value of the function will be checked for equality against the valued passed as the second argument to this function. |
| `value?` | `object` | If the first argument (attr) is a property name then this value will be checked against the value of the property. |

#### Returns

`GraphNode`[]

The array of graph nodes that match the search criteria.

#### Inherited from

pc.GraphNode.find

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9221

___

### findByName

▸ **findByName**(`name`): `GraphNode`

Get the first node found in the graph with the name. The search is depth first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the graph. |

#### Returns

`GraphNode`

The first node to be found matching the supplied name. Returns
null if no node is found.

#### Inherited from

pc.GraphNode.findByName

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9276

___

### findByPath

▸ **findByPath**(`path`): `GraphNode`

Get the first node found in the graph by its full path in the graph. The full path has this
form 'parent/child/sub-child'. The search is depth first.

**`Example`**

```ts
// String form
var grandchild = this.entity.findByPath('child/grandchild');
```

**`Example`**

```ts
// Array form
var grandchild = this.entity.findByPath(['child', 'grandchild']);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` \| `string`[] | The full path of the GraphNode as either a string or array of GraphNode names. |

#### Returns

`GraphNode`

The first node to be found matching the supplied path. Returns
null if no node is found.

#### Inherited from

pc.GraphNode.findByPath

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9292

___

### findByTag

▸ **findByTag**(...`args`): `GraphNode`[]

Return all graph nodes that satisfy the search query. Query can be simply a string, or comma
separated strings, to have inclusive results of assets that match at least one query. A
query that consists of an array of tags can be used to match graph nodes that have each tag
of array.

**`Example`**

// Return all graph nodes that tagged by `animal`
var animals = node.findByTag("animal");

**`Example`**

// Return all graph nodes that tagged by `bird` OR `mammal`
var birdsAndMammals = node.findByTag("bird", "mammal");

**`Example`**

// Return all assets that tagged by `carnivore` AND `mammal`
var meatEatingMammals = node.findByTag(["carnivore", "mammal"]);

**`Example`**

// Return all assets that tagged by (`carnivore` AND `mammal`) OR (`carnivore` AND `reptile`)
var meatEatingMammalsAndReptiles = node.findByTag(["carnivore", "mammal"], ["carnivore", "reptile"]);

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`GraphNode`[]

A list of all graph nodes that match the query.

#### Inherited from

pc.GraphNode.findByTag

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9268

___

### findOne

▸ **findOne**(`attr`, `value?`): `GraphNode`

Search the graph node and all of its descendants for the first node that satisfies some
search criteria.

**`Example`**

// Find the first node that is called `head` and has a model component
var head = player.findOne(function (node) {
    return node.model && node.name === 'head';
});

**`Example`**

```ts
// Finds the first node that has the name property set to 'Test'
var node = parent.findOne('name', 'Test');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attr` | `string` \| `FindNodeCallback` | This can either be a function or a string. If it's a function, it is executed for each descendant node to test if node satisfies the search logic. Returning true from the function will result in that node being returned from findOne. If it's a string then it represents the name of a field or a method of the node. If this is the name of a field then the value passed as the second argument will be checked for equality. If this is the name of a function then the return value of the function will be checked for equality against the valued passed as the second argument to this function. |
| `value?` | `object` | If the first argument (attr) is a property name then this value will be checked against the value of the property. |

#### Returns

`GraphNode`

A graph node that match the search criteria. Returns null if no
node is found.

#### Inherited from

pc.GraphNode.findOne

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9246

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

pc.GraphNode.fire

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5443

___

### forEach

▸ **forEach**(`callback`, `thisArg?`): `void`

Executes a provided function once on this graph node and all of its descendants.

**`Example`**

```ts
// Log the path and name of each node in descendant tree starting with "parent"
parent.forEach(function (node) {
    console.log(node.path + "/" + node.name);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `ForEachNodeCallback` | The function to execute on the graph node and each descendant. |
| `thisArg?` | `object` | Optional value to use as this when executing callback function. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.forEach

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9305

___

### getEulerAngles

▸ **getEulerAngles**(): `Vec3`

Get the world space rotation for the specified GraphNode in Euler angle form. The rotation
is returned as euler angles in a Vec3. The value returned by this function should be
considered read-only. In order to set the world-space rotation of the graph node, use
GraphNode#setEulerAngles.

**`Example`**

```ts
var angles = this.entity.getEulerAngles();
angles.y = 180; // rotate the entity around Y by 180 degrees
this.entity.setEulerAngles(angles);
```

#### Returns

`Vec3`

The world space rotation of the graph node in Euler angle form.

#### Inherited from

pc.GraphNode.getEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9340

___

### getLocalEulerAngles

▸ **getLocalEulerAngles**(): `Vec3`

Get the rotation in local space for the specified GraphNode. The rotation is returned as
euler angles in a Vec3. The returned vector should be considered read-only. To
update the local rotation, use GraphNode#setLocalEulerAngles.

**`Example`**

```ts
var angles = this.entity.getLocalEulerAngles();
angles.y = 180;
this.entity.setLocalEulerAngles(angles);
```

#### Returns

`Vec3`

The local space rotation of the graph node as euler angles in XYZ order.

#### Inherited from

pc.GraphNode.getLocalEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9352

___

### getLocalPosition

▸ **getLocalPosition**(): `Vec3`

Get the position in local space for the specified GraphNode. The position is returned as a
Vec3. The returned vector should be considered read-only. To update the local
position, use GraphNode#setLocalPosition.

**`Example`**

```ts
var position = this.entity.getLocalPosition();
position.x += 1; // move the entity 1 unit along x.
this.entity.setLocalPosition(position);
```

#### Returns

`Vec3`

The local space position of the graph node.

#### Inherited from

pc.GraphNode.getLocalPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9364

___

### getLocalRotation

▸ **getLocalRotation**(): `Quat`

Get the rotation in local space for the specified GraphNode. The rotation is returned as a
Quat. The returned quaternion should be considered read-only. To update the local
rotation, use GraphNode#setLocalRotation.

**`Example`**

```ts
var rotation = this.entity.getLocalRotation();
```

#### Returns

`Quat`

The local space rotation of the graph node as a quaternion.

#### Inherited from

pc.GraphNode.getLocalRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9374

___

### getLocalScale

▸ **getLocalScale**(): `Vec3`

Get the scale in local space for the specified GraphNode. The scale is returned as a
Vec3. The returned vector should be considered read-only. To update the local scale,
use GraphNode#setLocalScale.

**`Example`**

```ts
var scale = this.entity.getLocalScale();
scale.x = 100;
this.entity.setLocalScale(scale);
```

#### Returns

`Vec3`

The local space scale of the graph node.

#### Inherited from

pc.GraphNode.getLocalScale

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9386

___

### getLocalTransform

▸ **getLocalTransform**(): `Mat4`

Get the local transform matrix for this graph node. This matrix is the transform relative to
the node's parent's world transformation matrix.

**`Example`**

```ts
var transform = this.entity.getLocalTransform();
```

#### Returns

`Mat4`

The node's local transformation matrix.

#### Inherited from

pc.GraphNode.getLocalTransform

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9395

___

### getPosition

▸ **getPosition**(): `Vec3`

Get the world space position for the specified GraphNode. The position is returned as a
Vec3. The value returned by this function should be considered read-only. In order
to set the world-space position of the graph node, use GraphNode#setPosition.

**`Example`**

```ts
var position = this.entity.getPosition();
position.x = 10;
this.entity.setPosition(position);
```

#### Returns

`Vec3`

The world space position of the graph node.

#### Inherited from

pc.GraphNode.getPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9407

___

### getRotation

▸ **getRotation**(): `Quat`

Get the world space rotation for the specified GraphNode. The rotation is returned as a
Quat. The value returned by this function should be considered read-only. In order
to set the world-space rotation of the graph node, use GraphNode#setRotation.

**`Example`**

```ts
var rotation = this.entity.getRotation();
```

#### Returns

`Quat`

The world space rotation of the graph node as a quaternion.

#### Inherited from

pc.GraphNode.getRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9417

___

### getWorldTransform

▸ **getWorldTransform**(): `Mat4`

Get the world transformation matrix for this graph node.

**`Example`**

```ts
var transform = this.entity.getWorldTransform();
```

#### Returns

`Mat4`

The node's world transformation matrix.

#### Inherited from

pc.GraphNode.getWorldTransform

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9439

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

pc.GraphNode.hasEvent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5471

___

### insertChild

▸ **insertChild**(`node`, `index`): `void`

Insert a new child to the child list at the specified index and update the parent value of
the child node. If the node already had a parent, it is removed from its child list.

**`Example`**

```ts
var e = new pc.Entity(app);
this.entity.insertChild(e, 1);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | The new child to insert. |
| `index` | `number` | The index in the child list of the parent where the new node will be inserted. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.insertChild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9616

___

### isAncestorOf

▸ **isAncestorOf**(`node`): `boolean`

Check if node is ancestor for another node.

**`Example`**

```ts
if (body.isAncestorOf(foot)) {
    // foot is within body's hierarchy
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | Potential descendant of node. |

#### Returns

`boolean`

If node is ancestor for another node.

#### Inherited from

pc.GraphNode.isAncestorOf

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9327

___

### isDescendantOf

▸ **isDescendantOf**(`node`): `boolean`

Check if node is descendant of another node.

**`Example`**

```ts
if (roof.isDescendantOf(house)) {
    // roof is descendant of house entity
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `GraphNode` | Potential ancestor of node. |

#### Returns

`boolean`

If node is descendant of another node.

#### Inherited from

pc.GraphNode.isDescendantOf

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9316

___

### lookAt

▸ **lookAt**(`x`, `y?`, `z?`, `ux?`, `uy?`, `uz?`): `void`

Reorients the graph node so that the negative z-axis points towards the target. This
function has two valid signatures. Either pass 3D vectors for the look at coordinate and up
vector, or pass numbers to represent the vectors.

**`Example`**

```ts
// Look at another entity, using the (default) positive y-axis for up
var position = otherEntity.getPosition();
this.entity.lookAt(position);
```

**`Example`**

```ts
// Look at another entity, using the negative world y-axis for up
var position = otherEntity.getPosition();
this.entity.lookAt(position, pc.Vec3.DOWN);
```

**`Example`**

```ts
// Look at the world space origin, using the (default) positive y-axis for up
this.entity.lookAt(0, 0, 0);
```

**`Example`**

```ts
// Look at world-space coordinate [10, 10, 10], using the negative world y-axis for up
this.entity.lookAt(10, 10, 10, 0, -1, 0);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | If passing a 3D vector, this is the world-space coordinate to look at. Otherwise, it is the x-component of the world-space coordinate to look at. |
| `y?` | `number` \| `Vec3` | If passing a 3D vector, this is the world-space up vector for look at transform. Otherwise, it is the y-component of the world-space coordinate to look at. |
| `z?` | `number` | Z-component of the world-space coordinate to look at. |
| `ux?` | `number` | X-component of the up vector for the look at transform. |
| `uy?` | `number` | Y-component of the up vector for the look at transform. |
| `uz?` | `number` | Z-component of the up vector for the look at transform. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.lookAt

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9691

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

pc.GraphNode.off

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5426

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

pc.GraphNode.on

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5406

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

pc.GraphNode.once

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5460

___

### removeChild

▸ **removeChild**(`child`): `void`

Remove the node from the child list and update the parent value of the child.

**`Example`**

```ts
var child = this.entity.children[0];
this.entity.removeChild(child);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | `GraphNode` | The node to remove. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.removeChild

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9655

___

### reparent

▸ **reparent**(`parent`, `index?`): `void`

Remove graph node from current parent and add as child to new parent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `GraphNode` | New parent to attach graph node to. |
| `index?` | `number` | The child index where the child node should be placed. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.reparent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9446

___

### reparentAndKeepTransform

▸ **reparentAndKeepTransform**(`parent`): `void`

改变父节点并保持物体的transform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `GraphNode` | 父节点 |

#### Returns

`void`

#### Defined in

src/extensions/graphNode.ts:22

___

### rotate

▸ **rotate**(`x`, `y?`, `z?`): `void`

Rotates the graph node in world-space by the specified Euler angles. Eulers are specified in
degrees in XYZ order. This function has two valid signatures: you can either pass a 3D
vector or 3 numbers to specify the world-space rotation.

**`Example`**

```ts
// Rotate via 3 numbers
this.entity.rotate(0, 90, 0);
```

**`Example`**

```ts
// Rotate via vector
var r = new pc.Vec3(0, 90, 0);
this.entity.rotate(r);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding world-space rotation or rotation around world-space x-axis in degrees. |
| `y?` | `number` | Rotation around world-space y-axis in degrees. |
| `z?` | `number` | Rotation around world-space z-axis in degrees. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.rotate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9745

___

### rotateLocal

▸ **rotateLocal**(`x`, `y?`, `z?`): `void`

Rotates the graph node in local-space by the specified Euler angles. Eulers are specified in
degrees in XYZ order. This function has two valid signatures: you can either pass a 3D
vector or 3 numbers to specify the local-space rotation.

**`Example`**

```ts
// Rotate via 3 numbers
this.entity.rotateLocal(0, 90, 0);
```

**`Example`**

```ts
// Rotate via vector
var r = new pc.Vec3(0, 90, 0);
this.entity.rotateLocal(r);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space rotation or rotation around local-space x-axis in degrees. |
| `y?` | `number` | Rotation around local-space y-axis in degrees. |
| `z?` | `number` | Rotation around local-space z-axis in degrees. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.rotateLocal

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9763

___

### setEulerAngles

▸ **setEulerAngles**(`x`, `y?`, `z?`): `void`

Sets the world-space rotation of the specified graph node using euler angles. Eulers are
interpreted in XYZ order. Eulers must be specified in degrees. This function has two valid
signatures: you can either pass a 3D vector or 3 numbers to specify the world-space euler
rotation.

**`Example`**

```ts
// Set rotation of 90 degrees around world-space y-axis via 3 numbers
this.entity.setEulerAngles(0, 90, 0);
```

**`Example`**

```ts
// Set rotation of 90 degrees around world-space y-axis via a vector
var angles = new pc.Vec3(0, 90, 0);
this.entity.setEulerAngles(angles);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding eulers or rotation around world-space x-axis in degrees. |
| `y?` | `number` | Rotation around world-space y-axis in degrees. |
| `z?` | `number` | Rotation around world-space z-axis in degrees. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9583

___

### setLocalEulerAngles

▸ **setLocalEulerAngles**(`x`, `y?`, `z?`): `void`

Sets the local-space rotation of the specified graph node using euler angles. Eulers are
interpreted in XYZ order. Eulers must be specified in degrees. This function has two valid
signatures: you can either pass a 3D vector or 3 numbers to specify the local-space euler
rotation.

**`Example`**

```ts
// Set rotation of 90 degrees around y-axis via 3 numbers
this.entity.setLocalEulerAngles(0, 90, 0);
```

**`Example`**

```ts
// Set rotation of 90 degrees around y-axis via a vector
var angles = new pc.Vec3(0, 90, 0);
this.entity.setLocalEulerAngles(angles);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding eulers or rotation around local-space x-axis in degrees. |
| `y?` | `number` | Rotation around local-space y-axis in degrees. |
| `z?` | `number` | Rotation around local-space z-axis in degrees. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setLocalEulerAngles

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9465

___

### setLocalPosition

▸ **setLocalPosition**(`x`, `y?`, `z?`): `void`

Sets the local-space position of the specified graph node. This function has two valid
signatures: you can either pass a 3D vector or 3 numbers to specify the local-space
position.

**`Example`**

```ts
// Set via 3 numbers
this.entity.setLocalPosition(0, 10, 0);
```

**`Example`**

```ts
// Set via vector
var pos = new pc.Vec3(0, 10, 0);
this.entity.setLocalPosition(pos);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space position or x-coordinate of local-space position. |
| `y?` | `number` | Y-coordinate of local-space position. |
| `z?` | `number` | Z-coordinate of local-space position. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setLocalPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9483

___

### setLocalRotation

▸ **setLocalRotation**(`x`, `y?`, `z?`, `w?`): `void`

Sets the local-space rotation of the specified graph node. This function has two valid
signatures: you can either pass a quaternion or 3 numbers to specify the local-space
rotation.

**`Example`**

```ts
// Set via 4 numbers
this.entity.setLocalRotation(0, 0, 0, 1);
```

**`Example`**

```ts
// Set via quaternion
var q = pc.Quat();
this.entity.setLocalRotation(q);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Quat` | Quaternion holding local-space rotation or x-component of local-space quaternion rotation. |
| `y?` | `number` | Y-component of local-space quaternion rotation. |
| `z?` | `number` | Z-component of local-space quaternion rotation. |
| `w?` | `number` | W-component of local-space quaternion rotation. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setLocalRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9502

___

### setLocalScale

▸ **setLocalScale**(`x`, `y?`, `z?`): `void`

Sets the local-space scale factor of the specified graph node. This function has two valid
signatures: you can either pass a 3D vector or 3 numbers to specify the local-space scale.

**`Example`**

```ts
// Set via 3 numbers
this.entity.setLocalScale(10, 10, 10);
```

**`Example`**

```ts
// Set via vector
var scale = new pc.Vec3(10, 10, 10);
this.entity.setLocalScale(scale);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space scale or x-coordinate of local-space scale. |
| `y?` | `number` | Y-coordinate of local-space scale. |
| `z?` | `number` | Z-coordinate of local-space scale. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setLocalScale

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9519

___

### setPosition

▸ **setPosition**(`x`, `y?`, `z?`): `void`

Sets the world-space position of the specified graph node. This function has two valid
signatures: you can either pass a 3D vector or 3 numbers to specify the world-space
position.

**`Example`**

```ts
// Set via 3 numbers
this.entity.setPosition(0, 10, 0);
```

**`Example`**

```ts
// Set via vector
var position = new pc.Vec3(0, 10, 0);
this.entity.setPosition(position);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding world-space position or x-coordinate of world-space position. |
| `y?` | `number` | Y-coordinate of world-space position. |
| `z?` | `number` | Z-coordinate of world-space position. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setPosition

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9545

___

### setRotation

▸ **setRotation**(`x`, `y?`, `z?`, `w?`): `void`

Sets the world-space rotation of the specified graph node. This function has two valid
signatures: you can either pass a quaternion or 3 numbers to specify the world-space
rotation.

**`Example`**

```ts
// Set via 4 numbers
this.entity.setRotation(0, 0, 0, 1);
```

**`Example`**

```ts
// Set via quaternion
var q = pc.Quat();
this.entity.setRotation(q);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Quat` | Quaternion holding world-space rotation or x-component of world-space quaternion rotation. |
| `y?` | `number` | Y-component of world-space quaternion rotation. |
| `z?` | `number` | Z-component of world-space quaternion rotation. |
| `w?` | `number` | W-component of world-space quaternion rotation. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.setRotation

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9564

___

### translate

▸ **translate**(`x`, `y?`, `z?`): `void`

Translates the graph node in world-space by the specified translation vector. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
world-space translation.

**`Example`**

```ts
// Translate via 3 numbers
this.entity.translate(10, 0, 0);
```

**`Example`**

```ts
// Translate via vector
var t = new pc.Vec3(10, 0, 0);
this.entity.translate(t);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding world-space translation or x-coordinate of world-space translation. |
| `y?` | `number` | Y-coordinate of world-space translation. |
| `z?` | `number` | Z-coordinate of world-space translation. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.translate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9709

___

### translateLocal

▸ **translateLocal**(`x`, `y?`, `z?`): `void`

Translates the graph node in local-space by the specified translation vector. This function
has two valid signatures: you can either pass a 3D vector or 3 numbers to specify the
local-space translation.

**`Example`**

```ts
// Translate via 3 numbers
this.entity.translateLocal(10, 0, 0);
```

**`Example`**

```ts
// Translate via vector
var t = new pc.Vec3(10, 0, 0);
this.entity.translateLocal(t);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` \| `Vec3` | 3-dimensional vector holding local-space translation or x-coordinate of local-space translation. |
| `y?` | `number` | Y-coordinate of local-space translation. |
| `z?` | `number` | Z-coordinate of local-space translation. |

#### Returns

`void`

#### Inherited from

pc.GraphNode.translateLocal

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:9727
