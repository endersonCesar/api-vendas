const express = require('express');
const router = express.Router();

const controller = require('../../controller/configuracao/produto.controller');


router.post('/inserir', controller.cadastrarProduto);
router.get('/buscar', controller.buscarProduto);
 router.get('/deletar/:id', controller.excluirProduto);

module.exports = router;
