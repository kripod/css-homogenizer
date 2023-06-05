import ts from "rollup-plugin-ts";

import pkg from "./package.json" assert { type: "json" };

/** @type {import("rollup").RollupOptions} */
export default {
  input: {
    "reset-scoped/index": "src/reset-scoped/index.ts",
    "reset-scoped/react/index": "src/reset-scoped/react/index.ts",
    "reset-scoped/react/jsx-runtime": "src/reset-scoped/react/jsx-runtime.ts",
    "reset-scoped/react/jsx-dev-runtime":
      "src/reset-scoped/react/jsx-dev-runtime.ts",
  },
  output: [
    {
      format: "es",
      dir: "dist/es",
      entryFileNames: "[name].mjs",
    },
    {
      format: "cjs",
      dir: "dist/cjs",
      interop: "esModule",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ].map((packageName) => new RegExp(`^${packageName}($|/)`)),
  plugins: [ts()],
};
