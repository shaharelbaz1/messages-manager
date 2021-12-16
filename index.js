const express = require('express');
const color = require('colors');
const mongoose = require('./mongo/connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message manager is running on: localhost:${PORT}..`.blue);
});

module.exports = app;
