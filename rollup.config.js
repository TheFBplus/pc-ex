import typescript from "@rollup/plugin-typescript";
import copy from 'rollup-plugin-copy';
import { string } from "rollup-plugin-string";
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
		terser(),
		string({
			include: ["**/*.vert", "**/*.frag"]
		}),
		copy({
			targets: [
				{ src: "src/resources/shaders/*", dest: ["bin/cjs/resources/shaders", "bin/dts/resources/shaders", "bin/es/resources/shaders"] },
			]
		})
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
