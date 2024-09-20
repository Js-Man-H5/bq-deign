/*
 * @Author: jack.hai
 * @Date: 2024-05-14 15:30:17
 * @LastEditTime: 2024-08-27 14:49:57
 * @Description:
 */
import { defineConfig } from "vitepress";
import { resolveConfig, pluginsConfig } from "../../scripts/preview.ts";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "BQ-Design",
    description: "组件库",
    vite: {
        server: {
            port: 5175,
        },
        resolve: resolveConfig,
        plugins: pluginsConfig,
    },
    base: "/bq-design",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/pie-examples" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "操作指南", link: "/guide-examples" },
                    { text: "3D饼图", link: "/pie-examples" },
                    { text: "大屏适配", link: "/scale-box-examples" },
                    { text: "SelectAll", link: "/select-examples" },
                    { text: "数字翻牌器", link: "/number-animate-examples" },
                    { text: "ScrollBar", link: "/scroll-bar-examples" },
                    { text: "可视组件", link: "/view-examples" },
                    { text: "Action组件", link: "/action-examples" },
                    // { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "http://git.ibaiqiu.com/jack.hai/bq-design" }],
    },
});
