const express = require("express");
const server = express();
const morgan = require("morgan");

server.use(morgan("dev"));
server.use(express.json());
server.use(require("./routes/index"));

server.use("*", (req, res) => {
  res.status(404).send("Not fund");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
