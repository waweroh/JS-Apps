const defaultResult = 10;
let currentResult = defaultResult;

//gets input from input field
const calcInput = () => {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
const createAndWriteOutput = (resultBeforeCalc, operator, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)
}

const add = () => {
  const userInput = calcInput();
  const initialResult = currentResult;
  currentResult += userInput;
  createAndWriteOutput(initialResult, "+", userInput);
}

const subtract = () => {
  const userInput = calcInput();
  const initialResult = currentResult
  currentResult -= userInput;
  createAndWriteOutput(initialResult, '-',  userInput)

}
const multiply = () => {
  const userInput = calcInput();
  const initialResult = currentResult
  currentResult *= userInput;
  createAndWriteOutput(initialResult, '*', userInput)//from vendor.js file

}

const divide = () => {
  const userInput = calcInput();
  const initialResult = currentResult
  currentResult /= userInput;
  createAndWriteOutput(initialResult, '/', userInput)



}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply)


// const subtract = (num1, num2) => {
//   const answer = num1 - num2;
//   return answer;
// };

// const stringify = (num) => {
//   return `("Result: ${num}")`;
// };


// currentResult = stringify(449);

// let calculationResult = `(${defaultResult} + 10) * 3`;
// outputResult(currentResult, calculationResult);// template literal
