var a = 12;
console.log(a);
//var data type is use before declaration
b = "Mekuannent";
console.log(b);
var b;
//let data type
let Age = 23;
console.log(Age);
//let and var data type can it possible reasign value
Age = 21;
b = "Age is: ";
console.log(b + " " + Age);
//const date type.
const pi = 3.14;
console.log(pi);
console.log("const data type is not reassign or use befor declaration");
fetch("http://localhost:5000/info")
  .then((res) => res.json())
  .then((data) => {
    const p = document.createElement("p");
    p.innerText = `Name: ${data.name}, Role: ${data.role}, City: ${data.city}`;
    document.body.appendChild(p);
  })
  .catch((err) => console.error("Error fetching data:", err));
