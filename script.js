class ShoppingCart {
  constructor(cart) {
    this.cart = cart
  }

  static getBasePrice() {
    return 8;
  }

  static getDiscounts(numOfUniqueBooks) {
    switch (numOfUniqueBooks) {
      case 5:
        return 0.75;
      case 4:
        return 0.8;
      case 3:
        return 0.9;
      case 2:
        return 0.95;
      case 1:
      default:
        return 1;
      case 0:
        return 0;
    }
  }

  calcLowestPrice() {
    const cartCopy = [...this.cart];
    const basePrice = ShoppingCart.getBasePrice();

    for (let i = cartCopy.length - 1; i >= 0; i--) {
      if (cartCopy[i] === 0) {
        cartCopy.splice(i, 1);
      }
    }

    if (cartCopy.length === 0) {
      return 0;
    }

    if (cartCopy.length === 1) {
      return cartCopy[0] * basePrice;
    }

    cartCopy.sort((a, b) => a - b);
    const numOfUniqueBooks = cartCopy.length;

    const tempBiggestDiscount = numOfUniqueBooks * basePrice * ()

    return null;
  }
}


module.exports = ShoppingCart;