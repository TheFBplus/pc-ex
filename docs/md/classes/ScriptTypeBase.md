[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / ScriptTypeBase

# Class: ScriptTypeBase

扩展脚本类

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#constructor)

### Properties

- [app](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#app)
- [attributes](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#attributes)
- [enabled](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#enabled)
- [entity](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#entity)
- [scriptName](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#scriptname)

### Accessors

- [attributesData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ScriptTypeBase.md#attributesdata)

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

• **app**: `AppBase`

此脚本所在的app实例

#### Defined in

src/utils/helpers/create-script-decorator.ts:208

___

### attributes

• `Readonly` **attributes**: `ScriptAttributes`

脚本属性

#### Defined in

src/utils/helpers/create-script-decorator.ts:203

___

### enabled

• **enabled**: `boolean`

此脚本是否运行

#### Defined in

src/utils/helpers/create-script-decorator.ts:218

___

### entity

• **entity**: `Entity`

此脚本所附加到的物体

#### Defined in

src/utils/helpers/create-script-decorator.ts:213

___

### scriptName

▪ `Static` **scriptName**: `string`

此脚本的名称

#### Defined in

src/utils/helpers/create-script-decorator.ts:189

## Accessors

### attributesData

• `get` **attributesData**(): `Object`

#### Returns

`Object`

#### Defined in

src/utils/helpers/create-script-decorator.ts:195

## Methods

### fire

▸ `Optional` **fire**(`name`, `arg1?`, `arg2?`, `arg3?`, `arg4?`, `arg5?`, `arg6?`, `arg7?`, `arg8?`): `EventHandler`

Fire an event, all additional arguments are passed on to the event listener.

**`Example`**

```ts
obj.fire('test', 'This is the message');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `any` | Name of event to fire. |
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

#### Defined in

src/utils/helpers/create-script-decorator.ts:291

___

### hasEvent

▸ `Optional` **hasEvent**(`name`): `boolean`

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

#### Defined in

src/utils/helpers/create-script-decorator.ts:315

___

### initialize

▸ `Optional` **initialize**(): `void`

Called when script is about to run for the first time.

#### Returns

`void`

#### Defined in

src/utils/helpers/create-script-decorator.ts:224

___

### off

▸ `Optional` **off**(`name?`, `callback?`, `scope?`): `EventHandler`

Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
if scope is not provided then all events with the callback will be unbound.

**`Example`**

```ts
var handler = function () {
};
obj.on('test', handler);

obj.off(); // Removes all events
obj.off('test'); // Removes all events called 'test'
obj.off('test', handler); // Removes all handler functions, called 'test'
obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the event to unbind. |
| `callback?` | `HandleEventCallback` | Function to be unbound. |
| `scope?` | `any` | Scope that was used as the this when the event is fired. |

#### Returns

`EventHandler`

Self for chaining.

#### Defined in

src/utils/helpers/create-script-decorator.ts:275

___

### on

▸ `Optional` **on**(`name`, `callback`, `scope?`): `EventHandler`

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
| `scope?` | `any` | Object to use as 'this' when the event is fired, defaults to current this. |

#### Returns

`EventHandler`

Self for chaining.

#### Defined in

src/utils/helpers/create-script-decorator.ts:257

___

### once

▸ `Optional` **once**(`name`, `callback`, `scope?`): `EventHandler`

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
| `scope?` | `any` | Object to use as 'this' when the event is fired, defaults to current this. |

#### Returns

`EventHandler`

Self for chaining.

#### Defined in

src/utils/helpers/create-script-decorator.ts:305

___

### postInitialize

▸ `Optional` **postInitialize**(): `void`

Called after all initialize methods are executed in the same tick or enabling chain of actions.

#### Returns

`void`

#### Defined in

src/utils/helpers/create-script-decorator.ts:228

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

#### Defined in

src/utils/helpers/create-script-decorator.ts:238

___

### swap

▸ `Optional` **swap**(): `void`

Called when a ScriptType that already exists in the registry
gets redefined. If the new ScriptType has a `swap` method in its prototype,
then it will be executed to perform hot-reload at runtime.

#### Returns

`void`

#### Defined in

src/utils/helpers/create-script-decorator.ts:244

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

#### Defined in

src/utils/helpers/create-script-decorator.ts:233
