/**
 * we are going to create a model that reflect the users table
 * 
 * 
 */

 const { Model, Sequelize } = require('sequelize'); 
 const sequelize = require('./connect');

 class User extends Model {}

 User.init({
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  }, {
    sequelize
  });  

User.sync()

module.exports = User;
