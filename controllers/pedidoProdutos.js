const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de PedidoProdutos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async cadastrarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de PedidoProdutos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async editarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar PedidoProdutos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async apagarPedidoProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar PedidoProdutos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
}

