/*
 * @Author: jack.hai
 * @Date: 2024-06-06 10:17:30
 * @LastEditTime: 2024-06-07 18:03:51
 * @Description:
 */
declare module "vue" {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        BqButton: (typeof import("../packages/index"))["BqButton"];
        BqNumberAnimate: (typeof import("../packages/index"))["BqNumberAnimate"];
        BqPie: (typeof import("../packages/index"))["BqPie"];
        BqSelectAll: (typeof import("../packages/index"))["BqSelectAll"];
        BqScaleBox: (typeof import("../packages/index"))["BqScaleBox"];
    }
}
