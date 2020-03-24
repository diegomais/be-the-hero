const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ngos = await connection('ngos').select([
      'name',
      'email',
      'whatsapp',
      'city',
      'uf',
    ]);

    return res.json(ngos);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ngos').insert({ id, name, email, whatsapp, city, uf });

    return res.json({ id });
  },
};
