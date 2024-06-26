const db = require('../database/connection'); 

module.exports = {
    async listarProdutoTipos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de ProdutoTipos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarProdutoTipos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de ProdutoTipos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarProdutoTipos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar ProdutoTipos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async apagarProdutoTipos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar ProdutoTipos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
}

