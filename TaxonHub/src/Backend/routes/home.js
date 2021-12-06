module.exports = app => {
    const controller = require('../controllers/home')();
  
    app.route('/')
      .get(controller.home);
}