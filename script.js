"use strict";

let previousValue = "";
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
    previousValue = newValue;
  } else {
    previousValue = resultValue;
  }
  newValue = "";
  mathOperator = operator;
  resultValue = "0";
  enterValue.value = "";
};

const equalButtonPress = function () {
  previousValue = parseInt(previousValue);
  newValue = parseInt(newValue);
  if (mathOperator === "+") {
    resultValue = previousValue + newValue;
  } else if (mathOperator === "-") {
    resultValue = previousValue - newValue;
  } else if (mathOperator === "/") {
    resultValue = previousValue / newValue;
  } else if (mathOperator === "*") {
    resultValue = previousValue * newValue;
  }
  enterValue.value = resultValue;
};

const clearButtonPress = function () {
  previousValue = "";
  newValue = "";
  resultValue = "0";
  mathOperator = "";
  enterValue.value = "0";
};

// CMT drag and drop code

// https://codepen.io/taufik-nurrohman/pen/XJEONy

let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
function dragElement(elmnt) {
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    // CMT drim event ro khali mikonim
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("calc_co"));
