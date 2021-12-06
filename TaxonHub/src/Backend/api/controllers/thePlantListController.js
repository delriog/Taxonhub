module.exports = () => {
    const controller = {};
  
    controller.buscarDados = (req, res) => res.status(200).send("foi carai...");
  
    return controller;
  }