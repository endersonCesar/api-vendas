const {
  cadastrarProduto: cadastrarProdutoHelper,
  buscarProduto:buscarProdutoHelpes,
  excluirProduto:excluirMarcaHelper
  } = require("../../helper/configuracao/produto.helper");

  
    const cadastrarProduto = async (payload, sucessos, erros) => {
    const { validado, retorno } = await cadastrarProdutoHelper(payload);
    if (validado) {
      sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
    } else {
      erros.push({
        mensagem: "Produto já cadastrada",
      });
    }
  };
  
  const buscarProduto = async (payload, sucessos, erros) => {
    const { validado, retorno, error } = await buscarProdutoHelpes();
    if (validado) {
      sucessos.push(retorno);
    } else {
      erros.push({
        mensagem: "Ocorreu um erro ao buscar os produtos",
        erros: error,
      });
    }
  };
  const excluirProduto= async (payload, sucessos, erros) => {
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
        await cadastrarProduto(payload, sucessos, erros);
        break;
      case 2:
        await buscarProduto(payload, sucessos, erros);
        break;
      case 3:
          await excluirProduto(payload, sucessos, erros);
          break;
      default:
        console.log("Operacao nao encontrada");
        break;
    }
    return { sucessos, erros };
  };
  