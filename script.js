class ShoppingCart {
  constructor(cart) {
    this.cart = cart
  }

  static getBasePrice() {
    return 8;
  }

  static getDiscounts() {
    return ({
      twoUniqueBooks: 0.95,
      threeUniqueBooks: 0.9,
      fourUniqueBooks: 0.8,
      fiveUniqueBooks: 0.75,
    });
  }

  calcLowestPrice() {
    return 'dummy';
  }
}


module.exports = ShoppingCart;