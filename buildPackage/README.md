<!--
 * @Author: jack.hai
 * @Date: 2024-05-21 18:59:19
 * @LastEditTime: 2024-05-27 16:02:01
 * @Description: 
-->

# bq-design

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
import BqDesign from "bq-design";
import "bq-design/dist/index.css";
import App from './App.vue'

const app = createApp(App)

app.use(BqDesign)
app.mount('#app')

```

## 按需引入 ⭐️

1、您需要使用额外的插件来导入要使用的组件。

首先你需要安装```unplugin-vue-components```

```shell
pnpm add  unplugin-vue-components -D
```

2、复制该解析器

```ts
const BqDesignResolver = () => {
    return {
        type: "component" as const,
        resolve: (name) => {
            if (name.startsWith("Bq")) {
                const pathName = name.slice(2).toLowerCase();
                return {
                    importName: name,
                    from: "bq-design",
                    path: `bq-design/lib/components/${pathName}/index.js`,
                    sideEffects: `bq-design/lib/components/${pathName}/${name.slice(2)}.css`,
                };
            }
        },
    };
};
```

3、在```unplugin-vue-components```引用该解析器

```ts
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import { BqDesignResolver } from 'xxxx-你存储BqDesignResolver的文件'

export default defineConfig({
  // ...
  plugins: [
    Components({
        //...
      resolvers: [ 
         BqDesignResolver(),
      ],
    }),
  ],
})

```


## 手动导入

```bq-design``` 提供了基于 ES Module 的开箱即用的```Tree Shaking``` 功能。

但你需要加载该插件vite-plugin-import，解决本地开发时的动态加载、代码如下：

```ts
export default function importPlugin() {
    const regStr = /(?<!\/\/.*|\/\*[\s\S]*?\*\/\s*)import\s*{\s*([^{}]+)\s*}\s*from\s*['"]bq-design['"]/g;
    return {
        name: "vite-plugin-import",
        enforce: "pre",
        transform: (code: string, id: string) => {
            if (id.endsWith(".vue")) {
                const str = code.replaceAll(regStr, (match, imports) => {
                    const list = imports.split(",");
                    const pathList: string[] = [];
                    list.forEach((item: string) => {
                        item = item.trim();
                        const name = item.slice(2).charAt(0).toLowerCase() + item.slice(3);
                        const str = `import ${item.trim()} from 'bq-design/es/components/${name.trim()}';
                        import 'bq-design/es/components/${name.trim()}/${item.trim().slice(2)}.css'`;
                        pathList.push(str);
                    });
                    return pathList.join(";");
                });
                return str;
            }
            return code;
        },
    };
}

```




::: warning
exclude中必须排除bq-design、因为 bq-design 存在第三方包，vite预加载会报错、当然如果已安装了bq-design所有组件需要的包、则不需要做该处理
:::

```ts{7}
// vite.config.ts
import Components from "unplugin-vue-components/vite";
import ViteImportPlugin from "./src/utils/vite-plugin-import";

export default defineConfig({
    optimizeDeps:{
        exclude: ["bq-design"],
    },
  // ...
  plugins: [
     ViteImportPlugin(),
  ],
})

```

## 关于Webpack构建的项目


支持```完整引入```和```按需导入```，但```手动导入```需要自行配置```babel-plugin-import``` 详情见[文档](https://www.npmjs.com/package/babel-plugin-import)

