const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.onclick = () => {
  menu.style.display = "block";
  close.focus();
};
close.onclick = () => {
  menu.style.display = "none";
};

document.addEventListener("focus", (e) => {
  if (menu.style.display === "block" && !menu.contains(e.target)) {
    console.log("focus");
  }
});
