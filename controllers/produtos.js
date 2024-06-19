const db = require('../database/connection'); 
var fse = require('fs-extra');

function geraUrl (e) { 

    // garantir que valores em branco carreguem algo
    let img = e.prd_img ? e.prd_img : 'sem.jpg';
    // verifica se imagem existe
    if (!fse.existsSync('./public/upload/produtos/' + img)) {
        img = 'sem.jpg';
    }    

    const produto = {
        prd_id: e.prd_id, 
        prd_nome: e.prd_nome, 
		ptp_id: e.ptp_id, 
		ptp_nome: e.ptp_nome, 
		prd_valor: e.prd_valor, 
		prd_unidade: e.prd_unidade, 
		prd_disponivel: e.prd_disponivel, 
		prd_img: 'http://10.67.22.145:3333/public/upload/produtos/' + img, 
		prd_destaque: e.prd_destaque, 
		prd_img_destaque: e.prd_img_destaque, 
		prd_descricao: e.prd_descricao
    }
    return produto;
}

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

            // contagem total produtos disponíveis
            const sqlCount = `SELECT COUNT(*) AS cont_tt_prod FROM produtos prd 
            WHERE prd.prd_disponivel = ? AND prd.prd_nome LIKE ? AND prd.ptp_id LIKE ? 
            AND prd.prd_valor < ?;`;
            const valuesCount = [prd_disponivel, prdPesqNm, prdPesqTp, prdPesqVlr]; 
            const ttProdutos = await db.query(sqlCount, valuesCount);

            // Listagem itens
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

            // chamada para montar url
            const resultado = produtos[0].map(geraUrl);

            // total de produtos no cabeçalho
            response.header('X-Total-Count', ttProdutos[0][0].cont_tt_prod);  

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de produtos.',
                dados: resultado,
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

