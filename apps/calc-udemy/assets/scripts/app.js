const defaultResult = 0;
let currentResult = defaultResult;

const add = (num1, num2) => {
    const result = num1 + num2;
    // alert('result is ' + result)
    return result;

}
const subtract = (num1, num2) => {
  const answer = num1 - num2;
  return answer;
};

const stringify = (num) => {
  return `("Result: ${num}")`;
};


currentResult = stringify(449);

let calculationResult = `(${defaultResult} + 10) * 3`;
outputResult(currentResult, calculationResult);// template literal
