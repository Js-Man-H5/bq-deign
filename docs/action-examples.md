<!--
 * @Author: jack.hai
 * @Date: 2024-09-20 09:19:39
 * @LastEditTime: 2024-09-20 09:52:47
 * @Description:
-->

# Action 组件

`意义： 让组件内部像组件一样，自上而下的数据流`

## 基础示例

<BqBasicsAction />

## 代码示例

```vue
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
    console.log("update:useCountAction");
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
```

## API

| 成员       | 说明              | 类型      | 默认值 |
| ---------- | ----------------- | --------- | ------ |
| use-action | 返回对于hooks内容 | `Funtion` | `-`    |

## 插槽

| 插槽名  | 说明              |
| ------- | ----------------- |
| default | 返回对于hooks内容 |
