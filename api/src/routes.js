const express = require('express');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.create);

routes.post('/incidents', IncidentController.create);

module.exports = routes;
