const { expect } = require('chai');
const ShoppingCart = require('../script.js');

const assertResponse = basicCases => {
  basicCases.forEach(input => {
    const totalPrice = input.dummyShoppingCart.calcLowestPrice();
    expect(totalPrice).to.equal(input.expected);
  });
}

const basePrice = ShoppingCart.getBasePrice();


describe('Harry Potter books', function () {
  it('Basic tests with total zero or 1 recuring unique book', function () {
    const basicCases = [
      {
        dummyShoppingCart: new ShoppingCart([0, 0, 0, 0, 0]),
        expected: 0,
      },
      {
        dummyShoppingCart: new ShoppingCart([1, 0, 0, 0, 0]),
        expected: basePrice,
      },
      {
        dummyShoppingCart: new ShoppingCart([0, 0, 0, 0, 1]),
        expected: basePrice,
      },
      {
        dummyShoppingCart: new ShoppingCart([0, 7, 0, 0, 0]),
        expected: 7 * basePrice,
      },
      {
        dummyShoppingCart: new ShoppingCart([0, 0, 6, 0, 0]),
        expected: 6 * basePrice,
      },
    ];

    assertResponse(basicCases);
  });

  it('Basic tests with simple discount combinations', function () {
    const basicCases = [
      {
        dummyShoppingCart: new ShoppingCart([1, 1, 0, 0, 0]),
        expected: 2 * basePrice * ShoppingCart.getDiscounts(2),
      },
      {
        dummyShoppingCart: new ShoppingCart([1, 1, 1, 0, 0]),
        expected: 3 * basePrice * ShoppingCart.getDiscounts(3),
      },
      {
        dummyShoppingCart: new ShoppingCart([1, 1, 1, 1, 0]),
        expected: 4 * basePrice * ShoppingCart.getDiscounts(4),
      },
      {
        dummyShoppingCart: new ShoppingCart([1, 1, 1, 1, 1]),
        expected: 5 * basePrice * ShoppingCart.getDiscounts(5),
      },
    ];

    assertResponse(basicCases);
  });

  it('Test with multiple discounts per shoppingCart', function () {
    const basicCases = [
      {
        dummyShoppingCart: new ShoppingCart([1, 2, 0, 0, 0]),
        expected: 2 * basePrice * ShoppingCart.getDiscounts(2) + basePrice,
      },
      {
        dummyShoppingCart: new ShoppingCart([0, 0, 0, 2, 2]),
        expected: 2 * 2 * basePrice * ShoppingCart.getDiscounts(2),
      },
      {
        dummyShoppingCart: new ShoppingCart([0, 2, 1, 2, 1]),
        expected: 4 * basePrice * ShoppingCart.getDiscounts(4) + 2 * basePrice * ShoppingCart.getDiscounts(2),
      },
      {
        dummyShoppingCart: new ShoppingCart([1, 2, 1, 1, 1]),
        expected: 5 * basePrice * ShoppingCart.getDiscounts(5) + basePrice,
      },
    ];

    assertResponse(basicCases);
  });

  it('Edge case tests', function () {
    const basicCases = [
      {
        dummyShoppingCart: new ShoppingCart([2, 2, 2, 1, 1]),
        expected: 2 * 4 * basePrice * ShoppingCart.getDiscounts(4),
      },
      {
        dummyShoppingCart: new ShoppingCart([5, 5, 4, 5, 4]),
        expected: 3 * 5 * basePrice * ShoppingCart.getDiscounts(5) + 2 * 4 * ShoppingCart.getDiscounts(4),
      },
    ];

    assertResponse(basicCases);
  });
});