"use strict";

const numberEL = document.querySelector(".number");
const fibNumEl = document.querySelector(".fib-number");

// fib recursive formula`
function fibonacciRecursive(x) {
  let counter = 0;
  let f_1 = 1;
  let f_2 = 0;
  let fibNum = 0;

  function calcFibonacci(x) {
    counter++;
    fibNum = f_1 + f_2;
    f_1 = f_2;
    f_2 = fibNum;
    if (counter === x) return fibNum;
    calcFibonacci(x);
  }
  calcFibonacci(x);
  return fibNum;
}
fibonacciRecursive(12);

// fib loop f]ormula

function fibonacciLoop(x) {
  let f_1 = 1;
  let f_2 = 0;
  let fibNum = 0;

  function calcFibonacci(x) {
    fibNum = f_1 + f_2;
    f_1 = f_2;
    f_2 = fibNum;
  }

  for (let i = 0; i < x; i++) {
    calcFibonacci(x);
  }
  let y = fibNum;
  return y;
}

numberEL.textContent = 12;
fibNumEl.textContent = fibonacciLoop(12);
