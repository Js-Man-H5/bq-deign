<!--
 * @Author: jack.hai
 * @Date: 2024-05-23 09:02:13
 * @LastEditTime: 2024-05-23 09:51:44
 * @Description: 
-->
# 操作指南

## 使用包管理器

**我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 bq-design**

```
# 选择一个你喜欢的包管理器
# NPM
$ npm install bq-design --save

# Yarn
$ yarn add bq-design

# pnpm
$ pnpm install bq-design

```

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便,但你需要提前下载好相关组件的依赖。

```ts
// main.ts
import { createApp } from 'vue'
import BqDesign from 'bq-design'
import 'bq-design/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(BqDesign)
app.mount('#app')

```

## 手动导入

```vue
<template>
    <div>
        <BqButton></BqButton>
    </div>
</template>
<script setup lang="ts">
import BqButton from "bq-design/components/button";
</script>
```

暂不支持局部引入样式所以需要全局引入

```ts{4}
// main.ts
import { createApp } from 'vue'
import BqDesign from 'bq-design'
import 'bq-design/style.css'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')

```


## 按需引入
您需要使用额外的插件来导入要使用的组件、**但是你需要提前准备好该组件库所需要的所有前置插件**

```
npm install -D unplugin-vue-components
```

**Vite**

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  // ...
  plugins: [
    Components({
      resolvers: [ 
        (componentName) => {if (componentName.startsWith("Bq")) return { name: componentName, from: "bq-design" };}
      ],
    }),
  ],
})
```
