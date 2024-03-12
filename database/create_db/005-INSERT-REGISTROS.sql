

-- CIDADES -- ARQUIVO EXTERNO

-- USUARIOS
-- usu_tipo: 0 - ADM, 1 - Restaurante, 2 - Cliente
INSERT INTO usuarios (usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES (1, 'Thomas Francisco Corte Real', 'thomasfranciscocortereal@kaynak.com.br', '123456', 0, true, '1990-10-08');
INSERT INTO usuarios (usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES (2, 'Mateus Vitor Lima', 'mateusvitorlima@abcturismo.com.br', '123456', 1, true, '1998-11-06');
INSERT INTO usuarios (usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES (3, 'Rosângela Marina Nicole Aragão', 'rosangela_marina_aragao@vivo.com.br', '123456',  1, true, '1993-05-10');
INSERT INTO usuarios (usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES (4, 'Severino Márcio João Ribeiro', 'severino-ribeiro95@advocaciand.adv.br', '123456', 2, true, '2000-02-18');
INSERT INTO usuarios (usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES (5, 'Mariah Sebastiana Assunção', 'mariah_assuncao@queirozgalvao.com', '123456', 2, true, '1982-12-30');
INSERT INTO usuarios (usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES (6, 'Rosângela Marina Nicole Aragão', 'rosangela_marina_aragao@vivo.com.br', '123456', 2, true, '1970-10-22');

-- TIPOS DE PRODUTO
INSERT INTO produto_tipos (ptp_id, ptp_nome, ptp_icone) VALUES (1, 'Lanche', 'lanche.svg'); 
INSERT INTO produto_tipos (ptp_id, ptp_nome, ptp_icone) VALUES (2, 'Porção', 'porcao.svg'); 
INSERT INTO produto_tipos (ptp_id, ptp_nome, ptp_icone) VALUES (3, 'Suco', 'suco.svg'); 
INSERT INTO produto_tipos (ptp_id, ptp_nome, ptp_icone) VALUES (4, 'Sobremesa', 'doce.svg');

-- PRODUTOS
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (1, 'Lanche de Frango', 15.00, 'un.', 1, 1, 'p1.png', 0, NULL, 'Pão, frango desfiado e temperado');
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (2, 'Lanche de Salmão', 28.00, 'un.', 1, 0, 'p2.png', 1, 'salmaopromo.jpg', 'Pão, filé de salmão temperado com ervas finas');
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (3, 'Lanche de Salada', 18.00, 'un.', 1, 1, 'p3.img', 0, NULL, 'Pão, alface, tomate, rúcula, milho, pepino e aspargo');
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (4, 'Batata frita', 17.20, 'un.', 2, 1, 'sem.png', 0, NULL, 'Batata de qualidade internacional.');
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (5, 'Abacaxi', 12.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Abacaxi, açucar e gelo'); 
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (6, 'Uva', 15.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Uva, açucar e gelo'); 
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (7, 'Laranja', 12.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Laranja, açucar e gelo'); 
INSERT INTO produtos (prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES (8, 'Limão', 12.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Limão, açucar e gelo');

-- CLIENTES
INSERT INTO clientes (usu_id, cli_cel, cli_pts) VALUES (4, '14911112222', 0);
INSERT INTO clientes (usu_id, cli_cel, cli_pts) VALUES (5, '14922334444', 50);
INSERT INTO clientes (usu_id, cli_cel, cli_pts) VALUES (6, '14911113111', 0);

-- ENDERECO CLIENTES
INSERT INTO endereco_clientes (end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (1, 4, 'Rua dos Salgueiros', '645', 'Mangabeira', 'Fundos', 3884, true); 
INSERT INTO endereco_clientes (end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (2, 5, 'Rua Melo Leitão', '1831', 'Prata', NULL, 3884, true); 
INSERT INTO endereco_clientes (end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (3, 6, 'Rua Mundico Thomas', '39', 'Treze de Setembro', NULL, 3672, true); 
INSERT INTO endereco_clientes (end_id, usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (4, 6, 'Rua Brasil', '390', 'Centro', NULL, 3672, false); 

-- PEDIDOS
-- ped_tipo: 0 - mesa, 1 - retirada, 2 - entrega
-- ped_status: 0 - cancelado, 1 - recebido, 2 - confirmado, 3 - preparando, 4 - pronto, 5 - saiu para entrega, 6 - devolvido, 7 - entregue, 8 - fechado
-- ped_tp_pag: 0 - Em aberto, 1 - Crédito, 2 - Débito, 3 - Pix, 4 - Dinheiro, 5 - Cheque
INSERT INTO pedidos (ped_id, ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES (1, '2022-08-16', 2, 4, 0, 8, 0.00, 39.00, 2, 1); 
INSERT INTO pedidos (ped_id, ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES (2, '2022-08-16', 2, 5, 0, 8, 0.00, 105.00, 4, 1); 
INSERT INTO pedidos (ped_id, ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES (3, '2022-08-16', 2, 6, 2, 8, 1.00, 27.00, 4, 1); 
INSERT INTO pedidos (ped_id, ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES (4, '2022-08-17', 3, 5, 1, 4, 5.90, 48.10, 3, 0); 
INSERT INTO pedidos (ped_id, ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES (5, '2022-08-17', 3, 6, 0, 3, 0.00, 0.00, 0, 0); 

-- MESAS
-- status: 0 - livre, 1 - reservada, 2 - ocupada, 3 - inativa
INSERT INTO mesas (mes_id, mes_nome, mes_status, mes_lugares, ped_id) VALUES (1, '1', 1, 4, NULL); 
INSERT INTO mesas (mes_id, mes_nome, mes_status, mes_lugares, ped_id) VALUES (2, '2', 0, 2, NULL); 
INSERT INTO mesas (mes_id, mes_nome, mes_status, mes_lugares, ped_id) VALUES (3, '3', 0, 2, NULL);  
INSERT INTO mesas (mes_id, mes_nome, mes_status, mes_lugares, ped_id) VALUES (4, '4', 2, 4, NULL); 
INSERT INTO mesas (mes_id, mes_nome, mes_status, mes_lugares, ped_id) VALUES (5, '5', 2, 4, 5); 

-- PEDIDO PRODUTOS
-- ppd_status: 0 - cancelado, 1 - aguardando, 2 - preparando, 3 - finalizado
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (1, '19:00', 1, 15.00, NULL, 1, 1, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (2, '19:00', 2, 12.00, 'Sem gelo', 1, 1, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (3, '19:10', 1, 15.00, NULL, 2, 1, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (4, '19:10', 1, 15.00, NULL, 2, 2, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (5, '19:10', 2, 15.00, NULL, 2, 3, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (6, '19:22', 2, 15.00, NULL, 2, 5, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (7, '19:22', 1, 15.00, NULL, 2, 4, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (8, '19:44', 1, 28.00, 'Sem salmão', 3, 2, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (9, '19:01', 3, 18.00, NULL, 4, 3, 3);
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (10, '19:21', 1, 15.00, NULL, 5, 1, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (11, '19:21', 1, 17.20, NULL, 5, 4, 3); 
INSERT INTO pedido_produtos (ppd_id, ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES (12, '19:57', 2, 12.00, NULL, 5, 5, 2); 

-- INGREDIENTES
SELECT ing_id, ing_nome, ing_img, ing_custo_adicional FROM ingredientes;
INSERT INTO ingredientes (ing_id, ing_nome, ing_img, ing_custo_adicional) VALUES (1, 'Pão', 'pao.png', 0.00); 
INSERT INTO ingredientes (ing_id, ing_nome, ing_img, ing_custo_adicional) VALUES (2, 'Frango', 'frango.png', 7.00); 
INSERT INTO ingredientes (ing_id, ing_nome, ing_img, ing_custo_adicional) VALUES (3, 'Salmão', 'salmao.png', 10.00); 
INSERT INTO ingredientes (ing_id, ing_nome, ing_img, ing_custo_adicional) VALUES (4, 'Alface', 'alface.png', 4.50); 
INSERT INTO ingredientes (ing_id, ing_nome, ing_img, ing_custo_adicional) VALUES (5, 'Rúcula', 'rucula.png', 4.00); 
INSERT INTO ingredientes (ing_id, ing_nome, ing_img, ing_custo_adicional) VALUES (6, 'Tomate', 'tomate.png', 5.25); 


-- PRODUTO INGREDIENTES
SELECT prd_id, ing_id, prd_ing_adicional FROM produto_ingredientes;
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (1, 1, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (2, 1, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (3, 1, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (1, 2, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (2, 2, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (3, 2, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (2, 3, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (1, 3, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (3, 3, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (3, 4, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (3, 5, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (3, 6, false); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (1, 4, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (2, 4, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (1, 5, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (2, 5, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (1, 6, true); 
INSERT INTO produto_ingredientes (prd_id, ing_id, prd_ing_adicional) VALUES (2, 6, true); 