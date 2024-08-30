<!--
 * @Author: jack.hai
 * @Date: 2024-05-20 09:34:29
 * @LastEditTime: 2024-08-27 19:08:40
 * @Description:
-->

# Antd Select 全选

::: tip
该功能是基于ant-design-vue `Select`组件 的二次封装

使用该组件需要提前安装ant-design-vue、当前所用版本4.1.2
:::

## 基础示例

<BqBasicsSelectAll/>

**代码示例**

```vue
<template>
    <div>
        <BqSelectAll style="width: 250px" v-model:value="value" :options="options"></BqSelectAll>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: "BqBasicsSelectAll" });
const value = ref([1, 2]);
const options = [
    { label: "张三", value: 1 },
    { label: "李四", value: 2 },
    { label: "王五", value: 3 },
];
</script>

<style lang="scss" scoped></style>
```

## 支持原Antd 所有 API

<BqAntdSelectAll/>

**代码示例**

```vue
<template>
    <SelectAll style="width: 250px" :filterOption="filterOption" v-model:value="value" :options="options"></SelectAll>
</template>

<script setup lang="ts">
defineOptions({ name: "BqAntdSelectAll" });
const filterOption = (input: string, option: any) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const value = ref([1, 2]);
const options = [
    { label: "张三", value: 1 },
    { label: "李四", value: 2 },
    { label: "王五", value: 3 },
];
</script>

<style lang="scss" scoped></style>
```

::: tip
具体API详情见[官网](https://www.antdv.com/components/select-cn).
:::
