const { Router } = require('express');
const router = Router();
const pool = require('../db');

router.get('/', (req, res) => {
  res.json({ message: 'API is running 🚀' });
});

router.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

module.exports = router;
