/*
 * @Author: jack.hai
 * @Date: 2024-05-20 16:17:07
 * @LastEditTime: 2024-05-22 19:57:29
 * @Description:
 */
export interface PropsType {
    value: number;
    math?: MathType;
    textMaxWidth?: string;
}
export type MathType = "ceil" | "abs" | "floor" | "none";
