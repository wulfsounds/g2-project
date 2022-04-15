const router = require('express').Router();

const userRoutes = require('./user-routes');
const listRoutes = require('./list-routes');
const taskRoutes = require('./task-routes');

router.use('/users', userRoutes);
router.use('/lists', listRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
