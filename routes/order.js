const router = require('express').Router();
const {
    addOrder,
    orders,
    orderTotalPrice,
    cancelOrder,
    getAllOrders
} = require('../controllers/order');

router.get('/', getAllOrders);
router.get('/order/:id', orders);
router.get('/total-price/:id', orderTotalPrice);
router.delete('/cancel-order/:id', cancelOrder);
router.post('/add-order', addOrder);

module.exports = router;