const db = require('../database/connection'); 

module.exports = {
    async listarProdutoIngredientes(request, response) { 

        const { prd_id, prd_ing_adicional } = request.body;

        const sql = `SELECT ing.ing_nome, ing.ing_img, ing.ing_custo_adicional 
        FROM produto_ingredientes pi 
        INNER JOIN ingredientes ing ON ing.ing_id = pi.ing_id 
        WHERE pi.prd_id = ? AND pi.prd_ing_adicional = ?;`;

        const values = [prd_id, prd_ing_adicional];

        const prdIng = await db.query(sql, values);
        const nItens = prdIng[0].length; 

        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de Ingredientes do produto.', 
                dados: prdIng[0], 
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
    async cadastrarProdutoIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de ProdutoIngredientes.', 
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
    async editarProdutoIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar ProdutoIngredientes.', 
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
    async apagarProdutoIngredientes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar ProdutoIngredientes.', 
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

