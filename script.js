const screen2 = document.getElementById("body");
let imageChange = document.getElementById("imageChange");
var elmnt = document.getElementById("body");
var txt = elmnt.clientWidth;
const imageChanger = function () {
  if (txt <= 375) {
    imageChange.src = "/images/illustration-laptop-mobile.svg";
  }
};
screen2.addEventListener("resize", function () {
  imageChanger();
});
