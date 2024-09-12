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
            const { mes_nome, mes_lugares } = request.body;
            const mes_status = 0;
            
            // instrução SQL
            const sql = `INSERT INTO mesas (mes_nome, mes_status, mes_lugares) VALUES (?, ?, ?);`;
            // definição dos dados a serem inseridos em um array
            const values = [mes_nome, mes_status, mes_lugares];
            // execução da instrução sql passando os parâmetros
            const execSql = await db.query(sql, values);
            // identificação do ID do registro inserido
            const mes_id = execSql[0].insertId;
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de mesas realizado com sucesso.', 
                dados: mes_id
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
        const { mes_nome, mes_status, mes_lugares, ped_id } = request.body;
        const { mes_id } = request.params;
        
        const sql = `UPDATE mesas SET mes_nome = ?, mes_status = ?, 
            mes_lugares = ?, ped_id = ? 
            WHERE mes_id = ?;`;
        // preparo do array com dados que serão atualizados
        const values = [mes_nome, mes_status, mes_lugares, ped_id, mes_id];
        // execução e obtenção de confirmação da atualização realizada
        const atualizaDados = await db.query(sql, values);

        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: `Mesa ${mes_nome} atualizada com sucesso!`, 
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
    async apagarMesas(request, response) {
        try {            
            const { mes_id } = request.params;

            const sql = `DELETE FROM mesas WHERE mes_id = ?`;
            
            const values = [mes_id];
            
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Mesa ${mes_id} excluída com sucesso`, 
                dados: excluir[0].affectedRows
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

