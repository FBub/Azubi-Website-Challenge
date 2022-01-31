const menuLink = document.querySelectorAll('menu__link');
const checkboxSwitch = document.querySelector('#switch');


menuItems.forEach(function (menuItem) {
    menuItem.onclick = function () {
        checkboxSwitch.checked = false
    };
});