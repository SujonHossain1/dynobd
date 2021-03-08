const User = require('../models/Customer');
const Order = require('../models/Order');

exports.orders = async (req, res, next) => {
    console.log(req.params)
    try {
        const user = await User.findOne({ _id: req.params.id })
            .populate('orders')
            .select('-password -_v');
        res.status(200).send(user);
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