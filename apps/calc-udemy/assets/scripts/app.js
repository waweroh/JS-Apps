const defaultResult = 10;
let currentResult = defaultResult;
let logEntries = []

//gets input from input field
const calcInput = () => {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
const createAndWriteOutput = (resultBeforeCalc, operator, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription)
}

 const writeToLog = (
  operationIdentifier,
  prevResult,
  inputNumber,
  newResult
  ) => {
      const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        num: inputNumber,
        result: newResult,
      };
      logEntries.push(logEntry);
      console.log(logEntries);

  }


const add = () => {
  const userInput = calcInput();
  const initialResult = currentResult;
  currentResult += userInput;
  createAndWriteOutput(initialResult, "+", userInput);
  writeToLog('ADD', initialResult, userInput, currentResult);

}

const subtract = () => {
  const userInput = calcInput();
  const initialResult = currentResult
  currentResult -= userInput;
  createAndWriteOutput(initialResult, '-',  userInput)
  writeToLog("SUBTRACT", initialResult, userInput, currentResult);


}
const multiply = () => {
  const userInput = calcInput();
  const initialResult = currentResult
  currentResult *= userInput;
  createAndWriteOutput(initialResult, '*', userInput)//from vendor.js file
  writeToLog("MULTIPLY", initialResult, userInput, currentResult);


}

const divide = () => {
  const userInput = calcInput();
  const initialResult = currentResult
  currentResult /= userInput;
  createAndWriteOutput(initialResult, '/', userInput)
  writeToLog("DIVIDE", initialResult, userInput, currentResult);
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
