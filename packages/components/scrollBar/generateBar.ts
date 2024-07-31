/*
 * @Author: jack.hai
 * @Date: 2024-07-31 10:51:28
 * @LastEditTime: 2024-07-31 11:31:38
 * @Description:
 */
export const getScrollBarWidth = (() => {
    // 创建一个用于测试的元素
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.position = "absolute";
    outer.style.top = "-9999px";
    document.body.appendChild(outer);

    // 获取元素的内部宽度
    const widthNoScroll = outer.offsetWidth;
    // 强制显示滚动条
    outer.style.overflow = "scroll";
    // 创建一个内部元素
    const inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    // 获取带有滚动条的宽度
    const widthWithScroll = inner.offsetWidth;
    // 移除测试元素
    outer.parentNode!.removeChild(outer);
    return widthNoScroll - widthWithScroll;
})();
