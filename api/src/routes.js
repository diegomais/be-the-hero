const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ngos', async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ngos').insert({ id, name, email, whatsapp, city, uf });

  return res.json({ id });
});

module.exports = routes;
