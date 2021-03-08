const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/Customer');

exports.signUp = async (req, res, next) => {
    try {
        const errors = validationResult(req).formatWith((error) => error.msg);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.mapped());
        }

        const { firstname, lastname, email, password } = req.body;
        const user = await User.create({
            firstname,
            lastname,
            email,
            password
        });
        res.status(201).send({
            message: 'Registration successfully.',
            data: user
        });

    } catch (err) {
        next(err)
    }
}



// exports.isLogin = async (req, res, next) => {
//     const hasToken = req.cookies.token;

//     if (hasToken) {
//         const token = jwt.decode(hasToken, 'hitheremynameissujonhossainiamadeveloper');
//         const user = await User.findOne({ _id: token._id ? token._id : '' })
//             .populate('orders')
//             .select('-password -_v');
//         return res.status(200).send({
//             success: true,
//             user
//         });
//     }
//     res.status(400).send({
//         success: false,
//         message: 'Token Exipred'
//     });
// }

exports.login = async (req, res, next) => {
    try {
        const errors = validationResult(req).formatWith((error) => error.msg);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.mapped());
        };

        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("-password -__v");
        const isMatchPassword = bcrypt.compare(password, user.password);
        if (!isMatchPassword) {
            return res.status(400).send({ message: 'Invalid Credentials' });
        }

        const token = user.getToken();

        res.setHeader('Set-Cookie', `token=${token}`);

        return res.status(200).send({
            message: 'Login Successful',
            data: user,
            token
        });

    } catch (err) {
        console.log(err)
    }
};