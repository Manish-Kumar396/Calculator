let CalcScreen = document.getElementById("calc-screen");

function printer(values) {
  CalcScreen.value += values;
}

function clearLast() {
  CalcScreen.value = CalcScreen.value.slice(0, -1);
}

function clearAll() {
  CalcScreen.value = "";
}

function evaluator() {
  CalcScreen.value = eval(CalcScreen.value);
}
