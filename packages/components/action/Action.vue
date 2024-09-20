<!--
 * @Author: jack.hai
 * @Date: 2024-09-05 17:43:48
 * @LastEditTime: 2024-09-18 15:43:18
 * @Description:
-->
<template>
    <slot v-bind="Object.assign({} as T, action)"></slot>
</template>
<script setup lang="ts" generic="T extends Record<string, any>, E = any">
import type { VNode } from "vue";
defineOptions({
    name: "BqAction",
});

const props = defineProps<{
    useAction: (options?: E) => T;
    options?: E;
}>();

const slot = defineSlots<{
    default: (action: T) => VNode | VNode[];
}>();
const action = props.useAction(props?.options);
</script>

<style lang="scss" scoped></style>
