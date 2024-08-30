<!--
 * @Author: jack.hai
 * @Date: 2024-07-31 09:09:15
 * @LastEditTime: 2024-08-27 17:35:01
 * @Description:
-->
<template>
    <div :class="className" :style="{ '--size': thumbWrapperSize + 'px', display: showCoord.y ? 'block' : 'none' }">
        <div
            class="scroll-bar"
            ref="barRef"
            @mousedown="
                (event) => {
                    handleThumbClick(event, direction);
                }
            "
            :style="styleObj"></div>
    </div>
</template>

<script setup lang="ts">
import type { BarProps } from "./type";
defineOptions({ name: "Bar" });
const props = defineProps<BarProps>();
const barRef = ref<HTMLDivElement>();
const { className, thumbWrapperSize, showCoord, handleThumbClick, styleObj, direction } = toRefs(props);
defineExpose({
    barRef: shallowRef(barRef),
});
</script>

<style lang="scss" scoped>
.bottom-scroll {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--size);
    background-color: transparent;
    .scroll-bar {
        width: 0;
        height: 100%;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 20%);
        opacity: 0;
        cursor: pointer;
    }
}
.right-scroll {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    width: var(--size);
    height: 100%;
    background-color: transparent;
    .scroll-bar {
        width: 100%;
        height: 0;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 20%);
        opacity: 0;
        transition: opacity 0.5s;
        cursor: pointer;
    }
}
</style>
