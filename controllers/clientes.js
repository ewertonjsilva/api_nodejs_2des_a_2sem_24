const db = require('../database/connection');
const moment = require('moment');

function cpfToInt (cpf) {
    const cpfSemMascara = cpf.replace(/\D/g, '');
    const cpfInteiro = parseInt(cpfSemMascara);
    return cpfInteiro;
};

module.exports = {
    async listarClientes(request, response) {
        try {
            const { usu_nome, usu_cpf, cli_cel } = request.body;

            const pesqNome = usu_nome ? `%${usu_nome}%` : `%%`;
            const usu_ativo = 1;
            const end_principal = 1;
            const campo = cli_cel ? 'cl.cli_cel = ' : usu_cpf ? 'us.usu_cpf = ' : 'us.usu_nome LIKE ';
            const campoPesq = cli_cel ? cli_cel : usu_cpf ? usu_cpf : pesqNome;

            const sql = `SELECT us.usu_nome, us.usu_dt_nasc, cl.cli_cel, cl.cli_pts, cid.cid_nome 
                FROM clientes cl
                INNER JOIN usuarios us ON us.usu_id = cl.usu_id 
                INNER JOIN endereco_clientes edcl ON edcl.usu_id = cl.usu_id 
                INNER JOIN cidades cid ON cid.cid_id = edcl.cid_id 
                WHERE us.usu_ativo = ? AND edcl.end_principal = ? AND ${campo} ?;`;

            const values = [usu_ativo, end_principal, campoPesq];

            const clientes = await db.query(sql, values);

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

            const { usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cpf, end_logradouro, end_num, end_bairro, end_complemento, cid_id, cli_cel } = request.body;

            const cpf = cpfToInt(usu_cpf)
            
            // converter data nascimento
            // Data no formato brasileiro
            // const dataBrasileira = usu_dt_nasc;

            // Converte para o formato americano (aaaa-mm-dd)
            // const dataMySql = moment(dataBrasileira, 'DD/MM/YYYY').format('YYYY-MM-DD');         

            const usu_tipo = 2;
            const usu_ativo = 1;
            const cli_pts = 0;
            const end_principal = true;
            const end_excluido = false;

            const sqlUsu = `INSERT INTO usuarios 
                (usu_nome, usu_email, usu_senha, usu_dt_nasc, usu_cpf, usu_tipo, usu_ativo) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`;
            // definição dos dados a serem inseridos em um array
            const valuesUsu = [usu_nome, usu_email, usu_senha, usu_dt_nasc, cpf, usu_tipo, usu_ativo];
            // execução da instrução sql passando os parâmetros
            const execSql = await db.query(sqlUsu, valuesUsu);
            // identificação do ID do registro inserido
            const usu_id = execSql[0].insertId;

            const sqlCli = `INSERT INTO clientes 
                    (usu_id, cli_cel, cli_pts) 
                VALUES 
                    (?, ?, ?);`;

            const valuesCli = [usu_id, cli_cel, cli_pts];

            await db.query(sqlCli, valuesCli);

            const sqlEnd = `INSERT INTO endereco_clientes 
                    (usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal, end_excluido) 
                VALUES 
                    (?, ?, ?, ?, ?, ?, ?, ?);`;

            const valuesEnd = [usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal, end_excluido];

            await db.query(sqlEnd, valuesEnd);

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

