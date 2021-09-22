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

// ON DESKTOP VIEW
// TODO Nav bar

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
