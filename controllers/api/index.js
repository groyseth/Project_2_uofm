const router = require('express').Router();

const dnrRoutes = require('./dnrApiRoute');
// const signup = require('./signup');
const loginNow = require('./login')

router.use('/login', loginNow);
router.use('/dnr', dnrRoutes);
// router.use('/signup', signup);

module.exports = router;