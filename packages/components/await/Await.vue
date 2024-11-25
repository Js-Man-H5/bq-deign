<!--
 * @Author: jack.hai
 * @Date: 2024-11-18 09:35:37
 * @LastEditTime: 2024-11-25 10:01:08
 * @Description:
-->
<template>
    <slot v-if="error && props.useError" name="error" v-bind="{ error }"></slot>
    <slot v-else-if="!onceStatus && useSkeleton" name="skeleton"></slot>
    <Spin v-else-if="props.useLoading" v-bind="props.spinProps" :spinning="loading">
        <slot v-bind="Object.assign({} as T, { data, loading, error, onceStatus })"></slot>
    </Spin>
    <slot v-else v-bind="Object.assign({} as T, { data, loading, error, onceStatus })"></slot>
</template>

<script setup lang="ts" generic="T extends Record<string, any>, E = any">
import type { SlotProps, AwaitProps } from "./type";
import { Spin } from "ant-design-vue";
defineOptions({
    name: "BqAwait",
});

const props = withDefaults(defineProps<AwaitProps<T, E>>(), {
    spinProps: () => ({ tip: "数据正在加载中" }),
    useLoading: true,
    useSkeleton: true,
    useError: true,
});

// 初次加载适用于骨架屏
const onceStatus = ref(false);
const loading = ref(false);
const data = ref<T>();
const error = ref();

const slot = defineSlots<{
    /**
     * @description: 错误插槽
     * @param data 返回对应数据
     * @param loading 返回loading状态
     * @param error 返回错误状态
     * @param onceStatus 初次加载状态
     */
    default: ({ data, loading, error, onceStatus }: SlotProps<T>) => VNode | VNode[];
    /**
     * @description: 骨架屏插槽
     */
    skeleton: () => VNode | VNode[];
    /**
     * @description: 错误插槽
     */
    error: () => VNode | VNode[];
}>();

/**
 * @description: 处理接口数据
 * @return {*}
 */
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
        console.log("end", loading.value, error.value);
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
