

const navbar_email_element = document.querySelector('.navbar-email');// selecionamos el elemento que contiene el mail de l usuario
const desktopMenuElement = document.querySelector('.desktop-menu');// Seleccionamos el elemento que contiene el menu en la version escritorio

const hamburguerIconElement = document.querySelector('#hamIcon'); //Seleccionamos el icono hamburuqesa
const mobileMenuElement = document.querySelector('.mobile-menu'); // Seleccionamos el menu en su version mobile

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')//icono del carrito de compras

const asideComprasDetail = document.querySelector('#shoppingCartContainer') // aside que aparece con al descripcion del carrito de compras cuando hacemos click en el carrito

const asideProductDetail = document.querySelector('#productDetail'); // aside que contiene los detalles y descripcion del producto que es seleccionado de la lista de productos. 




// Esconde o muestra el menu cuando hacemos click en el mail del uduario en la vercion de escritorio 
const togleDesktopMenu = () => {
    const isCarritoMenuClouse = asideComprasDetail.classList.contains('inactive');

    if (!isCarritoMenuClouse) {
        asideComprasDetail.classList.add('inactive');
    }
    desktopMenuElement.classList.toggle('inactive')
}
// creamos la misma funcion para poner la clase incative pero ahora para cuando hagomos clik en el menu hamburguesas
const toggleMobileMenu = () => {
    const isCarritoMenuClouse = asideComprasDetail.classList.contains('inactive');

    if (!isCarritoMenuClouse) {
        asideComprasDetail.classList.add('inactive');
    }

    mobileMenuElement.classList.toggle('inactive')
    // console.log('cliek hamburguesa')
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

}



//creamos una funcion mas generica para agregar la clase inactive y poder usarla con otros elementos
// const tooggleInactiveClass = (element)=>{
//     element.classList.tooggle('inactive');
// }


navbar_email_element.addEventListener('click', togleDesktopMenu); // escuchamos si el usuario hace click en el mail de l usaurio en la barra de navegacion
hamburguerIconElement.addEventListener('click', toggleMobileMenu);
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
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: 'Computador',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

const cardProducContainerElement = document.querySelector('.cards-container');



console.log(productList)

// for in para los indices del arreglo 
for (indice in productList) {
    console.log(indice)
}

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
renderProductList(productList)


// FUNCION PARA ABRIR EL ASIDE DE DETALELS DE CADA PRODUCTO CUANDO LE HACEMOS CLICK EN LA IMAGEN DEL PRODUCTO 
function openProductDetail (){
    asideProductDetail.classList.remove('inactive');
}