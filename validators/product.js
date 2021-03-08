const { check } = require('express-validator');
const Product = require('../models/Product');

const productValidator = [
    check('title')
        .not().isEmpty().withMessage('Product Title is required.')
    ,
    check('url')
        .not().isEmpty().withMessage('Product url is required.')
        .custom(async slug => {
            const product = await Product.findOne({ slug });
            if (product) throw new Error('Product slug already exists, slug must be unique.');
            return true;
        })
    ,
    check('price')
        .not().isEmpty().withMessage('Product price is required.')
        .isNumeric().withMessage('Product price must be numeric.')
    ,
    check('stock')
        .not().isEmpty().withMessage('Product stock quantity is required.')
    ,
    check('productKey')
        .not().isEmpty().withMessage('Product key is required.')
        .custom(async productKey => {
            const product = await Product.findOne({ productKey });
            if (product) throw new Error('Product key already exists, productKey must be unique.');
            return true;
        })
    ,
    check('description')
        .not().isEmpty().withMessage('Product description is required.')

];

module.exports = productValidator;