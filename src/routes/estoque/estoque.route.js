const express = require('express');
const router = express.Router();


const controller = require('../../controller/estoque/estoque.controller');


router.post('/inserir', controller.cadastrarEstoque);
router.post('/buscar', controller.buscarEstoque);
router.get('/deletar/:id', controller.excluirEstoque);
router.get('/buscarId/:id', controller.buscarId);
router.put('/editar/:id', controller.editarEstoque);
module.exports = router;
