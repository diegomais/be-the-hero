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

export default {
  async index(req: Request, res: Response) {
    const ngo_id = req.headers['authorization'];

    const incidents = await connection('incidents')
      .where('ngo_id', ngo_id)
      .select<Incident[]>('*');

    return res.json(incidents);
  },
};
