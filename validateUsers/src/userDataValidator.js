import { allUsers } from "./userData.js";
import * as fs from "fs";

// const emailRegex = /^[^\s@]+@gmail\.com$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneRegex = /^\+/;

const validUsers = [];
const invalidUsers = [];

allUsers.allUsers.forEach((user) => {
  const fullname = user.fullname.replace(/_/g, " ");
  const email = user.email;
  const phone = user.phone;

  const isEmailValid = emailRegex.test(email);
  const isPhoneValid = phoneRegex.test(phone);

  if (fullname && isEmailValid && isPhoneValid) {
    validUsers.push({ fullname, email, phone });
  } else {
    invalidUsers.push({ fullname, email, phone });
  }
});

const header = "No,fullname,email,phone\n";

const validOutPut =
  header +
  validUsers
    .map((user, index) => {
      return `${index + 1}, ${user.fullname}, ${user.email}, ${user.phone}`;
    })
    .join("\n");

const invalidOutPut =
  header +
  invalidUsers
    .map(
      (user, index) =>
        `${index + 1}, ${user.fullname},  ${user.email}, ${user.phone}`
    )
    .join("\n");

fs.writeFile("../textFile/validOutPut.csv", validOutPut, "utf-8", (err) => {
  if (err) {
    console.log(`Some thing is not write! ${err.message}`);
  } else {
    console.log("Valid Users Are Writen Succesfully in teaxt file!");
  }
});
fs.writeFile("../textFile/invalidUsers.csv", invalidOutPut, "utf-8", (err) => {
  if (err) {
    console.log(`Something went wrong. Check the path: ${err.message}`);
  } else {
    console.log("Invalid users written to file successfully.");
  }
});
