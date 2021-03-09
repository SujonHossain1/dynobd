const router = require('express').Router();
const {
    getSubCategories,
    createSubCategory,
    getAllSubCategories,
    getSubCategoryProductsWithSlug,
    deleteSubCategory
} = require('../controllers/subCategory');
const subCategoryValidator = require('../validators/subCategory');

router.get('/', getAllSubCategories)
router.get('/:categoryId', getSubCategories);
router.get('/sub-category/:slug', getSubCategoryProductsWithSlug)
router.post('/:categoryId/category', subCategoryValidator, createSubCategory);
router.delete('/:id/sub-category', deleteSubCategory);


module.exports = router;