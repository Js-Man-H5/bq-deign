/*
 * @Author: jack.hai
 * @Date: 2024-07-30 13:40:30
 * @LastEditTime: 2024-07-31 17:36:12
 * @Description:
 */
import type { StyleValue } from "vue";
export interface ScrollBarProps {
    /**
     * 滚动条width宽度
     */
    thumbWrapperSize?: number;
    /**
     * true 代表显示滚动条、
     * false隐藏滚动条
     */
    autoHide?: boolean | { x: boolean; y: boolean };
    /**
     * 滚动条最小(高度/宽度)
     */
    barMinSize?: number;
}

export interface BarProps {
    thumbWrapperSize: number;

    showCoord: { x: boolean; y: boolean };
    handleThumbClick: (event: MouseEvent, type: DIRECTION_ENUM) => void;
    className: string;
    styleObj: StyleValue;
    direction: DIRECTION_ENUM;
}

export enum DIRECTION_ENUM {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal",
}
