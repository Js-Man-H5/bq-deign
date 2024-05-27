<!--
 * @Author: jack.hai
 * @Date: 2024-05-20 10:59:24
 * @LastEditTime: 2024-05-20 18:05:43
 * @Description:
-->
<template>
    <div class="container">
        <NumberAnimate :value="number"></NumberAnimate>
    </div>
</template>

<script setup lang="ts">
import NumberAnimate from "./NumberAnimate.vue";
const number = ref(52167317);
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
    width: 100vw;
    height: 100vh;

    // :deep(.num-line) {
    //     font-size: 16px;
    //     font-weight: bold;
    // }
}
</style>
