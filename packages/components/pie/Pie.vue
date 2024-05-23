<!-- 3D饼图 -->
<template>
    <div class="three-pie-container">
        <div class="three-pie-main">
            <canvas ref="pieRef" class="pie-canvas"></canvas>
            <template v-if="props.centerTooltip">
                <template v-for="(data, index) in props.data" :key="data.value">
                    <div class="pie-info" :style="{ opacity: labelIndex === index ? 1 : 0 }">
                        <div class="pie-value">{{ toPercent(data.value) }}</div>
                        <div class="pie-label">{{ data.label }}</div>
                    </div>
                </template>
            </template>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { deepClone, toPercent, isWindow } from "@/utils/tool";
import type { PropsType, PieDataType } from "./type";
defineOptions({
    name: "BqPie",
});
let animationId = 0;
const props = withDefaults(defineProps<PropsType>(), {
    data: () => [
        {
            value: 0.6637,
            label: "TM",
        },
        {
            value: 0.2171,
            label: "DOUYIN",
        },
        {
            value: 0.0764,
            label: "JD",
        },
        {
            value: 0.0237,
            label: "VIP",
        },
        {
            value: 0.0191,
            label: "Others",
        },
    ],
    colorList: () => ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"],
    // 内圆半径
    innerRadius: 60,
    // 外圆半径
    outRadius: 84,
    // 饼图厚度
    depth: 15,
    // 是否显示中间的tooltip
    centerTooltip: true,
});

/*颜色*/
let colorArr = ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"];
// const bottomColors = ["#7CD2F5", "#4D74FF", "#FFCF5F", "#53DDA8", "#3A9C6A"];

const pieRef = ref<HTMLDivElement>(); // 3D饼图canvans实例
let group: THREE.Group<THREE.Object3DEventMap> | null = null;
let renderer: THREE.WebGLRenderer | null = null;
/* 初始化场景 */
const scene = new THREE.Scene();
let camera: THREE.OrthographicCamera | null = null;
const initThreeDPie = () => {
    // console.log(window.devicePixelRatio);
    /* 初始化相机 */
    if (pieRef.value) {
        const aspect = pieRef.value?.clientWidth / pieRef.value.clientHeight;
        const maxChartDimension = Math.min(pieRef.value.clientWidth, pieRef.value.clientHeight);
        const d = maxChartDimension / 2; // 这个值决定了视野的大小
        camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
        camera.position.set(0, 0, 686);
        camera.lookAt(scene.position);
        group && scene.remove(group);
        group = initPieGroup();
        updatePie();
        scene.add(group);
        renderer = new THREE.WebGLRenderer({ canvas: pieRef.value, antialias: true, alpha: true });
        renderer.setSize(pieRef.value.clientWidth, pieRef.value.clientHeight);
        renderer.setClearColor(0xffffff, 0.0);
        renderer.setPixelRatio(2);
        renderer.render(scene, camera);
    }
};

/**
 * @description: 绘制扇形主体
 * @return {*}
 */
const initPieGroup = () => {
    const group = new THREE.Group();
    pieData.value.forEach((item, index) => {
        const color = colorArr[index % colorArr.length];
        const bottomColor = props.colorList[index % props.colorList.length];
        const sectorMesh = createSector(item.startAngle, item.endAngle, color, "sector");
        group.add(sectorMesh);
        const bottomSectorMesh = createSector(item.startAngle, item.endAngle, bottomColor, "bottomSector");
        bottomSectorMesh.renderOrder = 999;
        group.add(bottomSectorMesh);
        const path = createPiePath(item.startAngle, item.endAngle);
        group.add(path);
    });
    return group;
};

/* 物体配置 */
const extrudeSettings = computed(() => {
    return {
        curveSegments: 40, //曲线分段数，数值越高曲线越平滑
        depth: props.depth,
        bevelEnabled: false,
        bevelSegments: 9,
        steps: 2,
        bevelSize: 0,
        bevelThickness: 0,
    };
});
const rotateX = 65; // 扇面往X轴旋转角度

const createShape = (startAngle: number, endAngle: number, inRadius: number, ouRadius: number) => {
    const shape = new THREE.Shape();
    shape.moveTo(props.outRadius, 0);
    shape.absarc(0, 0, inRadius, startAngle, endAngle, true);
    shape.absarc(0, 0, ouRadius, endAngle, startAngle, false);
    return shape;
};

/**
 * @description: 绘制扇形扇面
 * @param {*} startAngle
 * @param {*} endAngle
 * @param {*} color
 * @param {*} type
 * @return {*}
 */
