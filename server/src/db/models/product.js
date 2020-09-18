'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product',{
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },{});
    Product.belongsTo = function (models) {
      Product.hasMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };
  return Product;
};
