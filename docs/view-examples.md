<!--
 * @Author: jack.hai
 * @Date: 2024-08-27 14:49:30
 * @LastEditTime: 2024-08-27 19:14:30
 * @Description:
-->

# 可视组件

::: tip
用来判断当前组件是否出现在可视区域、适用于懒加载
该组件基于 `IntersectionObserver`方法支持 `IntersectionObserver`的全部参数
:::

## 基础示例

<BqBasicsVisibleComponent />

**代码示例**

```vue
<template>
    <div class="bq-demo-visible-component" style="display: grid">
        <BqScrollBar>
            <div style="height: 50px; background-color: aqua" v-for="(item, key) in Array(200)" :key="key">
                <BqVisibleComponent>
                    <template v-slot:default="{ visible }">
                        <Spin :spinning="!visible"> {{ key }}{{ item ?? "" }} </Spin>
                    </template>
                </BqVisibleComponent>
            </div>
        </BqScrollBar>
    </div>
</template>

<script setup lang="ts">
import { Spin } from "ant-design-vue";
defineOptions({ name: "BqBasicsVisibleComponent" });
</script>

<style lang="scss" scoped>
.bq-demo-visible-component {
    width: 100%;
    height: 500px;
    :deep(.bq-scrollbar_view) {
        display: grid;
        gap: 16px 16px;
        grid-template-columns: repeat(2, auto);
    }
}
</style>
```

## API

| 成员    | 说明           | 类型                   |
| ------- | -------------- | ---------------------- |
| options | 需要展示的数据 | `IntersectionObserver` |

## 插槽

| 插槽名                                    | 类型           | 说明 |
| ----------------------------------------- | -------------- | ---- |
| default ｜`v-slot:default="{ visible }" ` | 自定义默认内容 |
