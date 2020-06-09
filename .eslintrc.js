module.exports = {
    // 指定脚本的运行环境，一个环境定义了一组预定义的全局变量
    "env": {
        "browser": true, //浏览器环境中的全局变量
        "es6": true, //启用除了modules以外的所有ES6特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
        "node": true, //Node.js 全局变量和 Node.js 作用域
    },
    "extends": [
        "eslint:recommended", //所有在规则页面被标记为“✔️”的规则将会默认开启
        "plugin:react/recommended"
    ],
    // 设置全局变量
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // 指定解析器
    "parser": "babel-eslint", //兼容ES处于实验性阶段的语法，如类属性用”=“赋值
    // 指定解析器选项
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "generators": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // 第三方插件
    "plugins": [
        "react"
    ],
    "settings": {
        'import/resolver': {
            // 识别 webpack 配置的路径别名
            webpack: {
                config: 'webpack.config.js',
            }
        },
    },
    "rules": {
        'no-console': 'off', // 禁用 console
        'no-debugger': 'error', // 禁用 debugger
        'no-alert': 'error', // 禁用 alert

        indent: ['error', 2, { SwitchCase: 1 }], // 强制使用两个空格作为缩进
        quotes: ['error', 'single'], //强制使用单引号
        // semi: ['error', 'never'], //强制不使用分号结尾
        'comma-dangle': ['error', 'always-multiline'], // 逗号结束
        'no-param-reassign': 'error', // 禁止对 function 的参数进行重新赋值
        'jsx-quotes': ['error', 'prefer-double'], // 强制所有 JSX 属性值使用双引号。
        'prettier/prettier': 'error', // prettier
        'prefer-rest-params': 0,

        'react/display-name': 0,
        'react/prop-types': 0,
        'jsx-control-statements/jsx-use-if-tag': 0, // 强制在 jsx 中使用 if 判断
        'jsx-control-statements/jsx-jcs-no-undef': 0,
    }
};