/**
 * lets try to take our user model and perform simple Create, Read, Update, Delete
 */

const User = require('./user.model');
const sequelize = require('./connect');

async function crud(){
    await sequelize.authenticate();

    const user = await User.create({
        firstName: 'Yariv',
        lastName: 'Katz'
    });

    await User.findAll();

    user.firstName = 'Piglet';
    await user.update();
}

crud();