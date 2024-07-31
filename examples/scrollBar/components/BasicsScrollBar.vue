<!--
 * @Author: jack.hai
 * @Date: 2024-07-31 17:25:03
 * @LastEditTime: 2024-07-31 19:32:51
 * @Description:
-->
<template>
    <div style="position: relative; width: 688px; height: 500px; border: 1px solid aqua">
        <ScrollBar v-bind="$attrs" v-on="$props" ref="domRef">
            <div>
                <div style="width: 2000px">测试-demo-测试-demo-测试-demo-测试-demo-测试-demo-测试-demo</div>
                <div class="item" v-for="(item, key) in Array(500)" :key="key">{{ key }}{{ item }}</div>
                <div>555</div>
            </div>

            <BackTop
                v-if="$attrs.backTop"
                :visibilityHeight="100"
                :target="
                    () => {
                        return domRef?.view as HTMLDivElement;
                    }
                "></BackTop>
        </ScrollBar>
    </div>
</template>

<script setup lang="ts">
import { BackTop } from "ant-design-vue";
const domRef = ref<{ view: HTMLDivElement }>();
defineOptions({
    name: "BqBasicsScrollBar",
});
</script>

<style lang="scss" scoped>
.item {
    margin-bottom: 16px;
    height: 40px;
    color: white;
    background-color: aqua;
    line-height: 40px;
}
:deep(.ant-float-btn) {
    position: absolute;
    right: 20px;
    bottom: 20px;
}
</style>
