const router = require('express').Router();
const productValidator = require('../validators/product');
const {
    createProduct,
    getProducts,
    deleteProductById,
    updateProduct,
    getProductByUlr,
    productSearch
} = require('../controllers/product');

router.get('/', getProducts);
router.get('/:url', getProductByUlr);
router.post('/:categoryId/:subCategoryId/add-product', productValidator, createProduct);
router.patch('/:categoryId/:subCategoryId/update-product', updateProduct);
router.delete('/:productId', deleteProductById);
router.get('/search/:query', productSearch)

module.exports = router;