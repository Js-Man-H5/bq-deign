/*
 * @Author: jack.hai
 * @Date: 2024-05-14 15:49:28
 * @LastEditTime: 2024-05-23 14:42:40
 * @Description:
 */
import Theme from "vitepress/theme";
import { App } from "vue";
import * as Components from "@examples/index";
import { domResize } from "@/directives/domResize";
import { h } from "vue";
export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            "home-hero-image": () => h(Components["BqBasicsDocsImage"]),
        });
    },
    enhanceApp({ app }: { app: App }) {
        app.directive("domResize", domResize);
        for (let i in Components) {
            app.use(Components[i as never]);
        }
    },
};
