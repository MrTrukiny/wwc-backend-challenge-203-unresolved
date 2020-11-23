const express = require('express');
const server = express();
const colors = require('colors');

const { PORT, DB } = require('../config');
const router = require('./routes');

// Init Mongo Connection
DB();

// Implement routes and middlewares
server.use(router);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT} ^_^`.yellow.bold);
});
