const db = require('../database/connection'); 

module.exports = {
    async listarEnderecoClientes(request, response) {
        try {

            const sql = `SELECT 
                end_id, usu_id, end_logradouro, end_num, end_bairro, 
                end_complemento, cid_id, end_principal = 1 AS end_principal  
                FROM endereco_clientes;`;
            
            const enderecos = await db.query(sql); 
            const nItens = enderecos[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de endereço do cliente.', 
                dados: enderecos[0], 
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
    async cadastrarEnderecoClientes(request, response) {
        try {

            const { usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal } = request.body;

            const sql = `INSERT INTO endereco_clientes 
                (usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) 
                VALUES (?, ?, ?, ?, ?, ?, ?);`;

            const values = [usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal];

            const execSql = await db.query(sql, values);

            const end_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Cadastro de endereço do cliente ${usu_id} realizado com sucesso.`, 
                dados: end_id
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

            const { end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal } = request.body;
            const { end_id } = request.params;

            const sql = `UPDATE endereco_clientes SET end_logradouro = ?, end_num = ?, 
                end_bairro = ?, end_complemento = ?, cid_id = ?, 
                end_principal = ? WHERE end_id = ?;`;

            const values = [end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal, end_id];

            const atualizaDados = await db.query(sql, values);


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Endereço atualizado com sucesso!', 
                dados: atualizaDados[0].affectedRows
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

