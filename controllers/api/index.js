const router = require('express').Router();

const userRoutes = require('./user-routes');
const listRoutes = require('./list-routes');
const taskRoutes = require('./task-routes');
const culExpRoutes = require('./culexp-routes');

router.use('/users', userRoutes);
router.use('/lists', listRoutes);
router.use('/tasks', taskRoutes);
router.use('/culexp', culExpRoutes);

module.exports = router;
