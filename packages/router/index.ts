/*
 * @Author: jack.hai
 * @Date: 2022-11-23 13:43:29
 * @LastEditTime: 2024-11-18 09:30:41
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "button",
        meta: {
            title: "login",
        },
        component: () => import(/* webpackChunkName: "button" */ "@/examples/button/components/BasicsButton.vue"),
    },
    {
        path: "/pie",
        name: "pie",
        meta: {
            title: "pie",
        },
        component: () => import(/* webpackChunkName: "pie" */ "@/examples/pie/components/BasicsPie.vue"),
    },
    {
        path: "/scaleBox",
        name: "scaleBox",
        meta: {
            title: "scaleBox",
        },
        component: () => import(/* webpackChunkName: "scaleBox" */ "@/examples/scaleBox/components/BasicsScaleBox.vue"),
    },
    {
        path: "/selectAll",
        name: "selectAll",
        meta: {
            title: "selectAll",
        },
        component: () => import(/* webpackChunkName: "selectAll" */ "@/examples/selectAll/components/BasicsSelectAll.vue"),
    },
    {
        path: "/numberAnimate",
        name: "numberAnimate",
        meta: {
            title: "numberAnimate",
        },
        component: () => import(/* webpackChunkName: "numberAnimate" */ "@/examples/numberAnimate/components/BasicsNumberAnimate.vue"),
    },
    {
        path: "/scrollBar",
        name: "scrollBar",
        meta: {
            title: "scrollBar",
        },
        component: () => import(/* webpackChunkName: "scrollBar" */ "@/examples/scrollBar/components/BasicsScrollBar.vue"),
    },
    {
        path: "/visibleComponent",
        name: "visibleComponent",
        meta: {
            title: "visibleComponent",
        },
        component: () => import(/* webpackChunkName: "visibleComponent" */ "@/examples/visibleComponent/components/BasicsVisibleComponent.vue"),
    },
    {
        path: "/action",
        name: "action",
        meta: {
            title: "action",
        },
        component: () => import(/* webpackChunkName: "action" */ "@/examples/action/components/BasicsAction.vue"),
    },
    {
        path: "/await",
        name: "await",
        meta: {
            title: "basicsAwait",
        },
        component: () => import(/* webpackChunkName: "basicsAwait" */ "@/examples/await/components/BasicsAwait.vue"),
    },
];
const router = createRouter({
    // import.meta.env.VITE_APP_BASE_URL.slice(0, -1)
    history: createWebHistory(),
    routes,
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});
export default router;
