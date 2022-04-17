const router = require('express').Router();

const userRoutes = require('./user-routes');
const listRoutes = require('./list-routes');
const taskRoutes = require('./task-routes');
const culExpRoutes = require('./culexp-routes');
const categoryRoutes = require('./category-routes');
const playlistRoutes = require('./playlist-routes');
const recipeRoutes = require('./recipe-routes');
const wineRoutes = require('./wine-routes');

router.use('/users', userRoutes);
router.use('/lists', listRoutes);
router.use('/tasks', taskRoutes);
router.use('/culexp', culExpRoutes);
router.use('/category', categoryRoutes);
router.use('/playlist', playlistRoutes);
router.use('/recipe', recipeRoutes);
router.use('/wine', wineRoutes);


module.exports = router;
