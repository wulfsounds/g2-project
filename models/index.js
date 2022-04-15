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

