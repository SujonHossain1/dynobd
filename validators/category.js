const { check } = require('express-validator');
const Category = require('../models/Category');

const categoryValidator = [
    check('category')
        .not().isEmpty().withMessage('Category Name is required').trim()
    ,
    check('categorySlug')
        .not().isEmpty().withMessage('Category slug is required')
        .custom(async (categorySlug) => {
            const category = await Category.findOne({ categorySlug });
            if (category) throw new Error('Category Already Exists, Slug Must be unique');
        })
    ,
    check('categoryIcon')
        .not().isEmpty().withMessage('Category Icon is required')
];

module.exports = categoryValidator;