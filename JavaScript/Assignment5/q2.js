function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const arr = [1, 2, 3, 4];

console.log(applyOperation(arr, num => num * 2));
console.log(applyOperation(arr, num => num * num));
