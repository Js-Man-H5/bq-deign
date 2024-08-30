/*
 * @Author: jack.hai
 * @Date: 2024-05-14 15:49:28
 * @LastEditTime: 2024-08-30 10:02:58
 * @Description:
 */
import Theme from "vitepress/theme";
import { App } from "vue";
import asyncComponents from "@examples/index";
// import { BqBasicsButton } from "@examples/button/index";
import { domResize } from "@/directives/domResize";
import { h, defineAsyncComponent } from "vue";

const BqBasicsDocsImage = defineAsyncComponent(() => asyncComponents.then((Components) => Components["BqBasicsDocsImage"]));
export default {
    ...Theme,
    Layout() {
        return h(Theme.Layout, null, {
            "home-hero-image": () => {
                return h(BqBasicsDocsImage);
            },
        });
    },
    async enhanceApp({ app }: { app: App }) {
        let Components = await asyncComponents;
        app.directive("domResize", domResize);
        for (let i in Components) {
            app.use(Components[i]);
        }
    },
};