const createSector = (startAngle: number, endAngle: number, color: string, type: string) => {
    const shape = createShape(startAngle, endAngle, props.innerRadius, props.outRadius);
    const tempExtrudeSettings = deepClone(extrudeSettings.value);
    let opacity = 0.9;
    if (type === "bottomSector") {
        opacity = 0.6;
        tempExtrudeSettings.depth = 1;
    }
    // 创建扇形的几何体
    const geometry = new THREE.ExtrudeGeometry(shape, tempExtrudeSettings);
    const material = new THREE.MeshBasicMaterial({ color: color, opacity: opacity, transparent: true, depthTest: true });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    mesh.renderOrder = 2;
    mesh.rotateX(-(rotateX / 180) * Math.PI); // 向下翻转，展示3D效果
    return mesh;
};

const createPiePath = (startAngle: number, endAngle: number) => {
    const shape = createShape(startAngle, endAngle, props.innerRadius + 1, props.outRadius - 1);
    const tempExtrudeSettings = deepClone(extrudeSettings.value);
    const geometry = new THREE.ExtrudeGeometry(shape, tempExtrudeSettings);
    const edges = new THREE.EdgesGeometry(geometry, 10);
    const material = new THREE.MeshStandardMaterial({
        fog: false,
        color: 0xffffff,
        emissive: 0xffffff,
        transparent: true,
        opacity: 0.5,
        roughness: 0,
    });
    const line = new THREE.LineSegments(edges, material);
    line.rotateX(-(rotateX / 180) * Math.PI); // 向下翻转，展示3D效果
    line.renderOrder = 4;

    return line;
};

const handleError = (function () {
    let flag = false;
    if (props.data.length !== props.colorList.length) {
        console.warn("颜色和数据长度不匹配");
        flag = true;
    }
    return flag;
})();

const startAngle = 0.3 * Math.PI * 2; // 控制饼图开始旋转的位置
const activeIndex = ref(0);
const pieData = ref<PieDataType[]>([]);
let pieDataTotal = 0; // 饼图汇总值
watchEffect(() => {
    if (handleError) {
        return false;
    }
    colorArr = props.colorList || colorArr;
    pieData.value = deepClone(props.data) || [];
    if (pieData.value.length === 0) return;
    pieDataTotal = pieData.value.reduce((c, n) => (typeof n.value === "number" ? c + n.value : c), 0);
    /* 计算每个值的弧度开始和结束位置 */
    let tempStartAngle = startAngle;
    pieData.value.forEach((item) => {
        item.startAngle = tempStartAngle;
        // 顺时针绘制，故弧度为减法
        item.endAngle = item.startAngle - (item.value / pieDataTotal) * Math.PI * 2;
        tempStartAngle = item.endAngle;
    });
    nextTick(() => {
        initThreeDPie();
        animationFun();
    });
});

const labelIndex = ref(0); // 展示文字的坐标
let stepCount = 0;

const animationFun = () => {
    const length = pieData.value.length;
    if ((activeIndex.value % 1 > 0.99 || activeIndex.value % 1 < 0.01) && stepCount < 1) {
        labelIndex.value = Math.round(activeIndex.value) >= length ? 0 : Math.round(activeIndex.value);
        stepCount += 0.01;
        if (isWindow) {
            animationId = requestAnimationFrame(animationFun);
        }
        return;
    }
    stepCount = 0;
    activeIndex.value += 0.01;
    if (activeIndex.value > length) {
        activeIndex.value = 0;
    }
    updatePie();
    camera && renderer?.render(scene, camera);
    if (isWindow) {
        animationId = requestAnimationFrame(animationFun);
    }
};
// 更新饼图动画
const updatePie = () => {
    const length = pieData.value.length;
    const nextActiveIndex = (((activeIndex.value + 1) * 10) % (length * 10)) / 10;
    group?.children.forEach((item, key) => {
        if (Math.floor(activeIndex.value) === Math.ceil((key - 2) / 3)) {
            const percent = 1 - (activeIndex.value % 1);
            // "down"
            item.scale.set(1, 1, 1 + percent);
        }
        if (Math.floor(nextActiveIndex) === Math.ceil((key - 2) / 3)) {
            const percent = activeIndex.value % 1;
            // up
            item.scale.set(1, 1, 1 + percent);
        }
    });
};

onUnmounted(() => {
    cancelAnimationFrame(animationId);
});
</script>

<style scoped lang="scss">
.three-pie-container {
    position: relative;
    width: 100%;
    height: 100%;
    .three-pie-main {
        position: relative;
        width: 100%;
        height: 100%;
        .pie-canvas {
            width: 100%;
            height: 100%;
        }
        .pie-info {
            position: absolute;
            top: calc(50% - 16px);
            left: 50%;
            display: flex;
            align-items: center;
            color: #fff;
            opacity: 0;
            transition: opacity 1s ease;
            transform: translate(-50%, -50%);
            flex-direction: column;
            .pie-value {
                width: 100%;
                font-size: 24px;
                font-family: Avenir;
                font-weight: 400;
                text-align: center;
                line-height: 32px;
            }
            .pie-label {
                font-size: 16px;
                font-family: "MPLUS1";
                font-weight: 400;
                text-align: center;
                line-height: 20px;
                transform: translateX(-2px);
            }
        }
    }
}
</style>
