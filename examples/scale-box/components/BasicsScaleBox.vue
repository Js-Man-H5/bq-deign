<!--
 * @Author: jack.hai
 * @Date: 2024-05-16 16:24:43
 * @LastEditTime: 2024-05-20 09:45:22
 * @Description:
-->
<template>
    <div class="basics-scale-box">
        <ScaleBox>
            <img src="https://tqa.oss-cn-shanghai.aliyuncs.com/val/d73b649b-cf14-4475-8b91-bdd26ef35367.jpeg" alt="" />
        </ScaleBox>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "BqBasicsScaleBox" });
</script>

<style lang="scss" scoped>
.basics-scale-box {
    display: block;
    width: 500px;
    height: 300px;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
