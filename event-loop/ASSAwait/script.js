async function fetchData() {
  try {
    console.log("first fetch ...");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Netwerk responce is not Ok!");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("there has been a fetch problem! ", err);
  }
}
fetchData();
console.log("this will run as soon as fetch run");

async function myFun() {
  return "Mekuannent";
}
console.log(myFun());
