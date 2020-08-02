// display
let display = document.getElementById("display");
let history = document.getElementById("history");
let historyArray = [];
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
// number buttons
let value = 0;
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
// equation value storage
let numA = 0;
let numB = 0;
let operatorAdd = false;
let operatorSubtract = false;
let operatorMultiply = false;
let operatorDivide = false;
// operator functions
function addition(a, b){
    return numA = a + b;
}
function subtraction(a, b){
    return numA = a - b;
}
function multiplication(a, b){
    return numA = a * b;
}
function division(a, b){
    return numA = a / b;
}
// clear function
clear.addEventListener('click', function(){
    value = 0, numA = 0, numB = 0, operator = 0;
    return display.innerHTML = "", history.innerHTML = "";
});
// Equals
let operators;
equals.addEventListener('click', function(){
    historyArray.pop();
    if (numA && operatorAdd){
        operatorAdd = false;
        numB = addition(numA,value);
        history.innerHTML = historyArray.join(' ');
        display.innerHTML = numB, history.innerHTML += "<span> = " + numB + "</span>";
        return value = 0, numA = 0;
    } else if (numA && operatorSubtract){
        operatorSubtract = false;
        numB = subtraction(numA,value);
        history.innerHTML = historyArray.join(' ');
        display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
        return value = 0, numA = 0;
    } else if (numA && operatorMultiply){
        operatorMultiply = false;
        numB = multiplication(numA,value);
        history.innerHTML = historyArray.join(' ');
        display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
        return value = 0, numA = 0;
    } else if (numA && operatorDivide){
        operatorDivide = false;
        numB = division(numA,value);
        history.innerHTML = historyArray.join(' ');
        display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
        return value = 0, numA = 0;
    } else {
        numB = value;
        history.innerHTML = historyArray;
        display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
        return value = 0, numA = 0;
    }    
});
// Add
add.addEventListener('click', function(){
    numB = 0;
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> + </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd){
        numA = addition(numA,value);
        return value = 0;
    } else if (numA && operatorSubtract){
        operatorSubtract = false;
        operatorAdd = true;
        numA = subtraction(numA,value);
        return value = 0;
    } else if (numA && operatorMultiply){
        operatorMultiply = false;
        operatorAdd = true;
        numA = multiplication(numA,value);
        return value = 0;
    } else if (numA && operatorDivide){
        operatorDivide = false;
        operatorAdd = true;
        numA = division(numA,value);
        return value = 0;
    } else {
        numA = value;
        operatorAdd = true;
        return value = 0;
    }
});
