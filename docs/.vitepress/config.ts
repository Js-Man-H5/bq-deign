/*
 * @Author: jack.hai
 * @Date: 2024-05-14 15:30:17
 * @LastEditTime: 2024-11-18 15:53:26
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
                    { text: "BqPie 3D饼图", link: "/pie-examples" },
                    { text: "BqScale 大屏适配容器", link: "/scale-box-examples" },
                    { text: "BqSelectAll 全选筛选框", link: "/select-examples" },
                    { text: "BqNumberAnimate 数字翻牌器", link: "/number-animate-examples" },
                    { text: "BqScrollBar 自定义滚动条", link: "/scroll-bar-examples" },
                    { text: "BqVisibleComponent 可视组件", link: "/view-examples" },
                    { text: "BqAction 性能优化", link: "/action-examples" },
                    { text: "BqAwait 异步加载", link: "/await-examples" },
                    { text: "更新日志", link: "/update-log-examples" },
                    // { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "http://git.ibaiqiu.com/jack.hai/bq-design" }],
    },
});
