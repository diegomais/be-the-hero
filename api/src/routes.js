const express = require('express');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.destroy);

module.exports = routes;
