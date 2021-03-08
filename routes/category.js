const router = require('express').Router();
const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoriesWithProduct,
    findCategoryWithUrl
} = require('../controllers/category');
const categoryValidator = require('../validators/category');


router.get('/', getCategories);
router.get('/category/:url', findCategoryWithUrl)
router.get('/products', getCategoriesWithProduct);
router.post('/', categoryValidator, createCategory);
router.patch('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);

module.exports = router;