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
    const cartCopy = [...this.cart];

    for (let i = cartCopy.length - 1; i >= 0; i--) {
      if (cartCopy[i] === 0) {
        cartCopy.splice(i, 1);
      }
    }

    if (cartCopy.length === 0) {
      return 0;
    }

    if (cartCopy.length === 1) {
      return cartCopy[0] * ShoppingCart.getBasePrice();
    }

    return null;
  }
}


module.exports = ShoppingCart;