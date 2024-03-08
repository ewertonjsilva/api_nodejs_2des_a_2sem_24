

-- CIDADES -- ARQUIVO EXTERNO

-- USUARIOS
-- usu_tipo: 0 - ADM, 1 - Restaurante, 2 - Cliente
INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES ('Thomas Francisco Corte Real', 'thomasfranciscocortereal@kaynak.com.br', '123456', 0, true, '1990-10-08');
INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES ('Mateus Vitor Lima', 'mateusvitorlima@abcturismo.com.br', '123456', 1, true, '1998-11-06');
INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES ('Rosângela Marina Nicole Aragão', 'rosangela_marina_aragao@vivo.com.br', '123456',  1, true, '1993-05-10');
INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES ('Severino Márcio João Ribeiro', 'severino-ribeiro95@advocaciand.adv.br', '123456', 2, true, '2000-02-18');
INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES ('Mariah Sebastiana Assunção', 'mariah_assuncao@queirozgalvao.com', '123456', 2, true, '1982-12-30');
INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_ativo, usu_dt_nasc) VALUES ('Rosângela Marina Nicole Aragão', 'rosangela_marina_aragao@vivo.com.br', '123456', 2, true, '1970-10-22');

-- TIPOS DE PRODUTO
INSERT INTO produto_tipos (ptp_nome, ptp_icone) VALUES ('Lanche', 'lanche.svg'); 
INSERT INTO produto_tipos (ptp_nome, ptp_icone) VALUES ('Porção', 'porcao.svg'); 
INSERT INTO produto_tipos (ptp_nome, ptp_icone) VALUES ('Suco', 'suco.svg'); 
INSERT INTO produto_tipos (ptp_nome, ptp_icone) VALUES ('Sobremesa', 'doce.svg');

-- PRODUTOS
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Lanche de Frango', 15.00, 'un.', 1, 1, 'p1.png', 0, NULL, 'Pão, frango desfiado e temperado');
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Lanche de Salmão', 28.00, 'un.', 1, 0, 'p2.png', 1, 'salmaopromo.jpg', 'Pão, filé de salmão temperado com ervas finas');
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Lanche de Salada', 18.00, 'un.', 1, 1, 'p3.img', 0, NULL, 'Pão, alface, tomate, rúcula, milho, pepino e aspargo');
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Batata frita', 17.20, 'un.', 2, 1, 'sem.png', 0, NULL, 'Batata de qualidade internacional.');
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Abacaxi', 12.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Abacaxi, açucar e gelo'); 
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Uva', 15.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Uva, açucar e gelo'); 
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Laranja', 12.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Laranja, açucar e gelo'); 
INSERT INTO produtos (prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao) VALUES ('Limão', 12.00, 'copo', 3, 1, 'sem.png', 0, NULL, 'Limão, açucar e gelo');

-- CLIENTES
INSERT INTO clientes (usu_id, cli_cel, cli_pts) VALUES (4, '14911112222', 0);
INSERT INTO clientes (usu_id, cli_cel, cli_pts) VALUES (5, '14922334444', 50);
INSERT INTO clientes (usu_id, cli_cel, cli_pts) VALUES (6, '14911113111', 0);

-- ENDERECO CLIENTES
INSERT INTO endereco_clientes (usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (4, 'Rua dos Salgueiros', '645', 'Mangabeira', 'Fundos', 3884, true); 
INSERT INTO endereco_clientes (usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (5, 'Rua Melo Leitão', '1831', 'Prata', NULL, 3884, true); 
INSERT INTO endereco_clientes (usu_id, end_logradouro, end_num, end_bairro, end_complemento, cid_id, end_principal) VALUES (6, 'Rua Mundico Thomas', '39', 'Treze de Setembro', NULL, 3672, true); 

-- PEDIDOS
-- ped_tipo: 0 - mesa, 1 - retirada, 2 - entrega
-- ped_status: 0 - cancelado, 1 - recebido, 2 - confirmado, 3 - preparando, 4 - pronto, 5 - saiu para entrega, 6 - devolvido, 7 - entregue, 8 - fechado
-- ped_tp_pag: 0 - Em aberto, 1 - Crédito, 2 - Débito, 3 - Pix, 4 - Dinheiro, 5 - Cheque
INSERT INTO pedidos (ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES ('2022-08-16', 2, 4, 0, 8, 0.00, 39.00, 2, 1); 
INSERT INTO pedidos (ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES ('2022-08-16', 2, 5, 0, 8, 0.00, 105.00, 4, 1); 
INSERT INTO pedidos (ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES ('2022-08-16', 2, 6, 2, 8, 1.00, 27.00, 4, 1); 
INSERT INTO pedidos (ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES ('2022-08-17', 3, 5, 1, 4, 5.90, 48.10, 3, 0); 
INSERT INTO pedidos (ped_data, usu_id, cli_id, ped_tipo, ped_status, ped_desconto, ped_vlr_pago, ped_tp_pag, ped_pago) VALUES ('2022-08-17', 3, 6, 0, 3, 0.00, 0.00, 0, 0); 

-- MESAS
-- status: 0 - livre, 1 - reservada, 2 - ocupada, 3 - inativa
INSERT INTO mesas (mes_nome, mes_status, mes_lugares, ped_id) VALUES ('1', 1, 4, NULL); 
INSERT INTO mesas (mes_nome, mes_status, mes_lugares, ped_id) VALUES ('2', 0, 2, NULL); 
INSERT INTO mesas (mes_nome, mes_status, mes_lugares, ped_id) VALUES ('3', 0, 2, NULL);  
INSERT INTO mesas (mes_nome, mes_status, mes_lugares, ped_id) VALUES ('4', 2, 4, NULL); 
INSERT INTO mesas (mes_nome, mes_status, mes_lugares, ped_id) VALUES ('5', 2, 4, 5); 

-- PEDIDO PRODUTOS
-- ppd_status: 0 - cancelado, 1 - aguardando, 2 - preparando, 3 - finalizado
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:00', 1, 15.00, NULL, 1, 1, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:00', 2, 12.00, 'Sem gelo', 1, 1, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:10', 1, 15.00, NULL, 2, 1, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:10', 1, 15.00, NULL, 2, 2, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:10', 2, 15.00, NULL, 2, 3, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:22', 2, 15.00, NULL, 2, 5, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:22', 1, 15.00, NULL, 2, 4, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:44', 1, 28.00, 'Sem salmão', 3, 2, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:01', 3, 18.00, NULL, 4, 3, 3);
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:21', 1, 15.00, NULL, 5, 1, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:21', 1, 17.20, NULL, 5, 4, 3); 
INSERT INTO pedido_produtos (ppd_hora, ppd_qtd, ppd_valor, ppd_obs, ped_id, prd_id, ppd_status) VALUES ('19:57', 2, 12.00, NULL, 5, 5, 2); 

