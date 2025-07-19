console.log("First");
// setTimeout(() => {
//   console.log("Time Out");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("promise");
// });
// console.log("end");
setTimeout(() => {
  console.log("this is Asyncronius timeout function");
}, 5000);
Promise.resolve().then(() => {
  console.log("this is Asyncronius promise");
});
