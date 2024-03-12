const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            return response.status(200).json({sucesso: true, mensagem: 'Lista de usuários', dados: null})
        } catch (error) {
            
        }
    }
}