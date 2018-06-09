# 一起看看 JavaScript 的几种模块化方案

**前端周刊 - 第13期 - SAFS Fund FE - Dengdeng**

早期，我们在写 `JavaScript` 时代码量少，可能几个function就能够解决问题，但是当页面逻辑较为复杂的时候，我们就不得不引入 `模块化` 的编程。

## 1. 早期的模块

早期为使得 `JavaScript` 具备模块化的能力，开源社区的大神前赴后继提出了替代的解决方案。

### 1.1 AMD

- 异步加载，依赖声明

- 使用 [requirejs](http://requirejs.org) 库，浏览器在线模块化解决方案

- 需要使用 [require.config](http://requirejs.org/docs/api.html#config) 配置模块路径

- 定义模块

``` js
// fu-Component.js
define(function(){ 
    return {
        greet: function() { 
            alert('Fucking Awesome! Dengdeng');
        }
        // ...
    }
})
```

- 加载模块

``` js
// main.js
require(['jquery','fu-component'], function($, fc){ 
    $(document).ready(function(){ 
        fc.greet();
    })
})

```

> Tips: 目前我们在 `FundManagement` 和 `Wise` 项目中大量使用`AMD`的模块化加载方案，把页面上的大量js代码拆分成逻辑接近的模块，再从页面入口`main.js`消费这些实现抽象定义好的模块。

### 1.2 CMD

- 按需加载，依赖就近

- 与 `AMD` 类似，在国内发展出来的方案,主要通过 [seajs](https://seajs.github.io/seajs/docs/) 实现

- 定义模块

``` js
// fu-Component.js
define(function(require, exports, module){ 
    exports = {
        greet: function() { 
            alert('Fucking Awesome! Dengdeng');
        }
        // ...
    }
})
```

- 加载模块

``` js
// main.js
seajs.use(['jquery-12.1.3.js','fu-component.js'], function($, fc){ 
    $(document).ready(function(){ 
        fc.greet();
    })
})

```

> Tips: 该方案主要基于国内的开源项目 `seajs` 实现，与 `requirejs` 类似，当时我们在项目中并没有选择使用，并非JavaScript模块化的未来，故弃之。

### 1.3 CommonJS

- 同步加载，适用于`非浏览器`环境

- 基于[nodejs](https://nodejs.org/dist/latest-v8.x/docs/api/modules.html)环境，伴随nodejs的发展

- 暴露模块

``` js
// fu-Component.js
var FuComponent = {
    greet: function() {
        // 此处alert无法使用，因为nodejs环境中没有window对象，而alert() 其实是 window.alert()
        // alert('Fucking Awesome! Dengdeng');
        console.log('Fucking Awesome! Dengdeng');
    }
}
module.exports = FuComponent; 
```

- 加载模块

``` js
// main.js
var $ = require('node_modules/jquery-1.12.0.js'); // 加载jquery插件
var fc = require('./fu-Component.js'); // 加载模块
fc.greet();

```

> Tips: `nodejs` 的出现让 `JavaScript` 拥有了不依赖于浏览器的开发环境，我们可以在机器上[安装nodejs](https://nodejs.org/en/)。类似C#的`nuget`，[npm包管理工具](https://www.npmjs.com/) 使得我们能够在本地进行大规模编程和`搭建服务端应用`，`gulp` 和 `webpack` 这些前端构建工具正是在这个环境下开发的，包括很多第三方库 `jquery` 和框架 `vue` 都是基与此开发，测试，最后发布出来为大家所用。

- 使用npm包管理工具，安装jquery库

``` npm
 npm install jquery --save--dev
```

## 2. ES2015 中的模块 

与其他编程语言一样，JavaScript 也是一门不断发展的语言，它一直希望和服务端语言一样拥有大规模编程的能力，直到 [ES2015](http://es6.ruanyifeng.com/) ，即现在的 [ES6](http://es6.ruanyifeng.com/) 模块化才真正纳入规范。即使目前旧版本浏览器不支持，我们也可以借助转译工具 [babel](https://babeljs.io/) ，构建出在当前普遍浏览器都能运行的 `ES5` 语法。

> JavaScript 语言未来很可能是以`新特性`的方式发展，而非`新版本`逐个向前演进。摘自《你不懂JavaScript》

- 关键字 `import` 与 `exports`

- 导出模块

``` js
// fu-Component.js
var FuComponent = {
    greet: function() {
        console.log('Fucking Awesome! Dengdeng');
    }
}
export default FuComponent;
```

- 导入模块

``` js
// main.js
import $ from './node_modules/jquery-1.12.0.js';
import fc from './fu-Component.js'

fc.greet(); // > Fucking Awesome! Dengdeng

```

> Tips: 模块的导入导出可以是`变量`，`函数`，`类`，类似于 `nodejs` 中的 `Commonjs` 风格的，目前总算是在语法层面上支持模块化了，这当然需要搭配 [webpack](https://webpack.js.org/) 等构建工具来使用。

## 3. 模块兼容写法

如何写出一种兼容 `AMD` , `CMD` , `Commonjs` 等多种模块化方案的模块呢？参考了 `jquery`, `loadash`, `underscore` 等著名的开源库`模块化兼容`写法。

我们 `SAFS Fund FE` 在上周进行了一个内部交流，包括`面向对象`在内的梳理，我们得出以下`模块化兼容方案`。

- 声明组件

``` js
// FuComponent.js
; (function (global) {
    // 模块兼容写法
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        // 兼容nodejs环境
        module.exports = factory();
    } else if (typeof define === 'function' && (define.cmd || define.amd)) {
        // 兼容amd & cmd
        define(factory);
    } else {
        // 兼容全局引入
        global.FuComponent = factory();
    }
    function factory() {
        /**
         * 构造函数
         *
         * @param {any} option 配置项
         */
        function FuComponent(option) {
            // 默认配置
            this.config = {
                name: 'Mengmeng'
            };
            // 组件对象
            this.conponent = '';
            // 缓存
            this.cache = {};
            // 混合配置参数
            //this.config = $.extend(this.config, option || {});
        }
        /**
         * 类-xxx组件
         */
        FuComponent.prototype = {
            constructor: FuComponent,
            // 渲染-组件DOM
            renderDom: function (dom) {
                var tag = '<div class="fu-component">';
                    tag += '<h1>Welcome to FunUI !</h1>';
                    tag += '<h2>Hi, i am a fu-component !</h2>';
                    tag += '<button id="btn_sayHello">Hello</button>';
                    tag += '</div>';
                dom.innerHTML = tag;
            },
            // 公有方法-初始化
            init: function () {
                console.log(this._getConfig(this.config));
                var btn_dom = document.getElementById('btn_sayHello');
                btn_dom.addEventListener('click', function() {
                    alert('hi i am alert for es5');
                })
            },
            // 共有方法-打个招呼
            sayHello: function (name) {
                console.log('hi i am not ' + this.config.name + ' i am ' + name);
            },
            // 私有方法-创建实例
            _getConfig: function(config) {
                return config
            }
        }
        return FuComponent;
    }
    
})(typeof window !== 'undefined' ? window : global);  
```

- 消费组件
``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>模块示例</title>
</head>
<style>
</style>
<body>
    <div id="fu-component"></div>
</body>
<script src="./fu-component.js"></script>
<script>
    var myComponent = new FuComponent();
        myComponent.renderDom(document.getElementById('fu-component'));
        myComponent.init();
        myComponent.sayHello('DengDeng');
</script>
</html>
```

## API

Name | Type | Return |
---- | ---- | ----: |
setName | func | void |
getName | func | String |
sayHello | func | void |
