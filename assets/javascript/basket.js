let cardContainer = document.querySelector('.card-container');
let products = JSON.parse(localStorage.getItem('products'));
products.map((product) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h3>
            <p class="card-text">${product.price} &#8380</p>
            <p class="card-text">Yekun Qiymət: ${product.price} &#8380 * ${product.count} = ${product.price * product.count} &#8380</p>
            <div class="d-flex justify-content-between">
                <button onclick='removeFromBasket(${product.id})' href="#" class="btn btn-danger">Səbətdən Silin</button>
                <button onclick='decreaseCount(${product.id})' href="#" class="btn btn-danger">-</button>
                <div class='d-flex align-items-center'>${product.count}</div>
                <button onclick='increaseCount(${product.id})' href="#" class="btn btn-primary">+</button>
            </div>
        </div>
    `;
    cardContainer.appendChild(card);
})
const removeFromBasket = (productId) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            products.splice(i,1);
            localStorage.setItem('products', JSON.stringify(products));
            location.reload();
        }
        
    }
}
const decreaseCount = (productId) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            if (products[i].count > 1) {
                products[i].count--;
                localStorage.setItem('products', JSON.stringify(products));
                location.reload();
            }
        }
    }
}
const increaseCount = (productId) => {
    products.map((element) => element.id === productId && element.count++);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}