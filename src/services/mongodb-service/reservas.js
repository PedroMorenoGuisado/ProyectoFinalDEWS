const { User } = require('../../models');

async function getAllReservas(filters) {
    return User.find(filters);
}

module.exports = {
    getAllReservas,
}