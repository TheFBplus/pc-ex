# pc-ex
### Install

```bash
npm i pc-ex
```

### ES usage:

```ts
// Import directly to use extend functions
import * as pc from "playcanvas";
import "pc-ex";

let rotation = new pc.Quat();
rotation.setLookRotation(position, target, up);

// Import named
import { DebugLine } from "pc-ex";

DebugLine.drawLine(start, end, color);
```

### Node usage:

```js
// Import all to use extend functions
const pc = require("playcanvas");
require("pc-ex");

let rotation = new pc.Quat();
rotation.setLookRotation(position, target, up);

// Import named
const { DebugLine } = require("pc-ex");

DebugLine.drawLine(start, end, color);
```

### Static usage:

Old school method

```html
<script src="./bin/pcEX.js"></script>
<script>
	DebugLine.drawLine(start, end, color);
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