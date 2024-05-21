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


-- COMANDOS API

SELECT usu_id FROM usuarios 
WHERE usu_email = 'gbezsousa@gmail.com';

SELECT usu_id, usu_nome, usu_tipo FROM usuarios 
WHERE usu_email = 'gbezsousa@gmail.com' AND usu_senha = '123' AND usu_ativo = 1;

SELECT DISTINCT cid_uf FROM cidades ORDER BY cid_uf ASC;

SELECT 
prd.prd_id, prd.prd_nome, prd.prd_valor, prd.prd_unidade, pdt.ptp_icone, prd.prd_img, prd.prd_descricao 
FROM produtos prd 
INNER JOIN produto_tipos pdt ON pdt.ptp_id = prd.ptp_id 
WHERE prd.prd_disponivel = 1 AND prd.prd_nome LIKE '%%' AND prd.ptp_id LIKE '%%' AND prd.prd_valor < 1000; 

SELECT MAX(prd_valor) vlr_max FROM produtos; 

-- listar ingredientes do produto
SELECT ing.ing_nome 
FROM produto_ingredientes pi 
INNER JOIN ingredientes ing ON ing.ing_id = pi.ing_id 
WHERE pi.prd_id = 1 AND pi.prd_ing_adicional = 0; 

-- listar opções de adicionais do produto
SELECT ing.ing_nome 
FROM produto_ingredientes pi 
INNER JOIN ingredientes ing ON ing.ing_id = pi.ing_id 
WHERE pi.prd_id = 1 AND pi.prd_ing_adicional = 1;  

-- listar clientes (repete devido a inserção de mais de um endereço por cliente)
SELECT us.usu_nome, us.usu_dt_nasc, cli.cli_cel, cli.cli_pts, cid.cid_nome  
FROM clientes cli 
RIGHT JOIN usuarios us ON us.usu_id 
INNER JOIN endereco_clientes edcl ON edcl.usu_id = cli.usu_id 
INNER JOIN cidades cid ON cid.cid_id = edcl.cid_id 
WHERE us.usu_ativo = 1 AND cli.cli_cel = '11988885678';  

-- só traz o cliente com endereço principal
SELECT us.usu_nome, us.usu_dt_nasc, cl.cli_cel, cl.cli_pts, cid.cid_nome FROM clientes cl
INNER JOIN usuarios us ON us.usu_id = cl.usu_id 
INNER JOIN endereco_clientes edcl ON edcl.usu_id = cl.usu_id 
INNER JOIN cidades cid ON cid.cid_id = edcl.cid_id 
WHERE us.usu_ativo = 1 AND edcl.end_principal = 1 AND cl.cli_cel = '11988885678';  

-- lista mesmo sem ter o endereço
SELECT us.usu_nome, us.usu_dt_nasc, cl.cli_cel, cl.cli_pts, cid.cid_nome 
FROM clientes cl
INNER JOIN usuarios us ON us.usu_id = cl.usu_id 
LEFT JOIN endereco_clientes edcl ON edcl.usu_id = cl.usu_id AND edcl.end_principal = 1
LEFT JOIN cidades cid ON cid.cid_id = edcl.cid_id 
WHERE us.usu_ativo = 1 AND cl.cli_cel = '11988885678'; 

-- lista verificando o endereço principal se houver endereço cadastrado
SELECT 
    us.usu_nome, 
    us.usu_dt_nasc, 
    cl.cli_cel, 
    cl.cli_pts, 
    cid.cid_nome 
FROM clientes cl
INNER JOIN usuarios us ON us.usu_id = cl.usu_id 
LEFT JOIN (
    SELECT 
        edcl.usu_id, 
        edcl.cid_id 
    FROM endereco_clientes edcl 
    WHERE edcl.end_principal = 1
) edcl_principal ON edcl_principal.usu_id = cl.usu_id
LEFT JOIN cidades cid ON cid.cid_id = edcl_principal.cid_id 
WHERE us.usu_ativo = 1 
AND cl.cli_cel = '18912345678'; -- 11988885678 18912345678