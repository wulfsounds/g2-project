const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const listRoutes = require('./list-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/list', listRoutes);

module.exports = router;