const generateProducts = (arrayLength) => (minCategory, maxCategory) => (minCost, maxCost) => {

    let a = new Array(arrayLength);

    for (let i = 0; i < a.length; i++) {
        const minCat = minCategory;
        const maxCat = maxCategory;
        const minPrice = minCost;
        const maxPrice = maxCost;
        const randomCategory = Math.floor(Math.random() * (+maxCat - +minCat)) + +minCat;
        const randomStock = Math.floor((Math.random() * 1000) % 2);
        const randomPrice = (Math.random() * (+maxPrice - +minPrice)) + +minPrice;
        a[i] = {
            "productId": 1000 + i + 1,
            "productCategory": `Category ${randomCategory}`,
            "productName": `Product ${i + 1}`,
            "productImage": `https://picsum.photos/400?image=${Math.floor(Math.random() * 1000)}`,
            "productStock": !!randomStock,
            "productPrice": randomPrice,
            "salePrice":!!Math.floor((Math.random() * 1000) % 2)?randomPrice*((Math.floor(Math.random() * (50 - 10) + 10))/100):randomPrice
        }
    }
    console.log('Below is your products json array');
    console.log(JSON.stringify(a));
}
// sample execution
generateProducts(100)(1, 5)(10000, 100000);
