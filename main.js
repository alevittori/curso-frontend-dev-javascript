const navbar_email_element = document.querySelector('.navbar-email');
const desktopMenuElement = document.querySelector('.desktop-menu');

const toogleDesktopMenu = ()=>{
    // desktopMenuElement.toggleAttribute('')

    desktopMenuElement.classList.toggle('inactive')
}
navbar_email_element.addEventListener('click', toogleDesktopMenu);
