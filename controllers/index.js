const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home');
const resoucesRoute = require('./resouces')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/resources', resoucesRoute)

module.exports = router;