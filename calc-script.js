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
let value = "";
one.addEventListener('click', function(){
    if (zeroError === true){zeroReset()};
    value += "1";
    return display.innerHTML += "1";
} );
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
let zeroError = false;
function zeroReset(){
    value = "", numA = 0, numB = 0, operator = 0, historyArray = [];
    operatorAdd = false;
    operatorSubtract = false;
    operatorMultiply = false;
    operatorDivide = false;
    zeroError = false;
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
    numA = Number(numA);
    historyArray.pop();
    if (value == 0 && operatorDivide === true || numA == 0 && operatorDivide === true){
        value = "", numA = 0, numB = 0, operator = 0, historyArray = [];
        operatorAdd = false;
        operatorSubtract = false;
        operatorMultiply = false;
        operatorDivide = false;
        zeroError = true;
        history.innerHTML += "<span> = :(</span>"
        return display.innerHTML = "You can't divide by zero."
    } else {
        if (numA && operatorAdd){
            operatorAdd = false;
            numB = addition(numA,value);
            numB = Number(numB);
            historyArray.push(' + ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = numB, history.innerHTML += "<span> = " + numB + "</span>";
            return value = "", numA = 0;
        } else if (numA && operatorSubtract){
            operatorSubtract = false;
            numB = subtraction(numA,value);
            numB = Number(numB);
            historyArray.push(' - ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = "", numA = 0;
        } else if (numA && operatorMultiply){
            operatorMultiply = false;
            numB = multiplication(numA,value);
            numB = Number(numB);
            historyArray.push(' x ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = "", numA = 0;
        } else if (numA && operatorDivide){
            operatorDivide = false;
            numB = division(numA,value);
            numB = Number(numB);
            historyArray.push(' &#247; ' + value);
            history.innerHTML = historyArray.join(' ');
            display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = "", numA = 0;
        } else {
            numB = value;
            numB = Number(numB);
            history.innerHTML = historyArray;
            display.innerHTML = numB, history.innerHTML += "<span> = </span>" + numB + "</span>";
            return value = "", numA = 0;
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
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> + </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd){
        numA = Number(numA);
        numA = addition(numA,value);
        return value = "";
    } else if (numA && operatorSubtract){
        operatorSubtract = false;
        operatorAdd = true;
        numA = Number(numA);
        numA = subtraction(numA,value);
        return value = "";
    } else if (numA && operatorMultiply){
        operatorMultiply = false;
        operatorAdd = true;
        numA = Number(numA);
        numA = multiplication(numA,value);
        return value = "";
    } else if (numA && operatorDivide){
        operatorDivide = false;
        operatorAdd = true;
        numA = Number(numA);
        numA = division(numA,value);
        return value = "";
    } else {
        numA = value;
        numA = Number(numA);
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
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> - </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd){
        operatorAdd = false;
        operatorSubtract = true;
        numA = Number(numA);
        numA = addition(numA,value);
        return value = "";
    } else if (numA && operatorSubtract){
        numA = Number(numA);
        numA = subtraction(numA,value);
        return value = "";
    } else if (numA && operatorMultiply){
        operatorMultiply = false;
        operatorSubtract = true;
        numA = Number(numA);
        numA = multiplication(numA,value);
        return value = "";
    } else if (numA && operatorDivide){
        operatorDivide = false;
        operatorSubtract = true;
        numA = Number(numA);
        numA = division(numA,value);
        return value = "";
    } else {
        numA = value;
        numA = Number(numA);
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
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
    historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> x </li>`);
    history.innerHTML = historyArray.join(' ');
    display.innerHTML = "";
    if (numA && operatorAdd){
        operatorAdd = false;
        operatorMultiply = true;
        numA = Number(numA);
        numA = addition(numA,value);
        return value = "";
    } else if (numA && operatorSubtract){
        operatorSubtract = false;
        operatorMultiply = true;
        numA = Number(numA);
        numA = subtraction(numA,value);
        return value = "";
    } else if (numA && operatorMultiply){
        numA = Number(numA);
        numA = multiplication(numA,value);
        return value = "";
    } else if (numA && operatorDivide){
        operatorDivide = false;
        operatorMultiply = true;
        numA = Number(numA);
        numA = division(numA,value);
        return value = "";
    } else {
        numA = value;
        numA = Number(numA);
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
        historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;">` + value + `</li>`);
        historyArray.push(`<li style="display:inline; list-style:none; padding:0; margin:0;" class="operator"> &#247; </li>`);
        history.innerHTML = historyArray.join(' ');
        display.innerHTML = "";
        if (numA && operatorAdd){
            operatorAdd = false;
            operatorDivide = true;
            numA = Number(numA);
            numA = addition(numA,value);
            return value = "";
        } else if (numA && operatorSubtract){
            operatorSubtract = false;
            operatorDivide = true;
            numA = Number(numA);
            numA = subtraction(numA,value);
            return value = "";
        } else if (numA && operatorMultiply){
            operatorMultiply = false;
            operatorDivide = true;
            numA = Number(numA);
            numA = multiplication(numA,value);
            return value = "";
        } else if (numA && operatorDivide){
            numA = Number(numA);
            numA = division(numA,value);
            return value = "";
        } else {
            numA = value;
            numA = Number(numA);
            operatorDivide = true;
            return value = "";
        }
    }
});