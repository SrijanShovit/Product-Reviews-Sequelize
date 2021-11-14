const productController = require('../controllers/productController')

const router = require('express').Router()

//ids get added automatically as product is added
router.post('/addProduct',productController.addProduct)

router.get('/allProducts',productController.getAllProducts)

router.get('/published',productController.getPublishedProduct)

//the below are using ids dynamically
//dynamic ids apis should be written at bottom after static ones

router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)

//export to be used in server.js
module.exports = router;

