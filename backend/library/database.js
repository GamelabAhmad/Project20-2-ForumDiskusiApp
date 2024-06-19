// config/db.js

const mysql = require('mysql2');

// Buat koneksi ke database
const pool = mysql.createPool({
  host: 'educalab.id',
  user: 'GaM0ta4njWTe5QJe',
  password: 'zSxNvDoxr1t4i4PA',
  database: '6JJYu8NnF0bsgxtk',
  port: 3307,
  waitForConnections: true,
});

module.exports = pool.promise(); 