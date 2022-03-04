module.exports = {
    "parser": "babel-eslint", // 使用解析器
    "extends": "airbnb",  // 继承airbnb
    // 当前想启用的环境
    "env": {
        "browser": true,
        "node": true
    },
    // 定义规则
    "rules": {
        "indent": ["error", 4]
    }
};