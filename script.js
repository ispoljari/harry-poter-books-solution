const BooksShoppingCart = require('./models/cart-model.js');

const args = process.argv.slice(2);
const books = JSON.parse(args[0]);

const cart = new BooksShoppingCart(books);
const minPrice = cart.calcLowestPrice();

console.log(`The price with the biggest discount for the book cart [${books}] is ${minPrice} euros`);