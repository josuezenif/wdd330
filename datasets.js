const list = document.querySelectorAll('#items li');
list.forEach(item => {
    console.log(item.dataset.name);
    console.log(item.dataset.category);
    console.log(item.dataset.color);
});

const items = document.querySelectorAll('#items li');
const details = document.createElement('div');
document.body.appendChild(details);

items.forEach(item => {
    item.addEventListener('click', () => {
        details.innerHTML = `
      <h2>Item Details</h2>
      <p>Name: ${item.dataset.name}</p>
      <p>Category: ${item.dataset.category}</p>
      <p>Color: ${item.dataset.color}</p>
    `;
    });
});

