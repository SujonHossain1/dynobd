const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/Customer');



exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.userId }).select('-password -_v -orders');
        res.status(200).send(user);
    } catch (err) {
        next(err);
    }
}


exports.signUp = async (req, res, next) => {
    try {
        const errors = validationResult(req).formatWith((error) => error.msg);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.mapped());
        }

        const { firstname, lastname, email, password, phone } = req.body;
        const user = await User.create({
            firstname,
            lastname,
            email,
            password,
            phone
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

exports.updateProfile = async (req, res, next) => {
    let image = req.files && req.files.image;
    try {
        if (image) {
            image.mv(`${__dirname}/uploads/${image && image.name}`, err => {
                if (err) {
                    return res.status(500).send({ message: 'Image  could not be uploaded' })
                }
            });
        }


        const { firstname, lastname, email, phone, gender, birthday, profileImage } = req.body;
        const user = await User.findOneAndUpdate({ _id: req.params.userId },
            {
                $set: {
                    firstname,
                    lastname,
                    email,
                    phone,
                    gender,
                    birthday,
                    image: image && image.name || profileImage
                }
            }
        ).select('-password -__v -orders');

        if (!user) {
            return res.status(400).send({ message: 'User Not Found' });
        }

        res.status(200).send({
            message: 'Update Profile',
            data: user
        });

    } catch (err) {
        next(err);
    }
}

exports.updatePassword = async (req, res, next) => {
    try {

        console.log(req.body);

        const { oldPassword, newPassword } = req.body;
        const user = await User.findOne({ _id: req.params.userId });

        const match = await bcrypt.compare(oldPassword, user.password);
        if (!match) return res.status(400).send({ message: "Incorrect Password" });

        user.password = newPassword;
        await user.save();

        return res.status(200).send({
            message: "Password Updated successfully",
            success: true,
        })

    } catch (err) {
        next(err);
    }


}