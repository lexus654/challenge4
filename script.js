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
const arw1 = document.getElementById("arrow1");
// ON DESKTOP VIEW
// TODO Nav bar
// Functions
const addStyles = function () {
  arw1.style.transform = "rotate(180deg)";
  button1.style.textDecoration = "underline";
};
const removeStyles = function () {
  arw1.style.transform = "rotate(180deg)";
  button1.style.textDecoration = "none";
};
// 1. on focus the list should be underlines
button1.addEventListener("focus", addStyles);
button1.addEventListener("blur", removeStyles);

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
