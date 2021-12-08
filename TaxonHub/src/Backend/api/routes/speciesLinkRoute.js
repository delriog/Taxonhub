module.exports = app => {
    const controller = app.controllers.speciesLinkController;
  
    app.route('/speciesLinkRoute')
        .get(controller.speciesLink);
}