import $ from 'jquery';

class FuComponent {
    constructor() {
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
    // 渲染-组件DOM
    renderDom(dom) {
        let tag =   `<div class="fu-component">
                        <h1>Welcome to FunUI !</h1>
                        <h2>Hi, i am a fu-component !</h2>
                        <button id="btn_sayHello">Hello</button>
                    </div>`;
        dom.innerHTML = tag;        
    }
    // 公有方法-初始化
    init() {
        console.log(this._getConfig(this.config));
        let btn_dom = document.getElementById('btn_sayHello');
        btn_dom.addEventListener('click', () => {
            alert('hi i am alert from es6');
        })
    }
    // 共有方法-打个招呼
    sayHello(name) {
        console.log(`hi i am not ${this.config.name} i am ${name}`);
    }
    // 私有方法-创建实例
    _getConfig(config) {
        return config;
    }
}

export default FuComponent;