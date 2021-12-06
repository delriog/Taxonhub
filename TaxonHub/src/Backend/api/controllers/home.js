const axios = require("axios");

module.exports = () => {
  const controller = {};

  controller.startApi = (req, res) =>
    res.status(200).send("servidor rodando...");

  return controller;
};
