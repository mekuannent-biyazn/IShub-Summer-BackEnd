// const promise = new Promise((resolve, reject) => {
//   resolve(`this is the date`);
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log("Error ${err.mess}", err));

console.log("start");

// const promise = fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error("Error feaching data:", err));
// console.log("this will run as soon as possibly assyncronious");

// Promise.race([
//   fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
//     res.json()
//   ),
//   new Promise((reslve, reject) => {
//     setTimeout(() => reject(new Error("time out")), 5000);
//   }),
// ])
//   .then((data) => {
//     console.log("the first resolved data:", data);
//   })
//   .catch((err) => {
//     console.log("Error: ", err.message);
//   });

Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  ),
])
  .then((post, user) => {
    console.log("User", user);
    console.log("Post", post);
  })
  .catch((err) => {
    console.error("featch data error", err);
  });
