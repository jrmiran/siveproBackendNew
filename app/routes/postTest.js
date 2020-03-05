var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postTest){
    var con = dbConnection();
    
    
    app.post(`/${postTest}`, function(req, res){
        let sql = ` UPDATE OrdemServico SET imagem = '${req.body.image}' WHERE OrdemServico.id = ${req.body.idOs}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}