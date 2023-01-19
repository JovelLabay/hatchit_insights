const Sequelize = require('sequelize');

// ENVIRONMENT VARIABLES
const { DB_HOST, DB_NAME, DB_USER, DB_USER_NAME } = process.env;

// DB CONNECTION
const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, '', {
  host: DB_HOST,
  dialect: DB_USER,
});

// ESTABLISH CONNECTION
async function connectDb() {
  try {
    await sequelize.authenticate();
    return {
      message: 'Connection has been established successfully.',
    };
  } catch (err) {
    return {
      message: 'Unable to connect to the database',
      error: err,
    };
  }
}

module.exports = { connectDb, sequelize };
