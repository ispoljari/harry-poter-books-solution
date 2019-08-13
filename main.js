const basePrice = 8;

const discounts = () => ({
  twoUniqueBooks: 0.95,
  threeUniqueBooks: 0.9,
  fourUniqueBooks: 0.85,
  fiveUniqueBooks: 0.75,
});

const calcLowestPrice = () => {
  return 0;
};

module.exports = {
  basePrice,
  discounts,
  calcLowestPrice
};