'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category',{
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{});
    Category.associate = function (models) {
      Category.hasMany(models.Product, {
      foreignKey: 'categoryId',
      as: 'products',
      onDelete: 'CASCADE',
    });
  };
  return Category;
};
