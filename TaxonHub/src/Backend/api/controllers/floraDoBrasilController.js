const axios = require("axios")
module.exports = () => {
    const controller = {};

    axios.get("http://servicos.jbrj.gov.br/flora")
    .then((res) => {
        controller.floraDoBrasil = (req, res) => res.status(200).json(res);
        return response.send(res.data);
    })
    .catch(error => {
        if (error.response){
          throw new Error(
            `Website responde error with status ${error.response.status}`,
          );
        } else if (error.request){
          throw new Error(`Website request error: ${error.request}`);
        } else {
          throw new Error(`Error is setting up the request: ${error.message}`);
        }
    });
  
    return controller;
};