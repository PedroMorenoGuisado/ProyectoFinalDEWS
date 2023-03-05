const { mongodbService } = require('../services');

async function getUsers(req, res, next) {
const filters = req.query;
const users = await mongodbService.getAllUsers(filters);
return res.status(200).send(users);
}

function getUserId(req, res, next) {
return res.status(200).send(req.params.id);
}

function createUser(req, res, next) {
mongodbService.createUser(req.body);
return res.status(201).send({ message: 'Created' });
}

module.exports = {
getUsers,
getUserId,
createUser,
};