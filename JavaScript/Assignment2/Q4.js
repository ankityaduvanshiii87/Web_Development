let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
let passed = scores.filter(s => s >= 50).length;
console.log(`Scores: ${scores.join(", ")}
Highest: ${highest}
Lowest: ${lowest}
Average: ${avg.toFixed(2)}
Passed: ${passed}`);
