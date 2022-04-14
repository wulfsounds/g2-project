const User = require('./User');
const Recipe = require('./Recipe');
const Category = require('./Category');
const Playlist = require('./Playlist');
const Wine = require('./Wine');

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

// May need another model/seed set that combines culinary experiences to give user ownership.
  // A user can have many culinary experiences (User.hasMany(CulExp))
  // These culinary experiences belong to the user (CulExp.belongsTo(User))
  // Culinary experiences have many categories (CulExp.hasMany(Category))

// Borrowed from unit 14-MVC mini_project
// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { 
  User,
  Category,
  Recipe,
  Playlist,
  Wine,
 };
