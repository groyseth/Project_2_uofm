const router = require('express').Router();

const dnrRoutes = require('./dnrApiRoute');
// const signup = require('./signup');
const loginNow = require('./login')
const favRoute = require('./favorite-route')


router.use('/login', loginNow);
router.use('/dnr', dnrRoutes);
// router.use('/signup', signup);
router.use('/favorites', favRoute)
module.exports = router;