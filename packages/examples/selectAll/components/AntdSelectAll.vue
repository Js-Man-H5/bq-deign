<!--
 * @Author: jack.hai
 * @Date: 2024-05-20 09:51:32
 * @LastEditTime: 2024-09-18 14:49:45
 * @Description:
-->
<template>
    <SelectAll style="width: 250px" :filterOption="filterOption" v-model:value="value" :options="options"></SelectAll>
</template>

<script setup lang="ts">
defineOptions({ name: "BqAntdSelectAll" });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const filterOption = (input: string, option: any) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const value = ref([1, 2]);
const options = [
    { label: "张三", value: 1 },
    { label: "张四", value: 4 },
    { label: "李四", value: 2 },
    { label: "王五", value: 3 },
];
</script>

<style lang="scss" scoped></style>
