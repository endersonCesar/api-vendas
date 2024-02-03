const {
  cadastrarMarca: cadastrarMarcaHelper,
  buscarMarca: buscarMarcaHelpes,
  excluirMarca:excluirMarcaHelper
} = require("../../helper/configuracao/marca.helper");

const cadastrarMarca = async (payload, sucessos, erros) => {
  const { validado, retorno } = await cadastrarMarcaHelper(payload);
  if (validado) {
    sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
  } else {
    erros.push({
      mensagem: "Marca já cadastrada",
    });
  }
};

const buscarMarca = async (payload, sucessos, erros) => {
  const { validado, retorno, error } = await buscarMarcaHelpes();
  if (validado) {
    sucessos.push(retorno);
  } else {
    erros.push({
      mensagem: "Ocorreu um erro ao buscar os produtos",
      erros: error,
    });
  }
};
const excluirMarca = async (payload, sucessos, erros) => {
  const { validado, retorno, error } = await excluirMarcaHelper(payload);
  if (validado) {
    sucessos.push(retorno);
  } else {
    erros.push({
      mensagem: "Ocorreu um erro ao buscar os produtos",
      erros: error,
    });
  }
};

exports.configuracaoService = async (payload, operacao) => {
  let sucessos = [];
  let erros = [];
  switch (operacao) {
    case 1:
      await cadastrarMarca(payload, sucessos, erros);
      break;
    case 2:
      await buscarMarca(payload, sucessos, erros);
      break;
    case 3:
      await excluirMarca(payload, sucessos, erros);
      break;
    default:
      console.log("Operacao nao encontrada");
      break;
  }
  return { sucessos, erros };
};
