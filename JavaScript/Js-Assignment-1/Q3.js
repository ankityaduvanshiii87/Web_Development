let expenses = [200, 150, 800, 300, 120];
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;
console.log(`Total: $${total.toFixed(2)}`);
console.log(`Average: $${average.toFixed(2)}`);
console.log(`Final (with 10% tax): $${finalAmount.toFixed(2)}`);
