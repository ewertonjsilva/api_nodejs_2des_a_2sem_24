const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const ProdutosController = require('../controllers/produtos');
const IngredientesController = require('../controllers/ingredientes');
const ClientesController = require('../controllers/clientes');
const CidadesController = require('../controllers/cidades'); 
const EnderecoClientesController = require('../controllers/enderecoClientes');
const MesasController = require('../controllers/mesas'); 
const PedidoProdutosController = require('../controllers/pedidoProdutos');
const PedidosController = require('../controllers/pedidos');
const ProdutoIngredientesController = require('../controllers/produtoIngredientes');
const ProdutoTiposController = require('../controllers/produtoTipos');


router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios/:usu_id', UsuariosController.editarUsuarios); 
router.delete('/usuarios/:usu_id', UsuariosController.apagarUsuarios); 

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 

router.get('/ingredientes', IngredientesController.listarIngredientes); 
router.post('/ingredientes', IngredientesController.cadastrarIngredientes); 
router.patch('/ingredientes', IngredientesController.editarIngredientes); 
router.delete('/ingredientes', IngredientesController.apagarIngredientes); 

router.get('/clientes', ClientesController.listarClientes); 
router.post('/clientes', ClientesController.cadastrarClientes); 
router.patch('/clientes', ClientesController.editarClientes); 
 
router.get('/cidades', CidadesController.listarCidades); 

router.get('/enderecoclientes', EnderecoClientesController.listarEnderecoClientes); 
router.post('/enderecoclientes', EnderecoClientesController.cadastrarEnderecoClientes); 
router.patch('/enderecoclientes', EnderecoClientesController.editarEnderecoClientes); 
router.delete('/enderecoclientes', EnderecoClientesController.apagarEnderecoClientes); 

router.get('/mesas', MesasController.listarMesas); 
router.post('/mesas', MesasController.cadastrarMesas); 
router.patch('/mesas', MesasController.editarMesas); 
router.delete('/mesas', MesasController.apagarMesas); 

router.get('/pedidoprodutos', PedidoProdutosController.listarPedidoProdutos); 
router.post('/pedidoprodutos', PedidoProdutosController.cadastrarPedidoProdutos); 
router.patch('/pedidoprodutos', PedidoProdutosController.editarPedidoProdutos); 
router.delete('/pedidoprodutos', PedidoProdutosController.apagarPedidoProdutos); 

router.get('/pedidos', PedidosController.listarPedidos); 
router.post('/pedidos', PedidosController.cadastrarPedidos); 
router.patch('/pedidos', PedidosController.editarPedidos); 
router.delete('/pedidos', PedidosController.apagarPedidos); 

router.get('/produtoingredientes', ProdutoIngredientesController.listarProdutoIngredientes); 
router.post('/produtoingredientes', ProdutoIngredientesController.cadastrarProdutoIngredientes); 
router.patch('/produtoingredientes', ProdutoIngredientesController.editarProdutoIngredientes); 
router.delete('/produtoingredientes', ProdutoIngredientesController.apagarProdutoIngredientes); 

router.get('/produtotipos', ProdutoTiposController.listarProdutoTipos); 
router.post('/produtotipos', ProdutoTiposController.cadastrarProdutoTipos); 
router.patch('/produtotipos', ProdutoTiposController.editarProdutoTipos); 
router.delete('/produtotipos', ProdutoTiposController.apagarProdutoTipos); 

module.exports = router;