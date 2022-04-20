const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Initialize Task Model
class Task extends Model {}

// Set up fields and rules for Task Model
Task.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    list_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'list',
            key: 'id',
        },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
  }
);

module.exports = Task;