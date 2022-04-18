const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const weeklyRoutes = require('./weekly-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/weekly', weeklyRoutes);

module.exports = router;