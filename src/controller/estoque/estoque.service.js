const {
  cadastrarEstoque: cadastrarEstoqueHelper,
  buscarEstoque: buscarEstoqueHelper,
  excluirEstoque: excluirEstoqueHelper,
  buscarEstoquePorId,
  editarEstoque:esitarEstoqueHelper
} = require("../../helper/estoque/estoque.helper");

const cadastrarEstoque = async (payload, sucessos, erros) => {
  const { validado, retorno } = await cadastrarEstoqueHelper(payload);
  if (validado) {
    sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
  } else {
    erros.push({
      mensagem: "Estoque  já cadastrado",
    });
  }
};

const buscarEstoque = async (payload, sucessos, erros) => {
  const { validado, retorno, error } = await buscarEstoqueHelper();
  if (validado) {
    sucessos.push(retorno);
  } else {
    erros.push({
      mensagem: "Ocorreu um erro ao buscar os produtos",
      erros: error,
    });
  }
};

const excluirEstoque = async (payload, sucessos, erros) => {
  const { validado, retorno, error } = await excluirEstoqueHelper(payload);
  if (validado) {
    sucessos.push(retorno);
  } else {
    erros.push({
      mensagem: "Ocorreu um erro ao buscar os produtos",
      erros: error,
    });
  }
};

const buscarId = async (payload, sucessos, erros) => {
  const { validado, retorno, error } = await buscarEstoquePorId(payload);
  if (validado) {
    sucessos.push(retorno);
  } else {
    erros.push({
      mensagem: "Ocorreu um erro ao buscar os produtos",
      erros: error,
    });
  }
};


const editar = async (payload, sucessos, erros) => {
  const { validado, retorno, error } = await esitarEstoqueHelper(payload);
  if (validado) {
    sucessos.push(retorno);
  } else {
    erros.push({
      mensagem: "Ocorreu um erro ao buscar os produtos",
      erros: error,
    });
  }
};

exports.estoqueService = async (payload, operacao) => {
  let sucessos = [];
  let erros = [];
  switch (operacao) {
    case 1:
      await cadastrarEstoque(payload, sucessos, erros);
      break;
    case 2:
      await buscarEstoque(payload, sucessos, erros);
      break;
    case 3:
      await excluirEstoque(payload, sucessos, erros);
      break;
    case 4:
      await buscarId(payload, sucessos, erros);
      break;
    case 5:
      await editar(payload, sucessos, erros);
      break;
    default:
      console.log("Operacao nao encontrada");
      break;
  }
  return { sucessos, erros };
};
