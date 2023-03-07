const { mongodbService } = require('../services');

async function getName(req, res, next) {
const filters = req.query;
const users = await mongodbService.getAllUsers(filters);
return res.status(200).send(users);
}

function getHorario(req, res, next) {
return res.status(200).send(req.params.id);
}

function createPrecio(req, res, next) {
mongodbService.createUser(req.body);
return res.status(201).send({ message: 'Created' });
}

function getPrecio(req, res, next) {
return res.status(200).send(req.params.id);
}

module.exports = {
getName,
getHorario,
createPrecio,
getPrecio,
};