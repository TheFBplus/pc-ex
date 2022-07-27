### 安装方式

```bash
npm i pc-ex
```

### ES模块用法:

```ts

// 将原始对象转换为扩展对象即可使用扩展属性和方法
import * as pc from "playcanvas";
import { cast, Quat_EX } from "pc-ex";

let rotation = new pc.Quat(); // 创建原始Quat对象
let rotation_ex = cast<Quat_EX>(rotation); // 转换为扩展的Quat_EX对象
rotation_ex.setLookRotation(position, target, up); // 使用扩展对象上的方法

// 使用新添加的方法
import { DebugLine } from "pc-ex";

DebugLine.drawLine(start, end, color);


// use ex tools
import { use, RuntimeTransformHandle } from "pc-ex";

// through use api
let runtimeTransformHandle = use(RuntimeTransformHandle, { mainCamera: thisCamera });
// through new instance
let runtimeTransformHandle = new RuntimeTransformHandle({ mainCamera: thisCamera });
```

### Node usage:

```js
// Import all to use extend functions
const pc = require("playcanvas");
const pcEX = require("pc-ex");

let rotation = new pc.Quat();
rotation.setLookRotation(position, target, up);


// Import named
const { DebugLine } = require("pc-ex");

DebugLine.drawLine(start, end, color);


// use ex tools
const { use, RuntimeTransformHandle } = require("pc-ex");

// through use api
let runtimeTransformHandle = use(RuntimeTransformHandle, { mainCamera: thisCamera });
// through new instance
let runtimeTransformHandle = new RuntimeTransformHandle({ mainCamera: thisCamera });
```

### Static usage:

Old school method

```html
<script src="./bin/pcEX.js"></script>
<script>
	
// use extend functions
let rotation = new pc.Quat();
rotation.setLookRotation(position, target, up);

// use new functions
pc.DebugLine.drawLine(start, end, color);

// use ex tools
let runtimeTransformHandle = new pc.EXTools.RuntimeTransformHandle({ mainCamera: thisCamera });

</script>
```

For static usage, ambient type definitions can optionally be referenced here `node_modules/pc-ex/bin/pcEX.d.ts`.