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
}

const instance = new UserService();

module.exports = instance;



// module.exports = new UserService();