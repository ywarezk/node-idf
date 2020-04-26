/**
 * UserService which is a singleton class that holds the array of users
 */

// let instance = null;

class UserService {
    users = [
        {id: 1, firstName: 'Yariv', lastName: 'Katz'},
        {id: 2, firstName: 'Pigletshvili', lastName: 'Chaitovsky'},
        {id: 3, firstName: 'Sweetness', lastName: 'no last name'}
    ]
    // static getInstance() {
    //     if (instance) {
    //         return instance
    //     } else {
    //         instance = new UserService();
    //         return instance;
    //     }
    // }

    // constructor() {
    //     this.users = [
    //         {id: 1, firstName: 'Yariv', lastName: 'Katz'},
    //         {id: 2, firstName: 'Pigletshvili', lastName: 'Chaitovsky'},
    //         {id: 3, firstName: 'Sweetness', lastName: 'no last name'}
    //     ]
    // }

    constructor() {
        this.getUsers = this.getUsers.bind(this);
        this.getSingleUser = this.getSingleUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    /**
     * @returns {Array<User>}
     */
    getUsers() {
        return this.users;
    }

    /**
     * 
     * @param {number} id 
     * @returns {User}
     */
    getSingleUser(id) {
        return this.users.find((singleUser) => {
            return singleUser.id == id;
        })
    }

    /**
     * add a new user to the array of users
     * @param {firstName: 'yariv', lastName: 'katz'} user 
     * @returns: {User}
     */
    createUser(user) {
        // this is usually done with the database
        // so this solution is naive
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    /**
     * 
     * @param {*} id 
     * @param {*} user 
     * @returns {User}
     */
    updateUser(id, user) {
        const userFound = this.users.find((userFromArray) => {
            return userFromArray.id == id;
        });
        // better solution with map
        for (let key of Object.keys(user)) {
            userFound[key] = user[key];
        }
        return userFound;
    }

    deleteUser(id) {
        const index = this.users.findIndex((singleUser) => {
            return singleUser.id == id;
        });
        if (index < 0) {
            throw new Error('user does not exist');
        }
        this.users.splice(index, 1);
    }
}

const instance = new UserService();

module.exports = instance;



// module.exports = new UserService();