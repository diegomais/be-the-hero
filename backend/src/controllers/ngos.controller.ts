import { Request, Response } from 'express';

import connection from '../database/connection';
import generateUniqueId from '../utils/generate-unique-id';

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
  async index(req: Request, res: Response) {
    const ngos = await connection('ngos').select<
      Pick<Ngo, 'name' | 'email' | 'whatsapp' | 'city' | 'state'>[]
    >(['name', 'email', 'whatsapp', 'city', 'state']);

    return res.json(ngos);
  },

  async create(req: Request, res: Response) {
    const { name, email, whatsapp, city, state } = req.body;

    const id = generateUniqueId();

    await connection('ngos').insert({ id, name, email, whatsapp, city, state });

    return res.json({ id });
  },
};
