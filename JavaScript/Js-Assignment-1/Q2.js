let name = "Emma";
let age = 25;
let isStudent = true;
let hobbies = ["music", "art"];
let profile = { city: "Paris", id: 123 };
let emptyValue = null;
let notDefined;
console.table([
  { Label: "Name", Value: name, Type: typeof name },
  { Label: "Age", Value: age, Type: typeof age },
  { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "Profile", Value: JSON.stringify(profile), Type: typeof profile },
  { Label: "Empty Value", Value: emptyValue, Type: typeof emptyValue },
  { Label: "Not Defined", Value: notDefined, Type: typeof notDefined }
]);
