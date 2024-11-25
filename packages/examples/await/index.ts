/*
 * @Author: jack.hai
 * @Date: 2024-11-18 09:27:04
 * @LastEditTime: 2024-11-25 10:18:40
 * @Description:
 */
import BasicsAwait from "./components/BasicsAwait.vue";
import CustomStatusAwait from "./components/CustomStatusAwait.vue";
import { withInstall } from "../../utils/tool";
const BqBasicsAwait = withInstall(BasicsAwait);
const BqCustomStatusAwait = withInstall(CustomStatusAwait);
export { BqBasicsAwait, BqCustomStatusAwait };
