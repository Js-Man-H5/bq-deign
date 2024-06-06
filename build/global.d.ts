/*
 * @Author: jack.hai
 * @Date: 2024-06-06 10:17:30
 * @LastEditTime: 2024-06-06 11:46:39
 * @Description:
 */
import "vue";

declare module "vue" {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        BqButton: (typeof import("bq-design"))["BqButton"];
        BqNumberAnimate: (typeof import("bq-design"))["BqNumberAnimate"];
        BqPie: (typeof import("bq-design"))["BqPie"];
        BqSelectAll: (typeof import("bq-design"))["BqSelectAll"];
        BqScaleBox: (typeof import("bq-design"))["BqScaleBox"];
    }
}
