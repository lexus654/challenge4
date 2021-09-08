const div = document.getElementById("list");
const btn = document.querySelector(".btn");

const showlist = function () {
  div.classList.remove("hide");
};
const hidelist = function () {
  div.classList.add("hide");
};
btn.addEventListener("focus", showlist);
btn.addEventListener("blur", hidelist);

// https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
