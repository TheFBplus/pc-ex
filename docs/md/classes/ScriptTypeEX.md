[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / ScriptTypeEX

# Class: ScriptTypeEX<Attrs\>

扩展脚本类

## Type parameters

| Name |
| :------ |
| `Attrs` |

## Hierarchy

- `ScriptType`

  ↳ **`ScriptTypeEX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#app)
- [entity](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#entity)

### Accessors

- [attrs](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#attrs)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#enabled)
- [attributes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#attributes)
- [scriptName](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#scriptname)

### Methods

- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#fire)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#hasevent)
- [initialize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#initialize)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#on)
- [onAttr](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#onattr)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#once)
- [postInitialize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#postinitialize)
- [postUpdate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#postupdate)
- [swap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#swap)
- [update](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#update)
- [extend](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeEX.md#extend)

## Constructors

### constructor

• **new ScriptTypeEX**<`Attrs`\>(`args`)

Create a new ScriptType instance.

#### Type parameters

| Name |
| :------ |
| `Attrs` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | The input arguments object. |
| `args.app` | `AppBase` | The AppBase that is running the script. |
| `args.entity` | `Entity` | The Entity that the script is attached to. |

#### Inherited from

pc.ScriptType.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17774

## Properties

### app

• **app**: `AppBase`

The AppBase that the instance of this type belongs to.

#### Inherited from

pc.ScriptType.app

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17783

___

### entity

• **entity**: `Entity`

The Entity that the instance of this type belongs to.

#### Inherited from

pc.ScriptType.entity

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17789

## Accessors

### attrs

• `Protected` `get` **attrs**(): `Attrs`

获得脚本属性

#### Returns

`Attrs`

#### Defined in

src/utils/helpers/create-script-decorator_ex.ts:80

___

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.ScriptType.enabled

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17912

• `set` **enabled**(`arg`): `void`

True if the instance of this type is in running state. False when script is not running,
because the Entity or any of its parents are disabled or the ScriptComponent is
disabled or the Script Instance is disabled. When disabled no update methods will be called
on each tick. initialize and postInitialize methods will run once when the script instance
is in `enabled` state during app tick.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.ScriptType.enabled

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17911

___

### attributes

• `Static` `get` **attributes**(): `ScriptAttributes`

The interface to define attributes for Script Types. Refer to ScriptAttributes.

**`Example`**

```ts
var PlayerController = pc.createScript('playerController');

PlayerController.attributes.add('speed', {
    type: 'number',
    title: 'Speed',
    placeholder: 'km/h',
    default: 22.2
});
```

#### Returns

`ScriptAttributes`

#### Inherited from

pc.ScriptType.attributes

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17749

___

### scriptName

• `Static` `get` **scriptName**(): `string`

Name of a Script Type.

#### Returns

`string`

#### Inherited from

pc.ScriptType.scriptName

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17734

## Methods

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

pc.ScriptType.fire

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5443

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

pc.ScriptType.hasEvent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5471

___

### initialize

▸ `Optional` **initialize**(): `void`

Called when script is about to run for the first time.

#### Returns

`void`

#### Inherited from

pc.ScriptType.initialize

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17917

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

pc.ScriptType.off

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

pc.ScriptType.on

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5406

___

### onAttr

▸ **onAttr**<`K`\>(`propertyName`, `callback`, `scope?`): `void`

添加脚本属性监听

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `K` | 脚本属性名称 |
| `callback` | (`value`: `Attrs`[`K`], `preValue`: `Attrs`[`K`]) => `any` | 属性变化回调函数 |
| `scope?` | `object` | 回调函数this指向 |

#### Returns

`void`

#### Defined in

src/utils/helpers/create-script-decorator_ex.ts:91

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

pc.ScriptType.once

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5460

___

### postInitialize

▸ `Optional` **postInitialize**(): `void`

Called after all initialize methods are executed in the same tick or enabling chain of actions.

#### Returns

`void`

#### Inherited from

pc.ScriptType.postInitialize

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17921

___

### postUpdate

▸ `Optional` **postUpdate**(`dt`): `void`

Called for enabled (running state) scripts on each tick, after update.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | The delta time in seconds since the last frame. |

#### Returns

`void`

#### Inherited from

pc.ScriptType.postUpdate

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17931

___

### swap

▸ `Optional` **swap**(`old`): `void`

Called when a ScriptType that already exists in the registry gets redefined. If the new
ScriptType has a `swap` method in its prototype, then it will be executed to perform
hot-reload at runtime.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `old` | `ScriptType` | Old instance of the scriptType to copy data to the new instance. |

#### Returns

`void`

#### Inherited from

pc.ScriptType.swap

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17938

___

### update

▸ `Optional` **update**(`dt`): `void`

Called for enabled (running state) scripts on each tick.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | The delta time in seconds since the last frame. |

#### Returns

`void`

#### Inherited from

pc.ScriptType.update

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17926

___

### extend

▸ `Static` **extend**(`methods`): `void`

Shorthand function to extend Script Type prototype with list of methods.

**`Example`**

```ts
var PlayerController = pc.createScript('playerController');

PlayerController.extend({
    initialize: function () {
        // called once on initialize
    },
    update: function (dt) {
        // called each tick
    }
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `methods` | `object` | Object with methods, where key - is name of method, and value - is function. |

#### Returns

`void`

#### Inherited from

pc.ScriptType.extend

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:17766
