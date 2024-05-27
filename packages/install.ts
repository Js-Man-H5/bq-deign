/*
 * @Author: jack.hai
 * @Date: 2024-05-16 10:14:34
 * @LastEditTime: 2024-05-21 16:16:59
 * @Description:
 */
import { App } from "vue";
import * as bqComponents from "./components/index";
export const installer = (app: App) => {
    for (const i in bqComponents) {
        app.use(bqComponents[i as never]);
    }
};
