

const navbar_email_element = document.querySelector('.navbar-email');// selecionamos el elemento que contiene el mail de l usuario
const desktopMenuElement = document.querySelector('.desktop-menu');// Seleccionamos el elemento que contiene el menu en la version escritorio

const hamburguerIconElement = document.querySelector('#hamIcon'); //Seleccionamos el icono hamburuqesa
const mobileMenuElement = document.querySelector('.mobile-menu'); // Seleccionamos el menu en su version mobile


// Esconde o muestra el menu cuando hacemos click en el mail del uduario en la vercion de escritorio 
const togleDesktopMenu = ()=>{
    desktopMenuElement.classList.toggle('inactive')
}
// creamos la misma funcion para poner la clase incative pero ahora para cuando hagomos clik en el menu hamburguesas
const toggleMobileMenu = ()=>{
    mobileMenuElement.classList.toggle('inactive')
    // console.log('cliek hamburguesa')
}
//creamos una funcion mas generica para agregar la clase inactive y poder usarla con otros elementos
// const tooggleInactiveClass = (element)=>{
//     element.classList.tooggle('inactive');
// }


navbar_email_element.addEventListener('click', togleDesktopMenu); // escuchamos si el usuario hace click en el mail de l usaurio en la barra de navegacion
hamburguerIconElement.addEventListener('click', toggleMobileMenu)
