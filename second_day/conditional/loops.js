const arr = [
  "Monday",
  "Tuseday",
  "WendnesDay",
  "Thrsday",
  "Friday",
  "Satureday",
  "Sunday",
];
for (let i = arr.length; i >= 0; i--) {
  console.log("The " + i + "th day is :" + arr[i - 1]);
}

let i = 0;
while (i < 6) {
  let j = 5;
  let line = "";
  while (j >= i) {
    line += "*";
    j--;
  }
  console.log(line);
  i++;
}

let l = 0;
do {
  console.log(l);
  l++;
} while (l < 0);
