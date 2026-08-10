function displayTotalCost() {
    const total = document.querySelector('#totalPrice');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let count = 0;

    cartItems.forEach(product => {
        count += product.price;
    });

    total.innerHTML = '$' + count.toFixed(2);
}

displayTotalCost();