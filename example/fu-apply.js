window.number = 'one';
document.number = 'two';

var s1 = { number: 'three' };

function changeColor() {
    console.log(this.number);
}

changeColor.apply(); // one
changeColor.apply(window); // one
changeColor.apply(document); // two
changeColor.apply(this); // one
changeColor.apply(s1); // three


function Pet(words) {
    this.words = words;
    this.speak = function() {
        console.log(this.words);
    }
}

function Dog(words) {
    // Pet.call(this, words); // 结果: Wang
    Pet.apply(this, arguments); // 结果： Wang
}

var dog = new Dog('Wang');
dog.speak();