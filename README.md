# pc-ex
### Install

```bash
npm i pc-ex
```

### API Docs

API docs can be found [here](https://thefbplus.github.io/pc-ex/)

## Table of contents

### Namespaces

- [DebugLine](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/modules/debugline.md)

### Classes

- [Filter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/filter.md)
- [Filter\_Bloom](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/filter_bloom.md)
- [Filter\_Empty](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/filter_empty.md)
- [MeshesRaycaster](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/meshesraycaster.md)
- [PathCurve](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/pathcurve.md)
- [ScriptTypeBase](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/scripttypebase.md)

### Interfaces

- [ICameraComponent](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/icameracomponent.md)

### Type aliases

- [AttributeParams](https://thefbplus.github.io/pc-ex/modules.html#attributeparams)

### Functions

- [attr](https://thefbplus.github.io/pc-ex/modules.html#attr)
- [createScript](https://thefbplus.github.io/pc-ex/modules.html#createscript)

## Type aliases

### AttributeParams

Ƭ **AttributeParams**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array?` | *boolean* |
| `assetType?` | *string* |
| `color?` | *string* |
| `curves?` | *string*[] |
| `default?` | *any* |
| `description?` | *string* |
| `enum?` | *object*[] |
| `max?` | *number* |
| `min?` | *number* |
| `placeholder?` | *string* \| *string*[] |
| `precision?` | *number* |
| `size?` | *number* |
| `step?` | *number* |
| `title?` | *string* |
| `type` | ``"boolean"`` \| ``"number"`` \| ``"string"`` \| ``"json"`` \| ``"asset"`` \| ``"entity"`` \| ``"rgb"`` \| ``"rgba"`` \| ``"vec2"`` \| ``"vec3"`` \| ``"vec4"`` \| ``"curve"`` |

Defined in: src/classes/utils/create-script-decorator.ts:58

## Functions

### attr

▸ **attr**<T\>(`params`: [*AttributeParams*](https://thefbplus.github.io/pc-ex/modules.html#attributeparams)): *any*

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [*AttributeParams*](https://thefbplus.github.io/pc-ex/modules.html#attributeparams) |

**Returns:** *any*

Defined in: src/classes/utils/create-script-decorator.ts:46

___

### createScript

▸ **createScript**(`name`: *string*): *function*

Class decorator allowing the use of ES6 classes
to define and create PlayCanvas script types.
Caveat is: There is a slight iterative runtime overhead to this. (unlike Haxe which can utilize precompiled-macros)
The cool thing is that your script (if it uses properties) has an additional property called `attributesData` that can facilitate offboard property reflection/runtime-component
property GUI creation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** (`obj`: *any*) => *void*

Defined in: src/classes/utils/create-script-decorator.ts:13
