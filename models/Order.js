const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: 'Unname'
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Proccssed', 'Completed']
    },
    products: [Object],
    address: [],
    paymentMethod: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Order = model('Order', OrderSchema);
module.exports = Order;