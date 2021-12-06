module.exports = app => {
    const controller = require('../controllers/speciesLink')();
  
    app.route('/api/speciesLink')
      .get(controller.listSpecies);
  }