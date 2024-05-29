/*
 * @Author: jack.hai
 * @Date: 2024-05-20 16:17:07
 * @LastEditTime: 2024-05-28 19:55:02
 * @Description:
 */
export interface PropsType {
    value: number;
    math?: MathType;
    textMaxWidth?: string;
    duration?: number;
    effect?: string;
}
export type MathType = "ceil" | "abs" | "floor" | "none";
