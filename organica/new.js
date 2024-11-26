// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('Price: $', ''));

            const cartItem = cart.find(item => item.name === productName);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerText = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotal.innerText = total.toFixed(2);
    }
});
