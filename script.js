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

window.addEventListener(
  "focus",
  (e) => {
    console.log(e.target);
    // if (menu.style.display === "block" && !menu.contains(e.target)) {
    //   console.log("focus out");
    // }
  },
  true
);
