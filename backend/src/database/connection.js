const knex = require('knex');
const configuration = require('../../knexfile');

const connectionConfiguration = () => {
  if (process.env.NODE_ENV === 'test') {
    return configuration.test;
  } else if (process.env.NODE_ENV === 'staging') {
    return configuration.staging;
  } else if (process.env.NODE_ENV === 'production') {
    return configuration.production;
  } else {
    return configuration.development;
  }
};

const connection = knex(connectionConfiguration());

module.exports = connection;
