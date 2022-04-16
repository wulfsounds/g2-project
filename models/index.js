// Caitlin's Code
const User = require('./User');
const Recipe = require('./Recipe');
const Category = require('./Category');
const Playlist = require('./Playlist');
const Wine = require('./Wine');
const List = require('./List');
const Task = require('./Task');

// Models belongsTo Category
Recipe.belongsTo(Category, {
  foreignKey: 'category_id',
});

Playlist.belongsTo(Category, {
  foreignKey: 'category_id',
});

Wine.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Category hasMany Models
Category.hasMany(Recipe, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Playlist, {
  foreignKey: 'playlist_id',
  onDelete: 'CASCADE', 
});

Category.hasMany(Wine, {
  foreignKey: 'wine_id',
  onDelete: 'CASCADE',
});

//User's culinary experience associations
User.hasMany(Category, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.belongsTo(User, {
  foreignKey: 'user_id'
});



// Neema's Code
User.hasMany(List, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
  });
  
List.belongsTo(User, {
  foreignKey: 'user_id'
});
List.hasMany(Task, {
  foreignKey: 'list_id',
  onDelete: 'CASCADE'
  });
  
Task.belongsTo(List, {
  foreignKey: 'list_id'
});
User.hasMany(Task, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
  
Task.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { 
  User,
  Category,
  Recipe,
  Playlist,
  Wine,
  List,
  Task,
 };
