import { Request, Response } from 'express';

import connection from '@/database/connection';

interface Ngo {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  state: string;
  created_at: string;
  updated_at: string;
}

export default {
  async create(req: Request, res: Response) {
    const { id } = req.body;

    const ngo = await connection('ngos')
      .where('id', id)
      .select('name')
      .first<Pick<Ngo, 'name'> | undefined>();

    if (!ngo) {
      return res.status(400).json({ error: 'No NGOs found with this ID.' });
    }

    return res.json(ngo);
  },
};
