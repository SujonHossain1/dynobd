const { addOrder, orders } = require('../controllers/order');
const router = require('express').Router();

router.get('/order/:id', orders);
router.post('/add-order', addOrder);

module.exports = router;