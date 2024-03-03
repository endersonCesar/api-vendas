const banco = require('../../database/database');
const helper = require('../../functions')
exports.cadastrarEstoque= async (payload)=>{
    const {produtoId,marcaId,tamanho,caracteristica,totalPecas,valorUnitario,usuarioInclusao} = payload
    const client = await banco.connect();
    try {
        let data = new Date()
        const { rows } = await client.query(
            `INSERT INTO configuracao.estoque (produto_id,marca_id,tamanho,caracteristica,total_peca,valor_unitario,usuario_inclusao,data_inclusao) 
              VALUES ($1,$2,$3,$4,$5,$6,$7,$8)   RETURNING *`,
            [produtoId,marcaId,tamanho,caracteristica,totalPecas,valorUnitario,usuarioInclusao,data],
        );
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
exports.buscarEstoque= async ()=>{
    
    const client = await banco.connect();
    try {

        const { rows } = await client.query(
            `
            select e.id,e.caracteristica,e.quantidade,e.tamanho,e.total_peca,e.valor_unitario,p.produto,m.marca from configuracao.estoque e
            inner join configuracao.marca m on m.id = e.marca_id
                inner join configuracao.produto p on p.id = e.produto_id
            `,
        );
        let dados = await helper.tratarRespostaModel({ resultado: rows, operacao: 4 });
        return dados;
    } catch (error) {
        console.log('Aconteceu um erro ao buscar valores desejado')
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
exports.excluirEstoque= async (payload)=>{
    const{id}=payload
    const client = await banco.connect();
    try {
        console.log(payload)
        const { rows } = await client.query(
            `delete from configuracao.estoque where id =$1`,
            [id]
        );
        let dados = await helper.tratarRespostaModel({ resultado: rows, operacao: 3 });
        return dados;
    } catch (error) {
        console.log('Aconteceu um erro ao buscar valores desejado')
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