const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ngo_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ngo_id', ngo_id)
      .select('*');

    return res.json(incidents);
  },
};
