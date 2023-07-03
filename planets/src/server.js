const express = require('express');
const server = express();
const morgan = require("morgan");



server.use(morgan("dev"));
server.use(express.json());
server.use(require("./routes/index"))

module.exports = server;