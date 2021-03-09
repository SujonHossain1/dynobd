const router = require('express').Router();

const {
    registrationValidator,
    loginValidator
} = require('../validators/customer');
const {
    signUp,
    login,
    updatePassword
} = require('../controllers/customer');


router.post('/sign-up', registrationValidator, signUp);
router.post('/login', loginValidator, login);
router.patch('/password-update/:userId', updatePassword);

module.exports = router;