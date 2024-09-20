<!--
 * @Author: jack.hai
 * @Date: 2024-05-17 09:14:03
 * @LastEditTime: 2024-09-20 09:57:58
 * @Description:
-->
<template>
    <Select v-bind="$attrs" :autoClearSearchValue="false" mode="multiple" @blur="handleBlur" @search="handleSearch" @change="handleChange">
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
    search: [value: string];
    blur: [value: FocusEvent];
}>();
const attr: SelectProps = useAttrs();
const checkFlag = ref(false);
const indeterminate = ref(false);
const isArrayContained = ref(false);

const searchData = ref<DefaultOptionType[]>([]);

const selectValue = ref<Array<string | number>>([]);

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
    if (searchData.value.length === 0) {
        searchData.value = attr.options ?? [];
    }
    selectValue.value = value as Array<string | number>;
    emit("change", value, option);
};

const handleChangeCheckbox = (e: CheckboxChangeEvent) => {
    let data: DefaultOptionType[] = [];
    data = [...searchData.value];
    const currentSelectValue = [...selectValue.value];

    if (!attr["onUpdate:value"]) {
        console.warn("v-model:value 不存在");
    }
    let value = e.target.checked ? (data ?? []).map((item) => item.value) : [];
    if (e.target.checked) {
        if (attr.options && attr.options.length > 0) {
            checkFlag.value = e.target.value;

            for (let i = 0; i < value.length; i++) {
                if (!currentSelectValue.includes(value[i] as any)) {
                    currentSelectValue.push(value[i] as any);
                }
            }
        } else {
            checkFlag.value = false;
        }
    } else {
        for (let i = 0; i < currentSelectValue.length; i++) {
            if (!searchData.value.includes(currentSelectValue[i] as any)) {
                currentSelectValue.splice(i, 1);
                i--;
            }
        }

        attr["onUpdate:value"] && attr["onUpdate:value"]([]);
        checkFlag.value = e.target.value;
        handleChange([], []);
    }
    value = currentSelectValue;
    selectValue.value = [...currentSelectValue];
    let option = e.target.checked ? data : [];

    attr["onUpdate:value"] && attr["onUpdate:value"](value as Array<string | number>);
    handleChange(value as Array<string | number>, option);
};

const updateIndeterminate = () => {
    indeterminate.value = Array.isArray(attr.value) && attr.value.length === 0 ? false : !isArrayContained.value;
    checkFlag.value = searchData.value.length === 0 ? false : isArrayContained.value;
};

const handleSearch = (value: string) => {
    if (attr.filterOption && attr!.filterOption instanceof Function) {
        let res = attr.options?.filter((item) => attr!.filterOption instanceof Function && attr!.filterOption(value, item));
        searchData.value = (res ?? []).length === 0 ? attr.options ?? [] : res ?? [];
        console.log("searchData.value", searchData.value);
    } else {
        console.warn("请传入filterOption方法");
    }
    emit("search", value);
};

const handleBlur = (e: FocusEvent) => {
    searchData.value = attr.options ?? [];
    emit("blur", e);
};

watch(
    [selectValue, searchData],
    () => {
        let flag = false;
        if (selectValue.value.length === 0) {
            flag = false;
        } else {
            let res = (searchData.value ?? []).map((item) => item.value).every((item) => (selectValue.value ?? []).includes(item as any));
            flag = res;
        }
        isArrayContained.value = flag;
        updateIndeterminate();
    },
    {
        deep: true,
    },
);

onMounted(() => {
    updateIndeterminate();
});

watch(
    () => attr.value,
    () => {
        if (attr.value) {
            selectValue.value = attr.value as Array<string | number>;
        }
        updateIndeterminate();
    },
    { deep: true },
);
</script>

<style lang="scss" scoped></style>
