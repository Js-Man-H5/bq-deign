/*
 * @Author: jack.hai
 * @Date: 2024-05-14 16:49:59
 * @LastEditTime: 2024-05-22 13:49:49
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
/* 样式文件 */
import router from "./router";
import { domResize } from "./directives/domResize";
import "./theme-chalk/global.scss";
const app = createApp(App);
app.directive("domResize", domResize);
app.use(router).mount("#app");
