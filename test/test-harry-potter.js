const { expect } = require('chai');
const ShoppingCart = require('../script.js');

const assertResponse = basicCases => {
  basicCases.forEach(input => {
    const totalPrice = calcLowestPrice(input.dummyShoppingCart);
    expect(totalPrice).to.equal(input.expected);
  });
}


describe('Harry Potter books', function () {
  it('Basic tests with total zero or 1 recuring unique book', function () {
    const basicCases = [
      {
        dummyShoppingCart: [0, 0, 0, 0, 0],
        expected: 0,
      },
      {
        dummyShoppingCart: [1, 0, 0, 0, 0],
        expected: basePrice,
      },
      {
        dummyShoppingCart: [0, 0, 0, 0, 1],
        expected: basePrice,
      },
      {
        dummyShoppingCart: [0, 7, 0, 0, 0],
        expected: 7 * basePrice,
      },
      {
        dummyShoppingCart: [0, 0, 6, 0, 0],
        expected: 6 * basePrice,
      },
    ];

    assertResponse(basicCases); //TODO: check if this abstraction will work
  });

  it('Basic tests with simple discount combinations', function () {
    const basicCases = [
      {
        dummyShoppingCart: [1, 1, 0, 0, 0],
        expected: 2 * basePrice * discounts.twoUniqueBooks,
      },
      {
        dummyShoppingCart: [1, 1, 1, 0, 0],
        expected: 3 * basePrice * discounts.threeUniqueBooks,
      },
      {
        dummyShoppingCart: [1, 1, 1, 1, 0],
        expected: 4 * basePrice * discounts.fourUniqueBooks,
      },
      {
        dummyShoppingCart: [1, 1, 1, 1, 1],
        expected: 5 * basePrice * discounts.fiveUniqueBooks,
      },
    ];

    assertResponse(basicCases);
  });

  it('Test with multiple discounts per shoppingCart', function () {
    const basicCases = [
      {
        dummyShoppingCart: [1, 2, 0, 0, 0],
        expected: 2 * basePrice * discounts.twoUniqueBooks + basePrice,
      },
      {
        dummyShoppingCart: [0, 0, 0, 2, 2],
        expected: 2 * 2 * basePrice * discounts.twoUniqueBooks,
      },
      {
        dummyShoppingCart: [0, 2, 1, 2, 1],
        expected: 4 * basePrice * discounts.fourUniqueBooks + 2 * basePrice * discounts.twoUniqueBooks,
      },
      {
        dummyShoppingCart: [1, 2, 1, 1, 1],
        expected: 5 * basePrice * discounts.fiveUniqueBooks + basePrice,
      },
    ];

    assertResponse(basicCases);
  });

  it('Edge case tests', function () {
    const basicCases = [
      {
        dummyShoppingCart: [2, 2, 2, 1, 1],
        expected: 2 * 4 * basePrice * discounts.fourUniqueBooks,
      },
      {
        dummyShoppingCart: [5, 5, 4, 5, 4],
        expected: 3 * 5 * basePrice * discounts.fiveUniqueBooks + 2 * 4 * discounts.fourUniqueBooks,
      },
    ];

    assertResponse(basicCases);
  });
});