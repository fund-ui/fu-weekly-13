window.color = 'red';
document.color = 'yellow';

var s1 = { color: 'blue' };

function changeColor() {
    console.log(this.color);
}

changeColor.call(); //red
changeColor.call(window); // red
changeColor.call(document); // yellow
changeColor.call(this); // red
changeColor.call(s1); //blue

var Pet = {
    words: 'Fucking Awesome',
    speak: function(say) {
        console.log(say, this.word);
    }
}

Pet.speak('Speak'); // > Speak Funcking Awesome

var Dog = {
    words: 'Wang Wang'
}
//将this的指向改变成了Dog
Pet.speak.call(Dog, 'Speak'); // > Speak Wang Wang

// 直接装欢Pet的this指向 Dog
// 使得 Pet函数内部的this指向 ==> 

