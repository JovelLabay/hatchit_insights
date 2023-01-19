const { sequelize } = require('../database/databaseConnection');
const { DataTypes } = require('sequelize');

// USER MODEL
const User = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync({ alter: true });

module.exports = { User };
