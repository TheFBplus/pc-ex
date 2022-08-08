[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / InputEventsMap

# Interface: InputEventsMap

输入事件-回调表

## Table of contents

### Properties

- [click](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#click)
- [down](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#down)
- [dragEnd](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#dragend)
- [dragging](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#dragging)
- [move](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#move)
- [pinch](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#pinch)
- [up](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/interfaces/InputEventsMap.md#up)

## Properties

### click

• **click**: (`event`: { `x`: `number` ; `y`: `number`  }) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.x` | `number` |
| `event.y` | `number` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:16

___

### down

• **down**: (`event`: { `x`: `number` ; `y`: `number`  }) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.x` | `number` |
| `event.y` | `number` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:14

___

### dragEnd

• **dragEnd**: (`event`: { `x`: `number` ; `y`: `number`  }) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.x` | `number` |
| `event.y` | `number` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:20

___

### dragging

• **dragging**: (`event`: { `dx`: `number` ; `dy`: `number` ; `ox`: `number` ; `oy`: `number` ; `x`: `number` ; `y`: `number`  }) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.dx` | `number` |
| `event.dy` | `number` |
| `event.ox` | `number` |
| `event.oy` | `number` |
| `event.x` | `number` |
| `event.y` | `number` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:19

___

### move

• **move**: (`evemt`: { `dx`: `number` ; `dy`: `number` ; `x`: `number` ; `y`: `number`  }) => `any`

#### Type declaration

▸ (`evemt`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `evemt` | `Object` |
| `evemt.dx` | `number` |
| `evemt.dy` | `number` |
| `evemt.x` | `number` |
| `evemt.y` | `number` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:15

___

### pinch

• **pinch**: (`event`: { `delta`: `number` ; `event`: `MouseEvent`  }) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.delta` | `number` |
| `event.event` | `MouseEvent` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:18

___

### up

• **up**: (`event`: { `x`: `number` ; `y`: `number`  }) => `any`

#### Type declaration

▸ (`event`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.x` | `number` |
| `event.y` | `number` |

##### Returns

`any`

#### Defined in

src/utils/common/InputEventsMap.ts:17
