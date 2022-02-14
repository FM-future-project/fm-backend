const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Добро пожаловать!!!' });
});

const config = {
  user: process.env.DB_LOGIN,
  password: process.env.DB_PWD,
  server: process.env.DB_SERVER,
  database: process.env.DB,
  options: {
    trustServerCertificate: true,
  },
};

app.get('/db', (req, res) => {
  let connection = sql.connect(config, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('DB Connected');
    }
  });
});

module.exports = app;
