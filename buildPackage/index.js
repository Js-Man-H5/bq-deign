/*
 * @Author: jack.hai
 * @Date: 2024-05-21 18:56:40
 * @LastEditTime: 2024-06-07 16:40:36
 * @Description:
 */
const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");
const { parse } = require("vue-docgen-api");

const copyFile = async () => {
    const getFilePath = fs.readdirSync(path.resolve(__dirname));
    let filterFile = ["index.js", "vetur.js"];
    getFilePath.forEach((item) => {
        if (!filterFile.includes(item)) {
            fs.copyFileSync(path.resolve(__dirname, item), path.resolve(__dirname, "../build", item));
        }
    });
    fs.readFile(path.resolve(__dirname, "../typings/components.d.ts"), "utf8", (err, data) => {
        if (err) throw err;
        const modifiedData = data.replace(/..\/packages\/index/g, pkg.name);
        fs.writeFile(path.resolve(__dirname, "../build", "global.d.ts"), modifiedData, "utf8", (err) => {});
    });
};

copyFile();
//
