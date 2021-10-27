/** @type {import("typedoc").TypeDocOptions} */

const config = {
    entryPoints: ["../src/index.ts"],
    excludeExternals: false,
    excludePrivate: false,
    excludeProtected: false,
    hideGenerator: true
};

module.exports = config;
