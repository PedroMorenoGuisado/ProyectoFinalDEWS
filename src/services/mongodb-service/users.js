const { User } = require('../../models');

async function getAllUsers(filters) {
    return User.find(filters);
}

module.exports = {
    getAllUsers,
}

