const monthArr = ["september", "october", "november", "december", "january"];

console.log(monthArr.length);
console.log(monthArr.pop());
console.log(monthArr.push("February"));
console.log(monthArr.shift("september"));
console.log(monthArr.unshift("september"));
console.log(monthArr.find((month) => month === "september"));
console.log(monthArr.findIndex((month) => month == "november"));
console.log(monthArr);
