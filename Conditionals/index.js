// if, else if, and else Statements -------------------------
let score = 75;
if (score >= 80) {
  console.log("Grade A"); // "Grade A" is logged
} else if (score >= 70) {
  console.log("Grade B"); // "Grade B" is logged
} else {
  console.log("Grade C or lower");
}

// Ternary Operator (? :) ------------------------------------
let age = 10;
let isAdult = (age >= 18) ? "Can vote" : "Cannot vote";
// Syntax: condition ? expressionIfTrue : expressionIfFalse;
console.log(isAdult); // "Can vote" is logged

// switch Statement ------------------------------------------ 
let day = new Date().getDay();
let greeting;
console.log(typeof greeting);

switch (day) {
  case 0:
    greeting = "Sunday";
    break;
  case 1:
      greeting = "Monday";
    break;
  default:
    greeting = "Some other day"; // Code runs if no case matches
}
console.log(greeting+" - "+day);
// logs "Some other day" if today is not Sunday or Monday

// // Example: Using switch with range conditions
const grade = 85;
switch (true) {
  case (grade >= 90):
    console.log("Grade: A");
    break;
  case (grade >= 80): // This matches because (85 >= 80) is true
    console.log("Grade: B");
    break;
  case (grade >= 70):
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: F");
}