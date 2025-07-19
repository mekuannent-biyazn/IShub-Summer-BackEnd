const body = document.body;

body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100vh";

const title = document.createElement("title");
title.innerText = "Emplloyee Details";
document.head.appendChild(title);

const div = document.createElement("div");
const fieldse = document.createElement("fieldset");
fieldse.style.borderRadius = "10px";
fieldse.style.borderColor = "#12f30aff";
const legend = document.createElement("legend");
legend.innerText = "Emplloyee Details";

const form = document.createElement("form");

const lable1 = document.createElement("label");
lable1.innerText = "First Name: ";
lable1.setAttribute("class", "frm");

const input1 = document.createElement("input");
input1.type = "text";
input1.setAttribute("id", "inp");
input1.setAttribute("class", "frm");
input1.setAttribute("required", "");

const br1 = document.createElement("br");

const lable2 = document.createElement("label");
lable2.innerText = "Last Name: ";
lable2.setAttribute("class", "frm");

const input2 = document.createElement("input");
input2.type = "text";
input2.setAttribute("id", "inp");
input2.setAttribute("class", "frm");
input2.setAttribute("required", "");

const br2 = document.createElement("br");

const input3 = document.createElement("input");
input3.type = "radio";
input3.name = "gender";
input3.value = "Male";
input3.setAttribute("id", "inp");
input3.setAttribute("class", "frm");

const lable3 = document.createElement("label");
lable3.innerText = "Male";
lable3.setAttribute("class", "frm");

const input4 = document.createElement("input");
input4.type = "radio";
input4.name = "gender";
input4.value = "Female";
input4.setAttribute("id", "inp");
input4.setAttribute("class", "frm");

const lable4 = document.createElement("label");
lable4.innerText = "Female";
lable4.setAttribute("class", "frm");

const lable5 = document.createElement("label");
lable5.innerText = "Emplloye_Id: ";
lable5.setAttribute("class", "frm");

const input5 = document.createElement("input");
input5.type = "text";
input5.setAttribute("id", "inp");
input5.setAttribute("class", "frm");
input5.setAttribute("required", "");

const br3 = document.createElement("br");

const lable6 = document.createElement("label");
lable6.innerText = "Designation: ";
lable6.setAttribute("class", "frm");

const input6 = document.createElement("input");
input6.type = "text";
input6.setAttribute("id", "inp");
input6.setAttribute("class", "frm");
input6.setAttribute("required", "");

const br4 = document.createElement("br");

const lable7 = document.createElement("label");
lable7.innerText = "Phone_Number: ";
lable7.setAttribute("class", "frm");

const input7 = document.createElement("input");
input7.type = "number";
input7.setAttribute("id", "inp");
input7.setAttribute("class", "frm");
input7.setAttribute("required", "");

const br5 = document.createElement("br");
const br6 = document.createElement("br");

const btn = document.createElement("button");
btn.innerHTML = "submit";
input7.setAttribute("class", "frm");

div.appendChild(fieldse);
fieldse.append(legend, form);
form.append(
  lable1,
  input1,
  br1,
  lable2,
  input2,
  br2,
  input3,
  lable3,
  input4,
  lable4,
  br3,
  lable5,
  input5,
  br4,
  lable6,
  input6,
  br5,
  lable7,
  input7,
  br6,
  btn
);
body.appendChild(div);

const styl = document.querySelectorAll(".frm");
styl.forEach((el) => {
  el.style.margin = "6px";
  el.style.padding = "3px";
  el.style.borderRadius = "5px";
});

// btn.setAttribute("onclick","submitHandler()")
btn.addEventListener("click", submitHandler());
function submitHandler() {
  const inputs = document.querySelectorAll("#inp");

  if (inputs == "") {
    alert("please fill the input all fields");
  } else {
    alert("your data is submited successfully!");
  }
}
