const {estoqueService} = require ('./estoque.service')

exports.cadastrarEstoque= async (req,res)=>{
    const payload = req.body
    const { sucessos: confirmados, erros } = await estoqueService(payload, 1);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}