<!--
 * @Author: eureka
 * @Date: 2022-10-27 11:58:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-05-16 17:14:07
-->
<template>
    <div class="bq-scale-box" ref="scaleContainer" v-dom-resize="setScale">
        <div
            class="scale-box"
            ref="ScaleBox"
            :style="{
                '--scale': scale,
                width: props.width + 'px',
                height: props.height + 'px',
            }">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "BqScaleBox",
});

const props = withDefaults(defineProps<{ width: number; height: number }>(), {
    width: 1920,
    height: 1080,
});

const scale = ref(0);

const scaleContainer = ref();
const getScale = () => {
    // 固定好16：9的宽高比，计算出最合适的缩放比
    const { width, height } = toRefs(props);
    const { clientWidth, clientHeight } = scaleContainer.value;
    const wh = clientHeight / height.value;
    const ww = clientWidth / width.value;
    return ww < wh ? ww : wh;
};
const setScale = () => {
    // 获取到缩放比例，设置它
    console.log("执行了");

    scale.value = getScale();
};
</script>

<style lang="scss">
.bq-scale-box {
    position: relative;
    width: 100%;
    height: 100%;
}
.scale-box {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    display: flex;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    transform: scale(var(--scale)) translate(-50%, -50%);
    flex-direction: column;
    transform-origin: 0 0;

    --scale: 1;
}
</style>
