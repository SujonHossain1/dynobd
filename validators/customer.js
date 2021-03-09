const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/Customer');

exports.registrationValidator = [
    body('firstname')
        .not().isEmpty().withMessage('First Name is required.')
        .isLength({ min: 2, max: 56 }).withMessage('First Name Must 2 t0 56 chracters')
        .trim()
    ,
    body('lastname')
        .not().isEmpty().withMessage('Last Name is required.')
        .isLength({ min: 2, max: 56 }).withMessage('Last Name Must 2 t0 56 chracters')
        .trim()
    ,
    body('email')
        .isEmail().withMessage('Please Provide a valid Email Address.')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                return Promise.reject('E-mail already in use');
            }
            return true;
        })
        .normalizeEmail()
    ,
    body('phone')
        .not().isEmpty().withMessage('Phone Number is required')
        .isNumeric().withMessage('Phone must be number')
        .matches(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/).withMessage('Phone Number Not Valid')
    ,
    body('password')
        .not().isEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/).withMessage('Password must be at upper & lower case & digit 8')
    ,
    body('confirmPassword')
        .not().isEmpty().withMessage('Confirm Password is required')
        .custom((confirmPassword, { req }) => {
            if (confirmPassword !== req.body.password) {
                throw new Error('Confirm password not match')
            }
            return true;
        })
    ,

];

exports.loginValidator = [
    body('email')
        .not().isEmpty().withMessage('Please Provide Email Or Phone')
        .custom(async email => {
            const user = await User.findOne({ email })
            if (!user) throw new Error('Email Not Exists')
            return true;
        })
    ,
    body('password')
        .not().isEmpty().withMessage('Password is required')
        .custom(async (password, { req }) => {
            const user = await User.findOne({ email: req.body.email });

            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (!match) throw new Error('Wrong Password')
            }
            return true
        })
    ,
]