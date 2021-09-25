let imageChange = document.getElementById("imageChange");
var elmnt = document.getElementById("body");
var txt = elmnt.clientWidth;
const imageChanger = function () {
  if (txt <= 375) {
    imageChange.src = "/images/illustration-laptop-mobile.svg";
  }
};
window.addEventListener("resize", function () {
  console.log(txt);
  imageChanger();
});

// test data on button 1
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const arw1 = document.getElementById("arrow1");
const arw2 = document.getElementById("arrow2");
const arw3 = document.getElementById("arrow3");
// ON DESKTOP VIEW
// TODO Nav bar
// Functions

// Refactor
const addStyles1 = function () {
  arw1.style.transform = "rotate(180deg)";
  button1.style.textDecoration = "underline";
};
const removeStyles1 = function () {
  arw1.style.removeProperty("transform");
  button1.style.textDecoration = "none";
};
const keratin1 = function (btn) {
  console.log("nagan");
  btn.addEventListener("focus", addStyles1);
  btn.addEventListener("blur", removeStyles1);
};
//
const addStyles2 = function () {
  arw2.style.transform = "rotate(180deg)";
  button2.style.textDecoration = "underline";
};
const removeStyles2 = function () {
  arw2.style.removeProperty("transform");
  button2.style.textDecoration = "none";
};
const keratin2 = function (btn) {
  console.log("nagan");
  btn.addEventListener("focus", addStyles2);
  btn.addEventListener("blur", removeStyles2);
};
//
const addStyles3 = function () {
  arw3.style.transform = "rotate(180deg)";
  button3.style.textDecoration = "underline";
};
const removeStyles3 = function () {
  arw3.style.removeProperty("transform");
  button3.style.textDecoration = "none";
};
const keratin3 = function (btn) {
  console.log("nagan");
  btn.addEventListener("focus", addStyles3);
  btn.addEventListener("blur", removeStyles3);
};

keratin1(button1);
keratin2(button2);
keratin3(button3);
// 1. on focus the list should be underlines

// 2. Open Modal

// 3. Once the modal list is hovered text-color will change

// on blur close modal

//  ON MOBILE
// 1. on click the hamburger menu will become X

//2 POP UP SCREEN

// WHILE POP UP SCREENTRUE
// // 1. on focus the list should show the open modal FUNCTION

// 1.1 the size of pop up screen should adjust accordingly

// 2. Open Modal

// on blur close modal

// on click again the hamburger menu is close
// POP UP SCREEN DISPLAY NONE
