const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initialize Product Model
class Playlist extends Model {}

// Set up fields and rules for Product Model
Playlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    playlist_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //This string will populate an <a> on the html side
    playlist_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    },
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
    modelName: 'playlist',
  }
);

module.exports = Playlist; 
