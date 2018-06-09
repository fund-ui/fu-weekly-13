require.config({
    paths: {
        Module1: 'module1',
        Module2: 'module2',
        FuComponent: '../es5/fu-component',
        JQUERY: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
    }
});

require(['Module1', 'FuComponent'], function(Module1, FuComponent){
    // 使用模块
    Module1.sayHello();
    // 使用兼容模块
    var myComponent = new FuComponent({
        name: 'Dengdeng'
    });
    myComponent.renderDom(document.getElementById('fu-component'));
    myComponent.init();
});