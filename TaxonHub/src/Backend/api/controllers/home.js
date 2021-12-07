const axios = require("axios");
const { response } = require("express");

module.exports = () => {
  const controller = {};

  controller.startApi = (req, res) =>
    res.status(200).send("servidor rodando...");

  return controller;
};

module.exports = () => {
  const controller = {};
  axios.get("http://api.splink.org.br/records/format/jsonCollectionCode/uec/ScientificName/Rauvolfia sellowii/Cantinoa althaeifolia")
  .then((res) => {
      return response.send(res.data);
  })
  .catch(error => {
      if (error.response){
        throw new Error(
          'Website responde error with status ${error.response.status}',
        );
      } else if (error.request){
        throw new Error('Website request error: ${error.request}');
      } else {
        throw new Error('Error is setting up the request: ${error.message}');
      }
  });

  return controller;
};