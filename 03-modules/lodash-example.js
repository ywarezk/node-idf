

const {groupBy} = require('lodash')

const a = [
    {
        id: 1,
        name: 'Yariv'
    },

    {
        id: 2,
        name: 'Katz'
    }
]

groupBy(a, (singleObj) => singleObj.id);

// groupBy(a, function(singleObj) {
//     return singleObj.id
// });