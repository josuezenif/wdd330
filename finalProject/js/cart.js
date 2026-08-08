// DISPLAYING CART CONTENTS
const cartSection = document.querySelector('#cartItems');
const wishSection = document.querySelector('#wishList');

function displayCartItems() {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.forEach(item => {
        const div = document.createElement('div');
        const template = cartTemplate(item);

        div.classList.add('cartProduct');
        div.innerHTML = template;
        cartSection.appendChild(div);
    });
}

displayCartItems();

function cartTemplate(product) {
    const template = `
    <a href="/wdd330/finalProject/product.html?id=${product.id}"><h2>${product.title}</h2></a>
        <img src="${product.image}" alt="Image of ${product.title}">
        <p class="info1">- Price: $${product.price}</p>
        <p class="info2">- Rating: ${product.rating.rate}/5 ⭐️</p>
    
    <button id="remove" data-set="${product.id}" class="removeItem">X</button>

    `;

    return template;
}

// DISPLAYING WISH LIST ITEMS
function displayWishListItems() {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    wishList.forEach(item => {
        const div = document.createElement('div');
        const template = cartTemplate(item);

        div.classList.add('cartProduct');
        div.innerHTML = template;
        wishSection.appendChild(div);
    });
}

displayWishListItems();

// FUNCTIONS TO REMOVE ITEM FROM CART
const removeButton = document.querySelector('#remove');

removeButton.addEventListener('click', () => {
    // removeItem(productId);
})

function removeItem(productId) {
    localStorage.removeItem()
}