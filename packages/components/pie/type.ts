/*
 * @Author: jack.hai
 * @Date: 2024-05-15 11:37:07
 * @LastEditTime: 2024-05-16 17:42:27
 * @Description:
 */

export interface DataType {
    label: string;
    value: number;
}

export interface PropsType {
    data?: DataType[];
    colorList?: string[];
    innerRadius?: number;
    outRadius?: number;
    depth?: number;
    centerTooltip?: boolean;
}

export interface PieDataType extends DataType {
    endAngle: number;
    startAngle: number;
}
