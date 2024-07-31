<!--
 * @Author: jack.hai
 * @Date: 2024-07-30 11:49:23
 * @LastEditTime: 2024-07-31 18:50:19
 * @Description:
-->
<template>
    <div class="bq-scrollbar" ref="wrapperRef">
        <div @scroll="handleScroll" className="bq-scrollbar-view_wrap" ref="domRef" :style="{ '--size': barWidth + 'px' }">
            <div className="bq-scrollbar_view" ref="viewBarRef">
                <slot></slot>
            </div>
        </div>
        <Bar v-bind="rightBarProps" ref="rightBarRef" />
        <Bar v-bind="bottomBarProps" ref="bottomBarRef" />
    </div>
</template>

<script setup lang="ts">
import type { ScrollBarProps } from "./type";
import { debounced } from "@/utils/tool.js";
import { getScrollBarWidth } from "./generateBar";
import Bar from "./Bar.vue";
import { DIRECTION_ENUM } from "./type";
defineOptions({
    name: "BqScrollBar",
});
const props = withDefaults(defineProps<ScrollBarProps>(), {
    thumbWrapperSize: 6,
    autoHide: true,
    barMinSize: 8,
});
const { thumbWrapperSize, autoHide, barMinSize } = toRefs(props);
// emotion

const emit = defineEmits<{
    scroll: [event: Event];
}>();

const domRef = ref<HTMLDivElement>();
const wrapperRef = ref<HTMLDivElement>();
const viewBarRef = ref<HTMLDivElement>();
const rightBarRef = ref<{ barRef: HTMLDivElement | undefined }>();
const bottomBarRef = ref<{ barRef: HTMLDivElement | undefined }>();
const directionValue = ref<DIRECTION_ENUM>();
const barWidth = ref(0);
const startMove = ref(0);
const showCoord = reactive({ x: false, y: false });
const size = reactive({ width: 0, height: 0 });
const move = reactive({ x: 0, y: 0 });
const scale = reactive({ x: 0, y: 0 });
const opacityY = ref(0);
const opacityX = ref(0);
let timerY: NodeJS.Timeout | null = null;
let timerX: NodeJS.Timeout | null = null;

const handleScroll = (event: Event) => {
    emit("scroll", event);
    if (domRef.value && event.target) {
        let target = event.target as HTMLDivElement;
        let scaleY = ((domRef.value?.clientHeight - barMinSize.value + thumbWrapperSize.value) / target.scrollHeight).toFixed(4);
        let scaleX = (domRef.value?.clientWidth / target.scrollWidth).toFixed(3);
        let x = Number((target["scrollTop"] * Number(scaleY)).toFixed(3));
        let y = Number((target["scrollLeft"] * Number(scaleX)).toFixed(3));
        Object.assign(scale, { x: Number(scaleX), y: Number(scaleY) });
        Object.assign(move, { y: x <= 0 ? 0 : x, x: y <= 0 ? 0 : y });
    }
};

const handleThumbClick = (event: MouseEvent, type: DIRECTION_ENUM) => {
    directionValue.value = type;
    if (type === DIRECTION_ENUM.VERTICAL) {
        if (rightBarRef.value && rightBarRef.value.barRef) {
            let rightBarDom = rightBarRef.value.barRef?.getBoundingClientRect();
            startMove.value = event.clientY - rightBarDom.top;
            handleStartDrag(event);
        }
    } else {
        if (bottomBarRef.value && bottomBarRef.value.barRef) {
            let bottomBarDom = bottomBarRef.value.barRef.getBoundingClientRect();
            startMove.value = event.clientX - bottomBarDom.left;
            handleStartDrag(event);
        }
    }
};

const handleStartDrag = (event: MouseEvent) => {
    event.stopPropagation();
    document.addEventListener("mousemove", handleMousemove);
    document.addEventListener("mouseup", handleMouseup);
    document.onselectstart = () => false; // 禁止拖动滚动时，将文本滑入选中
};

const handleMousemove = (event: globalThis.MouseEvent) => {
    if (directionValue.value === DIRECTION_ENUM.VERTICAL) {
        if (wrapperRef.value && rightBarRef.value) {
            let wrapperDom = wrapperRef.value.getBoundingClientRect();
            let value = (event.clientY - wrapperDom.top - startMove.value) / scale.y;
            if (domRef.value) {
                domRef.value.scrollTop = value <= 0 ? 0 : value;
            }
        }
    } else {
        if (wrapperRef.value && bottomBarRef.value) {
            let wrapperDom = wrapperRef.value.getBoundingClientRect();
            let value = (event.clientX - wrapperDom.left - startMove.value) / scale.x;
            if (domRef.value) {
                domRef.value.scrollLeft = value <= 0 ? 0 : value;
            }
        }
    }
};

const handleMouseup = () => {
    startMove.value = 0;
    document.removeEventListener("mousemove", handleMousemove);
    document.removeEventListener("mouseup", handleMouseup);
};
/**
 * @description: 获取滚动条 Scrollbar比例
 * @return {*}
 */
