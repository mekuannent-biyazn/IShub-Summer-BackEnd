import { allUsers } from "./userData.js";
import * as fs from "fs";

const emailRegex = /^[^\s@]+@gmail\.com$/;

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

const validOutPut = validUsers
  .map((user, index) => {
    return `${index + 1} ${user.fullname} ${user.email} ${user.phone}`;
  })
  .join("\n");

fs.writeFile("../textFile/validOutPut.txt", validOutPut, "utf-8", (err) => {
  if (err) {
    console.log(`Some thing is not write! ${err.message}`);
  } else {
    console.log("Valid Users Are Writen Succesfully in teaxt file!");
  }
});
