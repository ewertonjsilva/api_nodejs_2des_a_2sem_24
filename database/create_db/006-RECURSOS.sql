-- SELECT COM TODOS OS CAMPOS
SELECT ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status FROM pedido_produtos;
SELECT prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao FROM produtos;
SELECT ptp_id, ptp_nome, ptp_icone FROM produto_tipos; 
SELECT mes_id, mes_nome, mes_status, mes_lugares, ped_id FROM mesas; 
SELECT ped_id, ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago FROM pedidos; 
SELECT end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal FROM endereco_clientes; 
SELECT cid_id, cid_nome, cid_uf FROM cidades;
SELECT usu_id, cli_cel, cli_pts FROM clientes; 
SELECT usu_id, usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo FROM usuarios;
SELECT ing_id, ing_nome, ing_img, ing_custo_adicional FROM ingredientes;
SELECT prd_id, ing_id, prd_ing_adicional FROM produto_ingredientes;

-- DROP DE TODAS AS TABELAS NA ORDEM DE EXCLUSÃO
DROP TABLE pedido_produtos;
DROP TABLE produto_ingredientes;
DROP TABLE produtos;
DROP TABLE produto_tipos; 
DROP TABLE mesas; 
DROP TABLE pedidos; 
DROP TABLE endereco_clientes; 
DROP TABLE cidades;
DROP TABLE clientes; 
DROP TABLE usuarios;
DROP TABLE ingredientes; 

-- DESCRIBE DE TODAS AS TABELAS
DESCRIBE pedido_produtos;
DESCRIBE produtos;
DESCRIBE produto_tipos;
DESCRIBE mesas;
DESCRIBE pedidos;
DESCRIBE endereco_clientes;
DESCRIBE cidades;
DESCRIBE clientes;
DESCRIBE usuarios; 
DESCRIBE ingredientes; 
DESCRIBE produto_ingredientes;

-- INSTRUÇÃO PARA APAGAR OS REGISTROS
DELETE FROM pedido_produtos;
DELETE FROM endereco_clientes;
DELETE FROM clientes;
DELETE FROM usuarios;



-- RESETAR AUTO INCREMENTO - APENAS DAS TABELAS QUE TEM A CHAVE PRIMÁRIA COMO AUTOINCREMENTO
ALTER TABLE usuarios AUTO_INCREMENT = 1;
