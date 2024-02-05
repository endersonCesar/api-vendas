

const {
    cadastrarEstoque:cadastrarEstoqueHelper
    } = require("../../helper/estoque/estoque.helper");


const cadastrarEstoque = async (payload, sucessos, erros)=>{
    const { validado, retorno } = await cadastrarEstoqueHelper(payload);
    if (validado) {
      sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
    } else {
      erros.push({
        mensagem: "Estoque  já cadastrado",
      });
    }
}   
exports.estoqueService = async (payload, operacao) => {
    let sucessos = [];
    let erros = [];
    switch (operacao) {
      case 1:
        await cadastrarEstoque(payload, sucessos, erros);
        break;
      default:
        console.log("Operacao nao encontrada");
        break;
    }
    return { sucessos, erros };
  };