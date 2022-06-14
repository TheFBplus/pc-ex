[pc-ex](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/README.md) / MaterialController

# Class: MaterialController

## Table of contents

### Constructors

- [constructor](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#constructor)

### Methods

- [processNodeDeep](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#processnodedeep)
- [recoverAllMats](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#recoverallmats)
- [saveAllMats](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#saveallmats)
- [setChunksDeep](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#setchunksdeep)
- [setMatsDeep](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#setmatsdeep)
- [toggleWireFrame](https://github.com/TheFBplus/pc-ex/blob/master/docs/md/classes/MaterialController.md#togglewireframe)

## Constructors

### constructor

• **new MaterialController**()

## Methods

### processNodeDeep

▸ `Static` **processNodeDeep**(`entity`, `childEntityCallback?`, `modelCallback?`, `meshInstanceCallback?`): `void`

递归处理实例上的所有模型和meshInstance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `PCNode` | 物体实例 |
| `childEntityCallback?` | `NodeCallback` | - |
| `modelCallback?` | `ModelCallback` | - |
| `meshInstanceCallback?` | `MeshInstanceCallback` | - |

#### Returns

`void`

#### Defined in

src/utils/utils/materialController.ts:51

___

### recoverAllMats

▸ `Static` **recoverAllMats**(`entity`): `void`

尝试恢复所有材质

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `PCNode` | 节点 |

#### Returns

`void`

#### Defined in

src/utils/utils/materialController.ts:167

___

### saveAllMats

▸ `Static` **saveAllMats**(`entity`): `void`

保存所有原有材质

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `PCNode` | 节点 |

#### Returns

`void`

#### Defined in

src/utils/utils/materialController.ts:154

___

### setChunksDeep

▸ `Static` **setChunksDeep**(`entity`, `chunks`, `batchGroupId?`): `void`

递归改变材质chunks或设置batchGroupId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `PCNode` | 节点 |
| `chunks` | `any` | chunk描述 |
| `batchGroupId?` | `string` | - |

#### Returns

`void`

#### Defined in

src/utils/utils/materialController.ts:106

___

### setMatsDeep

▸ `Static` **setMatsDeep**(`entity`, `mat`, `batchGroupId?`): `void`

递归设置所有节点的材质或添加batchGroup

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `PCNode` | 节点 |
| `mat` | `Material` | 材质 |
| `batchGroupId?` | `string` | - |

#### Returns

`void`

#### Defined in

src/utils/utils/materialController.ts:85

___

### toggleWireFrame

▸ `Static` **toggleWireFrame**(`entity`, `state`): `void`

开关模型网格显示模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `PCNode` | 节点 |
| `state` | `boolean` | 启用状态 |

#### Returns

`void`

#### Defined in

src/utils/utils/materialController.ts:131
