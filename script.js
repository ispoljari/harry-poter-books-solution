const BooksShoppingCart = require('./cart-model.js');

const args = process.argv.slice(2);
const books = JSON.parse(args[0]);

const cart = new BooksShoppingCart(books);
const minPrice = cart.calcLowestPrice();

console.log(minPrice);