// ---------- DISPLAYING 1 PRODUCT INFO IN PRODUCT DETAILS PAGE --------

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const apiUrl = "https://josuezenif.github.io/wdd330/finalProject/json/products.json";
let currentProduct = null;

async function getProductInfo() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const product = data.find(product => product.id == productId);
    currentProduct = product;

    renderProduct(product);
}

getProductInfo();

function renderProduct(product) {
    const template = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="Image of ${product.title}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>- Rating: ${product.rating.rate}/5 ⭐️</p>
        <p>- Over ${product.rating.count} solds!</p>

        <div class="product-actions">
            <button class="add-to-cart" id="cartButton">Add to cart!</button>
            <button class="add-to-wishlist" id="wishButton">Add to wish list!</button>
        </div>
    `;

    document.querySelector('#product-details').innerHTML = template;
}

// Adding product to cart (localstorage)

async function rawProductInfo() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const product = data.find(product => product.id == productId);

    // console.log(product);
    return product;
}

const productInfo = await rawProductInfo(); // ------- CURRENT PRODUCT 
console.log(productInfo);

// ADDING PRODUCT TO CART
function addToCart(product) {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.push(product);
    localStorage.setItem('cart', JSON.stringify(cartList)); // PARA RECUPERAR PRODUCT ---->> JSON.parse(localstorage.getItem('cart));
}

// cart alert 
const cartAlert = document.querySelector('#cartAlert');

function checkProduct() {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cartList.find(item => item.id == productId);

    if (!exists) {
        addToCart(productInfo);
        cartAlert.textContent = 'Product added to Cart!';
    }

    else {
        cartAlert.textContent = '';
        cartAlert.textContent = 'Product already in cart!';
    }
}

document.getElementById('cartButton').addEventListener('click', () => {
    cartAlert.classList.add('open');
    checkProduct();
    // localStorage.clear();;
});

// ---------------->> adding product to WISH LIST 
function addToWishlist(product) {
    const list = JSON.parse(localStorage.getItem('wishList')) || [];
    list.push(product);
    localStorage.setItem('wishList', JSON.stringify(list));
}

function checkWishList() {
    const wishList = JSON.parse(localStorage.getItem('wishList')) || [];
    const exists = wishList.find(item => item.id == productId);

    if (!exists) {
        addToWishlist(productInfo);
        document.querySelector('#cartAlert').textContent = 'Product added to Wish List!'
    }

    else {
        document.querySelector('#cartAlert').textContent = '';
        document.querySelector('#cartAlert').textContent = 'Product already in wish list!'
    }
}

// CALLING THE FUNCTION
document.querySelector('#wishButton').addEventListener('click', () => {
    cartAlert.classList.add('open');
    checkWishList();
});
