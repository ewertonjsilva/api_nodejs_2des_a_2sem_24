const db = require('../database/connection'); 

module.exports = {
    async listarCidades(request, response) {
        try {
            const { cid_uf, cid_nome } = request.body; 
            const cidPesq = cid_nome ? `${cid_nome}%` : `%%`;
            const sql = `SELECT 
                cid_id, cid_nome, cid_uf 
                FROM cidades 
                WHERE cid_uf = ? AND cid_nome like ?;`;

            const values = [cid_uf, cidPesq];
            const cidades = await db.query(sql, values);
            const nItens = cidades[0].length;            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de cidades.', 
                dados: cidades[0], 
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
    async listarUfs(request, response) {
        try {   
            const sql = `SELECT DISTINCT cid_uf FROM cidades ORDER BY cid_uf ASC;`;
            const estados = await db.query(sql);            

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de estados.', 
                dados: estados[0]
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

