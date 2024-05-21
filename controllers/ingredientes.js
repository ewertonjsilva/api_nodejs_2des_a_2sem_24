const db = require('../database/connection'); 

module.exports = {
    async listarIngredientes(request, response) {
        try {
            const { ing_nome } = request.body; 
            const ingPesq = ing_nome ? `%${ing_nome}%` : `%%`;
            const sql = `SELECT 
                ing_id, ing_nome, ing_img, ing_custo_adicional 
                FROM ingredientes 
                WHERE ing_nome like ?;`;
            
            const values = [ingPesq];
            const ingredientes = await db.query(sql, values);
            const nItens = ingredientes[0].length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de ingredientes.',
                dados: ingredientes[0],
                nItens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de ingredientes.', 
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
    async editarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar ingredientes.', 
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
    async apagarIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar ingredientes.', 
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

