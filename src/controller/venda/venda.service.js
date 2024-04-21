const {
  cadastrarVenda:cadastrarVendaHelper
} = require("../../helper/vendas/vendas.helper");
const cadastrarVenda = async (payload, sucessos, erros) => {
   const { validado, retorno } = await cadastrarVendaHelper(payload);
    if (validado) {
      sucessos.push({ mensagem: retorno,validado:true });
    } else {
      erros.push({
         mensagem: retorno,validado:false 
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
  