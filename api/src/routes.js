const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => res.send('Be the hero!'));

module.exports = routes;
