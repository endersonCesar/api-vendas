const banco = require('../../database/database');
const helper = require('../../functions')
const {buscarEstoquePorId} = require('../estoque/estoque.helper')
exports.cadastrarVenda= async (payload)=>{
    const {codigo,valor,quantidade,metodoPagamento,usuarioInclusao} = payload
    const client = await banco.connect();
    try {
        let data = new Date()

        console.log(codigo,valor,quantidade,metodoPagamento,usuarioInclusao)
        const valorFormatado = parseFloat(valor?.replace(',', '.'));


        
        // const { rows } = await client.query(
        //     `INSERT INTO vendas.transacao (estoque_id,valor_venda,quantidade,metodo_pagamento,usuario_inclusao,data_inclusao) 
        //       VALUES ($1,$2,$3,$4,$5,$6)   RETURNING *`,
        //     [codigo,valorFormatado,quantidade,metodoPagamento,usuarioInclusao,data],
        // );
        let dados = await helper.tratarRespostaModel({ resultado: rows, operacao: 1 });
        return dados;
    } catch (error) {
        console.log('Aconteceu um erro ao salvar valor')
        console.log(error)

        return {
          validado: false,
          retorno: [],
          error: error,
        };
    }finally {
        client.release(true);
    }
}