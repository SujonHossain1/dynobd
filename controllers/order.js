const User = require('../models/Customer');
const Order = require('../models/Order');

exports.orders = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
            .populate('orders')
            .select('-password -_v');
        res.status(200).send(user);
    } catch (err) {
        next(err);
    }
}

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({});
        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }
}

exports.orderTotalPrice = async (req, res, next) => {
    try {
        const price = await Order.aggregate([
            { $match: { userId: req.params.id } },
            { $group: { _id: "$userId", totalPrice: { $sum: "$totalPrice" } } }
        ]);

        res.status(200).send(price);

    } catch (err) {
        next(err);
    }
}

exports.cancelOrder = async (req, res, next) => {
    try {
        const cancelOrder = await Order.findByIdAndDelete({ _id: req.params.id });
        res.status(200).send({
            message: 'Order cancelled',
            success: true,
            order: cancelOrder
        })
    } catch (err) {
        next(err);
    }
}

exports.addOrder = async (req, res, next) => {
    try {
        console.log(req.body);
        const order = await Order.create(req.body);
        const user = await User.findOne({ _id: order.userId });

        if (order) {
            user.orders.push(order._id);
            await user.save();

            return res.status(200).send({
                message: 'Order Successful',
                data: order,
            })
        } else {
            return res.status(500).send({
                message: 'Order Not Created'
            })
        }

    } catch (err) {
        next(err);
    }
}

exports.addWishlist = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        const wishlist = req.body;

        user.wishlists.push(...wishlist);
        user.save();

    } catch (err) {

    }
}