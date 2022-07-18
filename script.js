"use strict";

let perviousValue = "";
let newValue = "";
let resultValue = "0";
let mathOperator = "";

let enterValue = document.getElementById("enter");
// enterValue.value = "";
// console.log(enterValue);

const numButtonPress = function (num) {
  if (resultValue) {
    newValue = num.toString();
    resultValue = "";
  }
  // WHY doesnt this work as string?? BC the number you were giving was integer
  else {
    newValue += num;
  }

  enterValue.value = newValue;

  // console.log(num, newValue);
};

const mathButtonPress = function (operator) {
  if (!resultValue) {
    perviousValue = newValue;
  } else {
    perviousValue = resultValue;
  }
  newValue = "";
  mathOperator = operator;
  resultValue = "0";
  enterValue.value = "";
};

const equalButtonPress = function () {
  perviousValue = parseInt(perviousValue);
  newValue = parseInt(newValue);
  if (mathOperator === "+") {
    resultValue = perviousValue + newValue;
  } else if (mathOperator === "-") {
    resultValue = perviousValue - newValue;
  } else if (mathOperator === "/") {
    resultValue = perviousValue / newValue;
  } else if (mathOperator === "*") {
    resultValue = perviousValue * newValue;
  }
  enterValue.value = resultValue;
};

const clearButtonPress = function () {
  perviousValue = "";
  newValue = "";
  resultValue = "0";
  mathOperator = "";
  enterValue.value = "0";
};
