const menuLinks = document.querySelectorAll('a.menu__link');
const checkboxSwitch = document.querySelector('#switch');


menuLinks.forEach( function (menuLink) {
    menuLink.onclick = function () {
        checkboxSwitch.checked = false
    };
});