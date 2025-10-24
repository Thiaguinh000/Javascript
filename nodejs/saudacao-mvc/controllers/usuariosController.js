const usuariosModel = require('../models/usuariosModel');

module.exports = {
    
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  formulario: (req, res) => {
    const { login, senha } = req.body;
    const mensagemLogin = usuariosModel.gerarMensagemLogin(login, senha);
    res.send(`<h1>${mensagemLogin}</h1>`);
  }

};