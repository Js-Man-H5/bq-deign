/*
 * @Author: jack.hai
 * @Date: 2024-05-23 15:19:51
 * @LastEditTime: 2024-05-23 15:35:55
 * @Description:
 */
import shell from "shelljs";

const executeScript = () => {
    shell.cd("dist");
    shell.exec("nrm use npm && npm adduser");

    const path = shell.pwd();
    console.log(path.stdout);
};
executeScript();
