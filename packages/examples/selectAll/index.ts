/*
 * @Author: jack.hai
 * @Date: 2024-05-16 17:32:16
 * @LastEditTime: 2024-05-20 09:52:51
 * @Description:
 */
import BasicsSelectAll from "./components/BasicsSelectAll.vue";
import AntdSelectAll from "./components/AntdSelectAll.vue";
import { withInstall } from "../../utils/tool";
const BqBasicsSelectAll = withInstall(BasicsSelectAll);
const BqAntdSelectAll = withInstall(AntdSelectAll);
export { BqBasicsSelectAll, BqAntdSelectAll };
