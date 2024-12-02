let cart = [];

// Cargar el carrito desde localStorage cuando se inicia carroCompras.html
function loadCartFromStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();           // Llenar el carrito en la página con los productos
        updateCartCount();       // Actualizar el contador en el icono de carrito
    }
}

// Guardar el carrito en localStorage (para mantener sincronización)
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Actualizar la visualización del carrito en carroCompras.html
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Limpiar el contenedor para regenerarlo

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Crear el elemento de cada producto en el carrito
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>$${itemTotal.toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">X</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    cartTotalElement.textContent = total.toFixed(2);
}

// Eliminar un producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    updateCartCount();
    saveCartToStorage(); // Guarda el carrito actualizado
}

// Función para finalizar la compra
function checkout() {
    if (cart.length > 0) {
        alert("Gracias por tu compra. Total: $" + document.getElementById('cart-total').textContent);
        cart = []; // Vaciar el carrito
        updateCart();
        updateCartCount();
        saveCartToStorage(); // Guarda el carrito vacío
    } else {
        alert("El carrito está vacío.");
    }
}

// Actualizar el contador de productos en el icono de carrito
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

const suggestedProducts = [
    { id: 14, name: "Moldes", price: 23500, image: "../img/Productos/Productos/Moldes.png" },
    { id: 15, name: "Canasta de frutas", price: 18900, image: "../img/Productos/Productos/Frutas.png" },
    { id: 16, name: "Rodillo", price: 14900, image: "../img/Productos/Productos/Rodillo.png" },
    { id: 17, name: "Cacao", price: 8590, image: "../img/Productos/Productos/Cacao.png" }
];

function loadSuggestedProducts() {
    const container = document.querySelector(".suggested-container");

    suggestedProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "suggested-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <h6>$${product.price.toLocaleString()}</h6>
            <button onclick="addToCartAndRedirect({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">Agregar</button>
        `;
        container.appendChild(productCard);
    });
}

// Llamar a la función para cargar los productos sugeridos
loadSuggestedProducts();

// Cargar el carrito al cargar carroCompras.html
loadCartFromStorage();

function addToCartAndRedirect(product) {
    // Obtener el carrito del localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementar la cantidad si ya existe
    } else {
        cart.push({ ...product, quantity: 1 }); // Agregar nuevo producto
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirigir a la página del carrito
    window.location.href = "carroCompras.html";
}