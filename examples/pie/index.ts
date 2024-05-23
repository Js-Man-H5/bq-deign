/*
 * @Author: jack.hai
 * @Date: 2024-05-16 14:27:06
 * @LastEditTime: 2024-05-22 11:07:43
 * @Description:
 */
import BasicsPie from "./components/BasicsPie.vue";
import SlotPie from "./components/SlotPie.vue";
import { withInstall } from "../../packages/utils/tool";
const BqBasicsPie = withInstall(BasicsPie);
const BqSlotPie = withInstall(SlotPie);
export { BqBasicsPie, BqSlotPie };
