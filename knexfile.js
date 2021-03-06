// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://postgres:1234@localhost:5432/postgres',
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
