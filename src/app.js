const express = require("express");
const app = express();
const apiRouter = require("./routes/api.js");

app.use(express.json());

app.use(express.static('public'));

app.use("/api", apiRouter);

module.exports = app;
