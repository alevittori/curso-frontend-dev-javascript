

const navbar_email_element = document.querySelector('.navbar-email');// selecionamos el elemento que contiene el mail de l usuario
const desktopMenuElement = document.querySelector('.desktop-menu');// Seleccionamos el elemento que contiene el menu en la version escritorio

const hamburguerIconElement = document.querySelector('#hamIcon'); //Seleccionamos el icono hamburuqesa
const mobileMenuElement = document.querySelector('.mobile-menu'); // Seleccionamos el menu en su version mobile

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')//icono del carrito de compras

const asideComprasDetail = document.querySelector('.product-detail') // aside que aparece con al descripcion del carrito de compras cuando hacemos click en el carrito

// Esconde o muestra el menu cuando hacemos click en el mail del uduario en la vercion de escritorio 
const togleDesktopMenu = ()=>{
    const isCarritoMenuClouse = asideComprasDetail.classList.contains('inactive');

    if(!isCarritoMenuClouse){
        asideComprasDetail.classList.add('inactive');
    }
    desktopMenuElement.classList.toggle('inactive')
}
// creamos la misma funcion para poner la clase incative pero ahora para cuando hagomos clik en el menu hamburguesas
const toggleMobileMenu = ()=>{
    const isCarritoMenuClouse = asideComprasDetail.classList.contains('inactive');

    if(!isCarritoMenuClouse){
        asideComprasDetail.classList.add('inactive');
    }

    mobileMenuElement.classList.toggle('inactive')
    // console.log('cliek hamburguesa')
}

// funcion para poner la clase inactive al icono del carrito 
const toggleCarritoIcon = ()=>{
    
    const isMobileMenuElementCLouse = mobileMenuElement.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenuElement.classList.contains('inactive');
    if(!isMobileMenuElementCLouse ){
        mobileMenuElement.classList.add('inactive');
    }
    if(!isDesktopMenuClose){
        desktopMenuElement.classList.add('inactive')
    }

    asideComprasDetail.classList.toggle('inactive');

}



//creamos una funcion mas generica para agregar la clase inactive y poder usarla con otros elementos
// const tooggleInactiveClass = (element)=>{
//     element.classList.tooggle('inactive');
// }


navbar_email_element.addEventListener('click', togleDesktopMenu); // escuchamos si el usuario hace click en el mail de l usaurio en la barra de navegacion
hamburguerIconElement.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoIcon);