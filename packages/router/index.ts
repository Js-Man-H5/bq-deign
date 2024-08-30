/*
 * @Author: jack.hai
 * @Date: 2022-11-23 13:43:29
 * @LastEditTime: 2024-08-27 10:51:22
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
        component: () => import(/* webpackChunkName: "button" */ "@/components/button/Button.vue"),
    },
    {
        path: "/pie",
        name: "pie",
        meta: {
            title: "pie",
        },
        component: () => import(/* webpackChunkName: "pie" */ "@/components/pie/Pie.vue"),
    },
    {
        path: "/scaleBox",
        name: "scaleBox",
        meta: {
            title: "scaleBox",
        },
        component: () => import(/* webpackChunkName: "scaleBox" */ "@/components/scaleBox/ScaleBox.vue"),
    },
    {
        path: "/selectAll",
        name: "selectAll",
        meta: {
            title: "scaleBox",
        },
        component: () => import(/* webpackChunkName: "selectAll" */ "@/components/selectAll/SelectAll.vue"),
    },
    {
        path: "/numberAnimate",
        name: "numberAnimate",
        meta: {
            title: "numberAnimate",
        },
        component: () => import(/* webpackChunkName: "numberAnimate" */ "@/components/numberAnimate/test.vue"),
    },
    {
        path: "/scrollBar",
        name: "scrollBar",
        meta: {
            title: "scrollBar",
        },
        component: () => import(/* webpackChunkName: "scrollBar" */ "@/components/scrollBar/demo/demo.vue"),
    },
    {
        path: "/visibleComponent",
        name: "visibleComponent",
        meta: {
            title: "visibleComponent",
        },
        component: () => import(/* webpackChunkName: "visibleComponent" */ "@/components/visibleComponent/demo/demo.vue"),
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
