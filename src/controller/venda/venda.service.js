const {
  cadastrarVenda:cadastrarVendaHelper
} = require("../../helper/vendas/vendas.helper");
const {buscarEstoquePorId} = require('../../helper/estoque/estoque.helper')
const cadastrarVenda = async (payload, sucessos, erros) => {


   const { validado, retorno } = await cadastrarVendaHelper(payload);
    if (validado) {
      sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
    } else {
      erros.push({
        mensagem: "Estoque  já cadastrado",
      });
    }
  };

exports.vendaService = async (payload, operacao) => {
    let sucessos = [];
    let erros = [];
    switch (operacao) {
      case 1:
        await cadastrarVenda(payload, sucessos, erros);
        break;
      default:
        console.log("Operacao nao encontrada");
        break;
    }
    return { sucessos, erros };
  };
  