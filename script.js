const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.onclick = () => {
  menu.style.display = "block";
};
close.onclick = () => {
  menu.style.display = "none";
};
