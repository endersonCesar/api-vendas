const express = require('express');
const router = express.Router();

const controller = require('../../controller/configuracao/medicamento.controller');


router.post('/inserir', controller.cadastrarMedicamento);
router.get('/buscar', controller.buscarMedicamento);
router.get('/buscarPorId/:id', controller.buscarMedicamentoPorId);
router.get('/deletar/:id', controller.excluirProduto);

module.exports = router;
