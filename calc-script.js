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
let backspace = document.getElementById("backspace");
let decimal = document.getElementById("decimal");
// keyboard support
window.addEventListener("keydown", checkKey, false);
function checkKey(key){
    if (key.keyCode == "49"){
        if (zeroError === true){zeroReset()};
        value += "1";
        return display.innerHTML += "1";
    } else if (key.keyCode == "50"){
        if (zeroError === true){zeroReset()};
        value += "2";
        return display.innerHTML += "2";
    } else if (key.keyCode == "51"){
        if (zeroError === true){zeroReset()};
        value += "3";
        return display.innerHTML += "3";
    } else if (key.keyCode == "52"){
        if (zeroError === true){zeroReset()};
        value += "4";
        return display.innerHTML += "4";
    } else if (key.keyCode == "53"){
        if (zeroError === true){zeroReset()};
        value += "5";
        return display.innerHTML += "5";
    } else if (key.keyCode == "54"){
        if (zeroError === true){zeroReset()};
        value += "6";
        return display.innerHTML += "6";
    } else if (key.keyCode == "55"){
        if (zeroError === true){zeroReset()};
        value += "7";
        return display.innerHTML += "7";
    } else if (key.keyCode == "56"){
        if (zeroError === true){zeroReset()};
        value += "8";
        return display.innerHTML += "8";
    } else if (key.keyCode == "57"){
        if (zeroError === true){zeroReset()};
        value += "9";
        return display.innerHTML += "9";
    } else if (key.keyCode == "48"){
        if (zeroError === true){zeroReset()};
        value += "0";
        return display.innerHTML += "0";
    } else if (key.keyCode == "220"){
        // divide
        return;
    } else if (key.keyCode == "88"){
        // multiply
        return;
    } else if (key.keyCode == "189"){
        // subtract
        return;
    } else if (key.keyCode == "16" && key.keyCode == "187"){
        // add
        return;
    } else if (key.keyCode == "187" && key.keyCode != "16"){
        // equals
        return;
    } else if (key.keyCode == "46"){
        return zeroReset();
    } else if (key.keyCode == "8"){
        if (value.length > 0){
            return value = value.slice(0,-1), display.innerHTML = value;
        } else {
            return;
        }
    } else if (key.keyCode == "190"){
        if (value.indexOf('.') > -1){
            return;
        } else {
            return value += ".", display.innerHTML += ".";
        }
    }
}
// number buttons
let value = "";
one.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "1";
    return display.innerHTML += "1";
});
two.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "2";
    return display.innerHTML += "2";
});
three.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "3";
    return display.innerHTML += "3";
} );
four.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "4";
    return display.innerHTML += "4";
});
five.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "5";
    return display.innerHTML += "5";
} );
six.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "6";
    return display.innerHTML += "6";
});
seven.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "7";
    return display.innerHTML += "7";
} );
eight.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "8";
    return display.innerHTML += "8";
});
nine.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "9";
    return display.innerHTML += "9";
} );
zero.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "0";
    return display.innerHTML += "0";
});
// equation value storage
let numA = 0;
let numB = 0;
let operatorAdd = false;
let operatorSubtract = false;
let operatorMultiply = false;
let operatorDivide = false;
// Resets after division by zero
let clearHistory = false;
let zeroError = false;
function zeroReset(){
    value = "", numA = 0, numB = 0, operator = 0, historyArray = [];
    operatorAdd = false;
    operatorSubtract = false;
    operatorMultiply = false;
    operatorDivide = false;
    zeroError = false;
    equalReset = false;
    return display.innerHTML = "", history.innerHTML = "";
}
// operator functions
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
// clear function
clear.addEventListener('click', function(){
    value = "", numA = 0, numB = 0, operator = 0, historyArray = [];
    operatorAdd = false;
    operatorSubtract = false;
    operatorMultiply = false;
    operatorDivide = false;
    zeroError = false;
    equalReset = false;
    return display.innerHTML = "", history.innerHTML = "";
});
// Equals
let operators;
equals.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    if (value.toString()[0] == 0 && value.length > 1){
        value = value.substring(1);
        value = Number(value);
    } else {
        value = Number(value);
    }
    clearHistory = true;
    historyArray.pop();
    if (value == 0 && operatorDivide === true || numA == 0 && operatorDivide === true){
        history.innerHTML += value + "<span> = &#9785;</span>"
        value = "", numA = 0, numB = 0, operator = 0, historyArray = [];
        operatorAdd = false;
        operatorSubtract = false;
        operatorMultiply = false;
        operatorDivide = false;
        zeroError = true;
        return display.innerHTML = "You can't divide by zero."
    } else {
        if (operatorAdd){
            operatorAdd = false;
            numB = addition(numA,value);
            // potentially change numB to a string, limit it's length and convert it back to a number.
            historyArray.push(' + ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = `${numB}`, history.innerHTML += "<span> = " + numB + "</span>";
            return value = `${numB}`, numA = 0;
        } else if (operatorSubtract){
            operatorSubtract = false;
            numB = subtraction(numA,value);
            historyArray.push(' - ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = `${numB}`, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = `${numB}`, numA = 0;
        } else if (operatorMultiply){
            operatorMultiply = false;
            numB = multiplication(numA,value);
            historyArray.push(' x ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = `${numB}`, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = `${numB}`, numA = 0;
        } else if (operatorDivide){
            operatorDivide = false;
            numB = division(numA,value);
            historyArray.push(' &#247; ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = `${numB}`, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = `${numB}`, numA = 0;
        } else {
            numB = value;
            numB = Number(numB);
            history.innerHTML = historyArray;
            display.innerHTML = `${numB}`, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = `${numB}`, numA = 0;
        }
    }    
});
// Add
add.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    if (value.toString()[0] == 0 && value.length > 1){
        value = value.substring(1);
        value = Number(value);
    } else {
        value = Number(value);
    }
    numB = 0;
    if (clearHistory){
        history.innerHTML = "";
        historyArray = [];
        clearHistory = false;
    }
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> + </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd || numA == 0 && operatorAdd){
        numA = addition(numA,value);
        return value = "";
    } else if (numA && operatorSubtract || numA == 0 && operatorSubtract){
        operatorSubtract = false;
        operatorAdd = true;
        numA = subtraction(numA,value);
        return value = "";
    } else if (numA && operatorMultiply || numA == 0 && operatorMultiply){
        operatorMultiply = false;
        operatorAdd = true;
        numA = multiplication(numA,value);
        return value = "";
    } else if (numA && operatorDivide || numA == 0 && operatorDivide){
        operatorDivide = false;
        operatorAdd = true;
        numA = division(numA,value);
        return value = "";
    } else {
        numA = value;
        operatorAdd = true;
        return value = "";
    }
});
// Subtract
subtract.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    if (value.toString()[0] == 0 && value.length > 1){
        value = value.substring(1);
        value = Number(value);
    } else {
        value = Number(value);
    }
    numB = 0;
    if (clearHistory){
        history.innerHTML = "";
        historyArray = [];
        clearHistory = false;
    }
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> - </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd || numA == 0 && operatorAdd){
        operatorAdd = false;
        operatorSubtract = true;
        numA = addition(numA,value);
        return value = "";
    } else if (numA && operatorSubtract || numA == 0 && operatorSubtract){
        numA = subtraction(numA,value);
        return value = "";
    } else if (numA && operatorMultiply || numA == 0 && operatorMultiply){
        operatorMultiply = false;
        operatorSubtract = true;
        numA = multiplication(numA,value);
        return value = "";
    } else if (numA && operatorDivide || numA == 0 && operatorDivide){
        operatorDivide = false;
        operatorSubtract = true;
        numA = division(numA,value);
        return value = "";
    } else {
        numA = Number(value);
        operatorSubtract = true;
        return value = "";
    }
});
// Multiply
multiply.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    if (value.toString()[0] == 0 && value.length > 1){
        value = value.substring(1);
        value = Number(value);
    } else {
        value = Number(value);
    }
    numB = 0;
    if (clearHistory){
        history.innerHTML = "";
        historyArray = [];
        clearHistory = false;
    }
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> x </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd || numA == 0 && operatorAdd){
        operatorAdd = false;
        operatorMultiply = true;
        numA = addition(numA,value);
        return value = "";
    } else if (numA && operatorSubtract || numA == 0 && operatorSubtract){
        operatorSubtract = false;
        operatorMultiply = true;
        numA = subtraction(numA,value);
        return value = "";
    } else if (numA && operatorMultiply || numA == 0 && operatorMultiply){
        numA = multiplication(numA,value);
        return value = "";
    } else if (numA && operatorDivide || numA == 0 && operatorDivide){
        operatorDivide = false;
        operatorMultiply = true;
        numA = division(numA,value);
        return value = "";
    } else {
        numA = Number(value);
        operatorMultiply = true;
        return value = "";
    }
});
// Divide
divide.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    if (value.toString()[0] == 0 && value.length > 1){
        value = value.substring(1);
        value = Number(value);
    } else {
        value = Number(value);
    }
    if (value == 0 && operatorDivide === true || numA == 0 && operatorDivide === true){
        value = "", numA = 0, numB = 0, operator = 0, historyArray = [];
        operatorAdd = false;
        operatorSubtract = false;
        operatorMultiply = false;
        operatorDivide = false;
        zeroError = true;
        return display.innerHTML = "You can't divide by zero."
    } else {
        numB = 0;
        if (clearHistory){
            history.innerHTML = "";
            historyArray = [];
            clearHistory = false;
        }
        historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
        historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> &#247; </li>`);
        history.innerHTML = historyArray.join(' ');
        display.innerHTML = "";
        if (numA && operatorAdd){
            operatorAdd = false;
            operatorDivide = true;
            numA = addition(numA,value);
            return value = "";
        } else if (numA && operatorSubtract){
            operatorSubtract = false;
            operatorDivide = true;
            numA = subtraction(numA,value);
            return value = "";
        } else if (numA && operatorMultiply){
            operatorMultiply = false;
            operatorDivide = true;
            numA = multiplication(numA,value);
            return value = "";
        } else if (numA && operatorDivide){
            numA = division(numA,value);
            return value = "";
        } else {
            numA = Number(value);
            operatorDivide = true;
            return value = "";
        }
    }
});
// Backspace
backspace.addEventListener('click', function(){
    if (value.length > 0){
        return value = value.slice(0,-1), display.innerHTML = value;
    } else {
        return;
    }
});
// Decimal
decimal.addEventListener('click', function(){
    if (value.indexOf('.') > -1){
        return;
    } else {
        return value += ".", display.innerHTML += ".";
    }
});