let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(`Word Count: ${words}`);
console.log(hasNegative ? "Needs Improvement" : "Positive Feedback");
