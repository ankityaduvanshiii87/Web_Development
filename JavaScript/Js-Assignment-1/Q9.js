let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ['+', '-', '*', '/'];
let op = operators[Math.floor(Math.random() * operators.length)];
let answer;
switch (op) {
  case '+': answer = num1 + num2; break;
  case '-': answer = num1 - num2; break;
  case '*': answer = num1 * num2; break;
  case '/': answer = (num1 / num2).toFixed(2); break;
}
console.log(`Question: ${num1} ${op} ${num2}`);
console.log(`Correct Answer: ${answer}`);
