


// selecionamos el elemento que contiene el mail de l usuario
const navbar_email_element = document.querySelector('.navbar-email');

// Seleccionamos el elemento que contiene el menu en la version escritorio
const desktopMenuElement = document.querySelector('.desktop-menu');

//Seleccionamos el icono hamburuqesa
const hamburguerIconElement = document.querySelector('#hamIcon'); 

// Seleccionamos el menu en su version mobile
const mobileMenuElement = document.querySelector('.mobile-menu'); 

//icono del carrito de compras
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

// aside que aparece con al descripcion del carrito de compras cuando hacemos click en el carrito
const asideComprasDetail = document.querySelector('#shoppingCartContainer') 

// aside que contiene los detalles y descripcion del producto que es seleccionado de la lista de productos. 
const asideProductDetail = document.querySelector('#productDetail'); 

//boton que cierra el aside de la descripcion del producto
const btn_clouse_product_detail = document.querySelector('#btn_clouse_productDetail');


// Esconde o muestra el menu cuando hacemos click en el mail del uduario en la vercion de escritorio 
const togleDesktopMenu = () => {
    const isCarritoMenuClouse = asideComprasDetail.classList.contains('inactive');

    if (!isCarritoMenuClouse) {
        asideComprasDetail.classList.add('inactive');
    }
    desktopMenuElement.classList.toggle('inactive');
    
    // cerramos el aside con la descripcion del producto 
    cerrarProductDetail();
}
// creamos la misma funcion para poner la clase incative pero ahora para cuando hagomos clik en el menu hamburguesas
const toggleMobileMenu = () => {
    const isCarritoMenuClouse = asideComprasDetail.classList.contains('inactive');

    if (!isCarritoMenuClouse) {
        asideComprasDetail.classList.add('inactive');
    }

    mobileMenuElement.classList.toggle('inactive')
     // cerramos el aside con la descripcion del producto 
     cerrarProductDetail();
}

// funcion para poner la clase inactive al icono del carrito 
const toggleCarritoIcon = () => {

    const isMobileMenuElementCLouse = mobileMenuElement.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenuElement.classList.contains('inactive');
    if (!isMobileMenuElementCLouse) {
        mobileMenuElement.classList.add('inactive');
    }
    if (!isDesktopMenuClose) {
        desktopMenuElement.classList.add('inactive')
    }

    asideComprasDetail.classList.toggle('inactive');

     // cerramos el aside con la descripcion del producto 
     cerrarProductDetail();
}


//creamos una funcion mas generica para agregar la clase inactive y poder usarla con otros elementos
// const tooggleInactiveClass = (element)=>{
//     element.classList.tooggle('inactive');
// }

// escuchamos si el usuario hace click en el mail de l usaurio en la barra de navegacion
navbar_email_element.addEventListener('click', togleDesktopMenu);

// escuchamos si el usuario hace click en ICONO HAMBURGUEZA  en la barra de navegacion
hamburguerIconElement.addEventListener('click', toggleMobileMenu);

// escuchamos si el usuario hace click en EL CARRITO DE COMPRAS  en la barra de navegacion
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);

//array de la lista de producto cuando se hiciera una consulta al servidor pidiendo la lista de productos, que luego cargaremos en el html
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'Escritorio',
    price: 180,
    image: "https://images.pexels.com/photos/265129/pexels-photo-265129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
    name: 'Computador',
    price: 200,
    image: "https://media.istockphoto.com/id/1394988455/es/foto/port%C3%A1til-con-pantalla-en-blanco-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=Mw1-pF7aAe5Y4KK4VdlVoLehx5y-0gQAMNfNlwoJ6Qc=",
})

// CONTENEDOR DE LAS TARJETAS DE LOS PRODUCTOS 
const cardProducContainerElement = document.querySelector('.cards-container');



// for in para los indices del arreglo 
// for (indice in productList) {
//     console.log(indice)
// }

// FUNCION PARA CARGAR LA LISTA DE PRODUCTOS A LA PAGINA A PARTIR DE UN ARRAY DE PRODUCTOS
function renderProductList(arr){
    // for of para los elementos 
    for (product of arr) {
    
        // const card = document.createRange().createContextualFragment(`
        // <div class="product-card">
        //     <img src= ${product.image} alt="">
        //      <div class="product-info">
        //         <div>
        //             <p>${product.price}</p>
        //             <p>${product.name}</p>
        //         </div>
        //     <figure>
        //         <img src="./icons/bt_add_to_cart.svg" alt="">
        //     </figure>
        //     </div>
        // </div>
        // `)
    
        const cardElement = document.createElement('div');
        const imgProductElement = document.createElement('img');
        const priceProductElement = document.createElement('p');
        const nameProductElement = document.createElement('p');
        const productInfoContainElement = document.createElement('div');
        const figureBtAddToCartContainerElement = document.createElement('figure');
        const imgIconAddToCartElement = document.createElement('img');



        cardElement.classList.add('product-card');//<div class="product-card">
        imgProductElement.src = product.image;//<img src= ${product.image} alt="">
        imgProductElement.addEventListener('click', openProductDetail)
        productInfoContainElement.classList.add('product-info');//<div class="product-info">
        priceProductElement.innerText = `$ ${product.price}`;
        nameProductElement.innerText = `$ ${product.name}`;
        imgIconAddToCartElement.src = "./icons/bt_add_to_cart.svg"; //<img src="./icons/bt_add_to_cart.svg" alt="">
        
        figureBtAddToCartContainerElement.append(imgIconAddToCartElement);// agregamos el icon bt add cart al contenedor figure
         productInfoContainElement.append(priceProductElement, nameProductElement,figureBtAddToCartContainerElement) //agregamos el precio y el nombre dentro del contenedor produc-info

        cardElement.append(imgProductElement,productInfoContainElement);


        cardProducContainerElement.append(cardElement)
    }
    
}

// CARGAMOS LOS PRODUCTOS A LA PAGINA 
renderProductList(productList);


// FUNCION PARA ABRIR EL ASIDE DE DETALELS DE CADA PRODUCTO CUANDO LE HACEMOS CLICK EN LA IMAGEN DEL PRODUCTO 
function openProductDetail (event){

    asideProductDetail.classList.remove('inactive');
    
    // cerramos todos los menus 
    cerrarTodosLosMenus();



    const parent = event.target.parentNode;
    const lista = parent.childNodes
    console.log(event)
    console.log(parent)
    console.log(lista)
    // const productDetail = document.querySelector("#productDetail");
    // parent.append(productDetail)

    


}
// FUNCION PARA CERRAR EL ASIDE CON LA DESCRIPCION DEL PRUDUCTO CUANDO HACEN CLICK EN CEL BOTON DE CERRAR 
const cerrarProductDetail = () =>{
    asideProductDetail.classList.add('inactive');
}

// FUNCION PARA CERRAR TODOS LOS MENUS 
function cerrarTodosLosMenus (){
    desktopMenuElement.classList.add('inactive');
 mobileMenuElement.classList.add('inactive');
 asideComprasDetail.classList.add('inactive');
}
// PARA CERRAR EL ASIDE DE DESCRIPCION DE CADA PRODUCTO 
btn_clouse_product_detail.addEventListener('click',cerrarProductDetail);

// HACER UNA FUNCION QUE CARGUE EL PRODUCTO QUE SE SELECCIONE EN EL ASIDE DE DESCRIPCION DE PRODUCTO 