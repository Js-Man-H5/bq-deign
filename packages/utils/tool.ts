/*
 * @Author: jack.hai
 * @Date: 2024-05-14 15:34:42
 * @LastEditTime: 2024-05-23 15:05:06
 * @Description:
 */
import type { App } from "vue";

export const withInstall = <T extends Component>(comp: T) => {
    (comp as Record<string, unknown>).install = (app: App) => {
        const compName = comp.name;
        if (!compName) return;
        app.component(compName, comp);
    };
    return comp;
};

/**
 * @description: 小数转百分位
 * @param {number} num
 * @param {*} length
 * @param type normal-正常百分比;yoy-增长率，前面添加正负号
 * @return {*}
 */
export function toPercent(num: number | string, length = 1, type = "normal") {
    if (!num && num !== 0) {
        return num;
    }
    length < 0 && (length = 0);
    const n = Number(num);
    let result = (n * 100).toFixed(length) + "%";
    if (result !== "0.00" && type === "yoy") {
        n > 0 && (result = "+" + result);
    }
    return result;
}

// 深拷贝
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deepClone = (obj: any, cache: any = []) => {
    if (obj === null || typeof obj != "object") {
        return obj;
    }
    if (Object.prototype.toString.call(obj) === "[object Date]") return new Date(obj);
    if (Object.prototype.toString.call(obj) === "[object RegExp]") return new RegExp(obj);
    if (Object.prototype.toString.call(obj) === "[object Error]") return new Error(obj);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item = cache.filter((item: any) => item.origin === obj)[0];
    if (item) {
        return item.newObj;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newObj: any = Array.isArray(obj) ? [] : {};
    cache.push({
        origin: obj,
        newObj,
    });
    Object.keys(obj).forEach((key: string) => {
        if (typeof obj[key] == "object") {
            newObj[key] = deepClone(obj[key], cache);
        } else {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};

export const isWindow = typeof window !== "undefined";
