<!--
 * @Author: jack.hai
 * @Date: 2024-05-17 09:14:03
 * @LastEditTime: 2024-05-22 10:45:04
 * @Description:
-->
<template>
    <Select v-bind="$attrs" mode="multiple" @change="handleChange">
        <template #dropdownRender="{ menuNode: menu }">
            <v-nodes :vnodes="menu" />
            <Divider style="margin: 4px 0" />
            <div style="padding-left: 11px"><Checkbox :indeterminate="indeterminate" v-model:checked="checkFlag" @change="handleChangeCheckbox" /> 全选</div>
        </template>
    </Select>
</template>

<script setup lang="ts">
import { Select, Divider, Checkbox, SelectProps } from "ant-design-vue";
import type { SelectValue, DefaultOptionType } from "ant-design-vue/lib/select";
import type { CheckboxChangeEvent } from "ant-design-vue/lib/checkbox/interface";

defineOptions({
    name: "BqSelectAll",
});
const emit = defineEmits<{
    change: [value: SelectValue, option: DefaultOptionType | DefaultOptionType[]]; // 具名元组语法
}>();
const attr: SelectProps = useAttrs();
const checkFlag = ref(false);
const indeterminate = ref(false);
const VNodes = defineComponent({
    props: {
        vnodes: {
            type: Object,
            required: true,
        },
    },
    render() {
        return this.vnodes;
    },
});

const handleChange = (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => {
    emit("change", value, option);
};

const handleChangeCheckbox = (e: CheckboxChangeEvent) => {
    if (!attr["onUpdate:value"]) {
        console.warn("v-model:value 不存在");
    }
    if (e.target.checked) {
        if (attr.options && attr.options.length > 0) {
            checkFlag.value = e.target.value;
            const res = attr.options.map((item) => item.value);
            attr["onUpdate:value"] && attr["onUpdate:value"](res as Array<string | number>);
            handleChange(res as Array<string | number>, attr.options);
        } else {
            checkFlag.value = false;
        }
    } else {
        attr["onUpdate:value"] && attr["onUpdate:value"]([]);
        checkFlag.value = e.target.value;
        handleChange([], []);
    }
};

const updateIndeterminate = () => {
    indeterminate.value = Array.isArray(attr.value) && !!attr.value.length && attr.value.length !== attr.options?.length;
    checkFlag.value = Array.isArray(attr.value) && attr.value.length === attr.options?.length;
};

onMounted(() => {
    updateIndeterminate();
});

watch(
    () => attr.value,
    () => {
        updateIndeterminate();
    },
    { deep: true },
);
</script>

<style lang="scss" scoped></style>
