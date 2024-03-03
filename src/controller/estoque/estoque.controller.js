const {estoqueService} = require ('./estoque.service')

exports.cadastrarEstoque= async (req,res)=>{
    const payload = req.body
    const { sucessos: confirmados, erros } = await estoqueService(payload, 1);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}

exports.buscarEstoque= async (req,res)=>{
    let payload =[]
    const { sucessos: confirmados, erros } = await estoqueService(payload, 2);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}

exports.excluirEstoque= async (req,res)=>{
    let payload = req.params
    const { sucessos: confirmados, erros } = await estoqueService(payload, 3);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}