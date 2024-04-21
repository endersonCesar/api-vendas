const express = require('express');
const router = express.Router();
// const { validacaoApiKey } = require('../../middlewares/validacao');
// const cors = require('cors');

// router.use(cors());
// router.use(validacaoApiKey);

const controller = require('../../controller/estoque/estoque.controller');
// const { validaBloqueioCliente, validaDesbloqueioCliente } = require('./cliente.validation');

router.post('/inserir', controller.cadastrarEstoque);
 router.post('/buscar', controller.buscarEstoque);
router.get('/deletar/:id', controller.excluirEstoque);
router.get('/buscarId/:id', controller.buscarId);
router.put('/editar/:id', controller.editarEstoque);
module.exports = router;
