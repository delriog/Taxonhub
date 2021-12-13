const axios = require("axios")
module.exports = () => {
	const controller = {};

	controller.floraDoBrasil = async (req, res) => {
		let dados = await buscaDireta();

		res.send(dados)
	}
	const buscaDireta = async () => {
		return axios
			.get("http://servicos.jbrj.gov.br/flora/", {
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