const pool = require('./db');  
const fs = require('fs');
const path = require('path');

const initDb = async () => {
  try {
    const sql = fs.readFileSync(path.join(__dirname, 'init.sql')).toString();
    await pool.query(sql);
    console.log('Database initialized');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    pool.end(); 
  }
};

initDb();

