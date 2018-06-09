var FuComponent = function() {
    var name = 'mengmeng';
    return {
        sayHello: function() {
            console.log(name);
        },
        getName: function() {
            return 'hi im dengdeng & ' + name;
        }
    }
}

var myComponent = FuComponent();
myComponent.sayHello();

console.log(myComponent.getName());