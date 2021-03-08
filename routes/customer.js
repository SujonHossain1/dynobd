const router = require('express').Router();

const {
    registrationValidator,
    loginValidator
} = require('../validators/customer');
const {
    signUp,
    login,
} = require('../controllers/customer');


router.post('/sign-up', registrationValidator, signUp);
router.post('/login', loginValidator, login);

module.exports = router;