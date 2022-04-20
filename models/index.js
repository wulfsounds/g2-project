const User = require('./User');
const Recipe = require('./Recipe');
const Category = require('./Category');
const Playlist = require('./Playlist');
const Wine = require('./Wine');
const List = require('./List');
const Task = require('./Task');
const Day = require('./Day');

// Culinary Experience Associations
Recipe.belongsTo(Category, {
  foreignKey: 'category_id',
});

Playlist.belongsTo(Category, {
  foreignKey: 'category_id',
});

Wine.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Recipe, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Playlist, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', 
});

Category.hasMany(Wine, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// User's Culinary Experience Associations
User.hasMany(Category, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.belongsTo(User, {
  foreignKey: 'user_id'
});


// User's Calendar Associations
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


// Calendar Associations
User.hasMany(Day, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
  });
  
Day.belongsTo(User, {
  foreignKey: 'user_id'
});
Day.hasMany(Task, {
  foreignKey: 'day_id',
  onDelete: 'CASCADE'
  });
  
Task.belongsTo(Day, {
  foreignKey: 'day_id'
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
  Day
 };
