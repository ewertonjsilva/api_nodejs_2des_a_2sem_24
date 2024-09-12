const db = require('../database/connection'); 

module.exports = {
    async listarMesas(request, response) {
        try {    
            
            const sql = `SELECT mes_id, mes_nome, mes_status, mes_lugares, ped_id FROM mesas ORDER BY mes_id ASC;`;
            const mesas = await db.query(sql);    

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de mesas.', 
                dados: mesas[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarMesas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de mesas.', 
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
    async editarMesas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar mesas.', 
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
    async apagarMesas(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar mesas.', 
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

