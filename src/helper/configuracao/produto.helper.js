const banco = require('../../database/database');
const helper = require('../../functions')
exports.cadastrarProduto= async (payload)=>{
    const {produto,usuarioInclusao} = payload
    const client = await banco.connect();
    try {
        let data = new Date()
        const { rows } = await client.query(
            `INSERT INTO configuracao.produto (produto,usuario_inclusao,data_inclusao) 
              VALUES ($1,$2,$3)  ON CONFLICT (produto) DO UPDATE SET produto = configuracao.produto.produto RETURNING *`,
            [produto, usuarioInclusao,data],
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

exports.buscarProduto= async ()=>{
    
    const client = await banco.connect();
    try {

        const { rows } = await client.query(
            `select * from configuracao.produto`,
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

exports.excluirProduto= async (payload)=>{
    const{id}=payload
    const client = await banco.connect();
    try {
        console.log(payload)
        const { rows } = await client.query(
            `delete from configuracao.produto where id =$1`,
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