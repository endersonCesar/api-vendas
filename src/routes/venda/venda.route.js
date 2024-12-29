const express = require('express');
const router = express.Router();


const controller = require('../../controller/venda/venda.controller');


router.post('/inserir', controller.cadastrarVenda);

module.exports = router;
