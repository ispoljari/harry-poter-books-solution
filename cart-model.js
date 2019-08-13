class BooksShoppingCart {
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

  filterOutUniqueBooks(cart = this.cart) {
    const tempCart = [...cart];

    for (let i = tempCart.length - 1; i >= 0; i--) {
      if (tempCart[i] === 0) {
        tempCart.splice(i, 1);
      }
    }

    return {
      filteredCart: tempCart,
      numOfUniqueBooks: tempCart.length
    };
  }

  sortCart(cart, by) {
    const tempCart = [...cart];
    let compareFunction;

    if (by === 'asc') {
      compareFunction = (a, b) => a - b;
    } else {
      compareFunction = (a, b) => b - a;
    }

    tempCart.sort(compareFunction);
    return tempCart;
  }

  calcLowestPrice(cart) {
    const basePrice = BooksShoppingCart.getBasePrice();
    const { filteredCart, numOfUniqueBooks } = this.filterOutUniqueBooks(cart);

    if (numOfUniqueBooks === 0) {
      return 0;
    }

    if (numOfUniqueBooks === 1) {
      return filteredCart[0] * basePrice;
    }

    const filteredSortedCart = this.sortCart(filteredCart, 'asc');

    // apply the largest discount

    const tempBiggestDiscount = numOfUniqueBooks * basePrice * BooksShoppingCart.getDiscounts(numOfUniqueBooks);
    const largerCart = [...filteredSortedCart];

    for (let i = 0; i < largerCart.length; i++) {
      largerCart[i]--;
    };

    // apply the second largest discount

    const tempSeconLargestDiscount = (numOfUniqueBooks - 1) * basePrice * BooksShoppingCart.getDiscounts(numOfUniqueBooks - 1);
    const smallerCart = [...filteredSortedCart];

    for (let i = 0; i < smallerCart.length; i++) {
      if (i !== 0) {
        smallerCart[i]--;
      }
    };

    const largerCartTotal = (tempBiggestDiscount + this.calcLowestPrice(largerCart));
    const smallerCartTotal = (tempSeconLargestDiscount + this.calcLowestPrice(smallerCart));

    return Math.min(largerCartTotal, smallerCartTotal);
  }
}

module.exports = BooksShoppingCart;