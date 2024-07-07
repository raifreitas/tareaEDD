document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Actualiza el contador del carrito
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Añadir al carrito desde la página de índice
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.dataset.product;
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Añadir al carrito desde la página de detalles del producto
    const addToCartDetailButton = document.getElementById('add-to-cart-detail');
    if (addToCartDetailButton) {
        addToCartDetailButton.addEventListener('click', function () {
            const product = document.getElementById('product-name').textContent;
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        });
    }

    // Mostrar/ocultar el menú desplegable al hacer clic en el icono o en el texto "Menú"
    const menuIcon = document.getElementById('menu-icon');
    const menuText = document.querySelector('.menu-text');
    const menuDropdown = document.getElementById('menu-dropdown');

    menuIcon.addEventListener('click', toggleMenu);
    menuText.addEventListener('click', toggleMenu);

    function toggleMenu() {
        menuDropdown.classList.toggle('active');
    }

    // Cerrar el menú desplegable cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !menuText.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('active');
        }
    });

    // Inicializa el contador del carrito en la carga de la página
    updateCartCount();
});
