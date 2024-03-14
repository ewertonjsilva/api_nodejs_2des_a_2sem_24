const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 


router.get('/usuarios', UsuariosController.listarUsuarios); 


module.exports = router;