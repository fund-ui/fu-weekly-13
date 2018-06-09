// es5 in node
// var sayHello = function(name) {
//     console.log("hello i am " + name);
// }

// es6 in node
let sayHello = (name) => {
    let word = `hello i am ${name}`
    console.log(word);
}

module.exports = sayHello;