let age = 19;
let isCitizen = true;
if (isCitizen && age >= 21) {
  console.log("Eligible for all services.");
} else if (isCitizen && age >= 18) {
  console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
