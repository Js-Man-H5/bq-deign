/*
 * @Author: jack.hai
 * @Date: 2022-11-25 14:53:24
 * @LastEditTime: 2022-11-25 14:59:50
 * @Description:
 */
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [2, "always", ["feature", "update", "test", "perf", "fix", "refactor", "optimize", "style", "build", "merge", "docs", "chore"]],
        "type-case": [0],
        "type-empty": [0],
        "scope-empty": [0],
        "scope-case": [0],
        "subject-full-stop": [0, "never"],
        "subject-case": [0, "never"],
        "header-max-length": [0, "always", 72],
    },
};
