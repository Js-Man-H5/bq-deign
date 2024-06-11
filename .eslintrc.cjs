/*
 * @Author: jack.hai
 * @Date: 2022-11-23 14:35:45
 * @LastEditTime: 2024-06-06 11:30:11
 * @Description:
 */

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    parser: "vue-eslint-parser",
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "./.eslintrc-auto-import.json"],
    exclude:['./buildPackage'],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: '@typescript-eslint/parser',
    },
    plugins: ["vue", "@typescript-eslint"],
    globals: {
        NodeJS: 'readonly',
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
                // use <root>/path/to/folder/tsconfig.json
                "project": "path/to/folder",
                // Multiple tsconfigs (Useful for monorepos)
                // use a glob pattern
                "project": "packages/*/tsconfig.json",

                // use an array
                "project": [
                    "packages/module-a/tsconfig.json",
                    "packages/module-b/tsconfig.json"
                ],

                // use an array of glob patterns
                "project": [
                    "packages/*/tsconfig.json",
                    "other-packages/*/tsconfig.json"
                ]
            }
        }
    },
    rules: {
        "no-multi-spaces": "error",
        "no-self-compare": "error",
        "no-useless-concat": "error",
        "@typescript-eslint/indent": ["error", 4, { "SwitchCase": 1 }],
        "key-spacing": "error",
        "vue/multi-word-component-names": "off",
        "no-multiple-empty-lines": "error", // 限制最多出现两个空行
        "no-trailing-spaces": "error", // 禁止在空行使用空白字符
        "no-unneeded-ternary": "error",
        "operator-assignment": "error",
        "quotes": ["error", "double"],
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        "space-infix-ops": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "rest-spread-spacing": "error",
    },
};
