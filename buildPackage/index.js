/*
 * @Author: jack.hai
 * @Date: 2024-05-21 18:56:40
 * @LastEditTime: 2024-05-24 11:27:26
 * @Description:
 */
const fs = import("fs");
const path = import("path");
const copyFile = async () => {
    const data = await fs;
    const filePath = await path;
    const getFilePath = data.default.readdirSync(filePath.resolve(__dirname));
    getFilePath.forEach((item) => {
        if (item !== "index.js") {
            data.copyFileSync(filePath.resolve(__dirname, item), filePath.resolve(__dirname, "../build", item));
        }
    });
};
copyFile();
