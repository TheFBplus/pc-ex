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

▸ `Static` **processNodeDeep**(`node`, `childNodeCallback?`, `modelCallback?`, `meshInstanceCallback?`): `void`

递归处理实例上的所有模型和meshInstance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Entity` \| `GraphNode` | 物体实例 |
| `childNodeCallback?` | (`childNode`: `Entity` \| `GraphNode`) => `void` | 节点回调 |
| `modelCallback?` | (`model`: `RenderComponent` \| `ModelComponent`) => `void` | 模型回调 |
| `meshInstanceCallback?` | (`meshInstance`: `MeshInstance`, `index`: `number`) => `void` | meshInstance回调 |

#### Returns

`void`

___

### recoverAllMats

▸ `Static` **recoverAllMats**(`node`): `void`

尝试恢复所有材质

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Entity` \| `GraphNode` | 节点 |

#### Returns

`void`

___

### saveAllMats

▸ `Static` **saveAllMats**(`node`): `void`

保存所有原有材质

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Entity` \| `GraphNode` | 节点 |

#### Returns

`void`

___

### setChunksDeep

▸ `Static` **setChunksDeep**(`node`, `chunks`, `batchGroupId?`): `void`

递归改变材质chunks或设置batchGroupId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Entity` \| `GraphNode` | 节点 |
| `chunks` | `Object` | chunk描述 |
| `batchGroupId?` | `string` | batchGroup的Id |

#### Returns

`void`

___

### setMatsDeep

▸ `Static` **setMatsDeep**(`node`, `mat`, `batchGroupId?`): `void`

递归设置所有节点的材质或添加batchGroup

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Entity` \| `GraphNode` | 节点 |
| `mat` | `Material` | 材质 |
| `batchGroupId?` | `string` | batchGroup的Id |

#### Returns

`void`

___

### toggleWireFrame

▸ `Static` **toggleWireFrame**(`node`, `state`): `void`

开关模型网格显示模式

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Entity` \| `GraphNode` | 节点 |
| `state` | `boolean` | 启用状态 |

#### Returns

`void`
