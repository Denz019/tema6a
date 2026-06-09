/* ===================================
   BURGER MENU JS
=================================== */

/*
    Henter HTML elementer
*/

const burgerBtn = document.getElementById("burgerBtn");
const closeBtn = document.getElementById("closeBtn");
const burgerMenu = document.getElementById("burgerMenu");

/*
    Åbn menu
*/

burgerBtn.addEventListener("click", function () {
  burgerMenu.classList.add("active");
});

/*
    Luk menu
*/

closeBtn.addEventListener("click", function () {
  burgerMenu.classList.remove("active");
});
