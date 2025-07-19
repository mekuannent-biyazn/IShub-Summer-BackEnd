let fs = require("fs");

let largeFile = fs.readFileSync(
  "fabd19ee4633d05a2cda0a486f7ade13.mp3",
  "binary"
);
console.log(largeFile);
console.log("this is displayed after read file !");

const largeFile2 = fs.readFile(
  "fabd19ee4633d05a2cda0a486f7ade13.mp3",
  function (err, data) {
    if (err) {
      console.log("somthing is wrong please check it back?");
    } else {
      console.log(data);
    }
  }
);
