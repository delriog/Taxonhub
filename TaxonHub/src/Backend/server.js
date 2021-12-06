const app = require('./config/express')();
const port = app.get('port');

// RODANDO APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)

  app.route('/api')
    .get(controller.home);
});