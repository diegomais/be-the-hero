import { Request, Response } from 'express';

import connection from '../database/connection';

interface Incident {
  id: number;
  ngo_id: string;
  title: string;
  description: string;
  value: number;
  created_at: string;
  updated_at: string;
}

interface Ngo {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  state: string;
}

interface IncidentWithNgo extends Incident, Ngo {}

export default {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
      .limit(5)
      .offset((Number(page) - 1) * 5)
      .select<IncidentWithNgo[]>(
        'incidents.*',
        'ngos.name',
        'ngos.email',
        'ngos.whatsapp',
        'ngos.city',
        'ngos.state'
      );

    res.header('X-Total-Count', String(count['count(*)']));

    return res.json(incidents);
  },

  async create(req: Request, res: Response) {
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

  async destroy(req: Request, res: Response) {
    const { id } = req.params;
    const ngo_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ngo_id')
      .first<Pick<Incident, 'ngo_id'> | undefined>();

    if (!incident) {
      return res.status(404).json({ error: 'Incident not found.' });
    }

    if (incident.ngo_id !== ngo_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).send();
  },
};
