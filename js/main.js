// changer la couleur de la NAVBAR quand user defile la page

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// MENU HAMBERGEUR
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// FERMER LE MENU HAMBURGER
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',  closeNav)

// ÊMPECHER LE CLICK DROIT SUR MA PAGE WEB AVEC AJAX
$(document).ready( function() {
    $("body").on("contextmenu", function (e) {
        return false;
    });
});
