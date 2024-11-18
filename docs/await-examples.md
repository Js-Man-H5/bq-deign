<!--
 * @Author: jack.hai
 * @Date: 2024-11-18 15:48:45
 * @LastEditTime: 2024-11-18 16:15:21
 * @Description:
-->

# 异步加载组件

`使用场景：模块初次加载只展示骨架屏,二次更新只展示loading,支持自定义错误组件、自定义骨架屏组件`

## 基础示例

<BqBasicsAwait/>

**代码示例**

```vue
<template>
    <div>
        <Card v-if="flag" title="The is a await component">
            <Await :request="fetchData" :options="queryData" :spinProps="spinProps">
                <template #default="{ data }">
                    <div style="width: 200" v-for="item in data">执行完成:{{ item }}</div>
                </template>
                <template #skeleton>
                    <Skeleton active :paragraph="{ rows: 5 }" />
                </template>
                <template #error> <Result status="warning" title="There are some problems with your operation."> </Result></template>
            </Await>
        </Card>
        <Space style="margin-top: 16px">
            <Button @click="handleUpdate" type="primary" :disabled="error">更新</Button>
            <Button @click="handleReload">Reload</Button>
            <Button @click="handleError" danger>Error</Button>
        </Space>
    </div>
</template>

<script setup lang="ts">
import { Button, Skeleton, Result, Space, Card } from "ant-design-vue";
defineOptions({ name: "BqBasicsAwait" });
const queryData = ref({ name: "张山", age: 18 });
const query = ref(1);
const flag = ref(true);
const error = ref(false);
const spinProps = reactive({
    tip: "数据正在加载中...",
});
const fetchData = (): Promise<Array<number>> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error.value) {
                reject("The is a error");
            } else {
                resolve(Array(10).fill(query.value));
            }
        }, 2000);
    });
};

const handleUpdate = () => {
    query.value += 1;
    queryData.value.age += 1;
};

const handleReload = () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
        query.value = 1;
        error.value = false;
    });
};

const handleError = () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
        query.value = 1;
        error.value = true;
    });
};
</script>

<style lang="scss" scoped></style>
```

## API

| 成员      | 说明               | 类型        | 默认值 |
| --------- | ------------------ | ----------- | ------ |
| request   | 请求接口           | `Promise`   | `-`    |
| options   | 请求接口需要的参数 | `any`       | `-`    |
| spinProps | 支持spin所有参数   | `SpinProps` | `-`    |

## 插槽

| 插槽名   | 类型                                 | 说明                                |
| -------- | ------------------------------------ | ----------------------------------- |
| default  | `v-slot:default="{ data,loading }" ` | 接口返回参数和loading状态           |
| error    | `v-slot:error="{ error }" `          | error为接口返回错误，一般不需要用到 |
| skeleton | `v-slot:skeleton`                    | 骨架屏插槽位置                      |
