## vue-cli
- 下载一个全局生成vue项目的脚手架

```
npm install vue-cli g
vue init webpack <项目名字>
cd 项目名字
npm instaill
npm run dev
```

## 模块
- node模块的规范commonjs
- cmd seajs amd require
- umd 为了做兼容处理的(让遵循了某个规范之后，同样也能适用其他模块)
- esmodule
    - 如何定义模块
    - 如何导出模块
    - 如何使用模块

## 下载webpack
```
npm init -y(初始化)
npm install webpack -g(不推荐)
npm install webpack --dev(推荐使用)
```

> 安装webpack或者less最好不要全局安装，否则可能导致webpack的版本差异

- 在package.json中配置一个脚本，这个脚本用的命令是webpack.会去当前的node_modules下找
bin对应的webpack名字让直行，执行的就是bin/webpack.js，webpack.js需要当前目录下有个名字叫
webpack.config.js的文件，我们通过npm run build执行的目录是当前文件的目录，
所以会去当前目录下查找。

## babel转义es6->es5
- 安装babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```

## babel-preset-es2015
- 让翻译官拥有解析es6语法的功能
```
npm install babel-perset-es2015 --save-dev
```

## babel-perset-stage-0
- 解析es7语法的功能 包含了stage-1,stage-2,stage-3(ps:其中stage-4指的就是es6)
```
npm install babel-perset-stage-0 --save-dev
```

## 解析样式
- css-loader 将css解析成模块，将解析的内容插入到style标签内(style-loader)
```
npm install css-loader style-loader --save-dev
```

## less(预处理语言)
- less-loader less
- sass-loader
- stylus-loader
```
npm install less less-loader --save-dev
```

## 解析图片
- file-loader url-loader(是依赖于file-loader的)
```
npm install file-loader url-loader --save-dev
```

## 需要解析HTML插件
- 插件的作用是以我们自己的HTML为模板将打包后的结果，
自动引入到HTML中产出到dist目录下
```
npm install html-webpack-plugin --save-dev
```

## webpack-dev-server
- 这里面内置了服务，可以帮我们启动了一个端口号，当代码更新时
可以自动打包(内存中打包)，代码有变化就重新执行


