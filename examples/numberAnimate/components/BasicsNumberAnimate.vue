<!--
 * @Author: jack.hai
 * @Date: 2024-05-20 10:59:24
 * @LastEditTime: 2024-05-20 18:10:09
 * @Description:
-->
<template>
    <div class="container">
        <NumberAnimate :value="number" textMaxWidth="22.5px"></NumberAnimate>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "BqNumberAnimate",
});
const number = ref(5216731711.211);
let flag = 0;
let start = 0;
const updateNumber = (timestamp?: number) => {
    if (timestamp) {
        const elapsed = timestamp - start;
        if (elapsed >= 2000) {
            start = timestamp;
            number.value += 1000;
        }
    }

    flag = requestAnimationFrame(updateNumber);
};
onMounted(() => {
    updateNumber();
});

onUnmounted(() => {
    cancelAnimationFrame(flag);
});
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    color: white;
    background-color: black;
    :deep(.num-line) {
        font-size: 34px;
        line-height: 34px;
        font-weight: bold;
    }
}
</style>
