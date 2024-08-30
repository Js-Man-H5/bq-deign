<!--
 * @Author: jack.hai
 * @Date: 2022-11-22 10:22:48
 * @LastEditTime: 2024-08-27 11:40:40
 * @Description:
-->

# Vue 3 + TypeScript + Vite

## vsCode 安装插件

vsCode插件市场查找 @recommended 一键安装相应插件
EsLint@2.4.4、StyleLint@1.4.0、Vue - Official@2.0.16、Prettier@10.4.0

## 安装依赖

pnpm install

## 安装 husky

pnpm prepare

## git设置大小写文件区分

git config core.ignorecase true

## eslint 不生效？

pnpm lint

## 项目启动

pnpm start

## 组件格式

    └── 组件名称 xxxx
        ├── components ---子组件
        ├── xxx.hooks.[js|ts] ---hooks
        ├── xxxx.vue ---默认都为index
        ├── public.[js|ts|vue] ---用来存放静态变量或者纯函数（非必须）
        ├── style.scss ---样式文件
        └── type.ts ---ts类型文件

<font color=red ><strong> 注意: components下的文件夹或者文件首字母必须大写</strong></font>

> 存在多个子文件情况

    └── components xxxx
        └── Chart ---子组件名称文件夹
            ├── xxx.hooks.[js|ts] ---hooks
            ├── Chart.vue ---默认都为index
            ├── public.[js|ts|vue] ---用来存放静态变量或者纯函数（非必须）
            ├── style.scss ---样式文件
            └── type.ts ---ts类型文件

> 单个文件情况

     └── components xxxx
        └── Chart.vue ---子组件名称

## 开发规范

1. 请求接口方法名全部用 get | set
2. 操作方法名 handle
3. 计算方法名 compute-一定要存在返回值
4. 渲染组件方法名 render
5. 初始化 init

## 分支规范

1. master_imp 主分支
2. develop 开发分支
3. feature/xxx 功能分支
4. fix/xxx 修复分支
5. hotfix/xxx 紧急修复分支
6. docs/xxx 文档分支
7. refactor/xxx 重构分支
8. style/xxx 样式分支
9. test/xxx 测试分支
10. chore/xxx 构建分支
11. ci/xxx 持续集成分支
12. build/xxx 打包分支
13. perf/xxx 性能分支

## 推送代码

-   切换到dist目录
-   切换为 npm 镜像源
-   修改package版本
-   npm adduser
-   npm publish

## 组件开发流程

-   在`bq-design/packages/components/`下建立组件，若在页面展示组件，在该路径创建页面`bq-design/packages/components/xxx/demo/demo.vue`
-   组件开发完成，在 `bq-design/packages/components/index` 路径下添加相关组件、同时需要在`bq-design/typings/components.d` 中新增类型，确保组件打包后可以正常识别类型

## 注意

打包时候如遇到`windows is undefined` 则添加判断 `if (!import.meta.env.SSR)`
