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
