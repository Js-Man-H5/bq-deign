/*
 * @Author: jack.hai
 * @Date: 2022-11-22 10:22:48
 * @LastEditTime: 2024-05-23 13:39:39
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { pluginsConfig, resolveConfig } from "./scripts/preview";
import dts from "vite-plugin-dts";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
export default defineConfig(() => {
    // console.log(env);
    return {
        build: {
            rollupOptions: {
                external: ["three", "@ant-design/icons-vue", "ant-design-vue", "unplugin-vue-components", "unplugin-auto-import", "vue"],
                output: {
                    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                    // globals: {
                    //     vue: "Vue",
                    //     "ant-design-vue": "AntDesignVue",
                    //     three: "THREE",
                    // },
                    entryFileNames: "[name].js",
                    exports: "named",
                    preserveModules: true,
                    preserveModulesRoot: "packages",
                },
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
            // cssInjectedByJsPlugin({
            //     topExecutionPriority: false,
            //     jsAssetsFilterFunction: function customJsAssetsfilterFunction() {
            //         return true;
            //     },
            // }),
            dts({
                tsconfigPath: "./tsconfig.prod.json",
            }),
            ...pluginsConfig,
        ],
        resolve: resolveConfig,
    };
});
