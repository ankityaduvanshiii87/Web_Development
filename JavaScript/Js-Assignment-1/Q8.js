let currentSalary = 40000;
let incrementRate = 8;
let salaryTable = [];
for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * (incrementRate / 100);
  salaryTable.push({ Year: year, Salary: Math.round(currentSalary) });
}
console.table(salaryTable);
