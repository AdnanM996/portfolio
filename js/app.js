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

//pointer

const pointer = document.querySelector('.pointer');

window.addEventListener('mousemove', (e) => {
    xPosition = e.pageX + 'px';
    yPosition = e.pageY + 'px';

    pointer.style.left = xPosition;
    pointer.style.top = yPosition;
});