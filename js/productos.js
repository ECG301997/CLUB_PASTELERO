
let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let interval = 5000;

let slider1 = document.getElementsByClassName("slider1")
let slider2 = document.getElementsByClassName("slider2")
let slider3 = document.getElementsByClassName("slider3")

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
})

setInterval(() => {
    slides()
}, interval);

function slides() {

    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition  = "transform .7s",
    contador++;
    

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            slider.style.transform = "translate(0px)";
        slider.style.transition  = "transform 0s"
        contador = 1;
        
        }, 1500)
    }
    
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para añadir al carrito y redirigir
function addToCartAndRedirect(product) {
    addToCart(product);          // Añade el producto al carrito
    saveCartToStorage();         // Guarda el carrito en localStorage
    window.location.href = "carroCompras.html"; // Redirige a carroCompras.html
}

// Función para añadir un producto al carrito
function addToCart(product) {
    const itemIndex = cart.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();           // Actualiza el contador de carrito en el icono
}

// Función para guardar el carrito en localStorage
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para actualizar el contador de productos en el icono del carrito
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Al cargar productos.html, actualiza el contador si hay productos en el carrito
updateCartCount();