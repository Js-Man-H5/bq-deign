/*
 * @Author: jack.hai
 * @Date: 2024-11-18 11:21:23
 * @LastEditTime: 2024-11-18 13:58:38
 * @Description:
 */
export interface SlotProps<T extends Record<string, any>> {
    data: T | undefined;
    loading: boolean;
}
