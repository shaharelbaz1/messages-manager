const express = require('express');
const color = require('colors');
const mongoose = require('./mongo/connection');
const messagesRouter = require('./api/messages.routes');
const log = require('./middleware/log');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(log.printRequest);
app.use('/api/messages', messagesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message manager is running on: localhost:${PORT}..`.blue);
});

module.exports = app;
