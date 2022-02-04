const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home');
const resoucesRoute = require('./resouces');
const favoritesRoute = require('./favorites')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/resources', resoucesRoute);
router.use('/favorites', favoritesRoute);

module.exports = router;