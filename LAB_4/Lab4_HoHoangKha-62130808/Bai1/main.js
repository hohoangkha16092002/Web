var aElement = document.getElementById("gta");
var bElement = document.getElementById("gtb");
var cElement = document.getElementById("gtc");
var result = null;
var btnSum = document.getElementById("btnSum");
var btnMinus = document.getElementById("btnMinus");
var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var log = document.getElementById("log");

function Exception() {

    if (isNaN(aElement.value) && isNaN(bElement.value)) { // a va b deu khong phai la so
        log.innerText = "a và b phải là giá trị số!";
        aElement.value = null;
        bElement.value = null;

    } else if (isNaN(aElement.value)) { //a khong phai so
        log.innerText = "a phải là giá trị số!";
        aElement.value = null;

    } else if (isNaN(bElement.value)) { //b khong phai la so
        log.innerText = "b phải là giá trị số!";
        bElement.value = null;
    }
}



function Sum() {
    result = parseFloat(aElement.value) + parseFloat(bElement.value);
    if (!isNaN(result)) { // Nếu result là giá trị số 
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
}

function Minus() {
    result = parseFloat(aElement.value) - parseFloat(bElement.value);
    if (!isNaN(result)) { // Nếu result là giá trị số 
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
}

function Multiply() {
    result = parseFloat(aElement.value) * parseFloat(bElement.value);
    if (!isNaN(result)) { // Nếu result là giá trị số 
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
}

function Divide() {
    result = parseFloat(aElement.value) / parseFloat(bElement.value);

    if (bElement.value == 0) {
        cElement.value = result;
        log.innerText = "B không được bằng 0";
    } else
    if (!isNaN(result)) {
        cElement.value = result;
        log.innerText = "";
    } else {
        Exception();
    }
};