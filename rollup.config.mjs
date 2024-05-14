import ts from "rollup-plugin-ts";

import pkg from "./package.json" with { type: "json" };

const rootDir = "reset-scoped";
const outDir = "reset-scoped";

/** @type {import("rollup").RollupOptions} */
export default {
  input: {
    index: `${rootDir}/index.ts`,
    "react/index": `${rootDir}/react/index.ts`,
    "react/jsx-runtime": `${rootDir}/react/jsx-runtime.ts`,
    "react/jsx-dev-runtime": `${rootDir}/react/jsx-dev-runtime.ts`,
  },
  output: [
    {
      format: "es",
      dir: outDir,
      entryFileNames: "[name].mjs",
      chunkFileNames: "[name]-[hash].mjs",
    },
    {
      format: "cjs",
      dir: outDir,
      interop: "esModule",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ].map((packageName) => new RegExp(`^${packageName}($|/)`)),
  plugins: [ts()],
};
