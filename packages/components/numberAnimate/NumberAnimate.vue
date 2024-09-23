<!-- 数字滑动组件 -->
<template>
    <div class="bq-animate-number" :style="{ height: maxHeight }" ref="">
        <div v-for="(num, index) in orderNum" :key="'num_' + index">
            <div ref="numDiv" class="num-item" :class="num === ',' ? 'comma' : ''">
                <div
                    v-for="(temp, tempIndex) in getTransFormDiv(oldNum[index], num)"
                    :style="{ width: isNaN(temp as number) ? '' : props.textMaxWidth }"
                    :key="'div_' + index + '_' + tempIndex"
                    class="num-line">
                    {{ temp }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropsType } from "./type";
defineOptions({ name: "BqNumberAnimate" });
const orderNum = ref(["0"]);
const oldNum = ref(["0"]);
const maxHeight = ref("20px");
// 获取该div得到最大宽度，保证数字滚动统一
// 父组件传入需要滑动的数据，监听数据变化，变更样式
const props = withDefaults(defineProps<PropsType>(), {
    effect: "ease-in-out",
    value: 0,
    duration: 1,
    math: "ceil",
    textMaxWidth: "9.6px",
});
watch(
    () => props.value,
    (end, start) => {
        if (end !== start) {
            changeNum(end);
        }
    },
);

const numDiv = ref<HTMLDivElement[]>([]);
let timer: NodeJS.Timeout | null = null;

// 根据类型返回数字
const getMathType = (num: number) => {
    let value = num;
    switch (props.math) {
        case "ceil":
            value = Math.ceil(num);
            break;
        case "floor":
            value = Math.floor(num);
            break;
        case "abs":
            value = Math.abs(num);
            break;
        case "none":
            value = num;
            break;
    }
    return value;
};

//数字变更效果
const changeNum = (num: number) => {
    const tempNum = getMathType(num)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    oldNum.value = orderNum.value;
    orderNum.value = Array.from(tempNum);
    //如果变更的新值位数大于旧值位数，则给旧值在头部补0
    while (oldNum.value.length < orderNum.value.length) {
        oldNum.value.unshift("0");
    }
    //如果变更的新值位数小于旧值位数，则给在旧值的头部对应删除位数的值
    const diff = orderNum.value.length - oldNum.value.length;
    if (diff < 0) {
        oldNum.value.splice(0, Math.abs(diff));
    }
    // 加载滑动动画前，先重置translateY的值
    console.log(props, "props.transition");
    numDiv.value.forEach((div: HTMLDivElement) => {
        div.style.transform = "translateY(0)";
        div.style.transition = `transform 0s ${props.effect}`;
    });

    nextTick(() => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            numDiv.value.forEach((div: HTMLDivElement, index: number) => {
                const style = getTransFormStyle(oldNum.value[index], orderNum.value[index]);
                if (style) {
                    div.style.transform = style.transform;
                    div.style.transition = style.transition;
                } else {
                    div.style.transform = "none";
                    div.style.transition = "none";
                }
            });
        }, 50);
    });
};

/*
 * 根据数字变化，渲染滑动的数字
 * 1. 如果数字没有变化或者传入的值不是数组，则只渲染end值即可
 * 2. 如果start不是数字，主要处理start为-【负数】符号的情况，直接返回
 * 3. 如果end>start，则滑动的数字为end → 9 + 0 → start
 * 4. 如果start>end，则滑动的数字为start → end
 */
const getTransFormDiv = (start: string, end: string) => {
    if (isNaN(Number(end))) {
        //1.
        return [end];
    }
    if (start === end) {
        //1.
        return [end];
    }
    const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let divList = [];
    if (isNaN(Number(start))) {
        //2.
        divList = numList.filter((num) => num <= Number(end));
    } else if (start > end) {
        //3.
        divList.push(...numList.filter((num) => num >= Number(start)));
        divList.push(...numList.filter((num) => num <= Number(end)));
    } else {
        //4.
        divList.push(...numList.filter((num) => num >= Number(start) && num <= Number(end)));
    }
    return divList;
};
/*
 * 根据数字变化，获取动画的样式
 * getTransFormDiv返回的数组为1，代表数字未变化
 * getTransFormDiv返回的数组大于1，计算translateY的值，将最后一个数字滑动到最上方
 */
const getTransFormStyle = (start: string, end: string) => {
    const length = getTransFormDiv(start, end).length;
    if (length === 1) {
        return null;
    } else {
        const translateY = ((length - 1) / length) * 100;
        return {
            transform: `translateY(-${translateY}%)`,
            transition: `transform ${props.duration}s ${props.effect}`,
        };
    }
};

onMounted(() => {
    changeNum(props.value);
    if (numDiv.value.length > 0) {
        const style = window.getComputedStyle(numDiv.value[0]);
        maxHeight.value = style.height;
    }
});
</script>

<style lang="scss" scoped>
.bq-animate-number {
    display: flex;
    justify-content: center;
    overflow: hidden;
    flex-grow: 0;
    flex-shrink: 0;
    .num-item {
        flex-shrink: 0;
        text-align: center;
    }
}
</style>
