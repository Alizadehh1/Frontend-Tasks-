const addToBasket = (product) => {
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
}