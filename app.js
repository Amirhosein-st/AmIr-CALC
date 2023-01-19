function data(val) {
    calculator.display.value += val;
}

function del() {
    calculator.display.value = "";
}

function c() {
    calculator.display.value = calculator.display.value.slice(0, -1);
}

function equal() {
    calculator.display.value = eval(calculator.display.value);
}