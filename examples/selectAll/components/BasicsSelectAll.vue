<!--
 * @Author: jack.hai
 * @Date: 2024-05-17 18:17:52
 * @LastEditTime: 2024-07-31 19:30:48
 * @Description:
-->
<template>
    <div>
        <SelectAll style="width: 250px" :filterOption="filterOption" v-model:value="value" :options="options"></SelectAll>
        <Select showSearch style="width: 250px" :filterOption="filterOption" v-model:value="value" :options="options"></Select>
    </div>
</template>

<script setup lang="ts">
import { Select } from "ant-design-vue";
defineOptions({ name: "BqBasicsSelectAll" });
const value = ref([1, 2]);
const options = [
    { label: "张三", value: 1 },
    { label: "李四", value: 2 },
    { label: "王五", value: 3 },
];
const filterOption = (input: string, option: any) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>

<style lang="scss" scoped></style>
