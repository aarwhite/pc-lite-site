const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-actions");

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu1.classList.toggle("active");
}