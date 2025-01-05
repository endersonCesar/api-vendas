const {configuracaoService} = require ('./medicamento.service')

exports.cadastrarMedicamento= async (req,res)=>{
    const payload = req.body
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 1);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}
exports.buscarMedicamento= async (req,res)=>{
    let payload =[]
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 2);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}


exports.excluirProduto= async (req,res)=>{
    let payload = req.params
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 3);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}

exports.buscarMedicamentoPorId= async (req,res)=>{
    let payload =[]
    payload = req.params
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 4);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}