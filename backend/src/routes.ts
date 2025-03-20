import { celebrate, Joi, Segments } from 'celebrate';
import express from 'express';

import IncidentController from '@/controllers/incidents.controller';
import NgoController from '@/controllers/ngos.controller';
import ProfileController from '@/controllers/profile.controller';
import SessionController from '@/controllers/sessions.controller';

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ngos', NgoController.index);
routes.post(
  '/ngos',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      state: Joi.string().required().length(2),
    }),
  }),
  NgoController.create
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);
routes.post('/incidents', IncidentController.create);
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.destroy
);

export default routes;
