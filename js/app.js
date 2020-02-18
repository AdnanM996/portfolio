//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
});

//navigation
const menu = document.querySelector('.header__menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('open-nav');
});