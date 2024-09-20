/*
 * @Author: jack.hai
 * @Date: 2024-05-16 14:46:40
 * @LastEditTime: 2024-09-05 17:41:55
 * @Description:
 */
import type { DefineComponent, Plugin } from "vue";
const modules = import.meta.glob("./*/index.ts");

let components: { [k: string]: DefineComponent<{}, {}, any> & Plugin } = {};

const loadComponents = async () => {
    for (let i in modules) {
        let data = (await modules[i]()) as { [key: string]: DefineComponent<{}, {}, any> & Plugin };
        for (let k in data) {
            let name = data[k].name;
            if (name) {
                components[name] = data[k];
            }
        }
    }
    return components;
};

export default loadComponents();
