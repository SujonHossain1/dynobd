const { check } = require('express-validator');
const SubCategory = require('../models/SubCategory');

const subCategoryValidator = [
    check('subCategory')
        .not().isEmpty().withMessage('SubCategory is required')
    ,
    check('subCategorySlug')
        .not().isEmpty().withMessage('SubCategory slug is required')
        .custom(async subCategorySlug => {
            const subCategory = await SubCategory.findOne({ subCategorySlug })
            if (subCategory) throw new Error('SubCategory slug already exists')
        })
    ,


];

module.exports = subCategoryValidator;