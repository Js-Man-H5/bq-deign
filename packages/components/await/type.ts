/*
 * @Author: jack.hai
 * @Date: 2024-11-18 11:21:23
 * @LastEditTime: 2024-11-25 10:01:40
 * @Description:
 */
import type { SpinProps } from "ant-design-vue";
export interface SlotProps<T extends Record<string, any>> {
    /**
     * @description: 返回对应数据
     */
    data: T | undefined;
    /**
     * @description: loading启用情况
     */
    loading: boolean;
    /**
     * @description: 接口错误情况
     */
    error: unknown;
    /**
     * @description: 只执行一次适用于判断骨架屏
     */
    onceStatus: boolean;
}

export interface AwaitProps<T extends Record<string, any>, E = any> {
    /**
     * @description: 请求的接口
     */
    request: (options?: E) => Promise<T>;
    /**
     * @description: 是否启用loading
     */
    useLoading?: boolean;
    /**
     * @description: loading 可接收的props
     */
    spinProps?: SpinProps;
    /**
     * @description: 接口传值
     */
    options?: E;
    /**
     * @description: 是否使用骨架屏
     */
    useSkeleton?: boolean;
    /**
     * @description: 是否启用error插槽
     */
    useError?: boolean;
}
