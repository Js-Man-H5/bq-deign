<!--
 * @Author: jack.hai
 * @Date: 2024-05-16 16:35:05
 * @LastEditTime: 2024-05-23 10:10:30
 * @Description: 
-->
# 大屏适配容器

## 基础示例
<BqBasicsScaleBox/>

**代码示例**

```vue
<template>
    <div class="basics-scale-box">
        <ScaleBox>
            你的html内容
            <img src="https://tqa.oss-cn-shanghai.aliyuncs.com/val/d73b649b-cf14-4475-8b91-bdd26ef35367.jpeg" alt="" />
        </ScaleBox>
    </div>
</template>
```
```scss
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
```

## API

| 成员      | 说明 | 类型 | 默认值| 
| ----------- | ----------- |--------------|----| 
| width      | 适配宽度   |``` number ``` | ```1920```| 
| height   | 适配高度      |``` number ```| ```1080``` | 
