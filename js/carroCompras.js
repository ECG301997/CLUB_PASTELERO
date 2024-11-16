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

// Cargar el carrito al cargar carroCompras.html
loadCartFromStorage();
