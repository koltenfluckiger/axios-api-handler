const commonjs = require("rollup-plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const pkg = require("./package.json");
const resolve = require("rollup-plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");

module.exports = {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        },

    ],
    output: { dir: "lib" },
    plugins: [
        external(),
        resolve(),
        typescript({
            exclude: "**/__tests__/**",
            clean: true
        }),
        commonjs({
            include: ["node_modules/**"],
            namedExports: {
                "node_modules/react/react.js": [
                    "React"
                ],

            }
        })
    ]
};