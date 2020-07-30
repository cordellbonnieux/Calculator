// display
let display = document.getElementById("display");
let history = document.getElementById("history");
//buttons
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
// math functions
function addition(a, b){
    return a + b;
}
function subtraction(a, b){
    return a - b;
}
function multiplication(a, b){
    return a * b;
}
function division(a, b){
    return a / b;
}
// numbers
let value = [];
one.addEventListener('click', function(){
    value += 1;
    console.log(value);
    return display.innerHTML += "1";
} );
two.addEventListener('click', function(){
    value += 2;
    console.log(value);
   return display.innerHTML += "2";
});
three.addEventListener('click', function(){
    value += 3;
    console.log(value);
    return display.innerHTML += "3";
} );
four.addEventListener('click', function(){
    value += 4;
    console.log(value);
   return display.innerHTML += "4";
});
five.addEventListener('click', function(){
    value += 5;
    console.log(value);
    return display.innerHTML += "5";
} );
six.addEventListener('click', function(){
    value += 6;
    console.log(value);
   return display.innerHTML += "6";
});
seven.addEventListener('click', function(){
    value += 7;
    console.log(value);
    return display.innerHTML += "7";
} );
eight.addEventListener('click', function(){
    value += 8;
    console.log(value);
   return display.innerHTML += "8";
});
nine.addEventListener('click', function(){
    value += 9;
    console.log(value);
    return display.innerHTML += "9";
} );
zero.addEventListener('click', function(){
    value += 0;
    console.log(value);
   return display.innerHTML += "0";
});
