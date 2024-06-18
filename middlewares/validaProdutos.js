
function produto (request, response, next) {
    const { prd_nome = '%%' } = request.body; 
    const { ptp_id = '%%' } = request.body;

    // console.log('Nome: ' + typeof(prd_nome));
    // console.log('Tipo: ' + typeof(ptp_id));

    if (typeof(prd_nome) !== 'string') {
        return response.status(500).json({confirma: 'Erro', message: 'O valor informado para pesquisa de produto deve ser um texto'});
    }
    
    if (typeof(ptp_id) !== 'number') {
        if (ptp_id !== '%%') {
            return response.status(500).json({confirma: 'Erro', message: 'O valor informado para o tipo de produto deve ser numérico'});
        }        
    }  
    
    /*
        fazer validação de imagem e ver se da para combinar esse após o upload no routes
        next só aqui? - acho que sim -- testar
        https://www.youtube.com/watch?v=J469c3a6lXU em 18:14
    */

    next();
}

module.exports = produto;