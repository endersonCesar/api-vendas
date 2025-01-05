const banco = require('../../database/database');
const helper = require('../../functions')

exports.cadastrarMedicamento= async (payload)=>{
    const {medicamento,dosagem,tipo} = payload
    const client = await banco.connect();
    try {
        console.log(payload)
        const { rows } = await client.query(
            `INSERT INTO configuracao.medicamento (medicamento,dosagem,tipo,usuario_inclusao,data_inclusao,ativo) 
              VALUES (UPPER($1), UPPER($2),UPPER($3),$4,NOW(),1)`,
            [medicamento,dosagem,tipo,null],
        );
        let dados = await helper.tratarRespostaModel({ resultado: rows, operacao: 1 });
        return dados;
    } catch (error) {
        console.log('[MEDICAMENTO] - Aconteceu um erro ao salvar valor')
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

exports.buscarMedicamento= async ()=>{
    
    const client = await banco.connect();
    try {

        const { rows } = await client.query(
            `select * from configuracao.medicamento where ativo =1`,
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
            `update configuracao.medicamento set ativo =0 where id =$1`,
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


exports.buscarMedicamentoPorId= async (payload)=>{
    const {id} = payload
    const client = await banco.connect();
    try {

        const { rows } = await client.query(
            `select * from configuracao.medicamento where id =$1 and  ativo =1 `, [id]
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