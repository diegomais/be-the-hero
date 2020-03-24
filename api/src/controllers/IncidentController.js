const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const ngo_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const [id] = await connection('incidents').insert({
      ngo_id,
      title,
      description,
      value,
    });

    return res.json({ id });
  },
};
