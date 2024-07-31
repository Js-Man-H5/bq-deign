<!--
 * @Author: jack.hai
 * @Date: 2024-07-31 17:28:21
 * @LastEditTime: 2024-07-31 19:16:47
 * @Description:
-->

# 自定义滚动条

<!-- :autoHide="{ x: true, y: false }" :barMinSize="16" -->

## 基础示例

<BqBasicsScrollBar  />

**代码示例**

```vue
<template>
    <div>
        <BqScrollBar />
    </div>
</template>
```

## X轴超出一直显示、Y轴自动隐藏

<BqBasicsScrollBar :autoHide="{ x: true, y: false }"  />

**代码示例**

```vue
<template>
    <div>
        <BqScrollBar :autoHide="{ x: true, y: false }" />
    </div>
</template>
```

::: warning
Scrollbar组件<父元素>必须设置宽高
:::

## 支持与其他组件库配合一键回到顶部

<BqBasicsScrollBar :backTop="true"   />

```vue{[14,23,3]}
<template>
    <div style="position: relative; width: 688px; height: 500px; border: 1px solid #1890ff">
        <ScrollBar v-bind="$attrs" v-on="$props" ref="domRef">
            <div>
                <div style="width: 2000px">测试-demo-测试-demo-测试-demo-测试-demo-测试-demo-测试-demo</div>
                <div class="item" v-for="(item, key) in Array(500)" :key="key">{{ key }}{{ item }}</div>
                <div>555</div>
            </div>

            <BackTop
                :visibilityHeight="100"
                :target="
                    () => {
                        return domRef?.view as HTMLDivElement;
                    }
                "></BackTop>
        </ScrollBar>
    </div>
</template>

<script setup lang="ts">
import { BackTop } from "ant-design-vue";
const domRef = ref<{ view: HTMLDivElement }>();
defineOptions({
    name: "BqBasicsScrollBar",
});
</script>

<style lang="scss" scoped>
.item {
    margin-bottom: 16px;
    height: 40px;
    background-color: beige;
    line-height: 40px;
}
:deep(.ant-float-btn) {
    position: absolute;
    right: 20px;
    bottom: 20px;
}
</style>

```

## API

| 成员             | 说明                                                       | 类型                                  | 默认值 |
| ---------------- | ---------------------------------------------------------- | ------------------------------------- | ------ |
| thumbWrapperSize | 滚动条宽度                                                 | `number`                              | `6`    |
| autoHide         | 控制滚动条线上与隐藏，true 代表显示滚动条，false隐藏滚动条 | `boolean｜{ x: boolean; y: boolean }` | `true` |
| barMinSize       | 滚动条最小尺寸                                             | `number`                              | `8`    |

## 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
