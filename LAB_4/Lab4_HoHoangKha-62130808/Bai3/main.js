var display = document.getElementById("display");
//- operator
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var div = document.getElementById("div");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
//- Numbers
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
/////////////////////////////////////////////
plus.onclick = () => { display.value += '+' };
minus.onclick = () => { display.value += '-' };
times.onclick = () => { display.value += '*' };
div.onclick = () => { display.value += '/' };

one.onclick = () => { display.value += '1' };
two.onclick = () => { display.value += '2' };
three.onclick = () => { display.value += '3' };
four.onclick = () => { display.value += '4' };
five.onclick = () => { display.value += '5' };
six.onclick = () => { display.value += '6' };
seven.onclick = () => { display.value += '7' };
eight.onclick = () => { display.value += '8' };
nine.onclick = () => { display.value += '9' };
zero.onclick = () => { display.value += '0' };
dot.onclick = () => { display.value += '.' };

clear.onclick = () => {
    display.value = display.value.slice(0, -1);
    /* display.value = display.value.replace(display.value[length - 1], ""); */

}

equal.onclick = () => {
    display.value = eval(display.value);
}