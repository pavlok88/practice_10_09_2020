const { Product, Category } = require('../db/models');

const createProduct = async (req, res) => {
  try {
    const post = await Product.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res, next) => {
  try {
    //console.log(req.params)
    const getProductById = await Product.findByPk(req.params.id);
    if (getProductById) {
      return res.send(getProductById);
    }
    return res.status(404).send('Error: Product not found');
  } catch (error) {
    return res.status(418).send(error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    console.log(req.body);
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProduct = await Product.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).json({ Product: updatedProduct });
    }
    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

 const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send('Product deleted');
    }
    throw new Error('Product not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}; 


module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
