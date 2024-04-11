const db = require('../database/connection');

module.exports = {
    async listarClientes(request, response) {
        try {

            // listar apenas usuários ativos
            const sql = `SELECT usu_id, cli_cel, cli_pts FROM clientes;`;

            const clientes = await db.query(sql);
            const nItens = clientes[0].length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Clientes.',
                dados: clientes[0],
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
    async cadastrarClientes(request, response) {
        try {

            const { usu_id, cli_cel } = request.body;
            const cli_pts = 0;

            const sql = `INSERT INTO clientes 
                    (usu_id, cli_cel, cli_pts) 
                VALUES 
                    (?, ?, ?);`;

            const values = [usu_id, cli_cel, cli_pts];

            await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Cadastro do cliente ${usu_id} realizado com sucesso!`,
                dados: usu_id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarClientes(request, response) {
        try {

            const { cli_cel, cli_pts } = request.body;
            const { usu_id } = request.params;

            const sql = `UPDATE clientes SET cli_cel = ?, cli_pts = ? WHERE usu_id = ?;`;

            const values = [cli_cel, cli_pts, usu_id];

            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Atualizado de dados do cliente realizada com sucesso!',
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
}

