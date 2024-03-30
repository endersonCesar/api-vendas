const cadastrarVenda = async (payload, sucessos, erros) => {
    console.log(payload)
    // const { validado, retorno } = await cadastrarEstoqueHelper(payload);
    // if (validado) {
    //   sucessos.push({ id: retorno.dados, mensagem: retorno.mensagem });
    // } else {
    //   erros.push({
    //     mensagem: "Estoque  já cadastrado",
    //   });
    // }
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
  