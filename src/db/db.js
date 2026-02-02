const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',        // твій користувач БД
  host: 'localhost',       // хост БД
  database: 'mydb',        // назва БД
  password: '123456',      // пароль
  port: 5432,              // порт PostgreSQL
});

module.exports = pool;
