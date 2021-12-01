
http://www.ruanyifeng.com/blog/2016/01/babel.html

`babel-cli`：工具用于命令行转码.
`babel-code`: 某些模块用babel-API转码。
`babel-polyfill`: Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

# ES2015转码规则 - 任选其一
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3


# 然后，将这些规则加入.babelrc
```javascript 
 {
    "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
    "plugins": []
  }
```

# Babel提供babel-cli工具，用于命令行转码。

```javascript
$ npm install --global babel-cli
```

# 基本用法如下。

# 转码结果输出到标准输出
`babel example.js`

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
`$ babel example.js --out-file compiled.js`
# 或者
`$ babel example.js -o compiled.js`

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
`$ babel src --out-dir lib`
# 或者
`$ babel src -d lib`

# -s 参数生成source map文件
`$ babel src -d lib -s`