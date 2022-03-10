const addtoBasket = (product) => {
    if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify([]));
    }
    let ourProducts = JSON.parse(localStorage.getItem('products'));   
    let ourNewProducts = ourProducts.filter((storageProduct) => storageProduct.id === product.id);
    if (ourNewProducts.length > 0) {
        ourProducts.map((element) => element.id === product.id && element.count++);
        localStorage.setItem('products', JSON.stringify(ourProducts));
    } else {
        ourProducts.push(product);
        localStorage.setItem('products', JSON.stringify(ourProducts));
    }
    // let products = JSON.parse(localStorage.getItem('products'));
    // let productCount = document.querySelector('.product-count');
    // function determineProductQuantity() {
    //     let quantityOfProducts = 0;
    //     for (let i = 0; i < products.length; i++) {
    //         quantityOfProducts = quantityOfProducts + products[i].count;
    //     }
    //     productCount.textContent = quantityOfProducts;
    // }
    // determineProductQuantity();
}
for (let i = 0; i < products.length; i++) {
    if (products[i] === products[i].id) {
        products[i].count++
    }    
}