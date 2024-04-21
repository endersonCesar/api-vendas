const banco = require("../../database/database");
const helper = require("../../functions");
const { buscarEstoquePorId } = require("../../helper/estoque/estoque.helper");
exports.cadastrarVenda = async (payload) => {
  const { listaProdutos, totalCompra, totalDescontoEmReais, totalCompraAux } =
    payload;
  const client = await banco.connect();
  try {
    const { retorno } = await this.removerQuntidadeProduto(payload);
    let quantidadeTotal = 0;

    listaProdutos.map(
      (lista) =>
        (quantidadeTotal = parseInt(lista.quantidade) + quantidadeTotal)
    );

    let data = new Date();
    if (retorno > 0) {
      const { rowCount } = await client.query(
        `INSERT INTO vendas.transacao (valor_total,desconto,metodo_pagamento,quantidade_total,usuario_inclusao,data_inclusao) 
                VALUES ($1,$2,$3,$4,$5,$6)   RETURNING *`,
        [totalCompra, totalDescontoEmReais, 1, quantidadeTotal, "sistema", data]
      );

      return {
        validado: true,
        retorno: "Venda executada com sucesso",
      };
    } else {
      return {
        validado: false,
        mensagem: "Produtos não encontrados para finalizar a venda",
      };
    }
  } catch (error) {
    console.log("Aconteceu um erro ao salvar valor");
    console.log(error);

    return {
      validado: false,
      retorno: [],
      error: error,
    };
  } finally {
    client.release(true);
  }
};

exports.removerQuntidadeProduto = async (payload) => {
  const { listaProdutos } = payload;
  const client = await banco.connect();
  try {
    let totalAlterado = 0;
    let data = new Date();

    for (const produto of listaProdutos) {
      const {
        retorno: { mensagem, dados },
      } = await buscarEstoquePorId({ id: produto.codigoEstoque });
      let situacao = 0;
      if (dados.length > 0) {
        let quantidade = parseInt(dados[0].total_peca) - produto.quantidade;
        quantidade === 0 ? (situacao = 1) : (situacao = 0);
        const { rowCount } = await client.query(
          `update configuracao.estoque set total_peca=$1,data_alteracao=$3,usuario_alteracao=$4, situacao=$5 where id=$2
                 `,
          [quantidade, produto.codigoEstoque, data, "sistema", situacao]
        );
        totalAlterado = rowCount + totalAlterado;
      }
    }

    return {
      validado: true,
      retorno: totalAlterado,
      error: [],
    };
  } catch (error) {
    console.log("Aconteceu um erro ao salvar valor");
    console.log(error);

    return {
      validado: false,
      retorno: [],
      error: error,
    };
  } finally {
    client.release(true);
  }
};
