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
            select e.id,e.caracteristica,e.tamanho,e.total_peca,e.valor_unitario,p.produto,m.marca from configuracao.estoque e
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


exports.buscarEstoquePorId= async (payload)=>{
    const {id} = payload;
    const client = await banco.connect();
    try {

        const { rows } = await client.query(
            `
            select * from configuracao.estoque e
                where e.id=${id}
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


exports.editarEstoque= async (payload)=>{
    const{
        produtoId,
        marcaId,
        tamanho,
        caracteristica,
        totalPecas,
        valorUnitario,
        estoqueId,usuarioAlteracao}=payload
    const client = await banco.connect();
    try {
     
        const valorUnitarioNumero = parseFloat(valorUnitario?.replace(',', '.'));
        let data= new Date()
        const { rowCount } = await client.query(
            `update  configuracao.estoque
                set produto_id=$2,
                    marca_id=$3,
                    tamanho=$4,
                    caracteristica=$5,
                    total_peca=$6,
                    valor_unitario=$7,
                    usuario_alteraco=$8,
                    data_alteracao=$9
            where id =$1`,
            [estoqueId,produtoId,marcaId,tamanho,caracteristica,totalPecas,valorUnitarioNumero,usuarioAlteracao,data]
        );
        console.log(rowCount)
        let dados = await helper.tratarRespostaModel({ resultado: rowCount, operacao: 2,error:[] });
        console.log(dados)
        return dados;
    } catch (error) {
        console.log('Aconteceu um erro ao editar valores desejado')
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
