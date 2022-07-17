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
    newValue = num;
    resultValue = "";
  }
  // else {
  //   newValue += num;
  // }

  enterValue.value = newValue;
  // enterValue.value = perviousValue;

  console.log(num, newValue);
};

const mathButtonPress = function (operator) {};

const clearButtonPress = function () {
  perviousValue = "";
  newValue = "";
  resultValue = "";
  mathOperator = "";
  enterValue.value = "0";
};
