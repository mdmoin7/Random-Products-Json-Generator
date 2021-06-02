import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  names
} from 'unique-names-generator';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const createDump = (arrayLength = 100) => {
  let a = new Array(arrayLength);
  for (let i = 0; i < a.length; i++) {
    const minPrice = 1000;
    const maxPrice = 50000;
    const randomStock = Math.floor(Math.random() * 100);
    const randomPrice = Math.random() * (+maxPrice - +minPrice) + +minPrice;
    const salePrice = !!Math.floor((Math.random() * 1000) % 2)
      ? randomPrice * (Math.floor(Math.random() * (50 - 10) + 10) / 100)
      : randomPrice;
    const randomRating = Math.random() * (5 - 1) + 1;
    a[i] = {
      productName: uniqueNamesGenerator({
        dictionaries: [adjectives, colors, names],
        separator: ' '
      }),
      productImage: `https://picsum.photos/400?image=${Math.floor(
        Math.random() * 1000
      )}`,
      productStock: randomStock,
      productPrice: randomPrice.toFixed(2),
      productSalePrice: salePrice.toFixed(2),
      rating: parseInt(randomRating.toFixed(0))
    };
  }
  return a;
};
console.log(JSON.stringify(createDump()));
