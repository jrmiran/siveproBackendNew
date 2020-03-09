//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertMaterial, dbConnection){
    var con = dbConnection();
    app.post(`/${postInsertMaterial}`, function(req, res){
        let sql = ` INSERT INTO Materia (nome, tamanhoComercial, tamanhoReal) VALUES ('${req.body.name}', '${req.body.comercialSize}', '${req.body.realSize}')`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}