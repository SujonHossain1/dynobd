const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password Must be 6 characters'],
    },

    resetPasswordLink: {
        type: String,
        default: '',
    },
    image: String,
    address: [Object],
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    carts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cart"
        }
    ],
    wishlists: [
        {
            type: Schema.Types.ObjectId,
            ref: "Wishlist"
        }
    ]
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
})

UserSchema.methods.getToken = function () {
    return jwt.sign({
        _id: this._id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        image: this.image,
        address: this.address,
        type: 'user'
    }, "hitheremynameissujonhossainiamadeveloper")
}

const User = model('User', UserSchema);
module.exports = User;