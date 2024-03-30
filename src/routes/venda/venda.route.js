const express = require('express');
const router = express.Router();
// const { validacaoApiKey } = require('../../middlewares/validacao');
// const cors = require('cors');

// router.use(cors());
// router.use(validacaoApiKey);

const controller = require('../../controller/venda/venda.service');
// const { validaBloqueioCliente, validaDesbloqueioCliente } = require('./cliente.validation');

router.post('/inserir', controller.vendaService);

module.exports = router;
