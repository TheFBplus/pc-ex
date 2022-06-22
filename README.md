# pc-ex
### Install

```bash
npm i pc-ex
```

### ES usage:

```ts
// cast object to use extend functions
import * as pc from "playcanvas";
import { cast, Quat_EX } from "pc-ex";

let rotation = new pc.Quat();
cast<Quat_EX>(rotation).setLookRotation(position, target, up);


// use new functions
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
### API Docs

API docs can be found [here](https://thefbplus.github.io/pc-ex/)

***

### For Developer:

clone repository

```bash
git clone https://github.com/TheFBplus/pc-ex.git
```

init development environment

```bash
npm run init
```

build project

```bash
npm run build
```

build api docs

```bash
npm run docs
```