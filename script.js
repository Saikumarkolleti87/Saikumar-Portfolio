function toggleMenu() {
    const menu = document.querySelector(".menu__links");
    const icon = document.querySelector(".mobile__icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}