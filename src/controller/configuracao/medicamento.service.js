const {
  cadastrarMedicamento: cadastrarMedicamentoHelper,
  buscarMedicamento:buscarMedicamentoHelpes,
  excluirProduto:excluirMarcaHelper,
  buscarMedicamentoPorId:buscarMedicamentoPorIdHelper
  } = require("../../helper/configuracao/medicamento.helper");


  
    const cadastrarMedicamento = async (payload, sucessos, erros) => {
    const { validado, retorno } = await cadastrarMedicamentoHelper(payload);
    if (validado) {
      sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
    } else {
      erros.push({
        mensagem: "Medicamento já cadastrada",
      });
    }
  };
  
  const buscarMedicamento = async (payload, sucessos, erros) => {
    const { validado, retorno, error } = await buscarMedicamentoHelpes();
    if (validado) {
      sucessos.push(retorno);
    } else {
      erros.push({
        mensagem: "Ocorreu um erro ao buscar os medicamentos",
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
  
  const buscarMedicamentoPorId= async (payload, sucessos, erros) => {
    const { validado, retorno, error } = await buscarMedicamentoPorIdHelper(payload);
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
        await cadastrarMedicamento(payload, sucessos, erros);
        break;
      case 2:
        await buscarMedicamento(payload, sucessos, erros);
        break;
      case 3:
          await excluirProduto(payload, sucessos, erros);
          break;
      case 4:
          await buscarMedicamentoPorId(payload, sucessos, erros);
      break;
      default:
        console.log("Operacao nao encontrada");
        break;
    }
    return { sucessos, erros };
  };
  