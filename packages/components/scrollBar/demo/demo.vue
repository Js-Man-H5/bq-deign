<!--
 * @Author: jack.hai
 * @Date: 2024-07-31 10:13:49
 * @LastEditTime: 2024-08-01 15:31:12
 * @Description:
-->
<template>
    <div style="margin-right: 100px; min-width: 500px; height: 500px; background-color: aqua">
        <Scrollbar :autoHide="{ x: true, y: false }">
            <div>
                <div>
                    12222222222222222223112121212121212121212222122222222222222221121212121212121212122221222222222222222211212121212121212121222212222222222222222112121212121212121212222122222222222222221121212121212121212122221222222222222222211212121212121212121222212222222222222222*
                </div>
                <div v-for="(item, key) in Array(500)" :key="key" class="item">{{ key }}{{ item }}</div>
                <div>555</div>
            </div>
        </Scrollbar>
    </div>
</template>

<script setup lang="ts">
import Scrollbar from "../ScrollBar.vue";
</script>

<style lang="scss" scoped>
.item {
    margin-bottom: 16px;
    height: 40px;
    background-color: beige;
    line-height: 40px;
}
</style>
