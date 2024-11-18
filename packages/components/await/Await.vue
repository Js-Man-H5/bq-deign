<!--
 * @Author: jack.hai
 * @Date: 2024-11-18 09:35:37
 * @LastEditTime: 2024-11-18 16:03:15
 * @Description:
-->
<template>
    <slot v-if="error" name="error" v-bind="{ error }"></slot>
    <slot v-else-if="!onceStatus" name="skeleton"></slot>
    <Spin v-else v-bind="props.spinProps" :spinning="loading">
        <slot v-bind="Object.assign({} as T, { data, loading })"></slot>
    </Spin>
</template>

<script setup lang="ts" generic="T extends Record<string, any>, E = any">
import type { SlotProps } from "./type";
import type { SpinProps } from "ant-design-vue";
import { Spin } from "ant-design-vue";
defineOptions({
    name: "BqAwait",
});

const props = withDefaults(
    defineProps<{
        request: (options?: E) => Promise<T>;
        spinProps?: SpinProps;
        options?: E;
    }>(),
    {
        spinProps: () => ({ tip: "数据正在加载中" }),
    },
);

// 初次加载适用于骨架屏
const onceStatus = ref(false);
const loading = ref(false);
const data = ref<T>();
const error = ref();

const slot = defineSlots<{
    default: ({ data, loading }: SlotProps<T>) => VNode | VNode[];
    skeleton: () => VNode | VNode[];
    error: () => VNode | VNode[];
}>();

const handleRequest = async () => {
    if (error) {
        error.value = null;
    }
    loading.value = true;
    try {
        let res = await props.request(props.options);
        data.value = res;
    } catch (err) {
        error.value = err;
    } finally {
        loading.value = false;
        onceStatus.value = true;
    }
};

onMounted(handleRequest);

props.options &&
    watch(
        () => props.options,
        () => {
            handleRequest();
        },
        { deep: true },
    );
</script>

<style lang="scss" scoped></style>
