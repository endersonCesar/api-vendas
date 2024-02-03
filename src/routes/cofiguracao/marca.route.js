const express = require('express');
const router = express.Router();
// const { validacaoApiKey } = require('../../middlewares/validacao');
// const cors = require('cors');

// router.use(cors());
// router.use(validacaoApiKey);

const controller = require('../../controller/configuracao/marca.controller');
// const { validaBloqueioCliente, validaDesbloqueioCliente } = require('./cliente.validation');

router.post('/inserir', controller.cadastrarMarca);
router.get('/buscar', controller.buscarMarca);
router.get('/deletar/:id', controller.excluirMarca);

module.exports = router;
