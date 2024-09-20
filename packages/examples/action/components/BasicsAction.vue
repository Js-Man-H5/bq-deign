<!--
 * @Author: jack.hai
 * @Date: 2024-09-05 18:44:10
 * @LastEditTime: 2024-09-20 09:56:12
 * @Description:
-->
<template>
    <div>
        <Action :use-action="useCountAction" #default="{ count, add }">
            <h1>{{ count.value }}</h1>
            <Button @click="add">add</Button>
        </Action>
        <!-- 隔离开 -->
        <Action :use-action="useCount1Action" #default="{ count, add }">
            <h1>{{ count.value }}</h1>
            <Button @click="add">add</Button>
        </Action>
    </div>
</template>

<script setup lang="ts">
import { Button } from "ant-design-vue";

defineOptions({
    name: "BqBasicsAction",
});
function useCountAction() {
    const count = ref(0);
    function add() {
        count.value += 1;
    }

    return { count, add };
}

function useCount1Action() {
    const count = ref(0);
    function add() {
        count.value += 1;
    }

    return { count, add };
}
</script>

<style lang="scss" scoped></style>
