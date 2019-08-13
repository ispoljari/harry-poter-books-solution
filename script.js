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

  calcLowestPrice(cart) {
    const basePrice = ShoppingCart.getBasePrice();

    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i] === 0) {
        cart.splice(i, 1);
      }
    }

    if (cart.length === 0) {
      return 0;
    }

    if (cart.length === 1) {
      return cart[0] * basePrice;
    }

    cart.sort((a, b) => a - b);
    const numOfUniqueBooks = cart.length;

    // apply the largest discount

    const tempBiggestDiscount = numOfUniqueBooks * basePrice * getDiscounts(numOfUniqueBooks);
    const largerCart = [...cart];

    largerCart.forEach(book => book--);

    // apply the second largest discount

    const tempSeconLargestDiscount = (numOfUniqueBooks - 1) * basePrice * getDiscounts(numOfUniqueBooks - 1);
    const smallerCart = [...cart];

    smallerCart.forEach(book => book--);

    // const largerCartTotal = (tempBiggestDiscount + this.calcLowestPrice(largerCart));
    // const smallerCartTotal = (tempSeconLargestDiscount + this.calcLowestPrice(smallerCart));

    return null;
  }
}


module.exports = ShoppingCart;