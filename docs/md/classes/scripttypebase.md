[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / ScriptTypeBase

# Class: ScriptTypeBase

Base dummy duplicated pc.ScriptType class to be extended when defining.
All parameters and useful event-based methods made optional to avoid inadvertedly extending them or having to define them.
Caveat is: tsconfig.json needs to be set to: "strictNullChecks": false

**`export`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#app)
- [attributes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#attributes)
- [attributesData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#attributesdata)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#enabled)
- [entity](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#entity)

### Methods

- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#fire)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#hasevent)
- [initialize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#initialize)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#on)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#once)
- [postInitialize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#postinitialize)
- [postUpdate](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#postupdate)
- [swap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#swap)
- [update](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#update)

## Constructors

### constructor

• **new ScriptTypeBase**()

## Properties

### app

• **app**: `Application`

The {@link pc.Application} that the instance of this type
belongs to.

#### Defined in

src/libs/libs/create-script-decorator.ts:238

___

### attributes

• `Readonly` **attributes**: `ScriptAttributes`

**`function`**

**`name`** pc.EventHandler#on

**`description`** Attach an event handler to an event.

**`param`** Name of the event to bind the callback to.

**`param`** Function that is called when event is fired. Note the callback is limited to 8 arguments.

**`param`** Object to use as 'this' when the event is fired, defaults to current this.

**`returns`** Self for chaining.

**`example`**
obj.on('test', function (a, b) {
    console.log(a + b);
});
obj.fire('test', 1, 2); // prints 3 to the console

#### Defined in

src/libs/libs/create-script-decorator.ts:139

___

### attributesData

• `Optional` **attributesData**: `Object`

#### Index signature

▪ [key: `string`]: [`AttributeParams`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md#attributeparams)

#### Defined in

src/libs/libs/create-script-decorator.ts:84

___

### enabled

• **enabled**: `boolean`

True if the instance of this type is in running state. False
when script is not running, because the Entity or any of its parents are disabled or the
Script Component is disabled or the Script Instance is disabled. When disabled no update
methods will be called on each tick. initialize and postInitialize methods will run once
when the script instance is in `enabled` state during app tick.

#### Defined in

src/libs/libs/create-script-decorator.ts:250

___

### entity

• **entity**: `Entity`

The {@link pc.Entity} that the instance of this type belongs to.

#### Defined in

src/libs/libs/create-script-decorator.ts:242

## Methods

### fire

▸ `Optional` **fire**(`name`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`, `arg8?`): `EventHandler`

**`function`**

**`name`** pc.EventHandler#fire

**`description`** Fire an event, all additional arguments are passed on to the event listener.

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

#### Defined in

src/libs/libs/create-script-decorator.ts:204

___

### hasEvent

▸ `Optional` **hasEvent**(`name`): `boolean`

**`function`**

**`name`** pc.EventHandler#hasEvent

**`description`** Test if there are any handlers bound to an event name.

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

#### Defined in

src/libs/libs/create-script-decorator.ts:232

___

### initialize

▸ `Optional` **initialize**(): `void`

**`function`**

**`name`** pc.ScriptType#[initialize]

**`description`** Called when script is about to run for the first time.

#### Returns

`void`

#### Defined in

src/libs/libs/create-script-decorator.ts:94

___

### off

▸ `Optional` **off**(`name?`, `callback?`, `scope?`): `EventHandler`

**`function`**

**`name`** pc.EventHandler#off

**`description`** Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
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
| `callback?` | `HandleEventCallback` |
| `scope?` | `any` |

#### Returns

`EventHandler`

Self for chaining.

#### Defined in

src/libs/libs/create-script-decorator.ts:186

___

### on

▸ `Optional` **on**(`name`, `callback`, `scope?`): `EventHandler`

**`function`**

**`name`** pc.ScriptType#[initialize]

**`description`** Called when script is about to run for the first time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | `HandleEventCallback` |
| `scope?` | `any` |

#### Returns

`EventHandler`

#### Defined in

src/libs/libs/create-script-decorator.ts:166

___

### once

▸ `Optional` **once**(`name`, `callback`, `scope?`): `EventHandler`

**`function`**

**`name`** pc.EventHandler#once

**`description`** Attach an event handler to an event. This handler will be removed after being fired once.

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
| `callback` | `HandleEventCallback` | Function that is called when event is fired. Note the callback is limited to 8 arguments. |
| `scope?` | `any` | - |

#### Returns

`EventHandler`

Self for chaining.

#### Defined in

src/libs/libs/create-script-decorator.ts:220

___

### postInitialize

▸ `Optional` **postInitialize**(): `void`

**`function`**

**`name`** pc.ScriptType#[postInitialize]

**`description`** Called after all initialize methods are executed in the same tick or enabling chain of actions.

#### Returns

`void`

#### Defined in

src/libs/libs/create-script-decorator.ts:100

___

### postUpdate

▸ `Optional` **postUpdate**(`dt`): `void`

**`function`**

**`name`** pc.ScriptType#[postUpdate]

**`description`** Called for enabled (running state) scripts on each tick, after update.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | The delta time in seconds since the last frame. |

#### Returns

`void`

#### Defined in

src/libs/libs/create-script-decorator.ts:114

___

### swap

▸ `Optional` **swap**(): `void`

**`function`**

**`name`** pc.ScriptType#[swap]

**`description`** Called when a ScriptType that already exists in the registry
gets redefined. If the new ScriptType has a `swap` method in its prototype,
then it will be executed to perform hot-reload at runtime.

#### Returns

`void`

#### Defined in

src/libs/libs/create-script-decorator.ts:122

___

### update

▸ `Optional` **update**(`dt`): `void`

**`function`**

**`name`** pc.ScriptType#[update]

**`description`** Called for enabled (running state) scripts on each tick.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | The delta time in seconds since the last frame. |

#### Returns

`void`

#### Defined in

src/libs/libs/create-script-decorator.ts:107
