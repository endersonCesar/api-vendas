const {vendaService} = require ('./venda.service')

exports.cadastrarVenda= async (req,res)=>{
    const payload = req.body.payload
   
    const { sucessos: confirmados, erros } = await vendaService(payload, 1);
    if (erros.length > 0) {
        return res.status(400).json({ confirmados, erros });
    }
    return res.status(200).json({ confirmados, erros })
}
