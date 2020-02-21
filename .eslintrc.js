module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"]
          }
        }
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-extra-semi": 2, // 禁止不必要的分号
        "quotes": ['error', 'single'], // 强制使用单引号
        "no-unused-vars": 0, // 不允许未定义的变量
        "jsx-control-statements/jsx-use-if-tag": 0,
        "no-dupe-args": 2,
        "react/prefer-stateless-function": [0],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "linebreak-style": [0 ,"error", "windows"],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }]
      }
};