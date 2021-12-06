const axios = require('axios')

module.exports = () => {
    const controller = {};
    axios.get('http://api.splink.org.br/records')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
        controller.listSpecies = (req, res) => res.status(200).json(response);
    })
    .catch(error => {
        console.log(error);
    });
  
    return controller;
}