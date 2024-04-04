const db = require('../database/connection'); 

module.exports = {
    async listarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de endereço de cliente.', 
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
    async cadastrarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de endereço de cliente.', 
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
    async editarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar endereço de cliente.', 
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
    async apagarEnderecoClientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar endereço de cliente.', 
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

