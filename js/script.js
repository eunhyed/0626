
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.icons');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});