<!--
 * @Author: jack.hai
 * @Date: 2024-05-20 16:02:52
 * @LastEditTime: 2024-05-28 19:58:43
 * @Description: 
-->
# 数字翻牌器

## 基础示例

<BqNumberAnimate/>

**代码示例**

```vue{[43,44]}
<template>
    <div class="container">
        <BqNumberAnimate :value="number" textMaxWidth="22.5px"></BqNumberAnimate>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "BqNumberAnimate",
});
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
    height: 200px;
    color: white;
    background-color: black;
    :deep(.num-line) {
        font-size: 34px;
        line-height: 1;
        font-weight: bold;
    }
}
</style>

```

::: warning
修改字体大小时，一定要同步修改```line-height```，否则会有意想不到的问题
:::

## API
| 成员      | 说明 | 类型   | 默认值   | 
| ----------- | ----------- |------------|------------|
| value      | 需要传入的数字   |``` number ``` | ```0``` | 
| math      |是否保留小数｜向上或向下取整   |``` ceil｜abs｜floor｜none ``` | ``` ceil ``` | 
| textMaxWidth      | 数字的宽度(解决0-9数字宽度不统一)   |``` string ``` |  ``` 9.6px ``` | 
| duration | 过渡时间| ``` number ```| ``` 1 ```| 
| effect | 过渡效果| ``` string ```| ``` ease-in-out ```| 
