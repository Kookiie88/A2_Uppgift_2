const hamburgerMenuContainer = document.querySelector('.header__hamburgerMenuContainer');
const hamburgerButton = document.querySelector('.header__hamburgerButtonOpen');
const hamburgerCloseButton = document.querySelector('.header__hamburgerCloseButton');
const html = document.querySelector('.html');	

hamburgerButton.addEventListener('click', () => {
    hamburgerMenuContainer.classList.add('header__hamburgerMenuContainer--open');
    html.classList.add('html--overflowHidden');
});

hamburgerCloseButton.addEventListener('click', () => {
    hamburgerMenuContainer.classList.remove('header__hamburgerMenuContainer--open');
    html.classList.remove('html--overflowHidden');
});
