<!--
 * @Author: jack.hai
 * @Date: 2024-05-16 14:29:02
 * @LastEditTime: 2024-05-20 09:45:30
 * @Description:
-->
<template>
    <div class="basics-pie">
        <Pie v-bind="$attrs" v-on="$props"></Pie>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "BqBasicsPie" });
</script>

<style lang="scss" scoped>
.basics-pie {
    background-color: black;
}
</style>
