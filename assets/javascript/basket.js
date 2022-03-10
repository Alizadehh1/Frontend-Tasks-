let productContainer = document.querySelector('.products-container');
let products = JSON.parse(localStorage.getItem('products'));
// let quantityOfProductsContainer = document.querySelector('.quantityOfProducts');
// let basketCount = document.querySelector('.product-count');
// let totalPriceText = document.querySelectorAll('.totalPrice');
products.map((product) => {
    let productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
    <div class="checkbox">
        <input type="checkbox" name="" id="">
    </div>
    <div class="product-image">
        <img src="${product.image}" alt="">
    </div>
    <div class="product-content">
        <h1>${product.name}</h1>
        <div class="product-rate">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <p>(5.0)</p>
        </div>
    </div>
    <div class="product-price">
        <h1>$${product.price}</h1>
    </div>
    <div class="product-count">
        <div>
            ${product.count}
            <a onclick='increaseCount(${product.id})' class="count-up"><i class="fa-solid fa-angle-up"></i></a>
            <a onclick='decreaseCount(${product.id})' class="count-down"><i class="fa-solid fa-angle-down"></i></a>
        </div>
    </div>
    <div class="product-total-price">
        <h1>$${Math.round(product.price * product.count)}</h1>
    </div>
    <div class="remove-product">
        <a onclick='removeFromBasket(${product.id})'><i class="fa-regular fa-trash-can"></i></a>
    </div>
`;
productContainer.appendChild(productElement);
})

const removeFromBasket = (productId) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            products.splice(i, 1);
            localStorage.setItem('products', JSON.stringify(products));
            location.reload();
        }      
    }
}

const removeAllFromBasket = () => {
    products.splice(0,products.length);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
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

const determineProductsQuantity = () => {
    let quantityOfProducts = 0;
    for (let i = 0; i < products.length; i++) {
        quantityOfProducts = quantityOfProducts + products[i].count;
    }
    quantityOfProductsContainer.textContent = quantityOfProducts;
    basketCount.textContent = quantityOfProducts;
}
const determineTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice = totalPrice + (Math.round(products[i].price * products[i].count));
    }
    for (let i = 0; i < totalPriceText.length; i++) {
        totalPriceText[i].textContent = '$'+totalPrice;
    }
}
determineProductsQuantity();
determineTotalPrice();