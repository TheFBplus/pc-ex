[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / ToggleGroup

# Class: ToggleGroup

开关组逻辑类

## Hierarchy

- `EventHandler`

  ↳ **`ToggleGroup`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#constructor)

### Properties

- [allowSwitchOff](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#allowswitchoff)

### Accessors

- [currentToggle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#currenttoggle)

### Methods

- [addToggle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#addtoggle)
- [closeAllToggles](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#closealltoggles)
- [fire](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#fire)
- [hasEvent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#hasevent)
- [off](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#off)
- [on](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#on)
- [once](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#once)
- [removeToggle](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#removetoggle)
- [shouldToggleSwitch](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/ToggleGroup.md#shouldtoggleswitch)

## Constructors

### constructor

• **new ToggleGroup**(`allowSwitchOff`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `allowSwitchOff` | `boolean` |

#### Overrides

pc.EventHandler.constructor

#### Defined in

src/utils/ui/toggleGroup.ts:28

## Properties

### allowSwitchOff

• **allowSwitchOff**: `boolean`

#### Defined in

src/utils/ui/toggleGroup.ts:18

## Accessors

### currentToggle

• `get` **currentToggle**(): [`Toggle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Toggle.md)

#### Returns

[`Toggle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Toggle.md)

#### Defined in

src/utils/ui/toggleGroup.ts:23

## Methods

### addToggle

▸ **addToggle**(`toggle`): `void`

添加开关到开关组

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toggle` | [`Toggle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Toggle.md) | 开关 |

#### Returns

`void`

#### Defined in

src/utils/ui/toggleGroup.ts:39

___

### closeAllToggles

▸ **closeAllToggles**(): `void`

关闭所有开关

#### Returns

`void`

#### Defined in

src/utils/ui/toggleGroup.ts:99

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

pc.EventHandler.fire

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5437

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

pc.EventHandler.hasEvent

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5465

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

pc.EventHandler.off

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5420

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

pc.EventHandler.on

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5400

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

pc.EventHandler.once

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:5454

___

### removeToggle

▸ **removeToggle**(`toggle`): `void`

从开关组移除开关

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toggle` | [`Toggle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Toggle.md) | 开关 |

#### Returns

`void`

#### Defined in

src/utils/ui/toggleGroup.ts:51

___

### shouldToggleSwitch

▸ **shouldToggleSwitch**(`toggle`, `targetState`): `boolean`

开关组限制开关的行为

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `toggle` | [`Toggle`](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Toggle.md) | 要限制的开关 |
| `targetState` | `boolean` | 开关的目标状态 |

#### Returns

`boolean`

开关状态是否改变

#### Defined in

src/utils/ui/toggleGroup.ts:65
