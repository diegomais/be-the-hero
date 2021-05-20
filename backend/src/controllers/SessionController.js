const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ngo = await connection('ngos').where('id', id).select('name').first();

    if (!ngo) {
      return res.status(400).json({ error: 'No NGOs found with this ID.' });
    }

    return res.json(ngo);
  },
};
