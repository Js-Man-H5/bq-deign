/*
 * @Author: jack.hai
 * @Date: 2024-05-16 11:44:01
 * @LastEditTime: 2024-05-24 09:37:15
 * @Description:
 */
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import progress from "vite-plugin-progress";
import { resolve } from "path";
const pluginsConfig = [
    progress({ srcDir: "packages" }),
    AutoImport({
        include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
            /\.md$/, // .md
        ],
        // { "@/api/index": [["*", "api"]] }, { "@/store": [["default", "store"]] }
        imports: ["vue", "vue-router", "pinia"],
        dirs: ["../packages/hooks"],
        dts: "../packages/auto-imports.d.ts",
        eslintrc: {
            enabled: false,
            filepath: "./.eslintrc-auto-import.json",
            globalsPropValue: true,
        },
    }),
    Components({
        dts: "../packages/components.d.ts",
        dirs: ["../packages/components"],
    }),
];
const resolveConfig = {
    alias: [
        {
            find: "@",
            replacement: resolve(__dirname, "../packages"),
        },
        {
            find: "@examples",
            replacement: resolve(__dirname, "../examples"),
        },
        {
            find: "@theme-chalk",
            replacement: resolve(__dirname, "../packages/theme-chalk"),
        },
        {
            find: "public",
            replacement: resolve(__dirname, "../public"),
        },
    ],
};
export { resolveConfig, pluginsConfig };
