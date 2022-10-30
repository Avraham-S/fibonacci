"use strict";

const number = document.querySelector(".number");
const fibNum = document.querySelector(".fib-number");
number.textContent = 12;
fibNum.textContent = 144;

// fib formula
function fibonacci(x) {
  let counter = 0;
  let f_1 = 1;
  let f_2 = 0;
  let curNum = 0;

  function calcFibonacci(x) {
    counter++;
    curNum = f_1 + f_2;
    f_1 = f_2;
    f_2 = curNum;
    if (counter === x) return curNum;
    calcFibonacci(x);
  }
  return calcFibonacci(x);
}
fibonacci(20);
