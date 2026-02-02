const pool = require('./db');
const fs = require('fs');
const path = require('path');

const initDb = async () => {
  const sql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
  await pool.query(sql);
  console.log('Database initialized');
  process.exit();
};

initDb();
