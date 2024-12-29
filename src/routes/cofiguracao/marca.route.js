const express = require('express');
const router = express.Router();

const controller = require('../../controller/configuracao/marca.controller');


router.post('/inserir', controller.cadastrarMarca);
router.get('/buscar', controller.buscarMarca);
router.get('/deletar/:id', controller.excluirMarca);

module.exports = router;
