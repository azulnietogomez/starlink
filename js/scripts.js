const openToggle = document.querySelector(".open-menu");
const openMenu = document.querySelector("nav");

openToggle.addEventListener("click", () => {
    openMenu.classList.toggle("right-navbar--show");
});

// Close menu

const closeToggle = document.querySelector(".close-menu");

closeToggle.addEventListener("click", () => {
    openMenu.classList.toggle("right-navbar--show");;
});