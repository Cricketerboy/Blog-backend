const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Comment;
