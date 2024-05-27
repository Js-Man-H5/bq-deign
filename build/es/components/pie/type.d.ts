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
