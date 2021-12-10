const axios = require("axios");
const papa = require('papaparse')
module.exports = () => {
  const controller = {};

  controller.buscarDados = async (req, res) => {
    let dados = await buscarEspecies("Eichhornia azurea");
    const parsed = papa.parse(dados, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    });

    console.log(parsed);
    res.send(parsed);
  };

  const buscarEspecies = async (nomeEspecie) => {
    return axios
      .get("http://www.theplantlist.org/tpl1.1/search", {
        params: {
          q: nomeEspecie,
          csv: true,
        },
        timeout: 10000,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          throw new Error(
            `Website retornou com erro: ${error.response.status}`
          );
        } else if (error.request) {
          throw new Error(`Website request error: ${error.request}`);
        } else {
          throw new Error(`Error in setting up the request: ${error.message}`);
        }
      });
  };

  return controller;
};