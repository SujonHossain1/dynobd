const { addOrder, orders, orderTotalPrice, cancelOrder } = require('../controllers/order');
const router = require('express').Router();

router.get('/order/:id', orders);
router.get('/total-price/:id', orderTotalPrice);
router.delete('/cancel-order/:id', cancelOrder);
router.post('/add-order', addOrder);

module.exports = router;