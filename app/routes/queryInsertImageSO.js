var dbConnection = require('../../config/dbConnection');

module.exports = function(app, insertImageSO){
    var con = dbConnection();
    
    app.get(`/${insertImageSO}/:idSO/:imageUrl`, function(req, res){
        let sql = ` UPDATE OrdemServico SET imagem = ${req.params.imageUrl} WHERE OrdemServico.id = ${req.params.idSO}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });    
}