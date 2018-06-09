let $ = require('jquery');
let name = require('./module1');
let FuComponent = require('../es5/fu-component');

console.log('hi i from nodejs, i am',name);

// 在node中消费模块
let myComponent = new FuComponent({
    name: 'Dengdeng'
});
myComponent.renderDom(document.getElementById('fu-component'));
myComponent.init();



