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