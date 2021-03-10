const router = require('express').Router();

const {
    registrationValidator,
    loginValidator
} = require('../validators/customer');
const {
    signUp,
    login,
    updatePassword,
    updateProfile,
    getUser
} = require('../controllers/customer');


router.get('/user/:userId', getUser);
router.post('/sign-up', registrationValidator, signUp);
router.post('/login', loginValidator, login);
router.patch('/password-update/:userId', updatePassword);
router.patch('/profile-update/:userId', updateProfile);

module.exports = router;