const getScrollbarScale = () => {
    let thumb = domRef.value;
    if (thumb && wrapperRef.value) {
        let width = thumb?.clientWidth * (thumb?.clientWidth / thumb?.scrollWidth);
        let height = thumb?.clientHeight * (thumb?.clientHeight / thumb?.scrollHeight);
        let scaleY = (wrapperRef.value?.clientHeight / thumb.scrollHeight).toFixed(3);
        let scaleX = (wrapperRef.value?.clientWidth / thumb.scrollWidth).toFixed(3);
        Object.assign(scale, {
            x: Number(scaleX),
            y: Number(scaleY),
        });
        Object.assign(size, {
            width: width < barMinSize.value ? barMinSize.value : width,
            height: height < barMinSize.value ? barMinSize.value : height,
        });
    }
    if (thumb && viewBarRef.value) {
        Object.assign(showCoord, { x: viewBarRef.value?.scrollWidth > thumb?.clientWidth, y: viewBarRef.value?.scrollHeight > thumb?.clientHeight });
    }
};

const initSize = () => {
    let thumb = domRef.value;
    if (thumb && viewBarRef.value) {
        Object.assign(showCoord, {
            x: viewBarRef.value?.clientWidth > thumb?.clientWidth,
            y: viewBarRef.value?.clientHeight > thumb?.clientHeight,
        });
    }
    debouncedFunction();
};

/**
 * @description: 初始化opacity
 * @return {*}
 */
const initOpacity = () => {
    opacityY.value = getAutoHide("y") ? 1 : 0;
    opacityX.value = getAutoHide("x") ? 1 : 0;
};

const resizeObserver = new ResizeObserver((entries) => {
    debouncedFunction();
});
/**
 * @description: 防抖函数
 * @param {*} debounced
 * @return {*}
 */
const debouncedFunction = debounced(() => {
    getScrollbarScale();
}, 300);

const getAutoHide = (type: "x" | "y") => {
    let res = autoHide.value;
    if (res instanceof Object) {
        return res[type];
    } else {
        return res;
    }
};

/**
 * @description: 监听Y轴滚动条显隐
 * @return {*}
 */
const handleUpdateStatusY = () => {
    if (timerY) {
        clearTimeout(timerY);
        timerY = null;
    }

    if (opacityY.value !== 1) {
        opacityY.value = 1;
    }
    timerY = setTimeout(() => {
        opacityY.value = 0;
    }, 3000);
};

/**
 * @description: 监听X轴滚动条显隐
 * @return {*}
 */
const handleUpdateStatusX = () => {
    if (timerX) {
        clearTimeout(timerX);
        timerX = null;
    }

    if (opacityX.value !== 1) {
        opacityX.value = 1;
    }
    timerX = setTimeout(() => {
        opacityX.value = 0;
    }, 3000);
};

defineExpose({
    view: shallowRef(domRef),
});

onMounted(() => {
    initOpacity();
    barWidth.value = getScrollBarWidth;
    viewBarRef.value && resizeObserver.observe(viewBarRef.value);
    window.addEventListener("resize", initSize);
    initSize();
});

onUnmounted(() => {
    window.removeEventListener("resize", initSize);
    viewBarRef.value && resizeObserver.unobserve(viewBarRef.value);
});

watch(
    () => props.autoHide,
    () => {
        initOpacity();
    },
    {
        deep: true,
    },
);
watch(
    () => move.x,
    () => {
        if (move.x !== 0 && !getAutoHide("x")) {
            handleUpdateStatusX();
        }
    },
    { deep: true },
);
watch(
    () => move.y,
    () => {
        if (move.y !== 0 && !getAutoHide("y")) {
            handleUpdateStatusY();
        }
    },
    { deep: true },
);

/**
 * @description: 右侧滚动条props
 * @return {*}
 */
const rightBarProps = computed(() => ({
    className: "right-scroll",
    thumbWrapperSize: thumbWrapperSize.value,
    showCoord,
    domRef: undefined,
    handleThumbClick,
    direction: DIRECTION_ENUM.VERTICAL,
    styleObj: {
        "--size": thumbWrapperSize.value + "px",
        transform: `translateY(${move.y}px)`,
        height: size.height + "px",
        opacity: unref(opacityY),
    },
}));

/**
 * @description: 底部滚动条props
 * @return {*}
 */
const bottomBarProps = computed(() => ({
    className: "bottom-scroll",
    thumbWrapperSize: thumbWrapperSize.value,
    showCoord,
    direction: DIRECTION_ENUM.HORIZONTAL,
    handleThumbClick,
    styleObj: {
        "--size": thumbWrapperSize.value + "px",
        transform: `translateX(${move.x}px)`,
        width: size.width + "px",
        opacity: unref(opacityX),
    },
}));
</script>

<style lang="scss" scoped>
.bq-scrollbar {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .bq-scrollbar-view_wrap {
        overflow: scroll;
        width: calc(100% + var(--size));
        height: calc(100% + var(--size));
    }
}
</style>
