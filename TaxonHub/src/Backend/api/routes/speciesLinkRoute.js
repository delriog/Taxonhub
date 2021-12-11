module.exports = app => {
    const controller = app.controllers.speciesLinkController;
  
    app.route('/speciesLink')
        .get(controller.speciesLink);
}