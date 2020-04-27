/**
 * sequelize model fro the users table
 * 
 * 
 */

const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

class User extends Model {}
User.init({
    name: {
        type: Sequelize.STRING        
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    sequelize
});

User.sync();

module.exports = User;