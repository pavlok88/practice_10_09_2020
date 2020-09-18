const { Router } = require('express');
const controllers = require('../controller/index')

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

 router.post('/api/products', controllers.createProduct);
 router.get('/api/products/:id', controllers.getProductById);
 router.put('/api/products/:id', controllers.updateProduct);
 router.delete('/api/products/:id', controllers.deleteProduct);

module.exports = router;