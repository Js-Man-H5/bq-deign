<!--
 * @Author: jack.hai
 * @Date: 2024-05-14 15:30:17
 * @LastEditTime: 2024-05-23 19:16:31
 * @Description: 
-->
# 3D 饼图
::: tip
使用该组件需要提前安装threeJs、当前所用版本0.164.1
:::
## 圆环饼图

<BqBasicsPie  />

**代码示例**
```vue
<template>
  <BqPie/>
</template>
```

## 饼图
<BqBasicsPie :innerRadius="0" />

**代码示例**

```vue{4}
<template>
  <BqPie :innerRadius="0"/>
</template>
```

## 隐藏中间提示
<BqBasicsPie :centerTooltip="false"  />

**代码示例**
```vue{4}
<template>
  <BqPie :centerTooltip="false" />
</template>
```

## 增加背景图
<BqSlotPie></BqSlotPie>

**代码示例**
```vue
<template>
    <div class="slot-pie">
        <BqPie>
            <template v-slot:footer>
                <div class="footer">
                    <img :src="imgSrc" />
                </div>
            </template>
        </BqPie>
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

```


## API

| 成员      | 说明 | 类型 | 
| ----------- | ----------- |--------------|
| data      | 需要展示的数据   |``` Array<data: {label: string;value: number;}> ``` | 
| colorList   | 饼图颜色      |``` string[] ```|
| innerRadius   | 内环半径      |``` number ```|
| outerRadius   | 外环半径      |``` number ```|
|depth | 饼图深度 |``` number ```|
|centerTooltip | 中间提示 |``` boolean ```|
|footer | 插槽 |``` - ```|
