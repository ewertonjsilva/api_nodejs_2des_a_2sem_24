const db = require('../database/connection');

module.exports = {
    async listarProdutos(request, response) {

        const { page = 1, limit = 5 } = request.query; 
        const inicio = (page -1) * limit;

        const { prd_nome, ptp_id, prd_valor } = request.body;
        const prd_disponivel = 1;
        const prdPesqNm = prd_nome ? `%${prd_nome}%` : `%%`;
        const prdPesqTp = ptp_id ? `%${ptp_id}%` : `%%`;

        try {
            const sqlMaxVlr = 'SELECT MAX(prd_valor) vlr_max FROM produtos;';
            const vlrMax = await db.query(sqlMaxVlr);
            var prdPesqVlr = prd_valor ? prd_valor : parseFloat(vlrMax[0][0].vlr_max) + 1;

        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na identificação do valor do produto.',
                dados: error.message
            });
        }

        try {
            const sql = `SELECT 
            prd.prd_id, prd.prd_nome, prd.prd_valor, prd.prd_unidade, pdt.ptp_icone, 
            prd.prd_img, prd.prd_descricao 
            FROM produtos prd 
            INNER JOIN produto_tipos pdt ON pdt.ptp_id = prd.ptp_id 
            WHERE prd.prd_disponivel = ? AND prd.prd_nome LIKE ? AND prd.ptp_id LIKE ? 
            AND prd.prd_valor < ?
            LIMIT ?, ?;`;

            const values = [prd_disponivel, prdPesqNm, prdPesqTp, prdPesqVlr, parseInt(inicio), parseInt(limit)];

            const produtos = await db.query(sql, values);

            const nItens = produtos[0].length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de produtos.',
                dados: produtos[0],
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
    async cadastrarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de produtos.',
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
    async editarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar produtos.',
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
    async apagarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar produtos.',
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
    async listarPromocoes(request, response) {
        try {

            const sql = `SELECT prd_img_destaque FROM produtos 
                WHERE prd_destaque = 1 
                ORDER BY RAND() 
                LIMIT 3; `;

            const promo = await db.query(sql);
            const nItens = promo[0].length;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Itens na promoção.',
                dados: promo[0],
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
}

