const location = "dr";
console.log(
  location === "Ethiopia"
    ? "Ethiopia"
    : location == "Ertra"
    ? "Ertra"
    : "Djjibuti"
);
let result = function calcArea(width, hieght) {
  let Area = width * hieght;
  //   console.log( + Area);
  return Area;
};

console.log("The Area of Rectangle :" + result(4, 5));
