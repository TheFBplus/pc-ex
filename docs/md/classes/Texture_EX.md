[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / Texture\_EX

# Class: Texture\_EX

## Hierarchy

- `Texture`

  ↳ **`Texture_EX`**

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#constructor)

### Properties

- [\_addressU](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_addressu)
- [\_addressV](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_addressv)
- [\_addressW](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_addressw)
- [\_anisotropy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_anisotropy)
- [\_compareFunc](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_comparefunc)
- [\_compareOnRead](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_compareonread)
- [\_compressed](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_compressed)
- [\_cubemap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_cubemap)
- [\_depth](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_depth)
- [\_flipY](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_flipy)
- [\_format](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_format)
- [\_gpuSize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_gpusize)
- [\_height](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_height)
- [\_invalid](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_invalid)
- [\_isRenderTarget](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_isrendertarget)
- [\_levels](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_levels)
- [\_levelsUpdated](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_levelsupdated)
- [\_lockedLevel](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_lockedlevel)
- [\_magFilter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_magfilter)
- [\_minFilter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_minfilter)
- [\_mipmaps](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_mipmaps)
- [\_mipmapsUploaded](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_mipmapsuploaded)
- [\_needsMipmapsUpload](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_needsmipmapsupload)
- [\_needsUpload](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_needsupload)
- [\_parameterFlags](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_parameterflags)
- [\_premultiplyAlpha](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_premultiplyalpha)
- [\_volume](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_volume)
- [\_width](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#_width)
- [device](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#device)
- [fixCubemapSeams](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#fixcubemapseams)
- [impl](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#impl)
- [name](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#name)
- [profilerHint](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#profilerhint)
- [projection](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#projection)
- [type](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#type)

### Accessors

- [addressU](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#addressu)
- [addressV](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#addressv)
- [addressW](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#addressw)
- [anisotropy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#anisotropy)
- [compareFunc](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#comparefunc)
- [compareOnRead](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#compareonread)
- [cubemap](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#cubemap)
- [depth](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#depth)
- [encoding](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#encoding)
- [flipY](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#flipy)
- [format](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#format)
- [gpuSize](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#gpusize)
- [height](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#height)
- [magFilter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#magfilter)
- [minFilter](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#minfilter)
- [mipmaps](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#mipmaps)
- [pixelData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#pixeldata)
- [pot](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#pot)
- [premultiplyAlpha](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#premultiplyalpha)
- [volume](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#volume)
- [width](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#width)

### Methods

- [destroy](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#destroy)
- [dirtyAll](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#dirtyall)
- [getPixelData](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#getpixeldata)
- [getSource](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#getsource)
- [lock](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#lock)
- [setSource](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#setsource)
- [texture2D](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#texture2d)
- [unlock](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#unlock)
- [upload](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/Texture_EX.md#upload)

## Constructors

### constructor

• **new Texture_EX**(`graphicsDevice`, `options?`)

Create a new Texture instance.

**`example`**
// Create a 8x8x24-bit texture
var texture = new pc.Texture(graphicsDevice, {
    width: 8,
    height: 8,
    format: pc.PIXELFORMAT_R8_G8_B8
});

// Fill the texture with a gradient
var pixels = texture.lock();
var count = 0;
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        pixels[count++] = i * 32;
        pixels[count++] = j * 32;
        pixels[count++] = 255;
    }
}
texture.unlock();

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `graphicsDevice` | `GraphicsDevice` | The graphics device used to manage this texture. |
| `options?` | `Object` | - |
| `options.addressU?` | `number` | - |
| `options.addressV?` | `number` | - |
| `options.addressW?` | `number` | - |
| `options.anisotropy?` | `number` | - |
| `options.compareFunc?` | `number` | - |
| `options.compareOnRead?` | `boolean` | - |
| `options.cubemap?` | `boolean` | - |
| `options.depth?` | `number` | - |
| `options.fixCubemapSeams?` | `boolean` | - |
| `options.flipY?` | `boolean` | - |
| `options.format?` | `number` | - |
| `options.height?` | `number` | - |
| `options.magFilter?` | `number` | - |
| `options.minFilter?` | `number` | - |
| `options.mipmaps?` | `boolean` | - |
| `options.name?` | `string` | - |
| `options.premultiplyAlpha?` | `boolean` | - |
| `options.projection?` | `string` | - |
| `options.type?` | `string` | - |
| `options.volume?` | `boolean` | - |
| `options.width?` | `number` | - |

#### Inherited from

pc.Texture.constructor

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6236

## Properties

### \_addressU

• **\_addressU**: `number`

#### Inherited from

pc.Texture.\_addressU

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6282

___

### \_addressV

• **\_addressV**: `number`

#### Inherited from

pc.Texture.\_addressV

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6283

___

### \_addressW

• **\_addressW**: `number`

#### Inherited from

pc.Texture.\_addressW

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6284

___

### \_anisotropy

• **\_anisotropy**: `number`

#### Inherited from

pc.Texture.\_anisotropy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6281

___

### \_compareFunc

• **\_compareFunc**: `any`

#### Inherited from

pc.Texture.\_compareFunc

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6286

___

### \_compareOnRead

• **\_compareOnRead**: `boolean`

#### Inherited from

pc.Texture.\_compareOnRead

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6285

___

### \_compressed

• **\_compressed**: `boolean`

#### Inherited from

pc.Texture.\_compressed

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6289

___

### \_cubemap

• **\_cubemap**: `boolean`

#### Inherited from

pc.Texture.\_cubemap

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6272

___

### \_depth

• **\_depth**: `number`

#### Inherited from

pc.Texture.\_depth

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6268

___

### \_flipY

• **\_flipY**: `boolean`

#### Inherited from

pc.Texture.\_flipY

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6275

___

### \_format

• **\_format**: `number`

#### Inherited from

pc.Texture.\_format

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6269

___

### \_gpuSize

• **\_gpuSize**: `number`

#### Inherited from

pc.Texture.\_gpuSize

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6292

___

### \_height

• **\_height**: `number`

#### Inherited from

pc.Texture.\_height

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6267

___

### \_invalid

• **\_invalid**: `boolean`

#### Inherited from

pc.Texture.\_invalid

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6290

___

### \_isRenderTarget

• **\_isRenderTarget**: `boolean`

#### Inherited from

pc.Texture.\_isRenderTarget

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6277

___

### \_levels

• **\_levels**: `any`

#### Inherited from

pc.Texture.\_levels

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6288

___

### \_levelsUpdated

• **\_levelsUpdated**: `boolean`[] \| `boolean`[][]

#### Inherited from

pc.Texture.\_levelsUpdated

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6497

___

### \_lockedLevel

• **\_lockedLevel**: `number`

#### Inherited from

pc.Texture.\_lockedLevel

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6291

___

### \_magFilter

• **\_magFilter**: `number`

#### Inherited from

pc.Texture.\_magFilter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6280

___

### \_minFilter

• **\_minFilter**: `number`

#### Inherited from

pc.Texture.\_minFilter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6279

___

### \_mipmaps

• **\_mipmaps**: `any`

#### Inherited from

pc.Texture.\_mipmaps

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6278

___

### \_mipmapsUploaded

• **\_mipmapsUploaded**: `boolean`

#### Inherited from

pc.Texture.\_mipmapsUploaded

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6498

___

### \_needsMipmapsUpload

• **\_needsMipmapsUpload**: `any`

#### Inherited from

pc.Texture.\_needsMipmapsUpload

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6414

___

### \_needsUpload

• **\_needsUpload**: `boolean`

#### Inherited from

pc.Texture.\_needsUpload

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6486

___

### \_parameterFlags

• **\_parameterFlags**: `number`

#### Inherited from

pc.Texture.\_parameterFlags

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6499

___

### \_premultiplyAlpha

• **\_premultiplyAlpha**: `boolean`

#### Inherited from

pc.Texture.\_premultiplyAlpha

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6276

___

### \_volume

• **\_volume**: `boolean`

#### Inherited from

pc.Texture.\_volume

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6273

___

### \_width

• **\_width**: `number`

#### Inherited from

pc.Texture.\_width

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6266

___

### device

• **device**: `GraphicsDevice`

#### Inherited from

pc.Texture.device

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6259

___

### fixCubemapSeams

• **fixCubemapSeams**: `boolean`

#### Inherited from

pc.Texture.fixCubemapSeams

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6274

___

### impl

• **impl**: `any`

#### Inherited from

pc.Texture.impl

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6293

___

### name

• **name**: `string`

The name of the texture. Defaults to null.

#### Inherited from

pc.Texture.name

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6265

___

### profilerHint

• **profilerHint**: `any`

#### Inherited from

pc.Texture.profilerHint

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6287

___

### projection

• **projection**: `string`

#### Inherited from

pc.Texture.projection

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6271

___

### type

• **type**: `string`

#### Inherited from

pc.Texture.type

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6270

## Accessors

### addressU

• `get` **addressU**(): `number`

The addressing mode to be applied to the texture horizontally. Can be:

- {@link ADDRESS_REPEAT}
- {@link ADDRESS_CLAMP_TO_EDGE}
- {@link ADDRESS_MIRRORED_REPEAT}

#### Returns

`number`

#### Inherited from

pc.Texture.addressU

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6344

• `set` **addressU**(`arg`): `void`

The addressing mode to be applied to the texture horizontally. Can be:

- {@link ADDRESS_REPEAT}
- {@link ADDRESS_CLAMP_TO_EDGE}
- {@link ADDRESS_MIRRORED_REPEAT}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.Texture.addressU

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6343

___

### addressV

• `get` **addressV**(): `number`

The addressing mode to be applied to the texture vertically. Can be:

- {@link ADDRESS_REPEAT}
- {@link ADDRESS_CLAMP_TO_EDGE}
- {@link ADDRESS_MIRRORED_REPEAT}

#### Returns

`number`

#### Inherited from

pc.Texture.addressV

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6355

• `set` **addressV**(`arg`): `void`

The addressing mode to be applied to the texture vertically. Can be:

- {@link ADDRESS_REPEAT}
- {@link ADDRESS_CLAMP_TO_EDGE}
- {@link ADDRESS_MIRRORED_REPEAT}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.Texture.addressV

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6354

___

### addressW

• `get` **addressW**(): `number`

The addressing mode to be applied to the 3D texture depth (WebGL2 only). Can be:

- {@link ADDRESS_REPEAT}
- {@link ADDRESS_CLAMP_TO_EDGE}
- {@link ADDRESS_MIRRORED_REPEAT}

#### Returns

`number`

#### Inherited from

pc.Texture.addressW

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6366

• `set` **addressW**(`arg`): `void`

The addressing mode to be applied to the 3D texture depth (WebGL2 only). Can be:

- {@link ADDRESS_REPEAT}
- {@link ADDRESS_CLAMP_TO_EDGE}
- {@link ADDRESS_MIRRORED_REPEAT}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.Texture.addressW

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6365

___

### anisotropy

• `get` **anisotropy**(): `number`

Integer value specifying the level of anisotropic to apply to the texture ranging from 1 (no
anisotropic filtering) to the {@link GraphicsDevice} property maxAnisotropy.

#### Returns

`number`

#### Inherited from

pc.Texture.anisotropy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6397

• `set` **anisotropy**(`arg`): `void`

Integer value specifying the level of anisotropic to apply to the texture ranging from 1 (no
anisotropic filtering) to the {@link GraphicsDevice} property maxAnisotropy.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.Texture.anisotropy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6396

___

### compareFunc

• `get` **compareFunc**(): `any`

Comparison function when compareOnRead is enabled (WebGL2 only). Possible values:

- {@link FUNC_LESS}
- {@link FUNC_LESSEQUAL}
- {@link FUNC_GREATER}
- {@link FUNC_GREATEREQUAL}
- {@link FUNC_EQUAL}
- {@link FUNC_NOTEQUAL}

#### Returns

`any`

#### Inherited from

pc.Texture.compareFunc

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6389

• `set` **compareFunc**(`arg`): `void`

Comparison function when compareOnRead is enabled (WebGL2 only). Possible values:

- {@link FUNC_LESS}
- {@link FUNC_LESSEQUAL}
- {@link FUNC_GREATER}
- {@link FUNC_GREATEREQUAL}
- {@link FUNC_EQUAL}
- {@link FUNC_NOTEQUAL}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`void`

#### Inherited from

pc.Texture.compareFunc

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6388

___

### compareOnRead

• `get` **compareOnRead**(): `boolean`

When enabled, and if texture format is {@link PIXELFORMAT_DEPTH} or
{@link PIXELFORMAT_DEPTHSTENCIL}, hardware PCF is enabled for this texture, and you can get
filtered results of comparison using texture() in your shader (WebGL2 only).

#### Returns

`boolean`

#### Inherited from

pc.Texture.compareOnRead

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6375

• `set` **compareOnRead**(`arg`): `void`

When enabled, and if texture format is {@link PIXELFORMAT_DEPTH} or
{@link PIXELFORMAT_DEPTHSTENCIL}, hardware PCF is enabled for this texture, and you can get
filtered results of comparison using texture() in your shader (WebGL2 only).

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.Texture.compareOnRead

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6374

___

### cubemap

• `get` **cubemap**(): `boolean`

Returns true if this texture is a cube map and false otherwise.

#### Returns

`boolean`

#### Inherited from

pc.Texture.cubemap

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6469

___

### depth

• `get` **depth**(): `number`

The number of depth slices in a 3D texture (WebGL2 only).

#### Returns

`number`

#### Inherited from

pc.Texture.depth

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6432

___

### encoding

• `get` **encoding**(): ``"srgb"`` \| ``"linear"`` \| ``"rgbm"`` \| ``"rgbe"``

#### Returns

``"srgb"`` \| ``"linear"`` \| ``"rgbm"`` \| ``"rgbe"``

#### Inherited from

pc.Texture.encoding

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6495

___

### flipY

• `get` **flipY**(): `boolean`

Specifies whether the texture should be flipped in the Y-direction. Only affects textures
with a source that is an image, canvas or video element. Does not affect cubemaps,
compressed textures or textures set from raw pixel data. Defaults to true.

#### Returns

`boolean`

#### Inherited from

pc.Texture.flipY

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6485

• `set` **flipY**(`arg`): `void`

Specifies whether the texture should be flipped in the Y-direction. Only affects textures
with a source that is an image, canvas or video element. Does not affect cubemaps,
compressed textures or textures set from raw pixel data. Defaults to true.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.Texture.flipY

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6484

___

### format

• `get` **format**(): `number`

The pixel format of the texture. Can be:

- {@link PIXELFORMAT_A8}
- {@link PIXELFORMAT_L8}
- {@link PIXELFORMAT_L8_A8}
- {@link PIXELFORMAT_R5_G6_B5}
- {@link PIXELFORMAT_R5_G5_B5_A1}
- {@link PIXELFORMAT_R4_G4_B4_A4}
- {@link PIXELFORMAT_R8_G8_B8}
- {@link PIXELFORMAT_R8_G8_B8_A8}
- {@link PIXELFORMAT_DXT1}
- {@link PIXELFORMAT_DXT3}
- {@link PIXELFORMAT_DXT5}
- {@link PIXELFORMAT_RGB16F}
- {@link PIXELFORMAT_RGBA16F}
- {@link PIXELFORMAT_RGB32F}
- {@link PIXELFORMAT_RGBA32F}
- {@link PIXELFORMAT_ETC1}
- {@link PIXELFORMAT_PVRTC_2BPP_RGB_1}
- {@link PIXELFORMAT_PVRTC_2BPP_RGBA_1}
- {@link PIXELFORMAT_PVRTC_4BPP_RGB_1}
- {@link PIXELFORMAT_PVRTC_4BPP_RGBA_1}
- {@link PIXELFORMAT_111110F}
- {@link PIXELFORMAT_ASTC_4x4}>/li>
- {@link PIXELFORMAT_ATC_RGB}
- {@link PIXELFORMAT_ATC_RGBA}

#### Returns

`number`

#### Inherited from

pc.Texture.format

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6463

___

### gpuSize

• `get` **gpuSize**(): `number`

#### Returns

`number`

#### Inherited from

pc.Texture.gpuSize

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6470

___

### height

• `get` **height**(): `number`

The height of the texture in pixels.

#### Returns

`number`

#### Inherited from

pc.Texture.height

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6426

___

### magFilter

• `get` **magFilter**(): `number`

The magnification filter to be applied to the texture. Can be:

- {@link FILTER_NEAREST}
- {@link FILTER_LINEAR}

#### Returns

`number`

#### Inherited from

pc.Texture.magFilter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6333

• `set` **magFilter**(`arg`): `void`

The magnification filter to be applied to the texture. Can be:

- {@link FILTER_NEAREST}
- {@link FILTER_LINEAR}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.Texture.magFilter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6332

___

### minFilter

• `get` **minFilter**(): `number`

The minification filter to be applied to the texture. Can be:

- {@link FILTER_NEAREST}
- {@link FILTER_LINEAR}
- {@link FILTER_NEAREST_MIPMAP_NEAREST}
- {@link FILTER_NEAREST_MIPMAP_LINEAR}
- {@link FILTER_LINEAR_MIPMAP_NEAREST}
- {@link FILTER_LINEAR_MIPMAP_LINEAR}

#### Returns

`number`

#### Inherited from

pc.Texture.minFilter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6323

• `set` **minFilter**(`arg`): `void`

The minification filter to be applied to the texture. Can be:

- {@link FILTER_NEAREST}
- {@link FILTER_LINEAR}
- {@link FILTER_NEAREST_MIPMAP_NEAREST}
- {@link FILTER_NEAREST_MIPMAP_LINEAR}
- {@link FILTER_LINEAR_MIPMAP_NEAREST}
- {@link FILTER_LINEAR_MIPMAP_LINEAR}

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `number` |

#### Returns

`void`

#### Inherited from

pc.Texture.minFilter

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6322

___

### mipmaps

• `get` **mipmaps**(): `any`

Defines if texture should generate/upload mipmaps if possible.

#### Returns

`any`

#### Inherited from

pc.Texture.mipmaps

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6413

• `set` **mipmaps**(`arg`): `void`

Defines if texture should generate/upload mipmaps if possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`void`

#### Inherited from

pc.Texture.mipmaps

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6412

___

### pixelData

• `get` **pixelData**(): `Uint8ClampedArray`

该贴图的像素数据

#### Returns

`Uint8ClampedArray`

#### Defined in

src/extension/extendClasses/texture.ts:41

___

### pot

• `get` **pot**(): `boolean`

Returns true if all dimensions of the texture are power of two, and false otherwise.

#### Returns

`boolean`

#### Inherited from

pc.Texture.pot

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6494

___

### premultiplyAlpha

• `get` **premultiplyAlpha**(): `boolean`

#### Returns

`boolean`

#### Inherited from

pc.Texture.premultiplyAlpha

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6488

• `set` **premultiplyAlpha**(`arg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `boolean` |

#### Returns

`void`

#### Inherited from

pc.Texture.premultiplyAlpha

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6487

___

### volume

• `get` **volume**(): `boolean`

Returns true if this texture is a 3D volume and false otherwise.

#### Returns

`boolean`

#### Inherited from

pc.Texture.volume

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6476

___

### width

• `get` **width**(): `number`

The width of the texture in pixels.

#### Returns

`number`

#### Inherited from

pc.Texture.width

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6420

## Methods

### destroy

▸ **destroy**(): `void`

Frees resources associated with this texture.

#### Returns

`void`

#### Inherited from

pc.Texture.destroy

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6297

___

### dirtyAll

▸ **dirtyAll**(): `void`

#### Returns

`void`

#### Inherited from

pc.Texture.dirtyAll

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6496

___

### getPixelData

▸ **getPixelData**(): `Uint8ClampedArray`

获得该贴图的像素数据

#### Returns

`Uint8ClampedArray`

贴图的像素数据

#### Defined in

src/extension/extendClasses/texture.ts:51

___

### getSource

▸ **getSource**(`mipLevel?`): `HTMLImageElement`

Get the pixel data of the texture. If this is a cubemap then an array of 6 images will be
returned otherwise a single image.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mipLevel?` | `number` |

#### Returns

`HTMLImageElement`

The source image of this texture. Can be null if source not
assigned for specific image level.

#### Inherited from

pc.Texture.getSource

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6541

___

### lock

▸ **lock**(`options?`): `Uint8Array` \| `Uint16Array` \| `Float32Array`

Locks a miplevel of the texture, returning a typed array to be filled with pixel data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.face?` | `number` |
| `options.level?` | `number` |
| `options.mode?` | `number` |

#### Returns

`Uint8Array` \| `Uint16Array` \| `Float32Array`

A typed array containing the pixel data of
the locked mip level.

#### Inherited from

pc.Texture.lock

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6515

___

### setSource

▸ **setSource**(`source`, `mipLevel?`): `void`

Set the pixel data of the texture from a canvas, image, video DOM element. If the texture is
a cubemap, the supplied source must be an array of 6 canvases, images or videos.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `HTMLCanvasElement` \| `HTMLImageElement` \| `HTMLVideoElement` \| `HTMLCanvasElement`[] \| `HTMLImageElement`[] \| `HTMLVideoElement`[] | A canvas, image or video element, or an array of 6 canvas, image or video elements. |
| `mipLevel?` | `number` | - |

#### Returns

`void`

#### Inherited from

pc.Texture.setSource

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6530

___

### texture2D

▸ **texture2D**(`uv`, `color?`): `Color`

根据uv读取贴图的颜色值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uv` | `Object` | uv值 |
| `uv.x` | `number` | - |
| `uv.y` | `number` | - |
| `color?` | `Color` | 颜色值（不传则创建新的颜色） |

#### Returns

`Color`

#### Defined in

src/extension/extendClasses/texture.ts:75

___

### unlock

▸ **unlock**(): `void`

Unlocks the currently locked mip level and uploads it to VRAM.

#### Returns

`void`

#### Inherited from

pc.Texture.unlock

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6545

___

### upload

▸ **upload**(): `void`

Forces a reupload of the textures pixel data to graphics memory. Ordinarily, this function
is called by internally by {@link Texture#setSource} and {@link Texture#unlock}. However, it
still needs to be called explicitly in the case where an HTMLVideoElement is set as the
source of the texture.  Normally, this is done once every frame before video textured
geometry is rendered.

#### Returns

`void`

#### Inherited from

pc.Texture.upload

#### Defined in

node_modules/playcanvas/build/playcanvas.d.ts:6553
