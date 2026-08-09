// DISPLAYING CART CONTENTS
const cartSection = document.querySelector('#cartItems');
const wishSection = document.querySelector('#wishList');

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

function displayCartItems() {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartList.length == 0) {
        cartSection.textContent = "No items in cart at the moment!";
    }

    cartList.forEach(item => {
        const div = document.createElement('div');
        const template = cartTemplate(item);

        div.classList.add('cartProduct');
        div.innerHTML = template;
        cartSection.appendChild(div);
        removeItemFromCart();
    });
}

displayCartItems();

function cartTemplate(product) {
    const template = `
    <a href="/wdd330/finalProject/product.html?id=${product.id}"><h2>${product.title}</h2></a>
        <img src="${product.image}" alt="Image of ${product.title}">
        <p class="info1">- Price: $${product.price}</p>
        <p class="info2">- Rating: ${product.rating.rate}/5 ⭐️</p>
    
    <button id="remove" data-id="${product.id}" class="removeItem">X</button>

    `;

    return template;
}

function wishListTemplate(product) {
    const template = `
    <a href="/wdd330/finalProject/product.html?id=${product.id}"><h2>${product.title}</h2></a>
        <img src="${product.image}" alt="Image of ${product.title}">
        <p class="info1">- Price: $${product.price}</p>
        <p class="info2">- Rating: ${product.rating.rate}/5 ⭐️</p>
    
    <button id="removeWishItem" data-id="${product.id}" class="removeItem">X</button>

    `;

    return template;
}

// DISPLAYING WISH LIST ITEMS
function displayWishListItems() {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];

    if (wishList.length == 0) {
        wishSection.textContent = "No wish items at the moment!"
    }

    wishList.forEach(item => {
        const div = document.createElement('div');
        const template = wishListTemplate(item);

        div.classList.add('cartProduct');
        div.innerHTML = template;
        wishSection.appendChild(div);
        removeItemFromWishList();
    });
}

displayWishListItems();

// FUNCTIONS TO REMOVE ITEM FROM CART
function removeItemFromCart() {
    const removeButtons = document.querySelectorAll('.removeItem');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.dataset.id);
            removeCartItem(button.dataset.id);
            displayCartItems();
        });
    });
}

removeItemFromCart();


function removeCartItem(productId) {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = cartList.filter(item => item.id !== Number(productId));

    localStorage.setItem('cart', JSON.stringify(newCart));
    cartSection.innerHTML = "";
}

// REMOVE ITEMS FROM WISH LIST 
function removeItemFromWishList() {
    const removeButtons = document.querySelectorAll('.removeItem');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            removeWishItem(button.dataset.id);
            displayWishListItems();
        });
    });
}

removeItemFromWishList();

function removeWishItem(productId) {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    const newWishList = wishList.filter(item => item.id !== Number(productId));

    localStorage.setItem('wishList', JSON.stringify(newWishList));
    wishSection.innerHTML = "";
}


// ---------------- adding TOTAL PRICE to the bottom of page ----------------

function displayTotalCost() {
    const totalPrice = document.querySelector('#totalPrice');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cost = 0;

    cartItems.forEach(product => {
        cost += product.price;
    });

    totalPrice.textContent = '$' + cost.toFixed(2);
}

displayTotalCost();