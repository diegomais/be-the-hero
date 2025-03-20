import knex from 'knex';

import configuration from '../../knexfile';

const connection = knex(configuration[process.env.NODE_ENV || 'development']);

export default connection;
