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
      host:
        process.env.DATABASE_URL ||
        'postgres://user:secret@localhost:5432/dbname',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host:
        process.env.DATABASE_URL ||
        'postgres://user:secret@localhost:5432/dbname',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
