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

  filterOutUniqueBooks(cart) {
    const tempCart = [...cart];

    for (let i = tempCart.length - 1; i >= 0; i--) {
      if (tempCart[i] === 0) {
        tempCart.splice(i, 1);
      }
    }

    return {
      filteredCart: tempCart,
      numOfUniqueBooks: tempCart.length,
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

  calcTempDiscount(cart, numOfUniqueBooks, decr) {
    const basePrice = BooksShoppingCart.getBasePrice();
    const tempCart = [...cart];

    for (let i = 0 + decr; i < tempCart.length; i++) {
      tempCart[i]--;
    };

    return {
      tempDiscount: (numOfUniqueBooks - decr) * basePrice * BooksShoppingCart.getDiscounts(numOfUniqueBooks - decr),
      tempCart,
    }
  }

  calcLowestPrice(cart = this.cart) {
    const basePrice = BooksShoppingCart.getBasePrice();
    const { filteredCart, numOfUniqueBooks } = this.filterOutUniqueBooks(cart);

    if (numOfUniqueBooks === 0) {
      return 0;
    }

    if (numOfUniqueBooks === 1) {
      return filteredCart[0] * basePrice;
    }

    const filteredSortedCart = this.sortCart(filteredCart, 'asc');

    const { tempDiscount: tempLargerDiscount, tempCart: tempLargerCart } = this.calcTempDiscount(filteredSortedCart, numOfUniqueBooks, 0);
    const { tempDiscount: tempSmallerDiscount, tempCart: tempSmallerCart } = this.calcTempDiscount(filteredSortedCart, numOfUniqueBooks, 1);

    const largerCartTotal = (tempLargerDiscount + this.calcLowestPrice(tempLargerCart));
    const smallerCartTotal = (tempSmallerDiscount + this.calcLowestPrice(tempSmallerCart));

    return Math.min(largerCartTotal, smallerCartTotal);
  }
}

module.exports = BooksShoppingCart;