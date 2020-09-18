module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          categoryName: 'category 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'category 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'category 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: 'category 4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Categories', null, {}),
};
