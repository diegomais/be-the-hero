const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const incidents = await connection('incidents')
      .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
      .select(
        'incidents.title',
        'incidents.description',
        'incidents.value',
        'ngos.name',
        'ngos.email',
        'ngos.whatsapp',
        'ngos.city',
        'ngos.uf'
      );

    return res.json(incidents);
  },

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
