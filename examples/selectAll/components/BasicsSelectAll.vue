<!--
 * @Author: jack.hai
 * @Date: 2024-05-17 18:17:52
 * @LastEditTime: 2024-05-20 09:45:14
 * @Description:
-->
<template>
    <div>
        <SelectAll style="width: 250px" v-model:value="value" :options="options"></SelectAll>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "BqBasicsSelectAll" });
const value = ref([1, 2]);
const options = [
    { label: "张三", value: 1 },
    { label: "李四", value: 2 },
    { label: "王五", value: 3 },
];
</script>

<style lang="scss" scoped></style>
