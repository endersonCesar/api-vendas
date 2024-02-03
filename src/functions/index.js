
exports.tratarRespostaModel = async function (payload) {
    try {
      const { resultado, operacao, error } = payload;
      async function tratandoRespostaInsert() {
        if (resultado?.length > 0) {
          return {
            validado: true,
            retorno: {
              mensagem: 'Dados salvos com sucesso',
              dados: resultado[0].id,
            },
            error: [],
          };
        } else {
          return {
            validado: true,
            retorno: [
              {
                mensagem: 'Não foi possível salvar as informações desejadas',
                dados: resultado,
              },
            ],
            error: [],
          };
        }
      }
      async function tratandoRespostaEdit() {
        if (resultado.length > 0) {
          return {
            validado: true,
            retorno: {
              mensagem: 'Dados editados com sucesso',
              dados: resultado[0].id,
            },
            error: [],
          };
        } else if (error?.length === 0 && resultado.length === 0) {
          return {
            validado: false,
            retorno: [],
            error: [{ mensagem: 'Não foi possível salvar as informações desejadas, verifique os dados informados' }],
          };
        } else if (error?.length > 0) {
          return {
            validado: false,
            retorno: [],
            error: [{ mensagem: error }],
          };
        }
      }
      async function tratandoRespostaDelete() {
        if (resultado.length > 0) {
          return {
            validado: true,
            retorno: {
              mensagem: 'Dados excluidos com sucesso',
              dados:[],
            },
            error: [],
          };
        } else {
          return {
            validado: true,
            retorno: [
              {
                mensagem: 'Não existe dados cadastrados com as informações fornecidas',
                dados: resultado,
              },
            ],
            error: [],
          };
        }
      }
      async function tratandoRespostaBusca() {
        if (resultado.length > 0) {
          return {
            validado: true,
            retorno: {
              mensagem: 'Dados encontrados',
              dados: resultado,
            },
            error: [],
          };
        } else {
          return {
            validado: false,
            retorno: {
              mensagem: 'Nenhuma informação foi encontrada',
              dados: resultado,
            },
            error: [],
          };
        }
      }
      let retorno = [];
      switch (operacao) {
        case 1:
          retorno = await tratandoRespostaInsert();
          break;
        case 2:
          retorno = await tratandoRespostaEdit();
          break;
        case 3:
          retorno = await tratandoRespostaDelete();
          break;
        case 4:
          retorno = await tratandoRespostaBusca();
          break;
        default:
          console.log('Operacao não encontrada');
          break;
      }
  
      return retorno;
    } catch (error) {
      return {
        validado: false,
        retorno: [
          {
            mensagem: 'Ocorru um erro inesperado',
            dados: [],
          },
        ],
        error: [],
      };
    }
  };
  