/*
 * @Author: jack.hai
 * @Date: 2024-05-16 15:54:29
 * @LastEditTime: 2024-05-16 16:13:10
 * @Description:
 */
import ResizeObserver from "resize-observer-polyfill";
// v-dom-resize 指令，绑定在dom元素上即可，监听dom尺寸变化，调用传入方法
import type { ObjectDirective } from "vue";
export const domResize: ObjectDirective = {
    mounted(el, binding) {
        const resizeFun = (observer: ResizeObserverEntry[]) => {
            binding.value(observer);
        };
        const observer = new ResizeObserver(resizeFun);
        observer.observe(el);
        el._observer = observer;
    },
    unmounted(el) {
        el._observer.disconnect();
        el._observer = null;
        delete el._observer;
    },
};
