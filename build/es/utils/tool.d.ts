export declare const withInstall: <T extends globalThis.Component>(comp: T) => T;
/**
 * @description: 小数转百分位
 * @param {number} num
 * @param {*} length
 * @param type normal-正常百分比;yoy-增长率，前面添加正负号
 * @return {*}
 */
export declare function toPercent(num: number | string, length?: number, type?: string): string | number;
export declare const deepClone: (obj: any, cache?: any) => any;
export declare const isWindow: boolean;
