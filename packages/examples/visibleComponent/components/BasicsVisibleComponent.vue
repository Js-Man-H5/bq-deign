<!--
 * @Author: jack.hai
 * @Date: 2024-08-27 11:47:33
 * @LastEditTime: 2024-11-18 16:19:39
 * @Description:
-->
<template>
    <div class="bq-demo-visible-component" style="display: grid">
        <ScrollBar>
            <div class="bq-demo-visible_content">
                <div style="height: 50px; background-color: aqua" v-for="(item, key) in Array(200)" :key="key">
                    <VisibleComponent>
                        <template v-slot:default="{ visible }">
                            <Spin :spinning="!visible">
                                <div style="padding: 0 16px; height: 50px; line-height: 50px">{{ key }}{{ item ?? "" }}</div>
                            </Spin>
                        </template>
                    </VisibleComponent>
                </div>
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
    .bq-demo-visible_content {
        display: grid;
        gap: 16px 16px;
        grid-template-columns: repeat(2, auto);
        div {
            height: 50px;
        }
    }
}
</style>
