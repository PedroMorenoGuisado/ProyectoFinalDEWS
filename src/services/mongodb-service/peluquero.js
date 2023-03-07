const { User } = require('../../models');

async function getAllPeluqueros(filters) {
    return User.find(filters);
}

module.exports = {
    getAllPeluqueros,
}