module.exports = app => {
    const controller = app.controllers.floraDoBrasilController;
  
    app.route('/floraDoBrasilRoute')
        .get(controller.floraDoBrasil);
}