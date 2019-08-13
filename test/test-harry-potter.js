const { expect } = require('chai');
const BooksShoppingCart = require('../cart-model.js');

const assertResponse = basicCases => {
  basicCases.forEach(({ dummyShoppingCart, expected }) => {
    const totalPrice = dummyShoppingCart.calcLowestPrice();
    expect(totalPrice).to.equal(expected);
  });
}

const basePrice = BooksShoppingCart.getBasePrice();

describe('Test suite for the Harry Potter books savings algorithm', function () {
  it('Zero books', function () {
    const basicCases = [
      {
        dummyShoppingCart: new BooksShoppingCart([0, 0, 0, 0, 0]),
        expected: 0,
      }
    ]

    assertResponse(basicCases);
  });

  it('1 or multiple books from the same (but single) series (without discount)', function () {
    const basicCases = [
      {
        dummyShoppingCart: new BooksShoppingCart([1, 0, 0, 0, 0]),
        expected: basePrice,
      },
      {
        dummyShoppingCart: new BooksShoppingCart([0, 0, 0, 0, 1]),
        expected: basePrice,
      },
      {
        dummyShoppingCart: new BooksShoppingCart([0, 7, 0, 0, 0]),
        expected: 7 * basePrice,
      },
      {
        dummyShoppingCart: new BooksShoppingCart([0, 0, 6, 0, 0]),
        expected: 6 * basePrice,
      },
    ];

    assertResponse(basicCases);
  });

  it('Multiple books from diff. series (single type of discount)', function () {
    const basicCases = [
      {
        dummyShoppingCart: new BooksShoppingCart([1, 1, 0, 0, 0]),
        expected: 2 * basePrice * BooksShoppingCart.getDiscounts(2),
      },
      {
        dummyShoppingCart: new BooksShoppingCart([1, 1, 1, 0, 0]),
        expected: 3 * basePrice * BooksShoppingCart.getDiscounts(3),
      },
      {
        dummyShoppingCart: new BooksShoppingCart([1, 1, 1, 1, 0]),
        expected: 4 * basePrice * BooksShoppingCart.getDiscounts(4),
      },
      {
        dummyShoppingCart: new BooksShoppingCart([1, 1, 1, 1, 1]),
        expected: 5 * basePrice * BooksShoppingCart.getDiscounts(5),
      },
    ];

    assertResponse(basicCases);
  });

  it('Multiple books from diff. series (multiple types of discount)', function () {
    const basicCases = [
      {
        dummyShoppingCart: new BooksShoppingCart([1, 2, 0, 0, 0]),
        expected: 2 * basePrice * BooksShoppingCart.getDiscounts(2) + basePrice,
      },
      {
        dummyShoppingCart: new BooksShoppingCart([0, 0, 0, 2, 2]),
        expected: 2 * 2 * basePrice * BooksShoppingCart.getDiscounts(2),
      },
      {
        dummyShoppingCart: new BooksShoppingCart([0, 2, 1, 2, 1]),
        expected: 4 * basePrice * BooksShoppingCart.getDiscounts(4) + 2 * basePrice * BooksShoppingCart.getDiscounts(2),
      },
      {
        dummyShoppingCart: new BooksShoppingCart([1, 2, 1, 1, 1]),
        expected: 5 * basePrice * BooksShoppingCart.getDiscounts(5) + basePrice,
      },
    ];

    assertResponse(basicCases);
  });

  it('Interesting edge cases (multiple types of discount)', function () {
    const basicCases = [
      {
        dummyShoppingCart: new BooksShoppingCart([2, 2, 2, 1, 1]),
        expected: 2 * 4 * basePrice * BooksShoppingCart.getDiscounts(4),
      },
      {
        dummyShoppingCart: new BooksShoppingCart([5, 5, 4, 5, 4]),
        expected: 3 * 5 * basePrice * BooksShoppingCart.getDiscounts(5) + 2 * 4 * basePrice * BooksShoppingCart.getDiscounts(4),
      },
    ];

    assertResponse(basicCases);
  });
});