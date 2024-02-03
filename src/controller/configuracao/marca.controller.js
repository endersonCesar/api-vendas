const {configuracaoService} = require ('./marca.service')

exports.cadastrarMarca= async (req,res)=>{
    console.log('aaaaaaaaaaaa')
    const payload = req.body
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 1);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}
exports.buscarMarca= async (req,res)=>{
    let payload =[]
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 2);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}
exports.excluirMarca= async (req,res)=>{
    let payload = req.params
    const { sucessos: confirmados, erros } = await configuracaoService(payload, 3);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}