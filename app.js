// const $ = (selector) => {
//     console.log(selector);    
//     return document.querySelector(selector) 
// };

// const menu = $('#mobile-menu')
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', toggleMenuActive);

function toggleMenuActive() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
