import ts from "rollup-plugin-ts";

import pkg from "./package.json" assert { type: "json" };

/** @type {import("rollup").RollupOptions} */
export default {
  input: {
    index: "reset-scoped/index.ts",
    "react/index": "reset-scoped/react/index.ts",
    "react/jsx-runtime": "reset-scoped/react/jsx-runtime.ts",
    "react/jsx-dev-runtime": "reset-scoped/react/jsx-dev-runtime.ts",
  },
  output: [
    {
      format: "es",
      dir: "reset-scoped",
      entryFileNames: "[name].mjs",
    },
    {
      format: "cjs",
      dir: "reset-scoped",
      interop: "esModule",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ].map((packageName) => new RegExp(`^${packageName}($|/)`)),
  plugins: [ts()],
};
