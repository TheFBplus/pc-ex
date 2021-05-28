/** @type {import("typedoc").TypeDocOptions} */

const config = {
	entryPoints: ["src/index.ts"],
	excludeExternals: false,
	excludePrivate: false,
	excludeProtected: false,
	hideGenerator: true,
	out: "docs",
	readme: "build-scripts/HEADER.md",
	theme: "default"
};

module.exports = config;
