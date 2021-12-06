module.exports = app => {
    const controller = app.controllers.thePlantListController;
  
    app.route('/theplantlist')
      .get(controller.buscarDados);
  }