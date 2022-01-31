const menuLink = document.querySelectorAll('menu__link');
const menu = document.querySelector('.menu');


menuItems.forEach(function (menuItem) {
    menuItem.onclick = function () {
        menu.checked = false
    };
});