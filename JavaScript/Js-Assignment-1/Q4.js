let marks = [90, 82, 88, 94, 78];
let total = marks.reduce((a, b) => a + b, 0);
let average = total / marks.length;
let percentage = (total / 500) * 100;
if (marks.some(mark => mark < 35)) {
  console.log("Detained (subject below 35)");
} else if (percentage >= 85) {
  console.log(`Promoted with Distinction (${percentage.toFixed(2)}%)`);
} else if (percentage >= 50) {
  console.log(`Promoted (${percentage.toFixed(2)}%)`);
} else {
  console.log(`Detained (${percentage.toFixed(2)}%)`);
}
