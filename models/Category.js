const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // recipe_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'recipe',
    //     key: 'id',
    //     unique: false
    //   }
    // },
    // wine_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'wine',
    //     key: 'id',
    //     unique: false
    //   }
    // },
    // playlist_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'playlist',
    //     key: 'id',
    //     unique: false
    //   }
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;