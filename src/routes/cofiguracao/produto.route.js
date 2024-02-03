const express = require('express');
const router = express.Router();
// const { validacaoApiKey } = require('../../middlewares/validacao');
// const cors = require('cors');

// router.use(cors());
// router.use(validacaoApiKey);

const controller = require('../../controller/configuracao/produto.controller');
// const { validaBloqueioCliente, validaDesbloqueioCliente } = require('./cliente.validation');

router.post('/inserir', controller.cadastrarProduto);
router.get('/buscar', controller.buscarProduto);
 router.get('/deletar/:id', controller.excluirProduto);

module.exports = router;
