const router = require('express').Router();

const dnrRoutes = require('./dnrApiRoute');

router.use('/dnr', dnrRoutes);

module.exports = router;