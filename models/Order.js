const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    userId: {
        type: String,
        required: true
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
    products: [Object],
    address: [],
    paymentMethod: {
        type: String,
        required: true,
    }
});

const Order = model('Order', OrderSchema);
module.exports = Order;