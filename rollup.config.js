import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/index.ts",

	plugins: [
		typescript({
			declarationDir: undefined,
			outDir: undefined,
			declaration: false,
			module: "ES2020",
			target: "ES5",
		}),
		terser({ keep_fnames: true })
	],

	output: {
		sourcemap: true,
		file: "bin/pcEX.js",
		format: "iife",
		name: "pcEX",
		extend: false,
		globals: { "playcanvas": "pc" }
	},

	external: ["playcanvas"]
};
