module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST || 'localhost',
      database: process.env.DATABASE_NAME || 'dbname',
      user: process.env.DATABASE_USER || 'user',
      port: process.env.DATABASE_PORT || '5432',
      password: process.env.DATABASE_PASSWORD || 'mysecretpassword',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 20,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST || 'localhost',
      database: process.env.DATABASE_NAME || 'dbname',
      user: process.env.DATABASE_USER || 'user',
      port: process.env.DATABASE_PORT || '5432',
      password: process.env.DATABASE_PASSWORD || 'mysecretpassword',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 20,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations',
    },
  },
};
