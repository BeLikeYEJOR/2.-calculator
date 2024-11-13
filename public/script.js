//! fix this to work with just classes

const BtnOne = document.querySelector("#one");
const BtnTwo = document.querySelector("#two");
const BtnThree = document.querySelector("#three");
const BtnFour = document.querySelector("#four");
const BtnFive = document.querySelector("#five");
const BtnSix = document.querySelector("#six");
const BtnSeven = document.querySelector("#seven");
const BtnEight = document.querySelector("#eight");
const BtnNine = document.querySelector("#nine");
const BtnZero = document.querySelector("#zero");
const BtnAdd = document.querySelector("#plus");
const BtnSub = document.querySelector("#minus");
const BtnMulti = document.querySelector("#times");
const BtnDivide = document.querySelector("#divide");
const BtnClear = document.querySelector("#clear");
const BtnEqual = document.querySelector("#equals");
const result = document.querySelector("#result");

let answer = 0;
let currentResult = 0;
let previousResult = 0;
let operator = "+";

function numberEventListner(btn) {
  btn.addEventListener("click", (event) => {
    const digit = parseInt(event.target.innerText);
    answer = digit + answer * 10;
    result.textContent = answer;
    currentResult = answer;
  });
}

numberEventListner(BtnOne);
numberEventListner(BtnTwo);
numberEventListner(BtnThree);
numberEventListner(BtnFour);
numberEventListner(BtnFive);
numberEventListner(BtnSix);
numberEventListner(BtnSeven);
numberEventListner(BtnEight);
numberEventListner(BtnNine);
numberEventListner(BtnZero);

BtnClear.addEventListener("click", () => {
  answer = 0;
  result.textContent = answer;
});

//*  FINISHED THE ADDITION AYAYAYAYYA

BtnAdd.addEventListener("click", (e) => {
  previousResult = currentResult;
  operator = "+";
  answer = 0;
  result.textContent = answer;
  currentResult = answer;
});

BtnEqual.addEventListener("click", () => {
  let tempAnswer = 0;
  if (operator === "+") {
    tempAnswer = previousResult + currentResult;
  } else if (operator === "-") {
    tempAnswer = previousResult - currentResult;
  } else if (operator === "*") {
    tempAnswer = previousResult * currentResult;
  } else if (operator === "/") {
    if (currentResult == 0) {
      currentResult = 1;
    }
    tempAnswer = previousResult / currentResult;
  }
  result.textContent = tempAnswer;
  previousResult = currentResult;
  currentResult = tempAnswer;
});

BtnSub.addEventListener("click", (e) => {
  previousResult = currentResult;
  operator = "-";
  answer = 0;
  result.textContent = answer;
  currentResult = answer;
});

BtnMulti.addEventListener("click", (e) => {
  previousResult = currentResult;
  operator = "*";
  answer = 0;
  result.textContent = answer;
  currentResult = answer;
});

BtnDivide.addEventListener("click", (e) => {
  previousResult = currentResult;
  operator = "/";
  answer = 0;
  result.textContent = answer;
  currentResult = answer;
});
