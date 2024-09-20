<!--
 * @Author: jack.hai
 * @Date: 2024-08-27 11:47:33
 * @LastEditTime: 2024-08-27 16:27:17
 * @Description:
-->
<template>
    <div class="bq-demo-visible-component" style="display: grid">
        <ScrollBar>
            <div style="height: 50px; background-color: aqua" v-for="(item, key) in Array(200)" :key="key">
                <VisibleComponent>
                    <template v-slot:default="{ visible }">
                        <Spin :spinning="!visible"> {{ key }}{{ item ?? "" }} </Spin>
                    </template>
                </VisibleComponent>
            </div>
        </ScrollBar>
    </div>
</template>

<script setup lang="ts">
import { Spin } from "ant-design-vue";
defineOptions({ name: "BqBasicsVisibleComponent" });
</script>

<style lang="scss" scoped>
.bq-demo-visible-component {
    width: 100%;
    height: 500px;
    :deep(.bq-scrollbar_view) {
        display: grid;
        gap: 16px 16px;
        grid-template-columns: repeat(2, auto);
    }
}
</style>
