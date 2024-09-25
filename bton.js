//Funcionalidad boton
const headerIcon = document.querySelector('#header-icon');
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');

headerIcon.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
    headerIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});

menuIcon.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = 'auto';
    headerIcon.style.display = 'block';
    menuIcon.style.display = 'none';
});
