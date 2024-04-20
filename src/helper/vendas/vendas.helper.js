const banco = require('../../database/database');
const helper = require('../../functions')

exports.cadastrarVenda= async (payload)=>{
    const {listaProdutos,totalCompra,desconto} = payload
    const client = await banco.connect();
    try {
        

 
      //  const {retorno} = await this.removerQuntidadeProduto(payload)
      let quantidadeTotal=0;

      listaProdutos.map((lista)=>
      quantidadeTotal = parseInt(lista.quantidade)+quantidadeTotal

    )

    let data = new Date()

        const { rows } = await client.query(
            `INSERT INTO vendas.transacao (valor_total,desconto,metodo_pagamento,quantidade_total,usuario_inclusao,data_inclusao) 
              VALUES ($1,$2,$3,$4,$5,$6)   RETURNING *`,
            [totalCompra,desconto,1,quantidadeTotal,'sistema', data],
        );
        let dados = await helper.tratarRespostaModel({ resultado: [], operacao: 1 });
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



exports.removerQuntidadeProduto= async (payload)=>{
    const {listaProdutos} = payload
    const client = await banco.connect();
    try {
        
        console.log(payload)
      
      



        // const { rows } = await client.query(
        //     `INSERT INTO vendas.transacao (estoque_id,valor_venda,quantidade,metodo_pagamento,usuario_inclusao,data_inclusao) 
        //       VALUES ($1,$2,$3,$4,$5,$6)   RETURNING *`,
        //     [codigo,valorFormatado,quantidade,metodoPagamento,usuarioInclusao, data:new Date()],
        // );
       
        return {
            validado: true,
            retorno: [],
            error: [],
          };
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