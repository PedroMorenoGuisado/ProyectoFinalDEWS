const { mongodbService } = require('../services');

async function getName(req, res, next) {
const filters = req.query;
const users = await mongodbService.getAllUsers(filters);
return res.status(200).send(users);
}

function getID(req, res, next) {
return res.status(200).send(req.params.id);
}

function createReservasactivas(req, res, next) {
mongodbService.createReservasactivas(req.body);
return res.status(201).send({ message: 'Created' });
}

function getHistorial(req, res, next) {
return res.status(200).send(req.params.id);
}

module.exports = {
getName,
getID,
createReservasactivas,
getHistorial,
};