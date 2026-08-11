
const url = "https://fakestoreapi.com/products";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log('Length: ', data.length);

            data.forEach(product => {
                displayProducts(product);
            });
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }

}

apiFetch();


function productTemplate(product) {
    const template = `
    <a href="/wdd330/finalProject/product.html?id=${product.id}">
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="Image of ${product.title}" loading="lazy">
        <p>Price: $${product.price}</p>
        <p>- Rating: ${product.rating.rate}/5 ⭐️</p>
        <p>- Over ${product.rating.count} solds!</p>
    </a>
    `;

    return template;
}

function displayProducts(data) {
    const div = document.createElement('div');
    div.setAttribute('data-id', data.id);
    div.setAttribute('class', 'product-card');
    const section = document.querySelector('#products');

    const template = productTemplate(data);
    div.innerHTML = template;

    section.appendChild(div);
}

