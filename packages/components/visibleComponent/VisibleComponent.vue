<!--
 * @Author: jack.hai
 * @Date: 2024-08-27 10:47:29
 * @LastEditTime: 2024-08-27 11:21:00
 * @Description:
-->
<template>
    <div ref="elementRef">
        <slot :visible="visible"></slot>
    </div>
</template>

<script setup lang="ts">
import type { VisibleComponentProps } from "./type";
const props = defineProps<VisibleComponentProps>();
const { options } = toRefs(props);
const elementRef = ref<HTMLDivElement>();
/**
 * 判断当前组件是否出现在可视区域
 */
const visible = ref(false);
let intersectionObserver: IntersectionObserver | null = null;

defineOptions({
    name: "BqVisibleComponent",
});

onMounted(() => {
    let intersectionObserver = new IntersectionObserver((entries) => {
        if (!visible.value) {
            let data = entries[entries.length - 1];
            if (data.intersectionRatio <= 0) return;
            visible.value = true;
        }
    }, options.value);
    elementRef.value && intersectionObserver.observe(elementRef.value);
});

onUnmounted(() => {
    elementRef.value && intersectionObserver!.observe(elementRef.value);
});
</script>
