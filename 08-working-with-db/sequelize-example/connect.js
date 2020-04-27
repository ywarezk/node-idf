/**
 * we will connect to our database
 */

const Sequelize = require('sequelize');

// usually connecting to db is done with process.env.DATABASE_URL
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;