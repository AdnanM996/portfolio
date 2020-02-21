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
const links = document.querySelectorAll('a');

window.addEventListener('mousemove', (e) => {
    xPosition = e.pageX + 'px';
    yPosition = e.pageY + 'px';

    pointer.style.left = xPosition;
    pointer.style.top = yPosition;
});

links.forEach(link => {
    link.addEventListener('mouseover', ()=> {
        pointer.classList.add('pointer__hover');
    });
});

links.forEach(link => {
    link.addEventListener('mouseleave', ()=> {
        pointer.classList.remove('pointer__hover');
    });
});

//Animations

let line = document.querySelector('.skills__container');
let skillsLine = getComputedStyle(line, ':after').width;

skillsLine.style.width = '100' + 'px';

console.log(skillsLine);

