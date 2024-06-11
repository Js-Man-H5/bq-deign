/*
 * @Author: jack.hai
 * @Date: 2024-06-07 10:43:54
 * @LastEditTime: 2024-06-07 16:43:45
 * @Description:
 */
const path = require("path");
const fs = require("fs");
const { parse } = require("vue-docgen-api");

const isCapitalized = (str) => {
    return /^[A-Z]/.test(str);
};

const createdFile = async () => {
    const filePath = path.resolve(__dirname, "..", "./packages/components");
    let files = await fs.readdirSync(filePath, { recursive: true });
    files = files.filter((file) => file.endsWith(".vue")).filter((item) => isCapitalized(item.split("/")[item.split("/").length - 1]));
    let attributes = {};
    let tags = {};
    files.forEach(async (file, index) => {
        let componentInfoSimple = await parse(path.resolve(filePath, file));
        tags[componentInfoSimple.name] = {
            attributes: (componentInfoSimple.props ?? []).map((item) => item.name),
        };
        (componentInfoSimple.props ?? []).forEach((item) => {
            let name = componentInfoSimple.name + "/" + item.name;
            attributes[name] = {
                type: item.type.name,
                description: "",
            };
        });
        if (index === files.length - 1) {
            fs.appendFile(
                path.resolve(__dirname, "attributes.json"),
                JSON.stringify(attributes),
                {
                    encoding: "utf-8",
                },
                (err) => {
                    if (err) throw err;
                },
            );
            fs.appendFile(
                path.resolve(__dirname, "tags.json"),
                JSON.stringify(tags),
                {
                    encoding: "utf-8",
                },
                (err) => {
                    if (err) throw err;
                },
            );
        }
    });
};

// 判断文件是否存在,存在则删除
const deleteFile = (path) => {
    try {
        fs.accessSync(path, fs.constants.F_OK);
        fs.unlink(path, (err) => {
            if (err) throw err;
            console.log("文件已删除");
        });
        return true;
    } catch (error) {
        return false;
    }
};

const pathList = [path.resolve(__dirname, "./tags.json"), path.resolve(__dirname, "./attributes.json")];

const generateFile = async () => {
    pathList.forEach((item) => {
        deleteFile(item);
    });
    createdFile();
};

generateFile();
