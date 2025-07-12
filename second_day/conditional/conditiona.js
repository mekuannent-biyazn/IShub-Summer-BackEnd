// const reaine = require("readline");

// const rl = reaine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter the score? ", function (score) {
//   score = parseFloat(score);
let score = 95;

if (score >= 85) {
  console.log("Your grade = A");
} else if (score >= 70) {
  console.log("Your grade = B");
} else if (score >= 50) {
  console.log("Your grade = C");
} else {
  console.log("Your grade = F");
}

//   rl.close();
