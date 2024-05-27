/*
 * @Author: jack.hai
 * @Date: 2022-11-22 10:22:48
 * @LastEditTime: 2024-05-24 18:22:39
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { pluginsConfig, resolveConfig } from "./scripts/preview";
import dts from "vite-plugin-dts";
// import babelImport from "babel-plugin-import";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
export default defineConfig(() => {
    return {
        build: {
            outDir: "build",
            target: "esnext",
            cssCodeSplit: true,
            rollupOptions: {
                external: ["three", "@ant-design/icons-vue", "ant-design-vue", "unplugin-vue-components", "unplugin-auto-import", "vue"],
                output: [
                    // !flag && obj,
                    {
                        format: "es",
                        entryFileNames: "[name].js",
                        exports: "named",
                        name: "BqDesign",
                        dir: "./build/dist",
                    },
                    {
                        format: "es",
                        entryFileNames: "[name].js",
                        exports: "named",
                        preserveModules: true,
                        preserveModulesRoot: "packages",
                        dir: "./build/es",
                    },
                    {
                        format: "cjs",
                        entryFileNames: "[name].js",
                        exports: "named",
                        preserveModules: true,
                        preserveModulesRoot: "packages",
                        dir: "./build/lib",
                    },
                ],
            },
            lib: {
                entry: resolve(__dirname, "./packages/index.ts"),
                name: "BqDesign",
                fileName: (format) => `bq-design.${format}.js`,
                formats: ["es", "cjs"],
            },
        },
        plugins: [
            vue(),

            dts({
                tsconfigPath: "./tsconfig.prod.json",
                outDir: "build/lib",
            }),
            dts({
                tsconfigPath: "./tsconfig.prod.json",
                outDir: "build/es",
            }),
            ...pluginsConfig,
        ],
        resolve: resolveConfig,
    };
});
