const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const apiRouter = require('./apiRouter.js');

server.use(cors());
server.use(helmet());

server.use('/api', apiRouter);

module.exports = server;