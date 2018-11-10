const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const { MLAB_DB_USER, MLAB_DB_PASS } = process.env;

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  `mongodb://${MLAB_DB_USER}:${MLAB_DB_PASS}@ds117489.mlab.com:17489/goweek`,
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
