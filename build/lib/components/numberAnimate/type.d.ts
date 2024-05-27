export interface PropsType {
    value: number;
    math?: MathType;
    textMaxWidth?: string;
}
export type MathType = "ceil" | "abs" | "floor" | "none";
