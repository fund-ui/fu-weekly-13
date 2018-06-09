import FuComponent from './fu-component-es6';

// 消费模块
let myComponent = new FuComponent({
    name: 'Dengdeng'
});
myComponent.renderDom(document.getElementById('fu-component'));
myComponent.init();
