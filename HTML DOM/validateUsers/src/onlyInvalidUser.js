import { allUsers } from "./userData.js";
import * as fs from "fs";

const emailRegex = /^[^\s@]+@gmail\.com$/;
const phoneRegex = /^\+/;

const invalidUsers = [];

allUsers.allUsers.forEach((user) => {
  const fullname = user.fullname.replace("_", " ");
  const email = user.email;
  const phone = user.phone;

  const isEmailValid = emailRegex.test(email);
  const isPhoneValid = phoneRegex.test(phone);

  if (!fullname || !isEmailValid || !isPhoneValid) {
    invalidUsers.push({ fullname, email, phone });
  }
});

const output = invalidUsers
  .map(
    (user, index) =>
      `${index + 1}. ${user.fullname}  ${user.email}  ${user.phone}`
  )
  .join("\n");

fs.writeFile("../textFile/invalidOutPut.txt", output, "utf-8", (err) => {
  if (err) {
    console.log(`Something went wrong. Check the path: ${err.message}`);
  } else {
    console.log("Invalid users written to file successfully.");
  }
});
