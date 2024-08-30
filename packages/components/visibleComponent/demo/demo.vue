<!--
 * @Author: jack.hai
 * @Date: 2024-08-27 10:48:18
 * @LastEditTime: 2024-08-27 14:39:52
 * @Description:
-->
<template>
    <div style="overflow-y: auto; width: 200px; height: 500px">
        <div v-for="(item, key) in Array(200)" :key="key">{{ key }}{{ item ?? "" }}</div>
        <BqVisibleComponent>
            <template #default="{ visible }">
                <div v-if="visible">显示</div>
                <div v-else>隐藏</div>
            </template>
        </BqVisibleComponent>
    </div>
</template>

<script setup lang="ts">
import BqVisibleComponent from "../VisibleComponent.vue";
</script>

<style lang="scss" scoped></style>
