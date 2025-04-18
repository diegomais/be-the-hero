import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

export default app;
