const hamburgerButton = document.querySelector('.header__hamburgerButton');
const hamburgerMenu = document.querySelector('.header__hamburgerMenu');
const hamburgerCloseButton = document.querySelector('.header__hamburgerCloseButton');
const logoAndCompanyName = document.querySelector('.header__divLogoAndCompanyName');
const html = document.querySelector('.html');	

hamburgerButton.addEventListener('click', () => {
    hamburgerMenu.classList.add('header__hamburgerMenu--open');
    html.classList.add('html--overflowHidden');
});

hamburgerCloseButton.addEventListener('click', () => {
    hamburgerMenu.classList.remove('header__hamburgerMenu--open');
    html.classList.remove('html--overflowHidden');
});
