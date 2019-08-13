const { expect } = require('chai');
const faker = import('faker');
const { calcLowestPrice, basePrice, discounts } = import('./main.js'); //TODO:

// const generateRandNumber = (minValue, maxValue) => {
//   return faker.random.number(min = minValue, max = maxValue);
// }



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

    basicCases.forEach(input => {
      const totalPrice = calcLowestPrice(input.dummyShoppingCart);
      expect(totalPrice).to.equal(input.expected);
    });
  });

  it('Basic test with simple discount combinations', function () {
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

    basicCases.forEach(input => {
      const totalPrice = calcLowestPrice(input.dummyShoppingCart);
      expect(totalPrice).to.equal(input.expected);
    })
  });
});