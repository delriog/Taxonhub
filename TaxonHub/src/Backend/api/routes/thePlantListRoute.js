module.exports = app => {
    const controller = app.controllers.thePlantListController;
  
    app.route('/theplantlist')
      .post(controller.buscarDados);
  }