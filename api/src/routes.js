const express = require('express');
const NgoController = require('./controllers/NgoController');

const routes = express.Router();

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.create);

module.exports = routes;
