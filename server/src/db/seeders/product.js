module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Products',
      createProducts(15),
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Categories', null, {}),
};

function createProducts(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push({
      productName: `product ${i}`,
      price: randomInt(100, 1000),
      quantity: randomInt(0, 20),
      categoryId: randomInt(1, 4),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return arr;
}

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
