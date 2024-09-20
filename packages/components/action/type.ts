/*
 * @Author: jack.hai
 * @Date: 2024-09-05 17:50:51
 * @LastEditTime: 2024-09-12 10:47:27
 * @Description:
 */
export interface ActionProps<T extends Record<string, any>, E = any> {
    useAction: (options?: E) => T;
    options?: E;
}
