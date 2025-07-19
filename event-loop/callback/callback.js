function calcAreaRec(base, height) {
  const Area = base * height;
  return Area;
}
function displayAr(AR) {
  console.log(AR);
}
let result = displayAr(calcAreaRec(5, 6));

//gain result from the first function

function TempratureF(TF) {
  const TempC = (5 / 9) * (TF - 32);
  return TempC;
}
function TempratureC(result) {
  console.log(result);
}
TempratureC(TempratureF(45));
// callback as parametre!!

function ADDNum(a, b, callback) {
  let result = a + b;
  callback(result);
}
function sum(result) {
  console.log(result);
}
ADDNum(5, 9, sum);

function first(callbacks) {
  setTimeout(() => {
    console.log("first");
    callbacks();
  }, 1000);
}
function second(callbacks) {
  setTimeout(() => {
    console.log("second");
    callbacks();
  }, 1000);
}
function third(callbacks) {
  setTimeout(() => {
    console.log("third");
    callbacks();
  }, 1000);
}
function fourth(callbacks) {
  setTimeout(() => {
    console.log("forth");
    callbacks();
  }, 1000);
}
first(() => {
  second(() => {
    third(() => {
      fourth(() => {
        console.log("DONE!");
      });
    });
  });
});
//setTime out Assyncronious function
function goodAft() {
  console.log("GOOD After noon !");
}
function GoodMor() {
  console.log("GOOD Mornning !");
}
setTimeout(GoodMor, 900); //this runs after goodAft function run
Promise.resolve().then(goodAft); //it runs first
