<!--
 * @Author: jack.hai
 * @Date: 2024-11-18 09:27:39
 * @LastEditTime: 2024-11-18 17:51:31
 * @Description:
-->
<template>
    <div>
        <Card v-if="flag" title="The is a await component">
            <Await :request="fetchData" :options="queryData" :spinProps="spinProps">
                <template #default="{ data }">
                    <div style="width: 200" v-for="(item, key) in data" :key="key">执行完成:{{ item }}</div>
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
