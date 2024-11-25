<!--
 * @Author: jack.hai
 * @Date: 2024-11-25 09:26:44
 * @LastEditTime: 2024-11-25 10:23:26
 * @Description:
-->
<template>
    <div v-if="flag">
        <Await :request="fetchData" :options="queryData" :useLoading="false" :useError="false" :useSkeleton="false">
            <template #default="{ data, loading, onceStatus, error }">
                <Row :gutter="16">
                    <Col :span="12">
                        <Card title="The is a card component">
                            <Result v-if="error" status="warning" title="The is a error"> </Result>
                            <Skeleton v-else-if="!onceStatus" active :paragraph="{ rows: 5 }" />
                            <Spin :spinning="loading" v-else="onceStatus">
                                <div style="width: 200" v-for="(item, key) in data" :key="key">执行完成:{{ item }}</div>
                            </Spin>
                        </Card>
                    </Col>
                    <Col :span="12">
                        <Card title="The is a card component">
                            <Result v-if="error" status="warning" title="The is a error"> </Result>
                            <Skeleton v-else-if="!onceStatus" active :paragraph="{ rows: 5 }" />
                            <Spin :spinning="loading" v-else="onceStatus">
                                <div style="width: 200" v-for="(item, key) in data" :key="key">执行完成:{{ item }}</div>
                            </Spin>
                        </Card>
                    </Col>
                </Row>
            </template>
        </Await>
        <Space style="margin-top: 16px">
            <Button @click="handleUpdate" type="primary" :disabled="errorStatus">更新</Button>
            <Button @click="handleReload">Reload</Button>
            <Button @click="handleError" danger>Error</Button>
        </Space>
    </div>
</template>

<script setup lang="ts">
import { Button, Skeleton, Result, Spin, Space, Card, Row, Col } from "ant-design-vue";
const queryData = ref({ name: "张山", age: 18 });
const query = ref(1);
const flag = ref(true);
const errorStatus = ref(false);

defineOptions({ name: "BqCustomStatusAwait" });
const fetchData = (): Promise<Array<number>> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (errorStatus.value) {
                reject("The is a error");
            } else {
                resolve(Array(10).fill(query.value));
            }
            resolve(Array(10).fill(query.value));
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
        errorStatus.value = false;
    });
};

const handleError = () => {
    handleUpdate();
    nextTick(() => {
        errorStatus.value = true;
    });
};
</script>

<style lang="scss" scoped></style>
