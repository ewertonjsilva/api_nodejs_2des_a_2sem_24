const db = require('../database/connection');

function cpfToInt(cpf) {
    const cpfSemMascara = cpf.replace(/\D/g, '');
    const cpfInteiro = parseInt(cpfSemMascara);
    return cpfInteiro;
};

const intToCpfFormat = (cpfInt) => {
    const cpfFormatado = cpfInt.toString().padStart(11, '0');
    const cpfComMascara = cpfFormatado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpfComMascara;
};

module.exports = {
    async listarUsuarios(request, response) {
        try {

            const { usu_nome, usu_cpf, usu_email } = request.body;

            const pesq_usu_nome = usu_nome ? `%${usu_nome}%` : `%%`;
            const pesq_usu_cpf = usu_cpf ? `%${usu_cpf}%` : `%%`;
            const pesq_usu_email = usu_email ? `%${usu_email}%` : `%%`;
            const usu_ativo = usu_nome ? '' : usu_cpf ? '' : usu_email ? '' : ` AND usu_ativo = 1`;
            const values = [pesq_usu_nome, pesq_usu_email, pesq_usu_cpf, usu_ativo];
            console.log(usu_ativo);
            // instruções SQL
            const sql = `SELECT 
                usu_id, usu_nome, usu_email, usu_dt_nasc, usu_senha, 
                usu_tipo, usu_cpf, usu_ativo = 1 AS usu_ativo  
                FROM usuarios 
                WHERE usu_nome like ? AND usu_email like ? AND usu_cpf like ?;`;
            console.log((sql));
            // executa instruções SQL e armazena o resultado na variável usuários
            const usuarios = await db.query(sql, values);
            // armazena em uma variável o número de registros retornados
            const nItens = usuarios[0].length;

            // Itera sobre os usuários e formata o CPF
            const usuariosFormatados = usuarios[0].map(usuario => ({
                ...usuario,
                usu_cpf: intToCpfFormat(usuario.usu_cpf)
            }));

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuários.',
                dados: usuariosFormatados,
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
    async cadastrarUsuarios(request, response) {
        try {
            // parâmetros recebidos no corpo da requisição
            const { usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_cpf } = request.body;
            const usu_ativo = 1;
            const cpf = cpfToInt(usu_cpf);

            // instrução SQL
            const sql = `INSERT INTO usuarios 
                (usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo, usu_cpf) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`;
            // definição dos dados a serem inseridos em um array
            const values = [usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo, cpf];
            // execução da instrução sql passando os parâmetros
            const execSql = await db.query(sql, values);
            // identificação do ID do registro inserido
            const usu_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de usuário efetuado com sucesso.',
                dados: usu_id
                //mensSql: execSql
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarUsuarios(request, response) {
        try {
            // parâmetros recebidos pelo corpo da requisição
            const { usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo } = request.body;
            // parâmetro recebido pela URL via params ex: /usuario/1
            const { usu_id } = request.params;
            // instruções SQL
            const sql = `UPDATE usuarios SET usu_nome = ?, usu_email = ?, 
                usu_dt_nasc = ?, usu_senha = ?, usu_tipo = ?, 
                usu_ativo = ? WHERE usu_id = ?;`;
            // preparo do array com dados que serão atualizados
            const values = [usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo, usu_id];
            // execução e obtenção de confirmação da atualização realizada
            const atualizaDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Usuário ${usu_id} atualizado com sucesso!`,
                dados: atualizaDados[0].affectedRows
                // mensSql: atualizaDados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async apagarUsuarios(request, response) {
        try {
            // parâmetro passado via url na chamada da api pelo front-end
            const { usu_id } = request.params;
            // comando de exclusão
            const sql = `DELETE FROM usuarios WHERE usu_id = ?`;
            // array com parâmetros da exclusão
            const values = [usu_id];
            // executa instrução no banco de dados
            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Usuário ${usu_id} excluído com sucesso`,
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
    async ocultarUsuario(request, response) {
        try {
            const usu_ativo = false;
            const { usu_id } = request.params;
            const sql = `UPDATE usuarios SET usu_ativo = ? 
                WHERE usu_id = ?;`;
            const values = [usu_ativo, usu_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: `Usuário ${usu_id} excluído com sucesso`,
                dados: atualizacao[0].affectedRows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async login(request, response) {
        try {

            const { usu_email, usu_senha } = request.body;

            const sql = `SELECT usu_id, usu_nome, usu_tipo FROM usuarios 
                WHERE usu_email = ? AND usu_senha = ? AND usu_ativo = 1;`;

            const values = [usu_email, usu_senha];

            const usuarios = await db.query(sql, values);
            const nItens = usuarios[0].length;

            if (nItens < 1) {
                return response.status(403).json({
                    sucesso: false,
                    mensagem: 'Login e/ou senha inválido.',
                    dados: null,
                });
            }

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Login efetuado com sucesso',
                dados: usuarios[0][0]
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

