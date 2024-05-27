<!--
 * @Author: jack.hai
 * @Date: 2024-05-16 14:29:02
 * @LastEditTime: 2024-05-22 11:17:45
 * @Description:
-->
<template>
    <div class="slot-pie">
        <Pie v-bind="$attrs" v-on="$props">
            <template v-slot:footer>
                <div class="footer">
                    <img :src="imgSrc" />
                </div>
            </template>
        </Pie>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "BqSlotPie" });
const imgSrc = "https://tqa.oss-cn-shanghai.aliyuncs.com/val/024af179-9e6d-4ce1-84c6-86a2ddb42ca5.png";
</script>

<style lang="scss" scoped>
.slot-pie {
    background-color: black;
    :deep(.three-pie-main) {
        z-index: 2;
    }
    .footer {
        position: absolute;
        top: 17%;
        left: 50%;
        z-index: 1;
        width: 50%;
        transform: translateX(-50%);
    }
}
</style>
